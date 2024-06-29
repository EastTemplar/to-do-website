import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "../../pages/homePage"
import { TasksPage } from "../../pages/tasksPage"

export function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/tasks",
      element: <TasksPage />
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}
