import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { magic } from "../auth/magic";
import Loading from "../components/login/Loading";

export default function Callback() {
  const history = useNavigate();

  useEffect(() => {
    // On mount, we try to login with a Magic credential in the URL query.
    magic.auth.loginWithCredential().finally(() => {
      history("/");
    });
    console.log(magic);
  }, []);

  return <Loading />;
}

