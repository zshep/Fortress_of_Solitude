import React from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import Columnsss from "../components/Column/Columnsss";
import Column from "../components/Column/Column";
import PComponent from "../components/PComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";
import Card from "../components/Card/Card";

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
      <Section>
        <Columnsss attr={"is-centered"}>
          <Column attr={"has-text-centered"}>
            <PComponent
              value={["test", "Another", "Trust", "The", "Process"]}
            ></PComponent>
          </Column>
        </Columnsss>
      </Section>
      <Section>
        <Columnsss>
          <Column attr={'is-one-third'}>
            <Card />
          </Column>
          <Column attr={'is-one-third'}>
            <Card />
          </Column>
          <Column attr={'is-one-third'}>
            <Card />
          </Column>
        </Columnsss>
      </Section>
      <Footer />
    </>
  );
};

export default Login;
