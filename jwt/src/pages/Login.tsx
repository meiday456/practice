import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ApiUtil from "../util/ApiUtil";

interface FormValues {
  id: string;
  pw: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const response = await ApiUtil.post<string>("/login", data, {
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
        <form method="POST" onSubmit={handleSubmit(submitHandler)}>
          <div className="form__header">
            <h2>로그인</h2>
          </div>
          <div className="form__body">
            <input
              type="text"
              placeholder={"아이디"}
              {...register("id", {
                required: true,
                minLength: {
                  value: 4,
                  message: "아이디가 너무 짧아요",
                },
              })}
            />
            {errors.id && <span>{errors.id.message}</span>}
            <input
              type="password"
              placeholder={"비밀번호"}
              {...register("pw", {
                required: true,
                minLength: {value: 4, message: "비밀번호가 너무 짧아요"},
              })}
            />
            {errors.pw && <span>{errors.pw.message}</span>}
          </div>
          <div className="form__footer">
            <input className="btn" type="submit" value={"로그인"} />
            <div className="find">
              <ul>
                <li>
                  <a href="#findId">아이디 찾기</a>
                </li>
                <li>
                  <a href="#findPW">비밀번호 찾기</a>
                </li>
              </ul>
            </div>
            <div className="signUp">
              <a href="#findId">회원가입</a>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Login;
