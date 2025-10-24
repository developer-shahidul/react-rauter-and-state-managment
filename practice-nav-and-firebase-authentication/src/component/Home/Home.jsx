//
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

const Home = () => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div></div>

      <h2>This is home page</h2>
      {user ? (
        <>
          <button onClick={handleGoogleSignOut}>Google Sign-Out</button>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="userImg" />
          <p>{user.phoneNumber}</p>
        </>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Sign-In</button>
        </>
      )}
    </div>
  );
};

export default Home;
