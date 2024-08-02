import { Schema, model, Document } from 'mongoose';

interface IEvent extends Document {
  personId: string;
  timestamp: Date;
  gate: string;
  type: 'entry' | 'exit';
}

const eventSchema = new Schema<IEvent>({
  personId: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
  gate: { type: String, required: true },
  type: { type: String, required: true, enum: ['entry', 'exit'] },
});

const Event = model<IEvent>('Event', eventSchema);

export default Event;
