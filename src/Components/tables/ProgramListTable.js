import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ProgramList } from "../../assets/dummy/RowData";

const columns = [{ field: "programName", headerName: "Name", width: 300 }];

export default function PBTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={ProgramList}
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
