import TestPage from "@pages/TestPage"
import { Navigate, Route } from "react-router-dom"

const visitorRoutes = () => {
  return (
    <>
    <Route path="*" element={<Navigate to="/" />}/>
    <Route path="/" element={<TestPage />} />
    </>
  )
}

export default visitorRoutes