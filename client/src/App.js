import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import Crash from './pages/404'

import Button from "./components/Button";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={{/* landing page */}} />
            <Route path="*" element={<Crash />} />
          </Routes>

          <Button /> {/*Should move these into pages me thinks?*/}
          <ProfilePic />
          <Footer />
        </div>
        </>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
