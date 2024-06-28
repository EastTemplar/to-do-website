import './taskForm.css';

interface ITaskFormProps {
  name: string;
  description?: string;
}

export function TaskForm(props: ITaskFormProps) {
  const { name, description } = props;

  return <div className="task-form-container">
    <div className="task-form-flexbox">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
}
