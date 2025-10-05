//
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/Firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("✅ User signed in:", result);
      })
      .catch((error) => {
        console.log("❌ Error:", error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
