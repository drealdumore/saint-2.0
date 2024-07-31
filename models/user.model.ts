import mongoose, { Schema, Document, Model, model } from "mongoose";

interface IUser extends Document {
  name?: string | undefined | null;
  email?: string | undefined | null;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const User: Model<IUser> =
  mongoose.models.User || model<IUser>("User", UserSchema);

export default User;
