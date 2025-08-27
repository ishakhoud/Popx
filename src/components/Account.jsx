import React from 'react'
function Account() {
  return (
    <div className="container my-4">
      <h4 className="fw-bold mb-4">Account Settings</h4>

      <div className="card shadow-sm border-0">
        <div className="card-body d-flex">
          {/* Profile picture */}
          <div className="position-relative me-3">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-circle"
              width="80"
              height="80"
            />
            {/* Camera Icon using bootstarp */}
            <span
              className="position-absolute bottom-0 end-0 translate-middle p-1 bg-primary rounded-circle"
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-camera-fill text-white"></i>
            </span>
          </div>

          {/* User information as mentioned */}
          <div>
            <h5 className="fw-bold mb-1">Marry Doe</h5>
            <p className="text-muted mb-2">Marry@Gmail.Com</p>
            <p className="mb-0 text-secondary" style={{ fontSize: "14px" }}>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
