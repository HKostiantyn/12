import React from "react"; // Explicitly import React
import { Navigate, Outlet } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { RootState } from "../store";


const AdminRoute = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const admin = useSelector((state: RootState) => state.auth.admin);
  const [loading, setLoading] = React.useState(true);
  console.log("adminroute----", admin)

  React.useEffect(() => {
    setLoading(false);
  }, [userId, admin]);

  if (loading) return <div>Loading...</div>;

  return userId && admin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
