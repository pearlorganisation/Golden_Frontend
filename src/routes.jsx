import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import PdfView from "./pages/PdfView";
import Login from "./pages/Login";
import FeaturesPage from "./pages/featurePage";
import PricingPage from "./pages/PricingPage";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";
import PostPaymentPDFView from "./pages/PostPaymentPDFView";
import DetailPage from "./pages/DetailPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Some Error Occured </h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/subject",
        element: <Subject />,
      },
      {
        path: "/pdf-listings",
        element: <PdfView />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/postpdf",
        element: <PostPaymentPDFView />,
      },
    ],
  },
  {
    path:"/aboutus",
    element: <AboutUs/>

  }

,{
  path:"/detail",
  element:<DetailPage/>
}


  
]);


export default routes;
