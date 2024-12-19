import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Sample from "./pages/sample";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sample />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};

export default App;
