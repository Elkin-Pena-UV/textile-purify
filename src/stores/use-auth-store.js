import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";

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

  logout: async () =>{
    await signOut(auth)
    .then(()=>{
      set({user : null});
    })
    .catch((error)=>{
      console.log(error);
    })
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
