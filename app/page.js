'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div 
      className="d-flex flex-column min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Header - ExtJS Inspired */}
      <header 
        className="py-3 shadow"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '2px solid #e1e5e9'
        }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* Left Section - Brand and Navigation */}
            <div className="d-flex align-items-center">
              {/* Brand Logo */}
              <Link 
                href="/" 
                className="text-decoration-none fw-bold fs-3 me-5"
                style={{ color: '#2c3e50' }}
              >
                🛍️ EliteMart
              </Link>

              {/* Main Navigation */}
              <nav className="d-none d-md-flex align-items-center">
                <Link 
                  href="/" 
                  className="text-decoration-none mx-3 fw-semibold"
                  style={{ color: '#2c3e50', fontSize: '1.1rem' }}
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  className="text-decoration-none mx-3 fw-semibold"
                  style={{ color: '#2c3e50', fontSize: '1.1rem' }}
                >
                  Products
                </Link>
                <Link 
                  href="/categories" 
                  className="text-decoration-none mx-3 fw-semibold"
                  style={{ color: '#2c3e50', fontSize: '1.1rem' }}
                >
                  Categories
                </Link>
              </nav>
            </div>

            {/* Center Section - Search */}
            <div className="d-flex align-items-center flex-grow-1 mx-4" style={{ maxWidth: '500px' }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-end-0"
                  placeholder="Search products..."
                  style={{
                    border: '2px solid #e1e5e9',
                    borderRight: 'none',
                    borderRadius: '8px 0 0 8px',
                    padding: '12px 16px',
                    fontSize: '1rem'
                  }}
                />
                <button 
                  className="btn"
                  style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: '2px solid #3498db',
                    borderRadius: '0 8px 8px 0',
                    padding: '12px 20px'
                  }}
                >
                  🔍
                </button>
              </div>
            </div>

            {/* Right Section - Auth and Menu */}
            <div className="d-flex align-items-center">
              {/* Auth Links */}
              <div className="d-none d-md-flex align-items-center">
                <Link 
                  href="/login" 
                  className="text-decoration-none mx-2 fw-semibold"
                  style={{ color: '#2c3e50', fontSize: '1.1rem' }}
                >
                  Login
                </Link>
                <span className="mx-2" style={{ color: '#bdc3c7' }}>|</span>
                <Link 
                  href="/signup" 
                  className="text-decoration-none mx-2 fw-semibold"
                  style={{ color: '#2c3e50', fontSize: '1.1rem' }}
                >
                  Signup
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className="dropdown ms-3">
                <button
                  className="btn p-2 rounded-circle"
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{
                    backgroundColor: '#ecf0f1',
                    border: '2px solid #bdc3c7',
                    width: '45px',
                    height: '45px'
                  }}
                >
                  <span style={{ fontSize: '1.2rem', color: '#2c3e50' }}>⋯</span>
                </button>
                <div 
                  className={`dropdown-menu ${showDropdown ? 'show' : ''} shadow`}
                  style={{
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    minWidth: '200px'
                  }}
                >
                  <Link className="dropdown-item py-3 border-bottom" href="/orders" style={{ fontSize: '1rem' }}>
                    📦 Orders
                  </Link>
                  <Link className="dropdown-item py-3 border-bottom" href="/wishlist" style={{ fontSize: '1rem' }}>
                    ❤️ Wishlist
                  </Link>
                  <Link className="dropdown-item py-3 border-bottom" href="/addresses" style={{ fontSize: '1rem' }}>
                    📍 Addresses
                  </Link>
                  <Link className="dropdown-item py-3" href="/profile" style={{ fontSize: '1rem' }}>
                    👤 Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 py-5">
        {/* Hero Section */}
        <section className="container mb-5">
          <div 
            className="rounded-4 shadow-lg p-5 text-center text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <h1 className="display-4 fw-bold mb-4">Welcome to EliteMart</h1>
            <p className="lead mb-4 fs-4">Premium Shopping Experience</p>
            <button 
              className="btn btn-lg px-5 py-3 fw-semibold"
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#2c3e50',
                border: 'none',
                borderRadius: '12px'
              }}
            >
              Start Shopping
            </button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mb-5">
          <h2 
            className="text-center mb-5 fw-bold text-white"
            style={{ fontSize: '2.5rem' }}
          >
            Featured Products
          </h2>
          
          <div className="row g-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-md-3 col-sm-6">
                <div 
                  className="card h-100 border-0 shadow-lg"
                  style={{
                    borderRadius: '15px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div 
                    className="card-img-top d-flex align-items-center justify-content-center"
                    style={{
                      height: '200px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '15px 15px 0 0'
                    }}
                  >
                    <span style={{ fontSize: '3rem' }}>📱</span>
                  </div>
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold" style={{ color: '#2c3e50' }}>
                      Premium Product {item}
                    </h5>
                    <p className="card-text text-muted flex-grow-1">
                      High-quality product with amazing features and design.
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="h4 mb-0 fw-bold text-primary">$299.99</span>
                        <span className="badge bg-success">In Stock</span>
                      </div>
                      <button 
                        className="btn w-100 py-3 fw-semibold"
                        style={{
                          backgroundColor: '#3498db',
                          color: 'white',
                          borderRadius: '10px',
                          border: 'none'
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="container">
          <h2 
            className="text-center mb-5 fw-bold text-white"
            style={{ fontSize: '2.5rem' }}
          >
            Shop by Category
          </h2>
          
          <div className="row g-4">
            {['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty', 'Books'].map((category, index) => (
              <div key={category} className="col-md-2 col-sm-4 col-6">
                <div 
                  className="card border-0 text-center p-4 shadow"
                  style={{
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="mb-3" style={{ fontSize: '2rem' }}>
                    {['💻', '👕', '🏠', '⚽', '💄', '📚'][index]}
                  </div>
                  <h6 className="fw-semibold mb-0" style={{ color: '#2c3e50' }}>
                    {category}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        className="py-5 mt-5"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '2px solid #e1e5e9'
        }}
      >
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>EliteMart</h5>
              <p className="text-muted">
                Your premium destination for quality products and exceptional shopping experience.
              </p>
            </div>

            {/* Payment & Security */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Security & Payment</h5>
              <div className="d-flex flex-wrap gap-2">
                {['Secure Payment', 'Fast Delivery', 'Easy Returns', '24/7 Support'].map((feature) => (
                  <span 
                    key={feature}
                    className="badge px-3 py-2"
                    style={{
                      backgroundColor: '#ecf0f1',
                      color: '#2c3e50',
                      borderRadius: '8px',
                      fontSize: '0.9rem'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Contact Us</h5>
              <p className="text-muted mb-1">📧 support@elitemart.com</p>
              <p className="text-muted mb-1">📞 +1 (555) 123-4567</p>
              <p className="text-muted">📍 123 Commerce St, City, State</p>
            </div>
          </div>

          <hr className="my-4" style={{ borderColor: '#bdc3c7' }} />
          
          <div className="text-center">
            <p className="text-muted mb-0">
              &copy; 2024 EliteMart. All rights reserved. | 
              <Link href="/privacy" className="text-decoration-none ms-2" style={{ color: '#3498db' }}>
                Privacy Policy
              </Link> | 
              <Link href="/terms" className="text-decoration-none ms-2" style={{ color: '#3498db' }}>
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}