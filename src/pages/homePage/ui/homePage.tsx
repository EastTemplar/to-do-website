import { useState } from 'react';
import { Button } from '../../../shared/ui/button';
import { TaskForm } from '../../../widgets/taskForm';
import './homePage.css';

export function HomePage() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: 'Lorem ipsum',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
      id: 1,
      name: 'Lorem',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
  ])

  function assertRemoveTask(index: number) {
    if (index > tasks.length - 1) {
      throw new RangeError("Index is out of bounds!");
    }
  }

  function removeTask(index: number) {
    console.log(index);
    assertRemoveTask(index);
    const tasksTemp = tasks.slice();
    setTasks(tasksTemp.splice(index, 1));
    console.log(tasks);
  }

  return <div className="page-wrapper">
    {tasks.map((task) =>
      <TaskForm
        key={task.id}
        name={task.name}
        description={task.description}>
        <Button onClick={() => removeTask(task.id)}>
          Delete
        </Button>
      </TaskForm>)}
  </div>;
}
