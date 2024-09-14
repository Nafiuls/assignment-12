import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Navbar";
import Footer from "./src/Components/Footer";

export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen max-w-5xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  )
}
