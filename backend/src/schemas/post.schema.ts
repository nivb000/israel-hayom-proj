import { Schema } from 'mongoose';

export const PostSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  createdAt: { type: Date, required: true },
  postUrl: { type: String, required: true },
  writerId: { type: Number, required: true },
});