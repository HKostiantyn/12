import React from "react"; // Explicitly import React
import { Navigate, Outlet } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { RootState } from "../store";

const PrivateRoute = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return userId ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
