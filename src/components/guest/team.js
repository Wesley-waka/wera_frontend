import React from "react";

const Team = () => {
  return (
    <>
      <div className="mb-5">
        <dh-component>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                BUILDING TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes of the Organization
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-20 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div role="listitem" className="w-full relative mt-24">
                <div className="rounded overflow-hidden shadow-md theme-blue">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={"/images/lizpic1.jpeg"}
                        alt="Display Picture of Elizabeth"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md rotate-12"
                      />
                    </div>
                  </div>
                  <div className="px-5 mt-16">
                    <h1
                      className="font-bold text-3xl text-center mb-1"
                      style={{ color: "#D8EBFF" }}
                    >
                      Elizabeth Muthusi
                    </h1>
                    <p
                      className="text-gray-800 text-sm text-center"
                      style={{ color: "#D8EBFF" }}
                    >
                      Scrum Master
                    </p>
                    <p className="text-center text-white text-base pt-3 font-normal">
                      The CEO's role in raising a company's corporate IQ is to
                      establish an atmosphere that promotes knowledge sharing
                      and collaboration.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div role="listitem" className="w-full relative mt-24">
                <div className="rounded overflow-hidden shadow-md theme-blue">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={"/images/marcus-pic.jpeg"}
                        alt="Display Picture of Marcus"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1
                      className="font-bold text-3xl text-center mb-1"
                      style={{ color: "#D8EBFF" }}
                    >
                      Marcus Kariuki
                    </h1>
                    <p
                      className="text-gray-800 text-sm text-center"
                      style={{ color: "#D8EBFF" }}
                    >
                      Product Design Head
                    </p>
                    <p className="text-center text-white text-base pt-3 font-normal">
                      The emphasis on innovation and technology in our companies
                      has resulted in a few of them establishing global
                      benchmarks in product design and development.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div role="listitem" className="w-full relative mt-24">
                <div className="rounded overflow-hidden shadow-md theme-blue">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={"/images/alvin-pic.jpeg"}
                        alt="Display Picture of alvin"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1
                      className="font-bold text-3xl text-center mb-1"
                      style={{ color: "#D8EBFF" }}
                    >
                      Alvin Mithamo
                    </h1>
                    <p
                      className="text-gray-800 text-sm text-center"
                      style={{ color: "#D8EBFF" }}
                    >
                      Manager Development
                    </p>
                    <p className="text-center text-white text-base pt-3 font-normal">
                      Our services encompass the assessment and repair of
                      property damage caused by water, fire, smoke, or mold. We
                      can also be a part of the restoration.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                role="listitem"
                className="w-full relative mt-24
                  "
              >
                {/* xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24
                  xl:max-w-sm lg:w-2/5 */}
                <div className="rounded overflow-hidden shadow-md theme-blue">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={"/images/jeff-pic.jpeg"}
                        alt="Display Picture of jeff"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1
                      className="font-bold text-3xl text-center mb-1"
                      style={{ color: "#D8EBFF" }}
                    >
                      Jeff Ndungu
                    </h1>
                    <p
                      className="text-gray-800 text-sm text-center"
                      style={{ color: "#D8EBFF" }}
                    >
                      Product Design Head
                    </p>
                    <p className="text-center text-white text-base pt-3 font-normal">
                      Product designer with interests in immersive computing and
                      XR, political ventures, and emerging technologies. Able to
                      take ideas and give them a life.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div role="listitem" className="w-full relative mt-24">
                <div className="rounded overflow-hidden shadow-md theme-blue">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={"/images/jose-muhlanga.jpeg"}
                        alt="Display Picture of lukas"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1
                      className="font-bold text-3xl text-center mb-1"
                      style={{ color: "#D8EBFF" }}
                    >
                      Jose Muhlanga
                    </h1>
                    <p
                      className="text-gray-800 text-sm text-center"
                      style={{ color: "#D8EBFF" }}
                    >
                      Principal Software Engineer
                    </p>
                    <p className="text-center text-white text-base pt-3 font-normal">
                      An avid open-source developer who loves to be creative and
                      inventive. I have 20 years of experience in the field.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dh-component>
      </div>
    </>
  );
};

export default Team;

