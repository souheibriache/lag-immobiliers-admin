import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import type { RootState } from "./redux/store";
import Dashboard from "./pages/Dashboard";

// ProtectedRoute Component
const ProtectedRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const { currentUser } = useSelector((state: RootState) => state.user);

  const isAuthenticated = Boolean(accessToken && currentUser);

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<Home />}>
          {/* Nested Routes */}
          <Route index element={<Dashboard />} />
        </Route>
      </Route>

      {/* Catch-all route */}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
      />
    </Routes>
  );
};

export default App;
