import React from "react";
import Heading from "./MainNav";
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();
    return (
        <>
            <Heading />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '2rem', alignItems: 'center' }}>
                <h3 style={{ color: 'green' }}>Successfully registered</h3>
                <button onClick={() => navigate('/login')}
                    style={
                        {
                            width: '8vw',
                            padding: '0.5rem',
                            margin: '1rem',
                            backgroundColor: '#19376D',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                    Go to LoginForm
                </button>
            </div>
        </>
    )
}

export default Success;