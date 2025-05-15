import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    const userInfo = localStorage.getItem('user');
    return (
        <>
         {userInfo ? <Navigate to="/dashboard" /> :   <Outlet />}
        </>
    )
}
export default PublicRoutes;