import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../assets/auth.svg";
import SmallSpinner from "../Spinner/SmallSpinner";
const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setLoading(true);
    const name = data.name;
    const bio = data.bio;
    const email = data.email;
    const password = data.password;
    const photo = data.photo
    const userInfo = {
      name,
      bio,
      email,
      password,
      photo,
    };
    console.log("infoooooo", userInfo);
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      toast.success("Account Created Successfully");
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <section className="flex justify-evenly items-center py-12">
      <div className="hidden md:block">
        <img src={auth} className="w-96" alt="" />
      </div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="w-full px-6 sm:w-5/12"
      >
        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>

          <input
            type="text"
            {...register("name", { required: "required*" })}
            className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400"
            placeholder="Name"
          />
        </div>
        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>

          <input
            type="text"
            {...register("bio", { required: "required*" })}
            className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400"
            placeholder="Designation / Bio"
          />
        </div>
        <input
          className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400 mt-4"
          type="text"
          {...register("photo", { required: "required*" })}
          placeholder="Profile Picture URL"
        />
        <div className="relative flex items-center mt-6">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>

          <input
            type="email"
            {...register("email", { required: "required*" })}
            className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400"
            placeholder="Email address"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>

          <input
            type="password"
            {...register("password", { required: "required*" })}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:border-blue-400"
            placeholder="Password"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 px-6 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            {loading ? <SmallSpinner /> : "SUBMIT"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
