import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthRouter, AuthRoutes } from "../auth/routes";
import { JournalRouter, JournalRoutes } from "../journal/routes";

const router = createBrowserRouter([
  { path: "/auth/*", element: <AuthRouter />, children: AuthRoutes },
  { path: "/", element: <JournalRouter />, children: JournalRoutes },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
