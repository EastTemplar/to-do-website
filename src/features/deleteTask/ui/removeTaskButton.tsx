import { MouseEvent } from "react";
import { Button } from "../../../shared/ui/button";
import { removeTask } from "../api/removeTask";

interface IRemoveTaskButtonProps {
  taskId: number;
  onRemovedTask: () => void;
}

export function RemoveTaskButton(props: IRemoveTaskButtonProps) {
  const { taskId, onRemovedTask } = props;

  function remove(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    removeTask(taskId);
    onRemovedTask();
  }

  return (
    <Button variant="contained" onClick={remove}>
      Delete
    </Button>
  );
}
