import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
