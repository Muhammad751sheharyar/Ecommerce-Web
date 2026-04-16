import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Jab page refresh ho, check karo agar localStorage mein user data hai
        const savedUser = localStorage.getItem("userInfo");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("userInfo", JSON.stringify(userData));
    };

    // const logout = () => {
    //     setUser(null);
    //     localStorage.removeItem("userInfo");
    //     // Yahan aap backend logout API ko bhi call kar sakte hain
    // };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};