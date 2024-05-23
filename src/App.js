import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<SignIn />} path="/sign-in" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<h1>Not found</h1>} path="*" />
    </Routes>
  );
}

export default App;
