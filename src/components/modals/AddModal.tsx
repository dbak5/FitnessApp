import { FC, PropsWithChildren } from "react";
import { BaseModal } from "./BaseModal";
import { SearchInputControlledSelect } from "../../components/inputs/SearchInputControlledSelect";
import { ListTable } from "../../components/tables/ListTable";
import { AddButton } from "../../components/buttons/AddButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type Props = PropsWithChildren & {
  options: any[];
  data: any[];
  columns: any[];
  checkboxSelection: boolean;
  label: string;
  place: string;
};

export const AddModal: FC<Props> = ({
  children,
  options,
  data,
  columns,
  checkboxSelection,
  label,
  place,
}) => {
  return (
    <>
      <BaseModal>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchInputControlledSelect label="Search" options={options} />
          </Grid>
          <Grid item xs={12}>
            <ListTable
              data={data}
              columns={columns}
              checkboxSelection={checkboxSelection}
            />
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <AddButton place={place} />
          </Grid>
        </Grid>
      </BaseModal>
    </>
  );
};
