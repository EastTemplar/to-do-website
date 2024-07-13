import { useState } from "react";
import { markDoneTask } from "../../../entities/task/api/markDoneTask";
import { Checkbox } from "../../../shared/ui/checkbox";

interface IMarkDoneCheckboxProps {
  taskId: number;
}
export function MarkDoneCheckbox(props: IMarkDoneCheckboxProps) {
  const [isToggled, setIsToggled] = useState(true);
  const { taskId } = props;

  function toggleMark() {
    setIsToggled(!isToggled);
    markDoneTask(taskId, isToggled);
  }

  return <Checkbox onClick={toggleMark} />;
}
