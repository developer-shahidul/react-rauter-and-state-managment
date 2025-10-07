//
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("✅ User signed in:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("❌ Error:", error);
        setUser(null);
      });
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign Out done");
        setUser(null);
      })
      .catch((err) => console.log(err));
    setUser(null);
  };

  // if user exists ? signout : sign In

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Login with Google</button>
      )}

      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <img src={user.photoURL}></img>
        </div>
      )}
    </div>
  );
};

export default Login;
