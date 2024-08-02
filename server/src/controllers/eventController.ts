import { Request, Response } from 'express';
import { registerEntry, registerExit, getCurrentPeople, getPersonHistory, getAnalytics } from '../services/eventService';

const handleError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: error.message });
  } else {
    console.error('An unknown error occurred'); // Log the unknown error
    res.status(500).json({ error: 'An unknown error occurred' });
  }
};

export const entry = async (req: Request, res: Response) => {
  try {
    const { personId, gate } = req.body;
    const event = await registerEntry(personId, gate);
    res.status(201).json(event);
  } catch (error) {
    handleError(res, error);
  }
};

export const exit = async (req: Request, res: Response) => {
  try {
    const { personId, gate } = req.body;
    const event = await registerExit(personId, gate);
    res.status(201).json(event);
  } catch (error) {
    handleError(res, error);
  }
};

export const people = async (_req: Request, res: Response) => {
  try {
    const people = await getCurrentPeople();
    res.status(200).json(people);
  } catch (error) {
    handleError(res, error);
  }
};

export const history = async (req: Request, res: Response) => {
  try {
    const { personId, startDate, endDate } = req.query;
    const events = await getPersonHistory(personId as string, new Date(startDate as string), new Date(endDate as string));
    res.status(200).json(events);
  } catch (error) {
    handleError(res, error);
  }
};

export const analytics = async (_req: Request, res: Response) => {
  try {
    const data = await getAnalytics();
    res.status(200).json(data);
  } catch (error) {
    handleError(res, error);
  }
};
