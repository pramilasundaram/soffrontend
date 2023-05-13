import { Navigate } from "react-router-dom";

export default function Protected({user,children}){ 
    
    console.log(user)
    if (!user) {
    return <Navigate to="/auth" replace />
}
return children;
};
