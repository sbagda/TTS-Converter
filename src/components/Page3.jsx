import bgimage from "../imgaes/bgimage.png";
import introvideo from "../video/introvideo.mp4";

import { FaArrowRightLong } from "react-icons/fa6";

const Page3 = () => {
  return (
    <div className="page3">
      <img src={bgimage} />
      <img src={bgimage} className="img2" />
      <div className="page3-content">
        <h2>SpeakEasy Dubbing Studio</h2>
        <p>
          Localize videos with precise control over transcript, translation,
          timing, and more. Create a perfect voiceover in any language, with any
          voice, in minutes{" "}
          <span>
            Explore SpeakEasy Dubbing Studio <FaArrowRightLong />
          </span>
        </p>
        <div className="video">
          <video controls muted autoPlay loop src={introvideo}>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Page3;
