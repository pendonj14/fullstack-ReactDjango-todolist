import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from "next-themes";

function Logout() {
  localStorage.clear();
  return <Navigate to='/login' />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
