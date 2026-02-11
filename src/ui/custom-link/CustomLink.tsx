import { Link, NavLink, useLocation } from "react-router-dom";
import style from "./customLink.module.css";

type CustomNavLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export function CustomNavLink({ to, children }: CustomNavLinkProps) {
  const location = useLocation();

  const currentPath = location.pathname + location.search;

  return (
    <NavLink
      className={
        currentPath === to ? `${style.active} ${style.link}` : `${style.link}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

type CustomLinkProps = {
  children: React.ReactNode;
  to: string;
};
export function CustomLink({ to, children }: CustomLinkProps) {
  return (
    <Link to={to} className={style.customLink}>
      {children}
    </Link>
  );
}
