import mongoose, { Schema, Document, models, model } from 'mongoose';

// Define the interface for the News document
interface INews extends Document {
  title: string;
  content: string;
  slug: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the News schema
const NewsSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create and export the News model
const News = models.News || model<INews>('News', NewsSchema);
export default News;