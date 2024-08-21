import Footer from "../components/common/Footer";
import CTAButton from "../components/core/HomePage/Button";
import HighlightText from "../components/core/HomePage/HighlightText";
import Banner from "../assets/Images/Banner.mp4";
import { useRef, useState } from "react";
import deepfakeImage from "../assets/Images/deepfakeimage.png";
import deepfakeAudio from "../assets/Images/deepfakeaudio.png";
import AudioDetectionForm from "./AudioAI";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import NewsSection from "../components/core/HomePage/NewsSection";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div>
      {/*Section1  */}
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-8">
        {/* Section 1 */}
        <div className="flex flex-col justify-center items-center mt-10">
          {/* Texts */}
          <div className="w-full flex justify-center items-center flex-col gap-6">
            <div className="text-4xl text-center w-[85%] font-semibold mt-10">
              Leverage
              <HighlightText text={" AI Kavach "} />
              to Combat Deepfakes and Protect Digital Integrity
            </div>

            <div className="w-[85%] text-center text-lg font-bold text-richblack-300">
              Access Advanced Open-Source Deepfake Detection Models to Secure
              Your Digital Content and Safeguard Against Misinformation.
            </div>
          </div>

          {/* Banner Video */}
          <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 relative">
            <div className="relative">
              <video
                className="shadow-[20px_20px_rgba(255,255,255)]"
                loop
                ref={videoRef}
                onClick={togglePlayPause}
                controls
              >
                <source src={Banner} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center mt-10 gap-6 sm:gap-20">
          {/* left part */}
          <div className="w-full sm:w-1/2 flex flex-col gap-6">
            <div className="text-4xl font-semibold mt-10">
              Detect
              <HighlightText text={" Deepfake Images "} />
              with Cutting-Edge AI Technology
            </div>

            <div className="w-[90%] text-lg font-bold text-richblack-300">
              Explore our deep learning model for detecting deepfake images and
              integrate it into your applications.
            </div>

            <div className="flex flex-row mt-6">
              {/* <CTAButton active={true} linkto={"http://localhost:8501/"}> */}
              <CTAButton
                active={true}
                linkto={"https://aikavach.streamlit.app/"}
              >
                Start Image Detection
              </CTAButton>
            </div>
          </div>

          {/* right part */}
          <div className="w-[80%] sm:w-[45%]">
            <img src={deepfakeImage} alt="" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col sm:flex-row-reverse gap-10 justify-center items-center mt-10">
          {/* left part */}
          <div className="w-full sm:w-1/2 flex flex-col gap-6">
            <div className="text-4xl font-semibold mt-10">
              Identify
              <HighlightText text={" Deepfake Audio "} />
              with Our Advanced AI Detection Model
            </div>

            <div className="w-[90%] text-lg font-bold text-richblack-300">
              Utilize our deep learning model to detect deepfake audio clips and
              prevent the spread of misinformation.
            </div>

            <div className="mt-8">
              <AudioDetectionForm />
            </div>
          </div>

          {/* right part */}
          <div className="mt-5 w-[70%] sm:w-[45%]">
            <img src={deepfakeAudio} alt="" />
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center mt-10 gap-6 sm:gap-20 mb-20">
          {/* left part */}
          <div className="w-full sm:w-1/2 flex flex-col gap-6">
            <div className="text-4xl font-semibold mt-10">
              Combat
              <HighlightText text={" Deepfake Videos "} />
              Using Our State-of-the-Art AI Solutions
            </div>

            <div className="w-[90%] text-lg font-bold text-richblack-300">
              Deploy our deep learning model to identify deepfake videos and
              combat the spread of fake content online.
            </div>

            <div className="flex flex-row mt-6">
              <CTAButton
                active={true}
                linkto={"https://aikavach.streamlit.app/"}
              >
                Launch Video Verification
              </CTAButton>
            </div>
          </div>

          {/* right part */}
          <div className="w-[80%] sm:w-[45%]">
            <img src={deepfakeImage} alt="" />
          </div>
        </div>

        {/* Section 5 */}
        <ExploreMore />
      </div>

      {/* Section 6 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[220px]"></div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Equip yourself to prevent in future
              <HighlightText
                text={" Al Kavach's Deepfake Audio Detection Package."}
              />
            </div>

            <div className="flex flex-col items-start gap-6 lg:w-[40%]">
              <p className="text-[16px]">
                Protect against deepfake audio with our cutting-edge npm
                package. Stay ahead in the fight against misinformation and
                safeguard your audio content.
              </p>
              <CTAButton
                active={true}
                linkto={"https://pypi.org/project/deepfake-image-detection/"}
              >
                <div>Get the Image Detection Package</div>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/*Section 7 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <NewsSection />
      </div>

      {/*Footer */}
      <Footer />
    </div>
  );
};

export default Home;
