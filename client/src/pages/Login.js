import React from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import Columnsss from "../components/Column/Columnsss";
import Column from "../components/Column/Column";
import LoginCard from "../components/LoginCard";
import Auth from "../utils/auth";
import Button from "../components/Button";
import LoginBanner from "../components/LoginBanner";

//These are just random components thrown in here for now I am using for testing

const Login = () => {
  return Auth.loggedIn() ? (
    window.location.assign("/profile")
  ) : (
    <>
    <LoginBanner />
      <Section>
        <Container>
          <Columnsss attr={"is-centered is-vcentered"}>
            <Column attr={"is-half"}>
              <LoginCard />
              
              
            </Column>
            
          </Columnsss>
          
        </Container>
        <Container attr={"container has-text-centered"}>
          <p className="pt-5"> This site is a by-invite site only so that you can keep your community tight. </p>
          <p>The administrator of your community should have provided you with your login credentials. Contact them for your credentials.</p>
          <p> If you would like to create a GoMode community, contact one of the devs listed at the footer of this page</p>
        </Container>
        
      </Section>
  
      
      
    </>
  );
};

export default Login;
