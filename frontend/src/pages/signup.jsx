import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      await authService.signup(formData);

      alert("Signup Successful");

      navigate("/login");

    } catch (error) {

      alert("Signup Failed");

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#081028]">

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 backdrop-blur-lg p-10 rounded-3xl w-[400px]"
      >

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mb-5 p-4 rounded-2xl bg-[#111827] text-white"
        />

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
          Signup
        </button>

        <p className="text-gray-400 mt-5 text-center">
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2"
          >
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Signup;