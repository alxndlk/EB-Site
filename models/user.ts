import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  balance: number;
  skin: string;
  active: boolean;
  roleExpiresAt: Date | null;
}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String },
  balance: { type: Number },
  skin: { type: String },
  active: { type: Boolean },
  roleExpiresAt: { type: Date, required: false, default: null },
});

const User = (mongoose.models.User ||
  mongoose.model<UserDocument>("User", UserSchema)) as Model<UserDocument>;

export default User;
