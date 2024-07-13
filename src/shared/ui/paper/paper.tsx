import MUIPaper, { PaperProps } from "@mui/material/Paper/Paper";

export function Paper(props: PaperProps) {
  const { children } = props;

  return <MUIPaper {...props}>{children}</MUIPaper>;
}
