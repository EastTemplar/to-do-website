import { MouseEvent } from "react";
import { Button } from "../../../shared/ui/button";
import { deleteTask } from "../../../entities/task";

interface IRemoveTaskButtonProps {
  taskId: number;
}

export function RemoveTaskButton(props: IRemoveTaskButtonProps) {
  const { taskId } = props;

  function remove(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    deleteTask(taskId);
  }

  return (
    <Button variant="contained" onClick={remove}>
      Delete
    </Button>
  );
}
