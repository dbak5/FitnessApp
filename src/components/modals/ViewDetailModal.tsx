import { FC, PropsWithChildren } from "react";
import { BaseModal } from "./BaseModal";
import { EditButton } from "../../components/buttons/EditButton";
import Grid from "@mui/material/Grid";

type Props = PropsWithChildren & {
  activity: string;
  link: string;
  disabled: boolean;
  label: string;
};

//TODO need to work out how to make this generic for program and exercise
//TODO turn into editable table

export const ViewDetailModal: FC<Props> = ({
  children,
  activity,
  link,
  label,
  disabled,
}) => {
  return (
    <BaseModal label={label} disabled={disabled}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <EditButton link={link} activity={activity} />
        </Grid>
      </Grid>
    </BaseModal>
  );
};
