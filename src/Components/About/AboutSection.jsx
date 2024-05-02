import React from "react";
import AboutImg from "../../Images/about-4.png";

function AboutSection() {
  return (
    <div className="font-family">
      <div className="lg:px-36 md:px-20 px-5 py-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div>
            <img className="mx-auto w-[450px]" src={AboutImg} alt="" />
          </div>
          <div className="text-lg">
            <div className="text-5xl font-semibold text-[--three-color] pb-5">
              Our Story
            </div>
            <div className="pb-4">
              The dedication and expertise of our digital marketing team shine
              through in the thoughtful design and optimization of this
              platform. Digital marketing professionals benefit from a
              streamlined process that allows them to showcase their skills and
              connect with potential clients effortlessly. On the other hand,
              clients can easily find the perfect match for their projects.
            </div>
            <div>
              Thanks to the platform's intuitive layout and comprehensive
              features, this seamless interaction between digital marketing
              professionals and clients is a testament to our commitment to
              creating a platform that caters to the needs of both parties.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
