"use client";

import { useState, useRef } from "react";
import { UploadCloudIcon } from "lucide-react";
import styles from "./Main.module.css";
import { ThreeDots } from "react-loader-spinner";
import { useUserData } from "@/hooks/useUserData";

export const SkinUploader: React.FC = () => {
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: string;
  } | null>(null);

  const [cloakInfo, setCloakInfo] = useState<{
    name: string;
    size: string;
  } | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [cloak, setCloak] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { userData } = useUserData();

  const inputRef = useRef<HTMLInputElement>(null);
  const cloakRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const sizeInKB = (selectedFile.size / 1024).toFixed(2);

      const reader = new FileReader();
      reader.onload = () => {
        setFileInfo({
          name: selectedFile.name,
          size: `${sizeInKB} KB`,
        });
      };
      reader.readAsDataURL(selectedFile);

      setFile(selectedFile);
    } else {
      setFileInfo(null);
      setFile(null);
    }
  };

  const handleCloakChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const sizeInKB = (selectedFile.size / 1024).toFixed(2);

      const reader = new FileReader();
      reader.onload = () => {
        setCloakInfo({
          name: selectedFile.name,
          size: `${sizeInKB} KB`,
        });
      };
      reader.readAsDataURL(selectedFile);

      setCloak(selectedFile); // Сохраняем файл плаща
    } else {
      setCloakInfo(null);
      setCloak(null); // Если файл не выбран, сбрасываем состояние
    }
  };

  const clearFile = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (cloakRef.current) {
      cloakRef.current.value = "";
    }
    setFileInfo(null);
    setCloakInfo(null);
    setFile(null);
    setCloak(null);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Файл скина не выбран.");
      return;
    }

    setUploading(true);
    setError(null);

    const uniqueSkinFileName = `${userData.uuid}.png`;
    const uniqueCloakFileName = `${userData.uuid}.png`;

    const formData = new FormData();
    formData.append("skin", file, uniqueSkinFileName);
    if (cloak) {
      formData.append("cloak", cloak, uniqueCloakFileName);
    }

    try {
      const response = await fetch("/api/upload-skin", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Произошла ошибка при загрузке.");
      }

      if (response.ok) {
        clearFile();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }

      console.log(data);
      setUploading(false);
    } catch (error: any) {
      setError(error.message || "Неизвестная ошибка");
      setUploading(false);
    }
  };

  return (
    <div className={styles.avatar}>
      <div className={styles.top_text}>
        <h4>
          СКИН И ПЛАЩ
          <span className={styles.info}>ИНФО</span>
        </h4>
        <span>
          Вы можете установить свой скин и плащ, чтобы выделяться среди других
          игроков. Изображение должно быть строго в формате <strong>PNG</strong>{" "}
          и иметь размеры <strong>64x64</strong> пикселя для скина и{" "}
          <strong>64x64</strong> для плаща.
        </span>

        <label className={styles.upload} htmlFor="upload-photo">
          {!fileInfo ? (
            <div className="flex flex-col justify-center text-center items-center gap-2">
              <UploadCloudIcon size={32} color="#a1a1a1" absoluteStrokeWidth />
              <p>ВЫБЕРИРЕ ФАЙЛ PNG ДЛЯ СКИНА</p>
            </div>
          ) : (
            <div className={styles.file_info}>
              {fileInfo.name}
              <div className={styles.size}>{fileInfo.size}</div>
            </div>
          )}
        </label>
        <input
          type="file"
          name="photo"
          id="upload-photo"
          className={styles.input_file}
          onChange={handleFileChange}
          accept="image/*"
          ref={inputRef}
        />

        <label className={styles.upload} htmlFor="upload-cloak">
          {!cloakInfo ? (
            <div className="flex flex-col justify-center text-center items-center gap-2">
              <UploadCloudIcon size={32} color="#a1a1a1" absoluteStrokeWidth />
              <p>ВЫБЕРИТЕ ФАЙЛ PNG ДЛЯ ПЛАЩА (НЕ ОБЯЗАТЕЛЬНО)</p>
            </div>
          ) : (
            <div className={styles.file_info}>
              {cloakInfo.name}
              <div className={styles.size}>{cloakInfo.size}</div>
            </div>
          )}
        </label>
        <input
          type="file"
          name="cloak"
          id="upload-cloak"
          className={styles.input_file}
          onChange={handleCloakChange}
          accept="image/*"
          ref={cloakRef}
        />
      </div>

      {fileInfo && (
        <div className={styles.title_skin}>
          <button className={styles.cancel} onClick={clearFile}>
            Отменить
          </button>
          <button
            className={styles.apply}
            onClick={handleSubmit}
            disabled={uploading}
          >
            {uploading ? (
              <ThreeDots width={20} height={20} color="gray" />
            ) : (
              `Применить`
            )}
          </button>
        </div>
      )}

      {error && (
        <div className={styles.error_message}>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
