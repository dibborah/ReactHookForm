import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col m-3 p-5 bg-slate-950" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border border-red-500 m-1"
        {...register("email", {
          required: "Email is required",
          validate: (value) => value.includes("@"),
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && <div className="text-red-500">{errors.email.message}</div>}
      <input
        className="border border-red-500 m-1"
        {...register("password", {
          required: "Password is required",
          minLength: 8,
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <div className="text-red-500">{errors.password.message}</div>}
      <button className="border border-red-500 m-1 text-white " type="submit">Submit</button>
    </form>
  );
};

export default App;
