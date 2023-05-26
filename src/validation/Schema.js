import * as yup from "yup";

{
  /* Schema Validation Starts from over here */
}
const schema = yup.object().shape({
  fullName: yup.string().required("FullName is Required"),
  email_id: yup
    .string()
    .email("Please Enter the Valid Email Id")
    .required("Email Id is Required"),

  phone_number: yup.string().required("Phone Number is Required").max(10),

  date_of_birth: yup.string().required("Date of Birth is Required"),
  gender: yup.string().required("Gender is Required"),
  schedule_preference: yup
    .string()
    .required("Please Select the Schedule Preference "),
  class_level: yup.string().required("Please select the Class Level"),
  session_packages: yup.string().required("Please select the Session Package"),
});
export default schema;

{
  /* Schema Validation Ends over here */
}
