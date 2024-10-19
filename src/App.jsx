import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import AddTask from "./pages/AddTask";
import swDev from "./swdev";
import { Analytics } from "@vercel/analytics/react"


export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addtask" element={<AddTask />} />
          
        </Route>
      </Routes>
      <Analytics />
      
    </BrowserRouter>
  );
}
