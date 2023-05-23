import { HashRouter as Router, Routes, Route } from "react-router-dom"
import GetStart from "./pages/GetStart"
import SideBar from "./components/SideBar"
import BoxShadow from "./pages/BoxShadow"
import TextShadow from "./pages/TextShadow"
import ColorFounder from "./pages/ColorFounder"
const App = () => {
  return (
    <Router>
        <SideBar />
        <div className="lg:p-0 md:p-0 sm:p-0 p-10"></div>
        <Routes>
          <Route path="/" element={<GetStart />} />
          <Route path="/box-shadow-generator" element={<BoxShadow />} />
          <Route path="/text-shadow-generator" element={<TextShadow />} />
          <Route path="/color-founder" element={<ColorFounder />} />
        </Routes>
    </Router>
  )
}
export default App
