import React from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import Columnsss from "../components/Column/Columnsss";
import Column from "../components/Column/Column";
import LoginCard from "../components/LoginCard";
import Auth from "../utils/auth";

//These are just random components thrown in here for now I am using for testing

const Login = () => {
  return Auth.loggedIn() ? (
    window.location.assign("/profile")
  ) : (
    <>
      <Section>
        <Container>
          <Columnsss attr={"is-centered"}>
            <Column attr={"is-half"}>
              <LoginCard />
            </Column>
          </Columnsss>
        </Container>
      </Section>
    </>
  );
};

export default Login;
