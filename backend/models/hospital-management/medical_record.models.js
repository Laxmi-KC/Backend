import mongoose from "mongoose";

const medical_RecordSchema = new mongoose.Schema({},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord", medical_RecordSchema);