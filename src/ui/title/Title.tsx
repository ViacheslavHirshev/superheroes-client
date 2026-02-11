import styles from "./title.module.css";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.pageTitle}>{children}</h2>;
}

export default Title;
