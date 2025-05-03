import React, { createContext, useContext, useEffect, useState } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username) => {
    setIsAuthenticated(true);
    setUser({ name: username });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Login Component
const Login = () => {
  const { login, isAuthenticated } = useContext(AuthContext);
  const [username, setUserName] = useState("");

  const handleLogin = () => {
    login(username);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setUserName("");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Your Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Logout Component
const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

// User Profile Component
const UserProfile = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div>
      <h2>User Profile</h2>
      {isAuthenticated ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>You are not logged in. Please log in to see your profile.</p>
      )}
    </div>
  );
};

// Main App Component
const Authentication = () => {
  return (
    <AuthProvider>
      <div>
        <h1>User Authentication Example</h1>
        <Login />
        <Logout />
        <UserProfile />
      </div>
    </AuthProvider>
  );
};

export default Authentication;
