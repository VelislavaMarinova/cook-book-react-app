import * as yup from 'yup';

const signupSchema = yup.object().shape({
  username: yup.string().required("Please enter username"),
  email: yup.string().email("Please enter a valid email address!").required("Please enter email address!"),
  password: yup.string().min(4).max(10).required("Please enter password!"),
  confirmPass: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match!").required("Please repeat password!")
});

export default signupSchema;