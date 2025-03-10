import React from "react";

import Logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="pt-16 pb-12 text-sm  bg-[#21211f]">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div
              className="col-span-4 md:col-span-8 lg:col-span-4"
              aria-labelledby="footer-header"
            >
              <a
                id="WindUI-5-logo"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap text-s focus:outline-none"
                href="javascript:void(0)"
              >
                <img src={Logo} className="w-20 h-20" />
                GOLDEN MED NOTES
              </a>

              <h1 className="mt-12 text-xl font-bold">Contact Info </h1>

              <h3 className="mt-4">
                {" "}
                Address: BL-5, GR, FR, Santoshpur Co-Op Colony, Kolkata 700066.
              </h3>

              <h3 className="">Phone: +91 8017379245</h3>
              <h3 className="">Email: goldenmednotes@gmail.com</h3>
              <h3 className="">Phone: +91 8017379245</h3>

              <nav
                aria-labelledby="footer-social-links-dark"
                className="col-span-2 text-right md:col-span-4 lg:col-span-6 mt-12"
              >
                <h2 className="sr-only" id="footer-social-links-dark">
                  Social Media Links
                </h2>
                <ul className="flex items-center justify-start gap-4">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 48"
                        height="16"
                        width="16"
                        className="h-4 w-4 shrink-0"
                        role="graphics-symbol"
                        aria-labelledby="title-tb01-dark desc-tb01-dark"
                      >
                        <title id="title-tb01-dark">Icon title</title>
                        <desc id="desc-tb01-dark">
                          A more detailed description of the icon
                        </desc>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M37.2491 3.30238C37.0498 2.18649 36.0513 1.49746 34.9878 1.50395C32.2606 1.5206 29.7927 1.60328 27.6333 1.96988C25.4705 2.33708 23.584 2.99414 22.038 4.18283C18.9929 6.52415 17.4377 10.7872 17.3724 18.3217H11.9552C10.9254 18.3217 9.94522 18.9739 9.74313 20.0674C9.51312 21.312 9.33088 23.311 9.75643 25.8014C9.95527 26.9651 10.9939 27.7324 12.1233 27.7324H17.3703V44.3867C17.3703 45.2169 17.8349 46.0595 18.7834 46.2403C19.5015 46.3773 20.6304 46.5002 22.375 46.5002C24.1168 46.5002 25.347 46.3777 26.1718 46.2437C27.2507 46.0684 27.8777 45.1191 27.8777 44.1186V27.7324H34.9316C36.0256 27.7324 37.0562 27.009 37.2608 25.8665C37.6736 23.5618 37.4742 21.4753 37.2437 20.1563C37.0465 19.0284 36.0444 18.3217 34.9653 18.3217H27.8795C27.8917 16.7111 27.9661 15.4564 28.1447 14.4728C28.341 13.3921 28.6547 12.6875 29.1044 12.2048C29.5502 11.7263 30.1817 11.4104 31.1284 11.2121C32.0832 11.0121 33.3126 10.9408 34.9123 10.9193C36.0128 10.9045 37.0511 10.1718 37.2541 9.01765C37.6718 6.64193 37.4794 4.59202 37.2491 3.30238Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 48"
                        height="16"
                        width="16"
                        className="h-4 w-4 shrink-0"
                        role="graphics-symbol"
                        aria-labelledby="title-tb02-dark desc-tb02-dark"
                      >
                        <title id="title-tb02-dark">Icon title</title>
                        <desc id="desc-tb02-dark">
                          A more detailed description of the icon
                        </desc>
                        <path
                          fill="currentColor"
                          d="M34.7229 4.69819C36.9179 5.13151 38.8231 6.226 39.9574 7.46121L44.8741 7.22772C46.162 7.16656 46.9576 8.61264 46.216 9.66758L42.8041 14.5217C43.7777 35.6815 22.2547 49.0961 4.54954 41.2208C3.75067 40.8654 3.58181 40.0439 3.74682 39.4029C3.91015 38.7685 4.4337 38.1304 5.23631 38.0329C7.74782 37.7279 10.886 36.8951 13.5309 34.8102C11.3351 34.4801 8.87383 33.2203 6.77118 31.5522C4.25179 29.5535 2.11595 26.8651 1.53319 24.2321C1.41942 23.7181 1.60805 23.2504 1.94754 22.9478C2.27981 22.6517 2.75116 22.5146 3.22643 22.6022C4.4998 22.8369 6.44397 23.1705 7.93366 23.3225C7.82715 23.2095 7.71399 23.0872 7.59534 22.9561C6.83881 22.1198 5.85466 20.9171 4.947 19.4528C3.13974 16.5372 1.58717 12.5021 2.86967 8.24191C3.04524 7.65872 3.52191 7.3215 4.02883 7.2399C4.52724 7.15967 5.07712 7.31911 5.46709 7.72851C7.80814 10.1862 13.7896 15.4057 22.914 16.1638C22.5823 14.0277 22.368 9.45707 27.2507 6.17582C29.7236 4.51405 32.4029 4.2402 34.7229 4.69819Z"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/@neetpg.fmge"
                      className="transition-colors duration-300 hover:text-pink-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-product-5-logo"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-5-logo"
              >
                Product
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Customers{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Why us?{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-docs-5-logo"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-docs-5-logo"
              >
                Docs & Help
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Documentation
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Training{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    System status{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Help Center{" "}
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-about-5-logo"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-about-5-logo"
              >
                About us
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    About us{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Leadership{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Blog
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Events{" "}
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-get-in-touch-5-logo"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-get-in-touch-5-logo"
              >
                Get in touch
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Partners{" "}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    {" "}
                    Join research{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="py-4 text-sm bg-black">
        <div className="container px-6 mx-auto">
          <div className="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-2 md:col-span-4 lg:col-span-6">
              Copyright @2025 Golden
            </div>
            <nav
              className="col-span-3 md:col-span-4 lg:col-span-6"
              aria-labelledby="subfooter-links-3-sub"
            >
              <h3 className="sr-only" id="subfooter-links-3-sub">
                Get in touch
              </h3>
              <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                <li className="leading-6">
                  <a
                    href="/terms"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    T&C
                  </a>
                </li>
                <li className="leading-6">
                  <a
                    href="/privacy"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Privacy
                  </a>
                </li>
                <li className="leading-6">
                  <a
                    href="/refund"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Refund
                  </a>
                </li>
                <li className="leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
