import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Hero() {
      const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        form.classList.add("was-validated");

        const userData = {
            username,
            email,
            password
        };

        const response = await fetch("https://zerodha-vk1n.onrender.com/signUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const data = await response.text();

        console.log(data);


            if (response.ok) {
                navigate("/login");
            }
    };

    return (
        <div className='container pt-5 mt-5'>
            <div className='mt-4 pt-5'>

                <h3 className='text-center text-muted'>
                    Open a free demat and trading account online
                </h3>
                <p
                   className='text-center'
                    style={{ fontSize: "20px", marginTop: "0.6cm" }}>
                    Start investing brokerage free and join a community of
                    1.6+ crore investors and traders
                </p>

                <div className='row border-bottom'>
                    <div className='col-1'></div>
                    <div className='col-6  p-5 mt-5 mb-5'>
                        <img src='media/images/account_open.svg' alt="account" />
                    </div>
                    
                    <div className="col-4 pt-2 p-1">

                        <h3
                            className="mb-2 text-muted fs-4"
                            style={{ marginTop: "3cm" }}
                        >
                            Signup now
                        </h3>

                        <p className="text-muted mb-4">
                            Or track your existing application
                        </p>

                        <form
                            className="needs-validation"
                            noValidate
                            onSubmit={handleSignUp}
                        >

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                <div className="invalid-feedback">
                                    Please enter your username.
                                </div>
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <div className="invalid-feedback">
                                    Please enter a valid email.
                                </div>
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <div className="invalid-feedback">
                                    Please enter your password.
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    background: "#387ED1",
                                    width: "4cm",
                                    height: "1.1cm"
                                }}
                            >
                                <h5>Sign Up</h5>
                            </button>

                        </form>

                        <br />

                        <p style={{ fontSize: "13px" }}>
                            By proceeding, you agree to the Zerodha terms & privacy policy
                        </p>

                    </div>

                    <div className='text-center pb-5 mb-5 text-muted'>

                        <h4>Already have a demat account?</h4>

                        <p>
                            Move your holdings to Zerodha and we'll cover your
                            transfer costs, up to ₹500, learn more.
                        </p>

                        <br />

                        <Link to='/login'>
                            <button
                                className="btn btn-primary"
                                style={{
                                    background: "#387ED1",
                                    width: "3cm"
                                }}
                            >
                                <h6>Log in</h6>
                            </button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;