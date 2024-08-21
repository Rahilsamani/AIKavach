import signupImg from "../assets/Images/login.webp";
import Template from "../components/core/Auth/Template";

function Signup() {
  return (
    <Template
      title="Join the Frontline of Cybersecurity with AI Kavach"
      description1="Step into the future with AI Kavach, where protection meets innovation. "
      description2="Safeguard your world and become a pioneer in the realm of cybersecurity."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
