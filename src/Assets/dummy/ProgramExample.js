export const ProgramList = [
  { id: 1, programName: "Weightlifting Block 1" },
  { id: 2, programName: "Weightlifting Block 2" },
  { id: 3, programName: "Bodybuilding" },
];

export const ProgramListSimple = [
  "Weightlifting Block 1",
  "Weightlifting Block 2",
  "Bodybuilding",
];

export const ProgramColumns = [
  { field: "programName", headerName: "Name", width: 300 },
];

export const ColumnsProgramExample = [
  { field: "programName", headerName: "Name", width: 300 },
  { field: "exerciseName", headerName: "Exercise", width: 130 },
  { field: "sets", headerName: "Sets", type: "number", width: 70 },
  { field: "reps", headerName: "Reps", type: "number", width: 70 },
  { field: "equipment", headerName: "Equipment", width: 130 },
];

export const ProgramExample = [
  {
    id: 1,
    programName: "Weightlifting Block 1",
    exerciseName: "Front squat",
    sets: 4,
    reps: 3,
    equipment: "BB",
    week: "1",
    day: "1",
  },
  {
    id: 2,
    programName: "Weightlifting Block 1",
    exerciseName: "Back squat",
    sets: 3,
    reps: 4,
    equipment: "BB",
    week: "2",
    day: "3",
  },
  {
    id: 3,
    programName: "Weightlifting Block 1",
    exerciseName: "Deadlift",
    sets: 4,
    reps: 5,
    equipment: "BB",
    week: "3",
    day: "2",
  },
  {
    id: 4,
    programName: "Weightlifting Block 1",
    exerciseName: "Clean and jerk",
    sets: 3,
    reps: 6,
    equipment: "BB",
    week: "3",
    day: "1",
  },
  {
    id: 5,
    programName: "Weightlifting Block 1",
    exerciseName: "Bicep curls",
    sets: 4,
    reps: 5,
    equipment: "DB",
    week: "4",
    day: "3",
  },
  {
    id: 6,
    programName: "Weightlifting Block 1",
    exerciseName: "Snatch pull",
    sets: 5,
    reps: 2,
    equipment: "BB",
    week: "4",
    day: "2",
  },
];
