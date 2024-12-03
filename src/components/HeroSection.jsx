// import { Link } from "react-router-dom";
// import Slider from "react-slick";

// const HeroSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const slidesData = [
//     {
//       backgroundImage:
//         "https://images.shiksha.com/mediadata/images/articles/1625227282phpk4bbYn.jpeg",
//       title: "Study Less, Know More: The Smarter Way to Ace NEET PG",
//       ctaButtons: [
//         {
//           text: "Explore Notes",
//           link: "/notes",
//           bgColor: "bg-yellow-400",
//           textColor: "text-blue-900",
//         },
//         {
//           text: "Subscribe Now",
//           link: "/pricing-faq",
//           bgColor: "bg-transparent border-2 border-white",
//           textColor: "text-white",
//         },
//       ],
//     },
//   ];

//   return (
//     <section className="relative bg-pink-500">
//       <div
//         className="hero-slide  bg-cover bg-center"
//         style={{
//           backgroundImage: `url('https://www.shutterstock.com/image-photo/maski-india-26may-2019-neet-260nw-1407723131.jpg')`,

//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <Slider {...settings}>
//           {slidesData.map((slide, index) => (
//             <div className="container mx-auto text-center py-20" key={index}>
//               <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//                 {slide.title}
//               </h1>
//               <div className="flex justify-center gap-6 mt-6">
//                 {slide.ctaButtons.map((button, btnIndex) => (
//                   <Link
//                     key={btnIndex}
//                     to={button.link}
//                     className={`${button.bgColor} ${button.textColor} py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300`}
//                   >
//                     {button.text}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Importing react-slick

const HeroSection = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      className="relative text-white py-20"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/995966976/photo/they-bring-accuracy-and-expertise-into-every-procedure.jpg?s=612x612&w=0&k=20&c=l-J5YF7bDB67Fhn6D4hjm-i-B0DeCgLHmL7vdPrvkJM=')",
        minHeight: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Slick Carousel */}
      <Slider {...settings}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-center">
            Study Less, Know More:{" "}
          </h1>

          <h3 className="text-yellow-400 text-3xl md:text-4xl font-bold leading-tight mb-4 text-center">
            The Smarter Way to Ace NEET PG
          </h3>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-center">
            Unlock Your NEET PG Potential with Our Resources
          </h1>
        </div>
        {/* Add more slides as needed */}
      </Slider>

      {/* CTA buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <Link
          to="/notes"
          className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Explore Notes
        </Link>

        <Link
          to="/pricing-faq"
          className="bg-red-600  py-3 px-6 rounded-full text-lg font-semibold text-white hover:bg-white hover:text-blue-900 transition duration-300"
        >
          Subscribe Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
