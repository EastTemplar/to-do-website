import './button.css';

interface IButtonProps {
  children: string
}

export function Button(props: IButtonProps) {
  const { children } = props;

  return <button>
    {children}
  </button>
}
