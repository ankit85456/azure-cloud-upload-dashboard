import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await authService.login(formData);

      localStorage.setItem("token", data.token);

      alert("Login Successful");

      window.location.href = "/";

    } catch (error) {

      alert("Invalid Credentials");

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#081028]">

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 backdrop-blur-lg p-10 rounded-3xl w-[400px]"
      >

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-5 p-4 rounded-2xl bg-[#111827] text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-6 p-4 rounded-2xl bg-[#111827] text-white"
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-2xl font-bold text-white"
        >
          Login
        </button>

        <p className="text-gray-400 mt-5 text-center">
          Don't have an account?

          <Link
            to="/signup"
            className="text-cyan-400 ml-2"
          >
            Signup
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;