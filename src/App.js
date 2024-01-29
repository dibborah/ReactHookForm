import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try{
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      // eslint-disable-next-line no-unreachable
      console.log(data);      
    }catch(error){
      setError("root",{
        message:"This email is already taken"
      })

    }
  };

  return (
    <form
      className="flex flex-col m-3 p-5 bg-slate-950"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="border border-red-500 m-1"
        {...register("email", {
          required: "Email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @ symbol";
            }
            return true;
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <input
        className="border border-red-500 m-1"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have atleast 8 characters",
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      
      <button className="border border-red-500 m-1 text-white " type="submit">
        {isSubmitting ? "...Loading" : "Submitted"}
      </button>
      {errors.root && (
        <div className="text-red-500">{errors.root.message}</div>
      )}
    </form>
  );
};

export default App;
