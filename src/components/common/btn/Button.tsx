type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
