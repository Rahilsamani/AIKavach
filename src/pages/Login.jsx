import loginImg from "../assets/Images/login.webp";
import Template from "../components/core/Auth/Template";

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back to AI Kavach"
      description1="Fortify your digital presence with AI Kavach. "
      description2="Stay secure, stay protected, and lead the charge in the world of cybersecurity."
      image={loginImg}
      formtype="login"
    />
  );
}

export default Login;
