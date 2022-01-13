import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { magic } from "../../auth/magic";
import Header from "../header/header.comp";
import { Container, Space, Wrapper, Title, Break } from "../../styles/global.styled";
import { GlobalStyle } from "../../styles/global.styled";
import Footer from "../footer/footer.comp";
import "../../styles.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const history = useNavigate();

  const login = useCallback(async () => {
    setIsLoggingIn(true);

    try {
      await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href,
      });
      history("/*");
    } catch {
      setIsLoggingIn(false);
    }
  }, [email]);

  /**
   * Saves the value of our email input into component state.
   */
  const handleInputOnChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);

  return (
    <>
    <GlobalStyle/>
    <div>
 



      <Container>

        <Title>Login</Title>

      </Container>
      <Container>
      <Wrapper>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email"
          onChange={handleInputOnChange}
          disabled={isLoggingIn}
        />
  
        <button onClick={login} disabled={isLoggingIn}>Send</button>
        </Wrapper>
      </Container>
      <Space/>
      </div>
    </>
  );
}

