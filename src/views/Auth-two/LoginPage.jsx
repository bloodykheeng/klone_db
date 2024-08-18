import React, { useContext, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);

    const containerClassName = classNames("surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden", { "p-input-filled": true });

    const runLogin = () => {
        localStorage.setItem("username", email);
        navigate("/dashboard");
    };

    const onClickForgotPass = () => {
        navigate("/reset-password");
    };

    const onClickCreateAccount = () => {
        navigate("/sign-up");
    };

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <div style={{ borderRadius: "56px", padding: "0.3rem", background: "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)" }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: "53px" }}>
                        <div className="text-center mb-5">
                            <h3 className="text-600 font-medium">Sign in</h3>
                        </div>

                        <div>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Username
                            </label>
                            <InputText inputid="email1" type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full md:w-30rem mb-5" style={{ padding: "1rem" }} />

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Password
                            </label>
                            <Password inputid="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex align-items-center">
                                    <Checkbox inputid="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked)} className="mr-2"></Checkbox>
                                    <label htmlFor="rememberme1">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" onClick={() => onClickForgotPass()} style={{ color: "var(--primary-color)" }}>
                                    Forgot password?
                                </a>
                            </div>
                            <Button label="Sign In" className="w-full p-3 text-xl mb-2" onClick={() => runLogin()}></Button>
                            <a className="font-medium no-underline ml-2 text-right cursor-pointer " onClick={() => onClickCreateAccount()} style={{ color: "var(--primary-color)" }}>
                                Or Create a New Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
