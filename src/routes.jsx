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
import IpAddress from "./pages/IpAddress";
import CopyrightPolicy from "./pages/copyrightPolicy";
import DeliveryPolicy from "./pages/DeliveryPage";
import DisclaimerPolicy from "./pages/DesclaimerPolicy";
import CancellationPolicy from "./pages/cancelationPolicy";
import BuyPdf from "./pages/BuyPdf/BuyPdf";
import AllNotes from "./pages/AllNotes";

const routes = createBrowserRouter([
   

  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Some Error Occured </h1>,
    children: [
      {
        path: "/",
        index:true,
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
        path:"/ip-address",
        element:<IpAddress />
      }
      ,
      {
        path: "/buy-pdf/:id",
        element: <BuyPdf />
      }
      , {
        path: "/aboutus",
        element: <AboutUs />

      },
      

      , {
        path: "/detail",
        element: <DetailPage />
      }
      , {
        path: "/refund",
        element: <RefundPolicy />
      }, {
        path: "/privacy",
        element: <PrivacyPolicy />
      },
      {
        path: "/terms",
        element: <TermsAndConditions />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      }

      , {
        path: "/copyright",
        element: <CopyrightPolicy />
      },
      {
        path: "/delivery",
        element: <DeliveryPolicy />
      },
      {
        path: "/disclaimer",
        element: <DisclaimerPolicy />
      },
      {
        path: "/cancelPolicy",
        element: <CancellationPolicy />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path:"/all-notes",
    element:<AllNotes/>
  }
//   {
//     path:"/aboutus",
//     element: <AboutUs/>

//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },

// ,{
//   path:"/detail",
//   element:<DetailPage/>
// }
// ,{
//   path:"/refund",
// element:<RefundPolicy/>
// },{
//   path:"/privacy",
//   element:<PrivacyPolicy/>
// },
// {
//   path:"/terms",
//   element:<TermsAndConditions/>
// },
// {
// path:"/profile",
// element:<ProfilePage/>
// }

// ,{
//   path:"/copyright",
//   element:<CopyrightPolicy/>
// },
// {
//   path:"/delivery",
//   element:<DeliveryPolicy/>
// },
// {
//   path:"/disclaimer",
//   element:<DisclaimerPolicy/>
// },
// {
//   path:"/cancelPolicy",
//   element:<CancellationPolicy/>
// },
 

  
]);


export default routes;
