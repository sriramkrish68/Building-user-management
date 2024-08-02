"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalytics = exports.getPersonHistory = exports.getCurrentPeople = exports.registerExit = exports.registerEntry = void 0;
const eventModel_1 = __importDefault(require("../models/eventModel"));
const registerEntry = (personId, gate) => __awaiter(void 0, void 0, void 0, function* () {
    const event = new eventModel_1.default({ personId, gate, type: 'entry' });
    return yield event.save();
});
exports.registerEntry = registerEntry;
const registerExit = (personId, gate) => __awaiter(void 0, void 0, void 0, function* () {
    const event = new eventModel_1.default({ personId, gate, type: 'exit' });
    return yield event.save();
});
exports.registerExit = registerExit;
const getCurrentPeople = () => __awaiter(void 0, void 0, void 0, function* () {
    const entries = yield eventModel_1.default.find({ type: 'entry' }).sort({ timestamp: -1 });
    const exits = yield eventModel_1.default.find({ type: 'exit' }).sort({ timestamp: -1 });
    const peopleInBuilding = new Set();
    const exitSet = new Set();
    exits.forEach(exit => exitSet.add(exit.personId));
    entries.forEach(entry => {
        if (!exitSet.has(entry.personId)) {
            peopleInBuilding.add(entry.personId);
        }
    });
    return Array.from(peopleInBuilding);
});
exports.getCurrentPeople = getCurrentPeople;
const getPersonHistory = (personId, startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Ensure the endDate includes the full end day by adjusting to end of day
        endDate.setHours(23, 59, 59, 999);
        const events = yield eventModel_1.default.find({
            personId,
            timestamp: {
                $gte: startDate,
                $lte: endDate
            }
        });
        return events;
    }
    catch (error) {
        console.error('Error retrieving person history:', error);
        throw error;
    }
});
exports.getPersonHistory = getPersonHistory;
const getAnalytics = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentPeopleCount = (yield (0, exports.getCurrentPeople)()).length;
    const entries = yield eventModel_1.default.find({ type: 'entry' });
    const exits = yield eventModel_1.default.find({ type: 'exit' });
    const durationMap = new Map();
    entries.forEach(entry => {
        const exit = exits.find(exit => exit.personId === entry.personId && exit.timestamp > entry.timestamp);
        if (exit) {
            const duration = (exit.timestamp.getTime() - entry.timestamp.getTime()) / (1000 * 60); // in minutes
            durationMap.set(entry.personId, (durationMap.get(entry.personId) || 0) + duration);
        }
    });
    const averageDuration = Array.from(durationMap.values()).reduce((acc, duration) => acc + duration, 0) / durationMap.size;
    const entryTimes = entries.map(entry => entry.timestamp.getHours());
    const exitTimes = exits.map(exit => exit.timestamp.getHours());
    const peakEntryTime = entryTimes.sort((a, b) => entryTimes.filter(v => v === a).length - entryTimes.filter(v => v === b).length).pop();
    const peakExitTime = exitTimes.sort((a, b) => exitTimes.filter(v => v === a).length - exitTimes.filter(v => v === b).length).pop();
    const entryGates = entries.map(entry => entry.gate);
    const exitGates = exits.map(exit => exit.gate);
    const mostUsedEntryGate = entryGates.sort((a, b) => entryGates.filter(v => v === a).length - entryGates.filter(v => v === b).length).pop();
    const mostUsedExitGate = exitGates.sort((a, b) => exitGates.filter(v => v === a).length - exitGates.filter(v => v === b).length).pop();
    return {
        currentPeopleCount,
        averageDuration,
        peakEntryTime,
        peakExitTime,
        mostUsedEntryGate,
        mostUsedExitGate,
    };
});
exports.getAnalytics = getAnalytics;
