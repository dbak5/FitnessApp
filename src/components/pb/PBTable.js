import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { RowData } from "../../assets/dummy/RowData";

const columns = [
  { field: "exerciseName", headerName: "Name", width: 130 },
  {
    field: "pbDate",
    headerName: "Date",
    width: 130,
  },
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
