import AboutUs from "../assets/Images/founding_story.jpeg";

import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import HighlightText from "../components/core/HomePage/HighlightText";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div>
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-start lg:text-center text-white">
            <header className="mx-auto pt-16 pb-10 text-3xl font-semibold lg:w-[95%]">
              Welcome to
              <HighlightText text={" AI Kavach "} />, where innovation and
              security converge to combat the evolving threats of the digital
              age.
              <p className="mx-auto mt-3 text-start lg:text-center text-base font-medium text-richblack-300 lg:w-[85%]">
                At AI Kavach, we are dedicated to harnessing cutting-edge
                artificial intelligence to protect individuals, organizations,
                and nations from the growing dangers of deepfake technology. Our
                mission is to provide robust solutions that secure digital
                identities, safeguard information, and maintain the integrity of
                communications in an increasingly complex world.
              </p>
            </header>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-10 flex lg:w-[50%] flex-col gap-10">
              <div className="text-4xl font-semibold lg:w-[70%]">
                <HighlightText text={"Our Founding Story"} />
              </div>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                AI Kavach was founded with a singular purpose: to create a
                powerful shield against the rising tide of deepfake threats. Our
                journey began with a team of visionaries who recognized the
                urgent need for technological defenses that could adapt to
                rapidly changing digital landscapes. Through perseverance and
                innovation, we have developed AI solutions that not only detect
                but also mitigate the impact of deepfake technologies, ensuring
                the safety and security of our clients.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                From our inception, AI Kavach has grown into a trusted partner
                for governments, businesses, and individuals. Our commitment to
                excellence and our passion for security drive us to continually
                push the boundaries of what's possible, as we work to protect
                our world from the ever-present dangers of digital deception.
              </p>
            </div>
            <div className="w-[60%] lg:w-[40%]">
              <img src={AboutUs} alt="aboutus_image" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            {/* Our vision and mission */}
            <div className="my-5 flex lg:w-[40%] flex-col gap-10">
              <div className="text-4xl font-semibold lg:w-[70%]">
                <HighlightText text={"Our Vision"} />
              </div>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                At AI Kavach, we envision a future where artificial intelligence
                serves as the frontline defense against the most sophisticated
                digital threats. Our goal is to create a secure digital
                environment where individuals, businesses, and nations can
                thrive without the fear of misinformation, identity theft, or
                cyber warfare.
              </p>
            </div>
            <div className="my-5 flex lg:w-[40%] flex-col gap-10">
              <div className="text-4xl font-semibold lg:w-[70%]">
                <HighlightText text={"Our Mission"} />
              </div>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                AI Kavach's mission is to develop and deploy state-of-the-art AI
                solutions that provide comprehensive protection against deepfake
                technology and other emerging digital threats. By fostering
                innovation, collaboration, and a deep commitment to security, we
                strive to build a safer, more secure world for all.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto my-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <ContactFormSection />
      </section>
      <Footer />
    </div>
  );
};

export default About;
