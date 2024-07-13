import { MouseEvent } from "react";
import { markDoneTask } from "../../../entities/task/api/markDoneTask";
import { Checkbox } from "../../../shared/ui/checkbox";

interface IMarkDoneCheckboxProps {
  taskId: number;
}
export function MarkDoneCheckbox(props: IMarkDoneCheckboxProps) {
  const { taskId } = props;

  function mark(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    markDoneTask(taskId);
  }

  return <Checkbox onClick={mark} />;
}
