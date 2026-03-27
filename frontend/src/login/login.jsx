// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { login } from "../services/login";
// import "./login.css";

// export default function LoginForm() {
//     const [errors, setErrors] = useState({});
//     const [success, setSuccess] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [showPass, setShowPass] = useState(false);

//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const validate = () => {
//         let tempErrors = {};
//         if (!formData.email) tempErrors.email = "Email is required";
//         if (!formData.password) tempErrors.password = "Password is required";
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setSuccess(false);

//         if (validate()) {
//             setLoading(true);
//             await login(formData);
//             setLoading(false);
//             setSuccess(true);
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-card">
//                 {/* Logo & Brand */}
//                 <div className="brand-header">
//                     <div className="logo-box">
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                             <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
//                         </svg>
//                     </div>
//                     <h2 className="brand-title">SwiftShop</h2>
//                 </div>

//                 <div className="welcome-text">
//                     <h1>Welcome Back</h1>
//                     <p>Login to your account to continue</p>
//                 </div>

//                 {success && <div className="success-msg">Login Successful!</div>}

//                 <form onSubmit={handleSubmit} className="login-form">
//                     <div className="input-field-group">
//                         <label>Email Address</label>
//                         <div className={`input-wrapper ${errors.email ? 'error-input' : ''}`}>
//                             <span className="input-icon">✉️</span>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="name@example.com"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         {errors.email && <span className="error-msg">{errors.email}</span>}
//                     </div>

//                     <div className="input-field-group">
//                         <label>Password</label>
//                         <div className={`input-wrapper ${errors.password ? 'error-input' : ''}`}>
//                             <span className="input-icon">🔒</span>
//                             <input
//                                 type={showPass ? "text" : "password"}
//                                 name="password"
//                                 placeholder="Enter your password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                             <button 
//                                 type="button" 
//                                 className="toggle-eye" 
//                                 onClick={() => setShowPass(!showPass)}
//                             >
//                                 {showPass ? "👁️" : "👁️‍🗨️"}
//                             </button>
//                         </div>
//                         {errors.password && <span className="error-msg">{errors.password}</span>}
//                     </div>

//                     <div className="forgot-link">
//                         <Link to="/forgot-password">Forgot Password?</Link>
//                     </div>

//                     <button type="submit" className="login-btn" disabled={loading}>
//                         {loading ? "Logging in..." : "Login"}
//                     </button>
//                 </form>

//                 <div className="divider-line">
//                     <span>Or continue with</span>
//                 </div>

//                 <div className="social-row">
//                     <button className="social-pill">
//                         <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="16" alt="" /> 
//                         Google
//                     </button>
//                     <button className="social-pill">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width="16" alt="" /> 
//                         Apple
//                     </button>
//                 </div>

//                 <p className="signup-footer">
//                     Don't have an account? <Link to="/signup">Sign Up</Link>
//                 </p>
//             </div>
//         </div>
//     );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate add kiya
import { login } from "../services/login";
import "./login.css";

export default function LoginForm() {
    const navigate = useNavigate(); // Navigation ke liye
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setErrors({});

        if (validate()) {
            setLoading(true);
            try {
                // Login service ko call karein
                const response = await login(formData); 
                setLoading(false);

                if (response && response.token) {
                    setSuccess(true);
                    
                    // 1. Token aur User Data save karein
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("user", JSON.stringify(response.user));

                    // 2. Role based redirection logic
                    if (response.user.role === "admin") {
                        console.log("Admin detected, redirecting...");
                        navigate("/"); // Admin Dashboard ka path
                    } else {
                        console.log("User detected, redirecting...");
                        navigate("/home"); // Normal Home ka path
                    }
                }
            } catch (error) {
                setLoading(false);
                // Agar backend se error aaye (e.g. Invalid Credentials)
                setErrors({ server: error.message || "Invalid email or password" });
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="brand-header">
                    <div className="logo-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
                        </svg>
                    </div>
                    <h2 className="brand-title">SwiftShop</h2>
                </div>

                <div className="welcome-text">
                    <h1>Welcome Back</h1>
                    <p>Login to your account to continue</p>
                </div>

                {/* Success ya Server Error message */}
                {success && <div className="success-msg">Login Successful! Redirecting...</div>}
                {errors.server && <div className="error-msg-box" style={{color: 'red', marginBottom: '10px', textAlign: 'center'}}>{errors.server}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-field-group">
                        <label>Email Address</label>
                        <div className={`input-wrapper ${errors.email ? 'error-input' : ''}`}>
                            <span className="input-icon">✉️</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>

                    <div className="input-field-group">
                        <label>Password</label>
                        <div className={`input-wrapper ${errors.password ? 'error-input' : ''}`}>
                            <span className="input-icon">🔒</span>
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button 
                                type="button" 
                                className="toggle-eye" 
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                        {errors.password && <span className="error-msg">{errors.password}</span>}
                    </div>

                    <div className="forgot-link">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="divider-line">
                    <span>Or continue with</span>
                </div>

                <div className="social-row">
                    <button className="social-pill">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="16" alt="" /> 
                        Google
                    </button>
                    <button className="social-pill">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width="16" alt="" /> 
                        Apple
                    </button>
                </div>

                <p className="signup-footer">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}