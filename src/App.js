import "./App.css";
import Login from "./Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("I have token", _token);
  }, []);
  return (
    <div className="app">{token ? <h1>I am logged in </h1> : <Login />}</div>
  );
}

export default App;
