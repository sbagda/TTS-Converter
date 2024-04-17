import bgimage from "../imgaes/bgimage.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="main">
      <div className="page1">
        <img src={bgimage} />
        <div className="page1-content">
          <div className="text">
            <h2>Generative <br />Virtual Voice</h2>
            <p>
              Convert text to speech online for free with our voice generator.
              Create natural voices instantly in any language - perfect for
              video creators, developers, and businesses.
            </p>
          </div>
          <div className="active-area">
            <button className="btn-b">
              <Link to="/speech" className="link">
              Get Started Free <FaArrowRightLong className="icon" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
