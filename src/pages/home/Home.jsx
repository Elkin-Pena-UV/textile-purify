import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";

const Home = () => {
    const {user,logout} = useAuthStore();
    
    const handleLogout = useCallback(()=>{
        logout();
    },[logout])
    return(
        <>
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </>
    )
}
export default Home;