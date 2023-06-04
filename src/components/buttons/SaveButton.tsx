import { FC, PropsWithChildren } from "react";
import { BaseButton } from "./BaseButton";

type Props = PropsWithChildren & {};

export const SaveButton: FC<Props> = () => {
  return <BaseButton>save</BaseButton>;
};
