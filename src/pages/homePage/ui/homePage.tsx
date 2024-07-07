import { Link } from "react-router-dom";
import styles from "./homePage.module.scss";

export function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <Link to={"/tasks"}>Перейти к созданию тасков</Link>
    </div>
  );
}
