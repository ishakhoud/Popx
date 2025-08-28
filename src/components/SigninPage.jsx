import React from 'react';
import { useNavigate } from 'react-router-dom';
function SigninPage(){
    const navigate = useNavigate();
    return (
    <div className='container my-2'>
        <h2 className='fw-bold mb-4'>Signin to your PopX account</h2>
        <p className='text-muted mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form>
            <div className="mb-3">
          <label className="form-label">Email address *</label>
          <input type="email" className="form-control" placeholder="Enter email address" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password </label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
       <button type="submit" className="btn btn-secondary w-100 btn-lg mt-3" onClick={()=>navigate("/account")}>
          Login
        </button>
        </form>
        </div>
    );
}
export default SigninPage;