"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    personId: { type: String, required: true },
    timestamp: { type: Date, required: true, default: Date.now },
    gate: { type: String, required: true },
    type: { type: String, required: true, enum: ['entry', 'exit'] },
});
const Event = (0, mongoose_1.model)('Event', eventSchema);
exports.default = Event;
