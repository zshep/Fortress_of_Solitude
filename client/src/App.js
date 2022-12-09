import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavProvider } from "./utils/NavContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Crash from "./pages/404";
import ProfilePage from "./pages/ProfilePage";
import Board from "./pages/Board";
import Post from "./pages/Post";
import CreatePost from "./components/CreatePost";

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
            <NavProvider>
              <Navbar />
            </NavProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Crash />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/board" element={<Board />} />
              <Route path="/post" element={<Post />} />
              <Route path="/createpost" element={<CreatePost />} />
              {/* we will refine this /post route once parts are connected */}
            </Routes>
            <Footer />
          </div>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
