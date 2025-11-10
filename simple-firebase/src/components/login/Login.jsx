//
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const yahooProvider = new OAuthProvider("yahoo.com");

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
    signOut(auth)
      .then(() => {
        console.log("Sign Out done");
        setUser(null);
      })
      .catch((err) => console.log(err));
    setUser(null);
  };

  // github
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((err) => console.log("err", err));
    setUser(null);
  };

  // tweeter
  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((err) => console.log("error", err.message));
    setUser(null);
  };

  //Yahoo! signIn
  const handleYahooSignIN = () => {
    signInWithPopup(auth, yahooProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log("error", error));
  };
  // if user exists ? signout : sign In

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubLogin}> Login with Github</button>
          <button onClick={handleTwitterLogin}>Login twitter</button>
          <button onClick={handleYahooSignIN}>signIn microsoft</button>
        </div>
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
