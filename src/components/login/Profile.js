import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { magic } from "../../auth/magic";
import Loading from "./Loading";
import { GlobalStyle, Container } from "../../styles/global.styled";
import Header from "../header/header.comp";

export default function Profile() {
  const [userMetadata, setUserMetadata] = useState();
  const history = useNavigate();

  useEffect(() => {
    // On mount, we check if a user is logged in.
    // If so, we'll retrieve the authenticated user's profile.
    magic.user.isLoggedIn().then(magicIsLoggedIn => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(setUserMetadata);
      } else {
        // If no user is logged in, redirect to `/login`
        history("/");
      }
    });
  }, []);

  /**
   * Perform logout action via Magic.
   */
  const logout = useCallback(() => {
    magic.user.logout().then(() => {
      history("/");
    })
  }, [history]);

  return userMetadata ? <>
  <div>
  <GlobalStyle/>
  
  <Container>
    <h1>Current user: {userMetadata.email}</h1>
    <button onClick={logout}>Logout</button>
  </Container>
  </div>
  </> : <Loading />;

}

