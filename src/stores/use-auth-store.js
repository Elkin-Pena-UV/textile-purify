import { onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "../../firebase.config";
import { create } from "zustand";

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
  user: null,
  login: true,

  loginGoogleWithPopUp: async () => {
    await signInWithPopup(auth, provider).catch((error) => {
      console.log(error);
    });
  },

  observeAuthState: () => {
    set({ loading: true});
    onAuthStateChanged(auth,(user)=>{
        if(user){
            set({user,loading:false});
        }else{
            set({user:null, loading:false});
        }
    });
  }

}));

export default useAuthStore;
