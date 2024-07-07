import MUIButton, { ButtonProps } from "@mui/material/Button/Button";

export function Button(props: ButtonProps) {
  const { children } = props;
  return <MUIButton {...props}>{children}</MUIButton>;
}
