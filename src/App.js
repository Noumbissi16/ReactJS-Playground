import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";
import ContactUs from "./pages/ContactUs";
import Collections from "./pages/Collections";
import Playground from "./pages/Playground";
import RootLayout from "./pages/RootLayout";
import { useEffect } from "react";
import { ClerkRootLayout, SignInC, SignUpC, LoggedPage } from "./pages/clerk-auth"



// Import your publishable key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
console.log("Publishable key: " + PUBLISHABLE_KEY)



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
      <Route element={<ClerkRootLayout />}>
        <Route element={<SignInC />} path="/clerk/sign-in" />
        <Route element={<SignUpC />} path="/clerk/sign-up" />
        <Route element={<LoggedPage />} path="/clerk" />
      </Route>
      <Route element={<h1>Not found</h1>} path="*" />
    </Routes>
  );
}

export default App;
