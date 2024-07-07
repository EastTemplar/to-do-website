import MUIInput, { InputProps } from "@mui/material/Input/Input";

interface IInputProps extends InputProps {
  children: string;
}

export function Input(props: IInputProps) {
  const { children } = props;

  return <MUIInput {...props}>{children}</MUIInput>;
}
