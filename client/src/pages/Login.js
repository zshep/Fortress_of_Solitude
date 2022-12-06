import React from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import Columnsss from "../components/Column/Columnsss";
import Column from "../components/Column/Column";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";


//These are just random components thrown in here for now I am using for testing

const Login = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <Columnsss attr={"is-centered"}>
            <Column attr={"is-half"}>
              <LoginCard />
            </Column>
          </Columnsss>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default Login;
