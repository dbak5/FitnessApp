import { FC, PropsWithChildren } from "react";
import { BaseButton } from "./BaseButton";

type Props = PropsWithChildren & {};

export const DeleteButton: FC<Props> = () => {
  return <BaseButton>Delete</BaseButton>;
};
