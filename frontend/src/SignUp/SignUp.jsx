import { useState } from "react";
import { Link } from "react-router-dom"; // Navigation ke liye
import { signup } from "../services/singup";
import "./signup.css";

export default function SignupForm() {
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "hr"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        if (validate()) {
            signup(formData);
            setSuccess(true);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                {/* Logo & Brand */}
                <div className="brand-box">
                    <div className="logo-circle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                    </div>
                    <h2 className="brand-name">SwiftShop</h2>
                </div>

                <div className="title-section">
                    <h1>Create Account</h1>
                    <p>Fill in your details to get started</p>
                </div>

                {success && <div className="success-alert">Signup Successful!</div>}

                <form onSubmit={handleSubmit} className="form-content">
                    <div className="input-group">
                        <label>Full Name</label>
                        <div className={`field-wrapper ${errors.name ? 'error-border' : ''}`}>
                            <span className="field-icon">👤</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="input-group">
                        <label>Email Address</label>
                        <div className={`field-wrapper ${errors.email ? 'error-border' : ''}`}>
                            <span className="field-icon">✉️</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <div className={`field-wrapper ${errors.password ? 'error-border' : ''}`}>
                            <span className="field-icon">🔒</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <button type="submit" className="signup-btn">
                        Create Account
                    </button>
                </form>

                <div className="divider">
                    <span>OR CONTINUE WITH</span>
                </div>

                <div className="social-actions">
                    <button className="social-item">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="16" alt="" /> 
                        Google
                    </button>
                    <button className="social-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width="16" alt="" /> 
                        Apple
                    </button>
                </div>

                <p className="login-footer">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
}