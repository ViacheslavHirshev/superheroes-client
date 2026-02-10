import { useNavigate } from "react-router-dom";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

function ButtonLink({ to, children, className }: ButtonLinkProps) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button
        className={className ? className : ""}
        type="button"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );

  return (
    <button type="button" onClick={() => navigate(to)}>
      {children}
    </button>
  );
}

export default ButtonLink;
