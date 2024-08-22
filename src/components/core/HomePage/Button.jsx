import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ children, linkto }) => {
  return (
    <Link target="blank" to={linkto}>
      <div
        className="text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 
          bg-blue-25 text-black flex items-center gap-1 group"
      >
        <p>{children}</p>
        <FaArrowRight className="h-3 group-hover:translate-x-1 transition-all duration-200 group-hover:scale-110" />
      </div>
    </Link>
  );
};

export default Button;
