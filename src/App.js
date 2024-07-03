import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";
import ContactUs from "./pages/ContactUs";
import Collections from "./pages/Collections";
import Playground from "./pages/Playground";
import RootLayout from "./pages/RootLayout";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Routes>
      <Route element={<RootLayout />}>
      <Route element={<Home />} path="/" />
      <Route element={<Playground />} path="/playground" />
      <Route element={<ContactUs />} path="/contact-us" />
      <Route element={<Collections />} path="/collections" />
      </Route>
      <Route element={<SignIn />} path="/sign-in" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<h1>Not found</h1>} path="*" />
    </Routes>
  );
}

export default App;
