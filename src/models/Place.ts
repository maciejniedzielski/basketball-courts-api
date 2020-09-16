import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface Place extends Document {
  name: string;
  lat: number;
  lng: number;
}

const PlaceSchema: Schema = new Schema({
  name: { type: String, required: true, unique: false },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

export default mongoose.model<Place>("Place", PlaceSchema);
