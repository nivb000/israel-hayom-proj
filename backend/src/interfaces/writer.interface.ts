import { Document } from 'mongoose';

export interface Writer extends Document {
  readonly id: number;
  readonly name: string;
  readonly imageUrl: string;
  readonly pageUrl: string;
}