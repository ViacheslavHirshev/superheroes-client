import { useNavigate } from "react-router-dom";
import style from "./button.module.css";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  btnStyle: "primary" | "danger" | "roundDanger";
};

function ButtonLink({ to, children, btnStyle }: ButtonLinkProps) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button
        className={
          btnStyle === "primary"
            ? style.primary
            : btnStyle === "danger"
              ? style.danger
              : style.roundDanger
        }
        type="button"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );

  return (
    <button
      className={
        btnStyle === "primary"
          ? style.primary
          : btnStyle === "danger"
            ? style.danger
            : style.roundDanger
      }
      type="button"
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}

export default ButtonLink;
