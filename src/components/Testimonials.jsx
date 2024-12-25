import { useEffect } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../features/Review/reviewAction";

const testimonialsGroup1 = [
  {
    id: 1,
    name: "John Doe",
    review: "This course changed my life! Absolutely loved it.",
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "The instructors were top-notch and very helpful.",
    role: "Web Developer",
  },
  {
    id: 3,
    name: "Sam Wilson",
    review: "Amazing experience! The projects were very practical.",
    role: "Data Scientist",
  },
  {
    id: 4,
    name: "John Doe",
    review: "This course changed my life! Absolutely loved it.",
    role: "Software Engineer",
  },
  {
    id: 5,
    name: "Jane Smith",
    review: "The instructors were top-notch and very helpful.",
    role: "Web Developer",
  },
  {
    id: 6,
    name: "Sam Wilson",
    review: "Amazing experience! The projects were very practical.",
    role: "Data Scientist",
  },
];

const testimonialsGroup2 = [
  {
    id: 7,
    name: "Emily Clark",
    review: "I learned so much and gained real-world skills.",
    role: "UX Designer",
  },
  {
    id: 8,
    name: "Michael Brown",
    review: "Highly engaging and well-structured course.",
    role: "Product Manager",
  },
  {
    id: 9,
    name: "Sophia Martinez",
    review: "A must-have course for career development.",
    role: "AI Researcher",
  },
  {
    id: 10,
    name: "Emily Clark",
    review: "I learned so much and gained real-world skills.",
    role: "UX Designer",
  },
  {
    id: 11,
    name: "Michael Brown",
    review: "Highly engaging and well-structured course.",
    role: "Product Manager",
  },
  {
    id: 12,
    name: "Sophia Martinez",
    review: "A must-have course for career development.",
    role: "AI Researcher",
  },
];

const Testimonials = () => {
  const dispatch = useDispatch();

  const { reviews } = useSelector((state) => state.reviews);

  console.log(reviews, "reviews fetched");

  useEffect(() => {
    dispatch(getAllReviews());
  }, []);

  useEffect(() => {
    gsap.to(".group-1", {
      x: "-100%",
      repeat: -1,
      duration: 12,
      ease: "linear",
    });

    gsap.to(".group-2", {
      x: "100%",
      repeat: -1,

      duration: 12,
      ease: "linear",
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Hear From Our Students
        </h2>
        <div className="relative space-y-12">
          <div className="group-1 flex space-x-6">
            {Array.isArray(reviews) &&
              reviews.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-blue-200 p-6 shadow-md rounded-lg w-80 flex-shrink-0"
                >
                  <p className="text-gray-600 text-sm mb-4">
                    "{testimonial.review}"
                  </p>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
                  </div>
                </div>
              ))}
          </div>

          <div className="group-2 flex space-x-6">
            {Array.isArray(reviews) &&
              reviews.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-blue-200 p-6 shadow-md rounded-lg w-80 flex-shrink-0"
                >
                  <p className="text-gray-600 text-sm mb-4">
                    "{testimonial.review}"
                  </p>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
