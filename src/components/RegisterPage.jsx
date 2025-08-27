import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
function RegisterPage() {
    const navigate = useNavigate();
  return (
    
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Create your PopX account</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Full Name *</label>
          <input type="text" className="form-control" placeholder="Marry Doe" />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone number *</label>
          <input type="text" className="form-control" placeholder="1234567890" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address *</label>
          <input type="email" className="form-control" placeholder="example@mail.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password *</label>
          <input type="password" className="form-control" placeholder="••••••••" />
        </div>

        <div className="mb-3">
          <label className="form-label">Company name</label>
          <input type="text" className="form-control" placeholder="Company XYZ" />
        </div>

        <div className="mb-3">
          <label className="form-label">Are you an Agency? *</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="agency" value="yes" />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="agency" value="no" />
              <label className="form-check-label">No</label>
            </div>
          </div>
        </div>

        <button type="submit" style={{backgroundColor:"#800080",color:"white",borderRadius:"3px"}} onClick={()=>navigate("/account")}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
