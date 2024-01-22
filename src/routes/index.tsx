import { Routes } from "react-router-dom"
import visitorRoutes from "./users/visitors"

const Routers = () => {
  return (
    <Routes>
        {/* YOUR ROUTES HERE */}
        {visitorRoutes()}
    </Routes>
  )
}

export default Routers