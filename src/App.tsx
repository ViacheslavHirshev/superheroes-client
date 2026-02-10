import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/layout/AppLayout";
import SuperheroCreate from "./features/superhero/SuperheroCreate";
import SuperheroList from "./features/superhero/SuperheroList";
import Superhero from "./features/superhero/Superhero";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <h1>Something went wrong!</h1>,
    children: [
      {
        index: true,
        element: <Navigate to="/superheroes" replace />,
      },
      {
        path: "/create",
        element: <SuperheroCreate />,
      },
      {
        path: "/superheroes",
        element: <SuperheroList />,
      },
      {
        path: "/superheroes/:id",
        element: <Superhero />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
