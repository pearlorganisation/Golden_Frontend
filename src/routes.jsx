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
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/Privacypolicy";
import TermsAndConditions from "./pages/Term&Condition";
import SignUp from "./pages/signup";
import ProtectedRoute from "./components/ProctedRoute";
import ProfilePage from "./pages/ProfilePage";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  

  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Some Error Occured </h1>,
    children: [
      {
        path: "/",
        element: 
        <ProtectedRoute>
        <Home />,
        </ProtectedRoute>
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
     
      {
        path: "/detail",
        element: <DetailPage />,
      },
      ,{
        path:"/refund",
      element:<RefundPolicy/>
      },{
        path:"/privacy",
        element:<PrivacyPolicy/>
      },
      {
        path:"/terms",
        element:<TermsAndConditions/>
      },
      {
      path:"/profile",
      element:<ProfilePage/>
      }
    ],
  },
 
])


  


export default routes;
