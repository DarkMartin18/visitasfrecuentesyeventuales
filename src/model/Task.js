import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    nombre: { type: String, trim: true },
    fecha: {
      type: Date,
      trim: true,
    },
    tipo: {
      type: String,
      trim: true,
    },
    razon: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", TaskSchema);
