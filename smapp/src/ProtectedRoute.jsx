import { Navigate } from "react-router-dom";
export function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("auth") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else return children;
}
