import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className='container p-0 p-md-5 mt-5'>
            <div className='row text-center mt-5 mt-md-5'>

                <img
                    src='media/images/main.svg'
                    alt='Hero'
                    className='mb-4 mb-md-5'
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        margin: '30px auto 0 auto'
                    }}
                />

                <h3>Invest in everything</h3>

                <p className='mt-3'>
                    Online platform to invest in stocks, derivatives, mutual funds,
                    ETFs, bonds, and more.
                </p>

                <Link to="/signup" className='mt-3'>
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{
                            width: '160px',
                            background: "#387ED1"
                        }}
                    >
                        Sign up for free
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Hero;