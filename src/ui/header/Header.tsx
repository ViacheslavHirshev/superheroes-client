import ButtonLink from "../button/ButtonLink";
import { CustomLink } from "../custom-link/CustomLink";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <h2>
        <CustomLink to="/superheroes">Superheroes Inc.</CustomLink>
      </h2>
      <ButtonLink btnStyle="primary" to="/create">
        Create superhero
      </ButtonLink>
    </header>
  );
}

export default Header;
