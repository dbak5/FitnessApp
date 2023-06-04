import { FC, PropsWithChildren } from "react";
import AddIcon from "@mui/icons-material/Add";
import { BaseButton } from "./BaseButton";

type Props = PropsWithChildren & {
  place: string;
};

export const AddButton: FC<Props> = ({ place }) => {
  return <BaseButton icon={<AddIcon />}>to {place}</BaseButton>;
};
