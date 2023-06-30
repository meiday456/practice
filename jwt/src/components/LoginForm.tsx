import {useForm} from "react-hook-form";
import {FormValues} from "../util/types";

interface Props {
  submitHandler: (data: FormValues) => void;
}

export default function LoginForm({submitHandler}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm<FormValues>();

  return (
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
  );
}
