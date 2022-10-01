import { useState } from "react";
import glexLoginIcon from "../assets/img/glex-login-icon.svg";
import { PasswordHide, PasswordShow } from "../assets/img/icons";
import Button from "../components/UI/Button";
import AuthService from "../services/auth.service";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    AuthService.login(email, password).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="flex justify-center">
      <div className="text-center w-[552px] my-[120px] px-[96px] py-[56px] border-[1px] border-main-stroke rounded-[12px]">
        <img src={glexLoginIcon} alt="Glex Login" className="mx-auto" />
        <h2 className="font-m-h-semibold text-[28px] text-main-text leading-[34px] mt-[24px] mb-[48px]">
          Şəxsi kabinetə giriş
        </h2>
        <form autoComplete="off" onSubmit={onSubmit}>
          <div className="relative">
            <input
              id="email"
              type="text"
              placeholder=" "
              className="form__input"
              onChange={onChange}
            />
            <label htmlFor="email">E-mailinizi daxil edin</label>
          </div>
          <div className="relative">
            <input
              id="password"
              type={!showPassword ? "password" : "text"}
              placeholder=" "
              className="form__input !m-0"
              onChange={onChange}
            />
            <label htmlFor="password">Şifrəni daxil edin</label>
            <div
              onClick={() => setShowPassword((prevState) => !prevState)}
              className="absolute top-0 right-0 p-[18px] opacity-40 cursor-pointer"
            >
              {!showPassword ? <PasswordShow /> : <PasswordHide />}
            </div>
          </div>
          <a
            href="#"
            className="inline-block font-m-h-regular text-[14px] hover:underline leading-[18px] mt-[12px] mb-[32px]"
          >
            Şifrəni unutmusunuz?
          </a>
          <button type="submit">Daxil ol</button>
          {/*<Button type="filled" style="!py-[18px] hover:contrast-125">*/}
          {/*  Daxil ol*/}
          {/*</Button>*/}
          <div className="relative font-m-h-regular text-[14px] leading-[18px] mt-[24px] after:block after:w-full after:h-[1px] after:bg-main-stroke after:absolute after:top-[50%]">
            <p className="relative bg-white mx-[40px] z-10">
              <span>Hesabınız yoxdur? </span>
              <a href="#" className="inline-block underline">
                Qeydiyyatdan keçin
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
