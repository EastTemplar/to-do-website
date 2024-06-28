import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "../../pages/homePage"

export function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
