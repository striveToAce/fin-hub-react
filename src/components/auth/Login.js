import { useFormik } from "formik";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../utils/formValidation";
import CustomInputs from "./commonInputs";
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema(),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="card shadow-xl w-11/12 sm:w-3/6 lg:w-2/6">
          <div className="card-body">
            <div className="font-semibold text-purple-500 text-xl">
              Welcome Back!
            </div>
            <div className="flex flex-col gap-4">
              <CustomInputs
                isSvg={true}
                placeholder="Username"
                formik={formik}
                name="username"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                }
              />
              <CustomInputs
                isSvg={true}
                type="password"
                placeholder="*******"
                formik={formik}
                name="password"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
            <div className="text-center mt-2">
              <button class="btn btn-primary">Login</button>
            </div>
            <div className="text-blue-500" onClick={() => navigate("/signup")}>
              <span className="cursor-pointer">Signup</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
