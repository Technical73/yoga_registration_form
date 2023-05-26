import image from "../src/assets/Screen Shot 2020-04-21 at 13.54.31.5e9ed0fad48469.05253320.png";
import { useAddContactsMutation } from "./Features/apiSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import schema from "../src/validation/Schema";

function App() {
  {
    /* useForm Starts from over here */
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  {
    /*  useForm Ends over here */
  }

  const [getNewData] = useAddContactsMutation();

  {
    /* onSubmit Function Starts from over here */
  }
  const onSubmit = (data) => {
    getNewData(data);
    reset();
    toast.success("You have successfully Registered");
  };

  {
    /* onSubmit Function Ends over here */
  }

  {
    /* handleRemove Function Starts from over here */
  }
  const handleRemove = () => {
    reset();
  };

  {
    /* handleRemove Function Ends over here */
  }

  return (
    <>
      {/* Main Container Starts from over here */}
      <div className="main_container">
        {/* Form Starts from over here */}
        <form className="form_group" onSubmit={handleSubmit(onSubmit)}>
          {/* Header Starts from over here */}
          <div className="header">
            <h2>
              Online Yoga Registration
              <br />
              Form
            </h2>
            <img
              src={image}
              alt="YogaImage"
              className="w-28 h-28  align-baseline "
            ></img>
          </div>
          {/* Header Ends over here */}

          {/* Grid layout Starts from over here */}
          <div className="layout">
            {/* fullName Input Field starts */}
            <div className="mb-2 w-full">
              <label
                className="font-bold block mb-2 text-gray-700 text-sm"
                htmlFor="fullName"
              >
                FullName{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </label>
              <input
                type="text"
                name="fullName"
                {...register("fullName")}
                placeholder="Enter Your FullName"
                className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
              />
              <p className="text-red-700 font-bold block text-sm">
                {errors.fullName?.message}
              </p>
            </div>
            {/* fullName Input Field Ends */}
            {/* Email Id Input Field starts */}
            <div className="mb-3 w-full">
              <label
                className="font-bold block mb-2 text-gray-700 text-sm"
                htmlFor="emailId"
              >
                Email Id{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </label>
              <input
                type="email"
                name="email_id"
                {...register("email_id")}
                placeholder="Enter Your Email ID"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailId"
              />

              <p className="text-red-700 font-bold block text-sm">
                {errors.email_id?.message}
              </p>
            </div>
            {/* Email Id Input Field Ends */}
            {/* Phone Number Input Field starts */}
            <div className="mb-3 w-full">
              <label
                className="font-bold block mb-2 text-gray-700 text-sm"
                htmlFor="phoneNumber"
              >
                Phone Number{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </label>
              <input
                type="number"
                name="phone_number"
                {...register("phone_number")}
                placeholder="Enter Your Phone Number"
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
              />

              <p className="text-red-700 font-bold block text-sm">
                {errors.phone_number?.message}
              </p>
            </div>
            {/* Phone Number Input Field Ends */}
            {/* Date of Birth Input Field starts */}
            <div className="mb-3 w-full">
              <label
                className="font-bold block mb-2 text-gray-700 text-sm"
                htmlFor="dateOfBirth"
              >
                Date of Birth{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </label>
              <input
                type="date"
                name="date_of_birth"
                {...register("date_of_birth")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth"
              />

              <p className="text-red-700 font-bold block text-sm">
                {errors.date_of_birth?.message}
              </p>
            </div>
            {/* Date of Birth Input Field Ends */}
            {/* Gender Input Field starts */}
            <div className="flex flex-col items-start justify-center">
              <legend className="font-bold block mb-2 text-gray-700 text-sm">
                Gender{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </legend>
              <div className="mb-[0.125rem]  min-h-[1.5rem] ">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  {...register("gender")}
                  className="shadow  border mr-1 bg-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                ></input>
                <label
                  htmlFor="gender"
                  className="font-bold   text-gray-700 text-sm"
                >
                  Male
                </label>
              </div>
              <div className="   min-h-[1.5rem] ">
                <input
                  type="radio"
                  {...register("gender")}
                  name="gender"
                  value="female"
                  className="shadow  border mr-1 bg-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                ></input>
                <label
                  htmlFor="gender"
                  className="font-bold   text-gray-700 text-sm"
                >
                  Female
                </label>
              </div>

              <p className="text-red-700 font-bold block text-sm">
                {errors.gender?.message}
              </p>
            </div>
            {/* Gender Input Field Ends */}
            {/* Schedule Preference Input Field starts */}
            <div className="mb-3">
              <label
                htmlFor="schedulePreference"
                className="font-bold block mb-2 text-gray-700 text-sm"
              >
                {" "}
                Schedule Preference{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </label>
              <select
                id="schedulePreference"
                name="schedule_preference"
                {...register("schedule_preference")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-Select Your Session--</option>
                <option value="Morning Session 9:00AM to 11:00AM">
                  Morning Session 9:00AM to 11:00AM
                </option>
                <option value="Morning Session 11:00AM to 1:00PM">
                  Morning Session 11:00AM to 1:00PM
                </option>
                <option value="Morning Session 1:00PM to 2:30PM">
                  AfterNoon Session 1:00PM to 2:30PM
                </option>
                <option value="Morning Session 2:30PM to 9:30PM">
                  Evening Session 2:30PM to 9:30PM
                </option>
              </select>

              <p className="text-red-700 font-bold block text-sm">
                {errors.schedule_preference?.message}
              </p>
            </div>
            {/* Schedule Preference Input Field Ends */}
            {/* Class Level Input Field starts */}
            <div className="mb-3">
              <label
                htmlFor="ClassLevel"
                className="font-bold block mb-2 text-gray-700 text-sm"
              >
                {" "}
                Class Level{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </label>
              <select
                id="ClassLevel"
                {...register("class_level")}
                name="class_level"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-Select Your Class Level--</option>
                <option value="Level - 1 Beginner Class">
                  Level - 1 Beginner Class
                </option>
                <option value="Level - 2 Intermediate Class">
                  Level - 2 Intermediate Class
                </option>
                <option value=" Level - 3 Advanced Class">
                  Level - 3 Advanced Class
                </option>
                <option value="All Level Class">All Level Class</option>
              </select>

              <p className="text-red-700 font-bold block text-sm">
                {errors.class_level?.message}
              </p>
            </div>
            {/* Class Level Input Field starts */}
            {/* Session Packages Input Field starts */}
            <div className="mb-3">
              <label
                htmlFor="sessionPackages"
                className="font-bold block mb-2 text-gray-700 text-sm"
              >
                {" "}
                Session Packages{" "}
                <span className="text-red-700 align-top text-sm font-bold ">
                  *
                </span>
              </label>
              <select
                id="sessionPackages"
                name="session_packages"
                {...register("session_packages")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-Select Your Session Packages--</option>
                <option value="Unlimited Monthly $150.00 for each month">
                  Unlimited Monthly ($150.00 for each month)
                </option>
                <option value="10 Sessions $90.00 for each month">
                  10 Sessions ($90.00 for each month)
                </option>
                <option value="6 sessions $50.00 for each month">
                  6 Sessions ($50.00 for each month)
                </option>
                <option value="3 sessions $30 for each month">
                  3 Sessions ($30 for each month)
                </option>
              </select>

              <p className="text-red-700 font-bold block text-sm">
                {errors.session_packages?.message}
              </p>
            </div>
            {/* Session Packages Input Field Ends */}
          </div>

          {/* Grid layout Ends over here */}
          {/* Submit and Cancel Starts */}
          <div className="flex justify-start items-center mb-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 mr-2 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isDirty && !isValid}
            >
              submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleRemove}
              type="button"
            >
              Cancel
            </button>
          </div>
          {/* Submit and Cancel Ends */}
        </form>

        {/* Form Ends over here */}
      </div>

      {/* Main Container Ends over here */}
    </>
  );
}

export default App;
