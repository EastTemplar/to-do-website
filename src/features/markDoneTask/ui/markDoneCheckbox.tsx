import { MouseEvent, useState } from "react";
import { markDoneTask } from "../../../entities/task/api/markDoneTask";
import { Checkbox } from "../../../shared/ui/checkbox";

interface IMarkDoneCheckboxProps {
  taskId: number;
}
export function MarkDoneCheckbox(props: IMarkDoneCheckboxProps) {
  const [isToggled, Toggle] = useState(false);
  const { taskId } = props;

  function toggleMark(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    Toggle(!isToggled);
    markDoneTask(taskId, isToggled);
  }

  return <Checkbox onClick={toggleMark} />;
}
