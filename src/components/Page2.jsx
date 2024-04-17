import bgimage from "../imgaes/bgimage.png";
import { RiVideoAddFill } from "react-icons/ri";
import { MdAudiotrack } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

import { FaArrowRightLong } from "react-icons/fa6";

const Page2 = () => {
  return (
    <div className="page2">
      <img src={bgimage} />
      <div className="page2-content">
        <h2>Natural Text to Speech & Voice Generator</h2>
        <p>
          Let your content go beyond text with our realistic voices. Generate
          high-quality spoken audio in any voice, style, and language. Our voice
          generator is powered by an virtual model that renders human intonation
          and inflections with unrivaled fidelity, adjusting the delivery based
          on context.{" "}
          <span>
            Learn SpeakEasy Functionality<FaArrowRightLong />
          </span>
        </p>
        <div className="card-container">
          <div className="card">
            <h4>
              Video
              <RiVideoAddFill className="video-icon" />
            </h4>
            <p>
              A text-to-speech converter, equipped with multi-language dubbing
              capabilities, revolutionizes the way video content is localized
              and shared across diverse audiences. This powerful tool seamlessly
              transforms written text into lifelike speech in multiple
              languages, allowing creators to effortlessly dub their videos into
              various linguistic versions.
            </p>
          </div>
          <div className="card">
            <h4>
              Audiobooks
              <MdAudiotrack className="video-icon" />
            </h4>
            <p>
              Bring stories to life by converting long-form content to engaging
              audio. Our virtual voice generator lets you create audiobooks with a
              natural voice and tone, making it the perfect tool for authors and
              publishers.
            </p>
          </div>
          <div className="card">
            <h4>
              AI Chatbots
              <IoMdChatbubbles className="video-icon" />
            </h4>
            <p>
              Create a more natural and engaging experience for your users with
              our virtual voice generator. Our tool lets you create virtual chatbots with
              human-like voices.
            </p>
          </div>
          <div className="card">
            <h4>
              Gaming
              <IoGameController className="video-icon" />
            </h4>
            <p>
              Immerse your players in rich, dynamic worlds with our virtual voice
              generator. From captivating NPC dialogue to real-time narration,
              our tool brings your games audio to the next level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
