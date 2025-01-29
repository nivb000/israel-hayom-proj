import { Document } from 'mongoose';

export interface Post extends Document {
  readonly id: number;
  readonly title: string;
  readonly createdAt: Date;
  readonly url: string;
  readonly writerId: number;
}