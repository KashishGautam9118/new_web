import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-end"
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/loginnew-bg.jpg')", // Your image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingRight: '5%', // add some space from right edge
        paddingLeft: '5%',
      }}
    >
      <div className="card shadow" style={{ width: '100%',
          maxWidth: '500px',   
          minHeight: '500px',    
          padding: '70px',     }}>
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">Login to Your Account</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            <p className="mt-3 text-center">
                    dont have an account? <a href="/signup">Signup</a>
                  </p>
          </form>
        </div>
      </div>
    </div>
  );
}
