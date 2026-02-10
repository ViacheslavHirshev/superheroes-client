import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import style from "./appLayout.module.css";

function AppLayout() {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.mainContainer}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
