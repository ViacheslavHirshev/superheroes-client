import { CustomNavLink } from "../custom-link/CustomLink";
import style from "./paginator.module.css";

type PaginatorProps = {
  limit: number;
  totalPages: number;
  page?: number;
  isFirst?: boolean;
  isLast?: boolean;
  totalItems?: number;
};

function Paginator({
  page,
  isFirst,
  isLast,
  totalItems,
  limit,
  totalPages,
}: PaginatorProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className={style.pages}>
      {pages.map((page) => (
        <li key={page} className={style.page}>
          <CustomNavLink to={`/superheroes?page=${page}&limit=${limit}`}>
            {page}
          </CustomNavLink>
        </li>
      ))}
    </ul>
  );
}

export default Paginator;
