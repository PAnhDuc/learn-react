import {FcGoogle} from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/utils";
export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="window d-flex align-items-center justify-content-center">
      <div className="login-body d-flex">
        <div className="formlogin-container">
          <div className="title-login">Login</div>
          <div className="title-desc">
            Doesn't have account yet? <a>Sign up!</a>
          </div>

          <div className="mt-4">
            <label for="input-user" class="form-label">
              User Name or Email
            </label>
            <input type="text" id="input-user" class="form-control" />
            <label for="input-password" class="form-label">
              Password
            </label>
            <input type="password" id="input-password" class="form-control" />
            <div className="mt-2">
              <input type="checkbox" /> <span className="ms-2">Remember me!</span>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn  mt-3" style={{background:'#DCC6F9', width: '100%', fontSize: 16, fontWeight: 600}}>Login</button>
            </div>

            <div className="d-flex">
              <hr className="w-100" /><div className="mx-1" style={{whiteSpace: 'nowrap'}}>or login with</div><hr className="w-100" />
            </div>

            <div className="d-flex">
              <div className="w-50">
                <button className="btn w-100 social-btn"><FcGoogle /> Google</button>
              </div>
              <div className="w-50 ms-1">
                <button className="btn w-100 social-btn"><FaFacebookF /> Facebook</button>
              </div>
            </div>

          </div>
        </div>
        <div className="login-background">
          <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="" width={350} height={350} />
        </div>
      </div>
    </div>
  );
}
