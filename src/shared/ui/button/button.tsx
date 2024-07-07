import "./button.module.scss";
import MUIButton, { ButtonProps } from "@mui/material/Button/Button";

interface IButtonProps extends ButtonProps {
  children: string;
}

export function Button(props: IButtonProps) {
  const { children } = props;

  return <MUIButton {...props}>{children}</MUIButton>;
}
