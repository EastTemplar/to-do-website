import './taskForm.css';

interface ITaskFormProps {
  name: string;
  description?: string;
  children?: any;
}

export function TaskForm(props: ITaskFormProps) {
  const { name, description, children } = props;

  return <div className="task-form-container">
    <div className="task-form-flexbox">
      <h2>{name}</h2>
      <p>{description}</p>
      {children}
    </div>
  </div>
}
