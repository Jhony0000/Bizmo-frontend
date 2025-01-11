import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import App from "./App.jsx";
import { Home, Login, Signup } from "./pages/index.js";
import { AuthLayout } from "./components/index.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
