import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Test from "./Component/TestingComponent/Test";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Pages/Home/Home";

const Layout = () => {
  return (
    <div className="mainConatain">
      <Navbar />
      <Outlet />

      <Test/>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <div>product</div>,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
