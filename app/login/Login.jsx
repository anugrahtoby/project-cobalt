import React from "react";
import "./Login.scss";
export const Login = () => {
  return (
    <div className="login">
      <div className="frame">
        <div className="div">
        <div class="image"></div>
          <div className="register-forgot-pass">
            <p className="don-t-have-an">
              <span className="text-wrapper">Don't have an account?</span>
              <span className="span"> Register now for free</span>
            </p>
            <p className="forgot-password">
              <span className="text-wrapper">Forgot password?</span>
              <span className="span"> Reset</span>
            </p>
          </div>
          <div className="text-wrapper-2">Cobalt</div>
        </div>
        <div className="leftarea">
          <div className="oauthbuttons">
            <div className="google">
              <div className="text-wrapper-3">Google OAuth</div>
            </div>
            <div className="facebook">
              <div className="DK-text-box" />
              <div className="text-wrapper-4">Facebook OAuth</div>
            </div>
          </div>
          <div className="orline">
            <div className="text-wrapper-5">━━━━━━━━━ OR ━━━━━━━━━</div>
          </div>
          <div className="emailpass">
            <div className="div-2">
              <div className="text-wrapper-6">E-mail</div>
              <div className="DK-text-box-2" />
            </div>
            <div className="div-2">
              <div className="text-wrapper-6">Password</div>
              <div className="DK-text-box-2" />
            </div>
          </div>
          <button className="loginbutton">
            <div className="text-wrapper-7">Login</div>
          </button>
        </div>
      </div>
    </div>
   );
};



export default Login;