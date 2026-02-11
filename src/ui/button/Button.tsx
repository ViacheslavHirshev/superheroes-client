import style from "./button.module.css";

type ButtonProps = {
  clickHandler?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
  children: React.ReactNode;
  btnStyle: "primary" | "danger" | "roundDanger";
  type: "button" | "submit";
};

function Button({ clickHandler, children, btnStyle, type }: ButtonProps) {
  return (
    <button
      className={
        btnStyle === "primary"
          ? style.primary
          : btnStyle === "danger"
            ? style.danger
            : style.roundDanger
      }
      onClick={clickHandler}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
