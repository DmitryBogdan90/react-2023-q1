import React from "react";
import ReactDOM from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";

import "./index.css";
import router from "./router";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
