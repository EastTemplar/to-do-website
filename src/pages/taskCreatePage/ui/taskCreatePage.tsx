import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { CreateTaskForm } from "../../../features/createTask";
import { Button } from "../../../shared/ui/button";
import styles from "./taskCreatePage.module.scss";

export function TaskCreatePage() {
  function redirectToPreviousPage() {
    history.back();
  }

  return (
    <div className={styles.pageWrapper}>
      <Link to={"/"}>
        <Button>
          <ArrowBackIcon />
        </Button>
      </Link>

      <CreateTaskForm onCreate={redirectToPreviousPage} />
    </div>
  );
}
