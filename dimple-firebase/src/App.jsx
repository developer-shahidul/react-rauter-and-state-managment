import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase.init";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const Provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, Provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log("error", error));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("User signed out successfully"))
      .catch((error) => console.log(error));
    setUser(null);
  };
  return (
    <>
      <h1>dimple firebase</h1>

      {user ? (
        <button onClick={handleSignOut}>Sign-Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Login With Google</button>
      )}

      {user && (
        <div>
          <h1>{user?.displayName}</h1>
          <p>{user?.email}</p>
          <img src={user?.photoURL} alt="img" />
        </div>
      )}
    </>
  );
}

export default App;
