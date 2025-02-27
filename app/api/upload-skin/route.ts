import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(file, fileName, bucketName) {
  const fileBuffer = file;
  console.log(fileName);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileBuffer,
    ContentType: "image/png",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileName;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const skinFile = formData.get("skin");
    const cloakFile = formData.get("cloak");

    if (!skinFile) {
      return NextResponse.json(
        { error: "Skin file is required." },
        { status: 400 }
      );
    }

    const skinBuffer = Buffer.from(await skinFile.arrayBuffer());
    const skinFileName = await uploadFileToS3(
      skinBuffer,
      skinFile.name,
      process.env.AWS_S3_SKINS_BUCKET_NAME
    );

    let cloakFileName = null;
    if (cloakFile) {
      const cloakBuffer = Buffer.from(await cloakFile.arrayBuffer());
      cloakFileName = await uploadFileToS3(
        cloakBuffer,
        cloakFile.name,
        process.env.AWS_S3_CLOAKS_BUCKET_NAME
      );
    }

    return NextResponse.json({
      success: true,
      skinFileName: skinFileName,
      cloakFileName: cloakFileName,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Произошла ошибка" });
  }
}
