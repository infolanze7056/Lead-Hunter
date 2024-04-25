import React from "react";
import { useState } from "react";
import { SiSemanticweb } from "react-icons/si";
import { MdLeaderboard } from "react-icons/md";
import { GoTools } from "react-icons/go";
import { FaRegThumbsUp } from "react-icons/fa6";
import { MdGppGood } from "react-icons/md";

function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  function rotateIcon(iconId) {
    const iconSpan = document.getElementById(iconId);

    if (iconSpan.classList.contains("rotate-0")) {
      iconSpan.classList.remove("rotate-0");
      iconSpan.classList.add("rotate-180");
    } else {
      iconSpan.classList.remove("rotate-180");
      iconSpan.classList.add("rotate-0");
    }
  }

  return (
    <div className="font-family bg-[--main-color]">
      <div className="pt-16 pb-10">
        <div className="text-center text-4xl font-bold mx-auto lg:w-[500px]">
          You have questions and we have answers
        </div>
        <div>
          <div className="lg:px-56 md:px-16 px-4 lg:py-10 md:py-10 py-10">
            <div id="accordionFlushExample">
              {/* First Accordion Item */}
              <div className="rounded-lg shadow-lg border mb-7 bg-white border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                <h2 className="mb-0" id="flush-headingOne">
                  <button
                    className="group relative flex w-full items-center rounded-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                    type="button"
                    onClick={() => {
                      toggleAccordion(0);
                      rotateIcon("iconSpanOne");
                    }}
                    aria-expanded={activeAccordion === 0 ? "true" : "false"}
                    aria-controls="flush-collapseOne"
                  >
                    <div className="flex items-center">
                      <div>
                        <SiSemanticweb className="bg-[--second-color] text-[--three-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                      </div>
                      <div className="text-xl font-semibold ps-5 pe-7">
                        Is LeadHunter Right for Your Digital Marketing Needs?
                      </div>
                    </div>
                    <span
                      className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-180 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                      id="iconSpanOne"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        id="arrowIconOne"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className={`px-5 pt-0 py-4 ${
                    activeAccordion === 0 ? "!visible" : "hidden"
                  } border-0`}
                  aria-labelledby="flush-headingOne"
                >
                  <div className="text-sm">
                    LeadHunter is the ideal solution for businesses and
                    professionals in the digital marketing industry. Whether
                    you're a web design agency, freelancer, or marketing
                    consultant, LeadHunter can help you quickly grow your
                    business and clientele. Our platform provides you with the
                    tools and resources you need to succeed in the competitive
                    digital marketing landscape.
                  </div>
                </div>
              </div>

              {/* Second Accordion Item */}
              <div className="rounded-lg border mb-7 shadow-lg bg-white border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                <h2 className="mb-0" id="flush-headingTwo">
                  <button
                    className="group relative flex w-full items-center rounded-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                    type="button"
                    onClick={() => {
                      toggleAccordion(1);
                      rotateIcon("iconSpanTwo");
                    }}
                    aria-expanded={activeAccordion === 1 ? "true" : "false"}
                    aria-controls="flush-collapseTwo"
                  >
                    <div className="flex items-center">
                      <div>
                        <MdLeaderboard className="bg-[--second-color] text-[--three-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                      </div>
                      <div className="text-xl font-semibold ps-5">
                        How Do We Find Opportunities for You?
                      </div>
                    </div>
                    <span
                      className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                      id="iconSpanTwo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        id="arrowIconTwo"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className={`px-5 pt-0 py-4 ${
                    activeAccordion === 1 ? "!visible" : "hidden"
                  } border-0`}
                  aria-labelledby="flush-headingTwo"
                >
                  <div className="text-sm">
                    All of our opportunities are carefully curated by our team
                    of digital marketing experts. We search the web to find
                    businesses that are in need of digital marketing services.
                    Each opportunity undergoes a rigorous vetting process to
                    ensure quality and relevance before being provided to you.
                  </div>
                </div>
              </div>

              {/* Third Accordion Item */}
              <div className="rounded-lg border mb-7 shadow-lg bg-white border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                <h2 className="mb-0" id="flush-headingThree">
                  <button
                    className="group relative flex w-full items-center rounded-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                    type="button"
                    onClick={() => {
                      toggleAccordion(2);
                      rotateIcon("iconSpanThree");
                    }}
                    aria-expanded={activeAccordion === 2 ? "true" : "false"}
                    aria-controls="flush-collapseThree"
                  >
                    <div className="flex items-center">
                      <div>
                        <GoTools className="bg-[--second-color] text-[--three-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                      </div>
                      <div className="text-xl font-semibold ps-5">
                        How is LeadHunter Different from Other Digital Marketing
                        Tools?
                      </div>
                    </div>
                    <span
                      className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                      id="iconSpanThree"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        id="arrowIconThree"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className={`px-5 pt-0 py-4 ${
                    activeAccordion === 2 ? "!visible" : "hidden"
                  } border-0`}
                  aria-labelledby="flush-headingThree"
                >
                  <div className="text-sm">
                    No, LeadHunter is not like other digital marketing tools
                    that rely on outdated data and generic leads. All of our
                    leads are carefully curated from extensive online research
                    and verification. We ensure that our leads are fresh,
                    accurate, and exclusive to LeadHunter, so you won't find
                    them anywhere else.
                  </div>
                </div>
              </div>
              {/* four Accordion Item */}
              <div className="rounded-lg border mb-7 bg-white shadow-lg border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                <h2 className="mb-0" id="flush-headingFour">
                  <button
                    className="group relative flex w-full items-center rounded-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                    type="button"
                    onClick={() => {
                      toggleAccordion(3);
                      rotateIcon("iconSpanFour");
                    }}
                    aria-expanded={activeAccordion === 3 ? "true" : "false"}
                    aria-controls="flush-collapseFour"
                  >
                    <div className="flex items-center">
                      <div>
                        <FaRegThumbsUp className="bg-[--second-color] text-[--three-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                      </div>
                      <div className="text-xl font-semibold ps-5">
                        Is LeadHunter Suitable for Freelancers?
                      </div>
                    </div>
                    <span
                      className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                      id="iconSpanFour"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        id="arrowIconFour"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className={`px-5 pt-0 py-4 ${
                    activeAccordion === 3 ? "!visible" : "hidden"
                  } border-0`}
                  aria-labelledby="flush-headingFour"
                >
                  <div className="text-sm">
                    Absolutely! LeadHunter is perfect for freelancers looking to
                    grow their business. Our leads come from a variety of
                    industries, making it easy for you to find your next client.
                    Whether you're just starting out or looking to expand your
                    freelancing business into a full-fledged agency, LeadHunter
                    has the leads you need to succeed.
                  </div>
                </div>
              </div>
              {/* five Accordion Item */}
              <div className="rounded-lg border bg-white shadow-lg border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                <h2 className="mb-0" id="flush-headingFour">
                  <button
                    className="group relative flex w-full items-center rounded-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor:none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                    type="button"
                    onClick={() => {
                      toggleAccordion(4);
                      rotateIcon("iconSpanFive");
                    }}
                    aria-expanded={activeAccordion === 4 ? "true" : "false"}
                    aria-controls="flush-collapseFive"
                  >
                    <div className="flex items-center">
                      <div>
                        <MdGppGood className="bg-[--second-color] text-[--three-color] text-7xl p-5 rounded-lg md:mx-0 lg:mx-0 mx-auto" />
                      </div>
                      <div className="text-xl font-semibold ps-5">
                        How Does LeadHunter Work?
                      </div>
                    </div>
                    <span
                      className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-180 motion-reduce:transition-none"
                      id="iconSpanFive"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        id="arrowIconFive"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className={`px-5 pt-0 py-4 ${
                    activeAccordion === 4 ? "!visible" : "hidden"
                  } border-0`}
                  aria-labelledby="flush-headingFour"
                >
                  <div className="text-sm">
                    Getting started with LeadHunter is easy! Simply log in to
                    the LeadHunter dashboard and start finding the perfect leads
                    for your digital marketing business. Once you've found a
                    lead that fits your criteria, you can reach out to them
                    directly. We provide verified email addresses, phone
                    numbers, social contacts, and more to help you connect with
                    potential clients effectively.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
