import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";

const App = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
};

export default App;
