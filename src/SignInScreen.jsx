import { authentication } from './firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignInScreen = ()=>{
    const signInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
          console.log(re);
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    return (
        <div className="App">
            <button onClick={signInWithGoogle}>
              Click me
            </button>
        </div>
      );
}

export default SignInScreen;