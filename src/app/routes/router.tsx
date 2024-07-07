import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TasksPage } from "../../pages/tasksPage";
import { TaskCreatePage } from "../../pages/taskCreatePage";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TasksPage />,
    },

    {
      path: "/create",
      element: <TaskCreatePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
