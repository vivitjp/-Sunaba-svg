import React from "react"
import ReactDOM from "react-dom/client"
import "./main.css"
import { PageRoute } from "./route/PageRoute"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PageRoute />
  </React.StrictMode>
)
