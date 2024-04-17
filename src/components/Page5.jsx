import bgimage from "../imgaes/bgimage.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiBookOpenFill } from "react-icons/pi";
import { MdPauseCircle } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import { BsFillCollectionFill } from "react-icons/bs";
import { IoShare } from "react-icons/io5";
import infovideo from "../video/infovideo.mp4";

const Page5 = () => {
  return (
    <div className="page5">
      <img src={bgimage} />
      <img src={bgimage} className="img2" />
      <div className="page5-content">
        <h2>Long-form voice generation with Text</h2>
        <p>
          Our innovative workflow for directing and editing audio, providing you
          with complete control over the creative process for the production of
          audiobooks, long-form video and web content.{" "}
          <span>
            Learn more about Projects <FaArrowRightLong />
          </span>
        </p>
        <div className="video">
          <video controls src={infovideo} muted loop autoPlay></video>
        </div>
        <div className="info-container">
          <div className="info">
            <h4>
              {" "}
              <PiBookOpenFill /> Convertion Of Whole Book
            </h4>
            <p>
              Import in a variety of formats, including .epub, .txt, and .pdf,
              and convert entire books into audio.
            </p>
          </div>
          <div className="info">
            <h4>
              {" "}
              <MdPauseCircle /> Text-inputted pauses.
            </h4>
            <p>
              Manually adjust the length of pauses between speech segments to
              fine-tune pacing.
            </p>
          </div>
          <div className="info">
            <h4>
              <IoPeopleSharp /> Multiple languages and voices.
            </h4>
            <p>
              Choose from a wide range of languages and voices to create the
              perfect audio experience. options.
            </p>
          </div>
        </div>
        <div className="info-container2">
          <div className="info2">
            <h4>
              {" "}
              <IoPlayCircle /> Regenerate selected fragments
            </h4>
            <p>
              ecreate specific audio fragments if you are not satisfied with the
              output.
            </p>
          </div>
          <div className="info2">
            <h4>
              {" "}
              <BsFillCollectionFill /> Save progress
            </h4>
            <p>Save your progress and return to your project at any time.</p>
          </div>
          <div className="info2">
            <h4>
              <IoShare /> Single click conversion.
            </h4>
            <p>
              Convert your written masterpieces into captivating audiobooks,
              reaching listeners on the go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
