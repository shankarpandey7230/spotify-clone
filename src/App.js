import "./App.css";
import Login from "./Login";
import { useContext, useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token); // Sending token to spotify api

      spotify.getMe().then((user) => {
        console.log("😝", user);
      });
    }

    console.log("I have token", token);
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
