import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Hello,
  Interests,
  NotFound,
  Works,
  Summary,
} from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Hello />,
      },
      {
        path: "hello",
        element: <Hello />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            // element: <Navigate to="summary" replace />,
            element: <Summary />,
          },
          {
            path: "summary",
            element: <Summary />,
          },
          {
            path: "interests",
            element: <Interests />,
          },
          {
            path: "experience",
            element: <Experience />,
          },
          {
            path: "education",
            element: <Education />,
          },
        ],
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />

    {/* vercel analytics */}
    <Analytics />
  </>,
);
