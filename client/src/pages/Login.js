import React from "react";
import Container from "../components/RandomComponents/Container.js";
import Section from "../components/Login/Section";
import Columnsss from "../components/Column/Columnsss";
import Column from "../components/Column/Column";
import LoginCard from "../components/Login/LoginCard";
import Auth from "../utils/auth";
import LoginBanner from "../components/Banners/LoginBanner";

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
          <div className="pt-5 loginBackground">
          <p>This site is a by-invite site only so that you can keep your community tight. </p>
          <p>The administrator of your community should have provided you with your login credentials. Contact them for your credentials.</p>
          <p>If you would like to create a GoMode community, contact one of the devs listed at the footer of this page</p>
          </div>
        </Container>
        
      </Section>
  
      
      
    </>
  );
};

export default Login;
