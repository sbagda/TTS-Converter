import bgimage from "../imgaes/bgimage.png";
import post1 from "../imgaes/post1.png";
import post2 from "../imgaes/post2.png";
import post3 from "../imgaes/post3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Page4 = () => {
  return (
    <div className="page4">
      <img src={bgimage} className="b-img" />
      <div className="page4-content">
        <h2>Powered by Text to Speech API</h2>
        <p>
          Our text-to-speech web app utilizes a robust API for seamless
          integration, offering advanced functionalities for converting text
          into natural-sounding speech. With customizable options, it ensures a
          tailored experience for users, facilitating effortless synthesis of
          written content into audible formats, enhancing accessibility and user
          engagement.{" "}
          <span>
            Learn More About TTS API <FaArrowRightLong />
          </span>
        </p>
        <div className="cards">
          <div className="post1">
            <img src={post1} />
          </div>
          <div className="post2">
            <img src={post2} />
          </div>
          <div className="post3">
            <img src={post3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
