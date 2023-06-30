import {SubmitHandler} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import ApiUtil from "../util/ApiUtil";
import {FormValues} from "../util/types";

const CookieLogin = () => {
  const navigate = useNavigate();
  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const response = await ApiUtil.post<string>("/cookie/login", data, {
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
    });
    const {data: message} = response;
    if (message === "ok") {
      navigate("/main");
    }
  };

  return (
    <main className="container">
      <div className="box">
        <LoginForm submitHandler={submitHandler} />
      </div>
    </main>
  );
};
export default CookieLogin;
