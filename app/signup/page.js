import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Signup Page</title>
      </Head>

      <div
        className="min-vh-100 d-flex align-items-center justify-content-end"
        style={{
          backgroundImage: "url('four.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingRight: '5%',
          paddingLeft: '38%',
        }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-10 col-md-8 col-lg-5">
              <div
                className="card shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '30px',
                }}
              >
                <div className="card-body">
                  <h3 className="card-title mb-4 text-center">Create a New Account</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Choose a username"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Create password"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Sign Up
                    </button>
                  </form>
                  <p className="mt-3 text-center">
                    Already have an account? <a href="/">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
