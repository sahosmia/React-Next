import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await loginWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/home");
  };
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Login</h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="my-1">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email Address is required" })}
            placeholder="Email address"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password will be minimum 8",
              },
            })}
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
          {errors.password && <span>{errors.password?.message}</span>}
        </div>
        <div>
          <button
            className="bg-black text-white p-1 rounded-md mx-2"
            type="submit"
          >
            Login
          </button>

          <button
            type="button"
            className="bg-blue-500 text-white p-1 rounded-md"
            onClick={handleSocialLogin}
          >
            Login With Google
          </button>
        </div>
      </form>
      <p className="my-2">
        No Account?
        <NavLink to="/register" className="underline">
          Register
        </NavLink>
      </p>
      <p className="my-2">
        Forgot Password?
        <NavLink to="/reset" className="underline">
          Reset Your Password
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
