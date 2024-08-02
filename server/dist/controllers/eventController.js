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
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = exports.history = exports.people = exports.exit = exports.entry = void 0;
const eventService_1 = require("../services/eventService");
const handleError = (res, error) => {
    if (error instanceof Error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
    else {
        console.error('An unknown error occurred'); // Log the unknown error
        res.status(500).json({ error: 'An unknown error occurred' });
    }
};
const entry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { personId, gate } = req.body;
        const event = yield (0, eventService_1.registerEntry)(personId, gate);
        res.status(201).json(event);
    }
    catch (error) {
        handleError(res, error);
    }
});
exports.entry = entry;
const exit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { personId, gate } = req.body;
        const event = yield (0, eventService_1.registerExit)(personId, gate);
        res.status(201).json(event);
    }
    catch (error) {
        handleError(res, error);
    }
});
exports.exit = exit;
const people = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const people = yield (0, eventService_1.getCurrentPeople)();
        res.status(200).json(people);
    }
    catch (error) {
        handleError(res, error);
    }
});
exports.people = people;
const history = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { personId, startDate, endDate } = req.query;
        const events = yield (0, eventService_1.getPersonHistory)(personId, new Date(startDate), new Date(endDate));
        res.status(200).json(events);
    }
    catch (error) {
        handleError(res, error);
    }
});
exports.history = history;
const analytics = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, eventService_1.getAnalytics)();
        res.status(200).json(data);
    }
    catch (error) {
        handleError(res, error);
    }
});
exports.analytics = analytics;
