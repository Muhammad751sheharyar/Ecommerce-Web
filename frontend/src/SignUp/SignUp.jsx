// // import { useState } from "react";
// // import {
// //     TextField,
// //     Button,
// //     Box,
// //     Typography,
// //     Container,
// //     Alert,
// //     Paper
// // } from "@mui/material";
// // import { styled } from "@mui/system";
// // import { signup } from "../services/singup";

// // /* ---------------- Styled Components ---------------- */

// // const Background = styled(Box)({
// //     minHeight: "100vh",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
// //     backgroundSize: "400% 400%",
// //     animation: "gradientMove 10s ease infinite",
// //     "@keyframes gradientMove": {
// //         "0%": { backgroundPosition: "0% 50%" },
// //         "50%": { backgroundPosition: "100% 50%" },
// //         "100%": { backgroundPosition: "0% 50%" }
// //     }
// // });

// // const AnimatedCard = styled(Paper)({
// //     padding: "40px",
// //     width: "100%",
// //     maxWidth: "420px",
// //     borderRadius: "20px",
// //     backdropFilter: "blur(15px)",
// //     background: "rgba(255,255,255,0.05)",
// //     boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
// //     animation: "fadeIn 1s ease",
// //     "@keyframes fadeIn": {
// //         from: { opacity: 0, transform: "translateY(30px)" },
// //         to: { opacity: 1, transform: "translateY(0)" }
// //     }
// // });

// // /* ---------------- Component ---------------- */

// // export default function SignupForm() {

