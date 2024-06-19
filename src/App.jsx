import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home.page.jsx";
import { AboutUsPage } from "./pages/about_us.page.jsx";
import { OurServicesPage } from "./pages/our_services.page.jsx";
import Contact from "./pages/contact_us.page.jsx";
import TopButton from "./components/scroll_top_button.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/services",
    element: <OurServicesPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
      <TopButton/>
    </>
  );
}

export default App;
