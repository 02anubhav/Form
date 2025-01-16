import React, { useState, useEffect } from "react";
import { LineChart, TrendingUp, Lock, Mail, User } from "lucide-react";

const Form = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Check localStorage after registration
  const users = JSON.parse(localStorage.getItem("registeredUsers"));
  console.log(users);

  // Load registered users from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("registeredUsers");
    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Check if email already exists
      const emailExists = registeredUsers.some(
        (user) => user.email === formData.email
      );

      if (emailExists) {
        setError("Email already registered");
        setIsLoading(false);
        return;
      }

      // Create new user object with timestamp
      const newUser = {
        ...formData,
        id: Date.now(),
        registrationDate: new Date().toISOString(),
      };

      // Update state and localStorage
      const updatedUsers = [...registeredUsers, newUser];
      setRegisteredUsers(updatedUsers);
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });

      // Show success message
      alert("Registration successful!");

      // Switch to login tab
      setActiveTab("login");
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Find user in registered users
      const user = registeredUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Store login info
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            lastLogin: new Date().toISOString(),
          })
        );

        alert("Login successful!");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
       
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <LineChart className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">TradyLytics</h1>
          <p className="text-gray-600 mt-2">Trade. Analyze. Elevate.</p>
        </div>

      
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        
          <div className="flex border-b">
            <button
              onClick={() => {
                setActiveTab("login");
                setError("");
                setFormData({ fullName: "", email: "", password: "" });
              }}
              className={`flex-1 py-4 text-sm font-medium transition-colors
                ${
                  activeTab === "login"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setActiveTab("register");
                setError("");
                setFormData({ fullName: "", email: "", password: "" });
              }}
              className={`flex-1 py-4 text-sm font-medium transition-colors
                ${
                  activeTab === "register"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Register
            </button>
          </div>

         
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Welcome back
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Enter your credentials to access your account
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>

                <button
                  type="button"
                  className="w-full text-sm text-gray-600 hover:text-gray-800"
                >
                  Forgot password?
                </button>
              </div>
            </form>
          )}

        
          {activeTab === "register" && (
            <form onSubmit={handleRegister} className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Create an account
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Join TradyLytics to elevate your trading game
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </button>
              </div>
            </form>
          )}
        </div>

        
        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="flex flex-col items-center">
            <TrendingUp className="h-6 w-6 text-blue-600 mb-2" />
            <p className="text-gray-600">Advanced Analytics</p>
          </div>
          <div className="flex flex-col items-center">
            <LineChart className="h-6 w-6 text-blue-600 mb-2" />
            <p className="text-gray-600">Real-time Tracking</p>
          </div>
          <div className="flex flex-col items-center">
            <Lock className="h-6 w-6 text-blue-600 mb-2" />
            <p className="text-gray-600">Secure Platform</p>
          </div>
        </div>

        
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        
        <div className="mt-8 text-xs text-gray-500">
          <p>Registered Users: {registeredUsers.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
