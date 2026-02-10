type ButtonProps = {
  clickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
  children: React.ReactNode;
  className?: string;
};

function Button({ clickHandler, children, className }: ButtonProps) {
  return (
    <button className={className ? className : ""} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
