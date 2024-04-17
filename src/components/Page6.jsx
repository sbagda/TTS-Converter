import bgimage from "../imgaes/bgimage.png";

import { MdBugReport } from "react-icons/md";

const Page6 = () => {
  return (
    <div className="page6">
      <img src={bgimage} />
      <div className="page6-content">
        <h2>About SpeakEasy</h2>
        <p>
          SpeakEasy is an innovative text-to-speech converter designed to
          revolutionize how we interact with written content. With its intuitive
          interface and cutting-edge technology, SpeakEasy transforms text into
          lifelike speech, offering unparalleled clarity and naturalness.
          Whether for accessibility or convenience, SpeakEasy delivers a
          seamless audio experience for all users.
        </p>
        <div className="button">
          <button>
            Speech Classifier <MdBugReport className="Icon"/>
          </button>
          <button>
            Voice Changing Guide <MdBugReport  className="Icon"/>
          </button>
          <button>
            Report <MdBugReport  className="Icon"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page6;
