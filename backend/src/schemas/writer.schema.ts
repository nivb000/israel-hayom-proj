import { Schema } from 'mongoose';

export const WriterSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  pageUrl: { type: String, required: true },
});