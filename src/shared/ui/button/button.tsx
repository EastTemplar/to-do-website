import "./button.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button(props: IButtonProps) {
  const { children } = props;

  return <button {...props}>{children}</button>;
}
