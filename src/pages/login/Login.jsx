import { useCallback } from "react"
import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react";


export default function Login(){

    const {user,loginGoogleWithPopUp,observeAuthState} = useAuthStore();

    const handleLogin = useCallback(()=>{
        loginGoogleWithPopUp();
    },[loginGoogleWithPopUp])

    useEffect(()=>{
        observeAuthState();
        console.log(user)
    }, [observeAuthState,user])

    return (
        <>
        <div className="container-login">
            <div className="row">
                <div className="row-md-4">
                    <div className="loginpart1">
                        <div className="card card-body">
                            <p>
                                Bienvenido a Textile Purify
                            </p>
                            <form>
                                <button className='btnform' onClick={handleLogin}>Sign-in-with-google</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row-md-8">
                </div>
            </div>
        </div>
        </>
    )
}