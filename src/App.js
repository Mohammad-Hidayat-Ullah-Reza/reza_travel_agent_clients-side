import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Routes/Routes";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
