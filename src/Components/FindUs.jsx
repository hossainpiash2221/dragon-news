import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On </h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn justify-start join-item"><BsTwitter></BsTwitter> Twiter</button>
        <button className="btn justify-start join-item"><FaInstagram></FaInstagram> Instragram</button>
      </div>
    </div>
  );
};

export default FindUs;
