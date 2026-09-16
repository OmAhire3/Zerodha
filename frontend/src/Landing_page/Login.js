import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";   

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [validated, setValidated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);
        setError("");

        try {
            const response = await fetch("https://zerodha-vk1n.onrender.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (data.success) {
                     window.location.href = `http://localhost:3001?username=${encodeURIComponent(data.username)}`;

            } else {
                setError(data.message);
            }

        } catch (error) {
            setError("Unable to connect to server");
        }
    };

   return (
    <div
        className="container-fluid"
        style={{
            minHeight: "85vh",
            paddingTop: "5cm",
        
        }}
    >
        <div className="container">
            <div className="row align-items-center justify-content-center">

                {/* LEFT IMAGE */}
                <div className="col-md-5 text-center">
                    <img
                        src="media/images/login.svg"
                        alt="Login"
                        style={{
                            width: "75%",
                            maxWidth: "400px"
                        }}
                    />
                </div>

                {/* RIGHT LOGIN */}
                <div className="col-md-4">

                    <h1
                        style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            color: "#424242",
                            marginBottom: "25px"
                        }}
                    >
                        Login to Zerodha
                    </h1>

                    <form
                        onSubmit={handleLogin}
                        noValidate
                        className={validated ? "was-validated" : ""}
                    >

                        {/* EMAIL */}
                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    height: "48px"
                                }}
                            />

                            <div className="invalid-feedback">
                                Please enter a valid email.
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div className="mb-3">
                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    height: "48px"
                                }}
                            />

                            <div className="invalid-feedback">
                                Please enter your password.
                            </div>
                        </div>

                        {/* ERROR */}
                        {error && (
                            <div
                                className="mb-3"
                                style={{
                                    color: "red",
                                    fontSize: "14px"
                                }}
                            >
                                {error}
                            </div>
                        )}

                        {/* LOGIN */}
                        <button
                            type="submit"
                            className="btn text-white"
                            style={{
                                background: "#387ED1",
                                width: "100%",
                                height: "48px",
                                borderRadius: "4px"
                            }}
                        >
                            Login
                        </button>

                    </form>

                    <div
                        className="mt-3"
                        style={{ fontSize: "14px" }}
                    >
                        <span className="text-muted">
                            Don't have an account?
                        </span>

                        <Link
                            to="/signup"
                            className="ms-1 text-decoration-none"
                            style={{ color: "#387ED1" }}
                        >
                            Sign up
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
);
}

export default Login;