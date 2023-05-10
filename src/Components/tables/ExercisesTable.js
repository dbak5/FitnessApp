import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "exerciseName", headerName: "Exercise", width: 130 },
  { field: "pb", headerName: "PB", width: 90 },
  { field: "sets", headerName: "Sets", type: "number", width: 70 },
  { field: "reps", headerName: "Reps", type: "number", width: 70 },
  { field: "equipment", headerName: "Equipment", width: 130 },
  {
    field: "lastActivity",
    headerName: "Last Activity",
    width: 130,
  },
  {
    field: "category",
    headerName: "Category",
    width: 130,
  },
  {
    field: "bodyPart",
    headerName: "Body Part",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    exerciseName: "Front squat",
    pb: "60kg",
    sets: 4,
    reps: 3,
    equipment: "BB",
    lastActivity: "20/02/2023",
    category: "Weightlifting",
  },
  {
    id: 2,
    exerciseName: "Back squat",
    pb: "60kg",
    sets: 3,
    reps: 4,
    equipment: "BB",
    lastActivity: "02/03/2023",
    category: "Weightlifting",
  },
  {
    id: 3,
    exerciseName: "Deadlift",
    pb: "60kg",
    sets: 4,
    reps: 5,
    equipment: "BB",
    lastActivity: "05/06/2023",
    category: "Weightlifting",
  },
  {
    id: 4,
    exerciseName: "Clean and jerk",
    pb: "60kg",
    sets: 3,
    reps: 6,
    equipment: "BB",
    lastActivity: "15/09/2023",
    category: "Weightlifting",
  },
  {
    id: 5,
    exerciseName: "Bicep curls",
    pb: "5kg",
    sets: 4,
    reps: 5,
    equipment: "DB",
    lastActivity: "25/01/2023",
    category: "Bodybuilding",
    bodyPart: "Upper",
  },
  {
    id: 6,
    exerciseName: "Snatch pull",
    pb: "60kg",
    sets: 5,
    reps: 2,
    equipment: "BB",
    lastActivity: "07/08/2023",
    category: "Weightlifting",
  },
  {
    id: 7,
    exerciseName: "Clean pull",
    pb: "60kg",
    sets: 5,
    reps: 1,
    equipment: "BB",
    lastActivity: "06/07/2023",
    category: "Weightlifting",
  },
  {
    id: 8,
    exerciseName: "Jerk from the rack",
    pb: "60kg",
    sets: 3,
    reps: 8,
    equipment: "BB",
    lastActivity: "07/10/2023",
    category: "Weightlifting",
  },
  {
    id: 9,
    exerciseName: "Snatch push press",
    pb: "60kg",
    sets: 5,
    reps: 5,
    equipment: "BB",
    lastActivity: "14/02/2023",
    category: "Weightlifting",
  },
];

export default function ExercisesTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
