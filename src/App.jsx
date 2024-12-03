import "./App.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import disableDevtool from "disable-devtool";

function App() {
  // disableDevtool();
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
