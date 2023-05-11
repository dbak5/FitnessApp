import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { RowData } from "../../assets/dummy/RowData";

const columns = [
  { field: "exerciseName", headerName: "Exercise", width: 130 },
  {
    field: "lastActivity",
    headerName: "Last Activity",
    width: 130,
  },
  { field: "reps", headerName: "Reps", type: "number", width: 70 },
  { field: "pb", headerName: "PB", width: 90 },
];

export default function PBTable() {
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
      />
    </div>
  );
}