// //     const [errors, setErrors] = useState({});
// //     const [success, setSuccess] = useState(false);
// //     const [formData, setFormData] = useState({
// //         name: "",
// //         email: "",
// //         password: "",
// //         role: "hr"
// //     });

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const validate = () => {
// //         let tempErrors = {};

// //         if (!formData.name) tempErrors.name = "Name is required";
// //         if (!formData.email) tempErrors.email = "Email is required";
// //         if (!formData.password) tempErrors.password = "Password is required";

// //         setErrors(tempErrors);
// //         return Object.keys(tempErrors).length === 0;
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         setSuccess(false);

// //         if (validate()) {
// //             signup(formData);
// //             setSuccess(true);
// //         }
// //     };

// //     return (
// //         <Background>
// //             <Container sx={{
// //                 minHeight: "100vh",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //             }}>
// //                 <AnimatedCard elevation={10}>
// //                     <Box
// //                         component="form"
// //                         onSubmit={handleSubmit}
// //                         sx={{ display: "flex", flexDirection: "column", gap: 3 }}
// //                     >
// //                         <Typography
// //                             variant="h4"
// //                             textAlign="center"
// //                             sx={{
// //                                 fontWeight: "bold",
// //                                 color: "#38bdf8",
// //                                 letterSpacing: 1
// //                             }}
// //                         >
// //                             Create Account
// //                         </Typography>

// //                         {success && (
// //                             <Alert severity="success">
// //                                 Signup Successful!
// //                             </Alert>
// //                         )}

// //                         <TextField
// //                             label="Full Name"
// //                             name="name"
// //                             value={formData.name}
// //                             onChange={handleChange}
// //                             error={!!errors.name}
// //                             helperText={errors.name}
// //                             variant="outlined"
// //                             fullWidth
// //                             sx={{
// //                                 input: { color: "white" },
// //                                 label: { color: "#94a3b8" },
// //                                 "& .MuiOutlinedInput-root": {
// //                                     "& fieldset": { borderColor: "#334155" },
// //                                     "&:hover fieldset": { borderColor: "#38bdf8" },
// //                                     "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
// //                                 }
// //                             }}
// //                         />

// //                         <TextField
// //                             label="Email"
// //                             name="email"
// //                             type="email"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             error={!!errors.email}
// //                             helperText={errors.email}
// //                             fullWidth
// //                             sx={{
// //                                 input: { color: "white" },
// //                                 label: { color: "#94a3b8" },
// //                                 "& .MuiOutlinedInput-root": {
// //                                     "& fieldset": { borderColor: "#334155" },
// //                                     "&:hover fieldset": { borderColor: "#38bdf8" },
// //                                     "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
// //                                 }
// //                             }}
// //                         />

// //                         <TextField
// //                             label="Password"
// //                             name="password"
// //                             type="password"
// //                             value={formData.password}
// //                             onChange={handleChange}
// //                             error={!!errors.password}
// //                             helperText={errors.password}
// //                             fullWidth
// //                             sx={{
// //                                 input: { color: "white" },
// //                                 label: { color: "#94a3b8" },
// //                                 "& .MuiOutlinedInput-root": {
// //                                     "& fieldset": { borderColor: "#334155" },
// //                                     "&:hover fieldset": { borderColor: "#38bdf8" },
// //                                     "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
// //                                 }
// //                             }}
// //                         />

// //                         <Button
// //                             type="submit"
// //                             variant="contained"
// //                             size="large"
// //                             sx={{
// //                                 mt: 2,
// //                                 background: "linear-gradient(90deg, #38bdf8, #6366f1)",
// //                                 fontWeight: "bold",
// //                                 letterSpacing: 1,
// //                                 transition: "0.3s",
// //                                 "&:hover": {
// //                                     transform: "scale(1.05)",
// //                                     boxShadow: "0 10px 30px rgba(56,189,248,0.5)"
// //                                 }
// //                             }}
// //                         >
// //                             Create Account
// //                         </Button>

// //                     </Box>
// //                 </AnimatedCard>
// //             </Container>
// //         </Background>
// //     );
// // }



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { signup } from "../services/singup";
// import "./signup.css";

// const GoogleIcon = () => <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" width="18" />;
// const AppleIcon = () => <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="A" width="18" />;

// export default function SignupForm() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         agree: false
//     });
//     const [showPass, setShowPass] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({ 
//             ...formData, 
//             [name]: type === "checkbox" ? checked : value 
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         // confirmPassword check logic yahan add kar sakte hain
//         await signup(formData);
//         setLoading(false);
//     };

//     return (
//         <div className="signup-wrapper">
//             <div className="signup-card">
//                 {/* Header Section */}
//                 <div className="brand-header">
//                     <div className="brand-logo">
//                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                             <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
//                         </svg>
//                     </div>
//                     <h2 className="brand-title">SwiftShop</h2>
//                 </div>

//                 <div className="form-title">
//                     <h1>Create Account</h1>
//                     <p>Fill in your details to get started</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="signup-form">
//                     <div className="input-box">
//                         <label>Full Name</label>
//                         <div className="field-inner">
//                             <span className="field-icon">👤</span>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Enter your full name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="input-box">
//                         <label>Email Address</label>
//                         <div className="field-inner">
//                             <span className="field-icon">✉️</span>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Enter your email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="input-box">
//                         <label>Password</label>
//                         <div className="field-inner">
//                             <span className="field-icon">🔒</span>
//                             <input
//                                 type={showPass ? "text" : "password"}
//                                 name="password"
//                                 placeholder="Create a password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <button type="button" className="pass-toggle" onClick={() => setShowPass(!showPass)}>
//                                 {showPass ? "👁️" : "👁️‍🗨️"}
//                             </button>
//                         </div>
//                     </div>

//                     <div className="input-box">
//                         <label>Confirm Password</label>
//                         <div className="field-inner">
//                             <span className="field-icon">🛡️</span>
//                             <input
//                                 type={showPass ? "text" : "password"}
//                                 name="confirmPassword"
//                                 placeholder="Confirm your password"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="checkbox-row">
//                         <input 
//                             type="checkbox" 
//                             name="agree" 
//                             id="agree" 
//                             checked={formData.agree} 
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="agree">
//                             I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
//                         </label>
//                     </div>

//                     <button type="submit" className="submit-btn" disabled={loading}>
//                         {loading ? "Creating Account..." : "Sign Up"}
//                     </button>
//                 </form>

//                 <div className="divider-text">
//                     <span>OR CONTINUE WITH</span>
//                 </div>

//                 <div className="social-grid">
//                     <button className="btn-social"><GoogleIcon /> Google</button>
//                     <button className="btn-social"><AppleIcon /> Apple</button>
//                 </div>

//                 <p className="footer-link">
//                     Already have an account? <Link to="/login">Log In</Link>
//                 </p>
//             </div>
//         </div>
//     );
// }


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