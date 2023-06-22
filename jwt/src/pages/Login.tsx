import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  example: string;
  exampleRequired: string;
  example3: string;
}

const Login = () => {
  //사용할 form data들을 정의 하고 <>전달
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  console.log(errors);

  return (
    // "handleSubmit"은 "onSubmit"을 호출하기 전에 입력 내용을 확인
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 입력 명칭을 useForm hook에 등록 */}
      <input {...register("example")} />
      {/* register 부분에서 required options를 전달하여 설정을 강제할수 있는듯 */}
      {/* required: Message | ValidationRule<boolean>; 필요 메세지를 전달 할 수 있다. */}
      <input {...register("exampleRequired", { required: "필요해" })} />
      {errors.exampleRequired && <span>{errors.exampleRequired.message}</span>}

      {/* 다른 값들은 대부분 value, message obj 타입으로 전달이 가능할 것이다. */}
      <input {...register("example3", { required: true, minLength: { value: 4, message: "너무 짧아" } })} />
      {errors.example3 && <span>This field is required and {errors.example3.message}</span>}
      {/* errors 는 실제 submit 을 수행하고 통과되지않은 것들이 나오는 듯하다. */}

      <input type="submit" />
    </form>
  );
};

export default Login;
