
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function WelcomePage() {
    const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center p-4">
        <h2 className="fw-bold">Welcome to PopX</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="d-grid gap-2 mt-4">
          <button style={{backgroundColor:"#800080",color:"white",borderRadius:"5px",height :"40px"}} onClick={()=>navigate("/register")}>Create Account</button>
          <button className="btn btn-light btn-lg border" onClick ={()=>navigate("/signin")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
