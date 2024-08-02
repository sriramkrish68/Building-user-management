import Event from '../models/eventModel';

export const registerEntry = async (personId: string, gate: string) => {
  const event = new Event({ personId, gate, type: 'entry' });
  return await event.save();
};

export const registerExit = async (personId: string, gate: string) => {
  const event = new Event({ personId, gate, type: 'exit' });
  return await event.save();
};

export const getCurrentPeople = async () => {
  const entries = await Event.find({ type: 'entry' }).sort({ timestamp: -1 });
  const exits = await Event.find({ type: 'exit' }).sort({ timestamp: -1 });

  const peopleInBuilding = new Set<string>();
  const exitSet = new Set<string>();

  exits.forEach(exit => exitSet.add(exit.personId));
  entries.forEach(entry => {
    if (!exitSet.has(entry.personId)) {
      peopleInBuilding.add(entry.personId);
    }
  });

  return Array.from(peopleInBuilding);
};

export const getPersonHistory = async (personId: string, startDate: Date, endDate: Date) => {
  try {
    // Ensure the endDate includes the full end day by adjusting to end of day
    endDate.setHours(23, 59, 59, 999);

    const events = await Event.find({
      personId,
      timestamp: {
        $gte: startDate,
        $lte: endDate
      }
    });
    return events;
  } catch (error) {
    console.error('Error retrieving person history:', error);
    throw error;
  }
};

export const getAnalytics = async () => {
  const currentPeopleCount = (await getCurrentPeople()).length;

  const entries = await Event.find({ type: 'entry' });
  const exits = await Event.find({ type: 'exit' });

  const durationMap = new Map<string, number>();

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

  const peakEntryTime = entryTimes.sort((a, b) =>
    entryTimes.filter(v => v === a).length - entryTimes.filter(v => v === b).length
  ).pop();
  
  const peakExitTime = exitTimes.sort((a, b) =>
    exitTimes.filter(v => v === a).length - exitTimes.filter(v => v === b).length
  ).pop();

  const entryGates = entries.map(entry => entry.gate);
  const exitGates = exits.map(exit => exit.gate);

  const mostUsedEntryGate = entryGates.sort((a, b) =>
    entryGates.filter(v => v === a).length - entryGates.filter(v => v === b).length
  ).pop();

  const mostUsedExitGate = exitGates.sort((a, b) =>
    exitGates.filter(v => v === a).length - exitGates.filter(v => v === b).length
  ).pop();

  return {
    currentPeopleCount,
    averageDuration,
    peakEntryTime,
    peakExitTime,
    mostUsedEntryGate,
    mostUsedExitGate,
  };
};
