import { DataGrid } from "@mui/x-data-grid";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  data: any[];
  columns: any[];
  checkboxSelection: boolean;
};

export const ListTable: FC<Props> = ({ data, columns, checkboxSelection }) => {
  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={checkboxSelection}
      />
    </>
  );
};
