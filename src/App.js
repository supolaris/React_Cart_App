import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import { Profile } from "./screens/Profile";

import { NavBar } from "./routes/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    },
    {
      path: "/profile/:userName",
      element: (
        <>
          <NavBar />
          <Profile />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
