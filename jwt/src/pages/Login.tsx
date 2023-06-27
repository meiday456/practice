import axios from "axios";
import {SubmitHandler, useForm} from "react-hook-form";

interface FormValues {
  id: string;
  pw: string;
}

const Login = () => {
  const {register, handleSubmit, reset, watch} = useForm<FormValues>();
  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    const result = await axios.post("http://localhost:3001/login", data, {
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      withCredentials: true,
    });
    // .then((response) => {
    //   console.log(response);
    // });
    console.log("result", result);
  };

  return (
    <main className="container">
      <div className="box">
        <form method="POST" action="http://localohost:3001/login" onSubmit={handleSubmit(submitHandler)}>
          <div className="form__header">
            <h2>로그인</h2>
          </div>
          <div className="form__body">
            <input
              type="text"
              placeholder={"아이디"}
              {...register("id", {
                minLength: 4,
              })}
            />
            <input type="password" placeholder={"비밀번호"} {...register("pw", {minLength: 4})} />
          </div>
          <div className="form__footer">
            <input
              className="btn"
              type="submit"
              value={"로그인"}
              // onClick={submitHandler}
            />
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
