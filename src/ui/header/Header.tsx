import ButtonLink from "../button/ButtonLink";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <h2>Superheroes Inc.</h2>
      <ButtonLink to="/create">Create superhero</ButtonLink>
    </header>
  );
}

export default Header;
