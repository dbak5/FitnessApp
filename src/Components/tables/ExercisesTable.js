import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { RowData } from "../../assets/dummy/RowData";

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

export default function ExercisesTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={RowData}
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
