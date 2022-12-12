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
import { NavProvider } from "./utils/context/NavContext";
import { LoginProvider } from "./utils/context/loginContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Crash from "./pages/404";
import ProfilePage from "./pages/ProfilePage";
import Board from "./pages/Board";
import Post from "./pages/Post";
import CreatePost from "./components/CreatePost";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import heroTree from "./components/tree1.jpg";

library.add(fab, faPenToSquare);

const httpLink = createHttpLink({
  uri: "/graphql",
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
      <LoginProvider>
        <Router>
          <>
            <div
              className="App"
              style={{
                backgroundImage: `url(${heroTree})`,
                minHeight: `600px`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            >
              <NavProvider>
                <Navbar />
              </NavProvider>

              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Crash />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/board" element={<Board />} />
                <Route path="/createpost" element={<CreatePost />} />
                <Route path="/post/:postId" element={<Post />} />
                {/* we will refine this /post route once parts are connected */}
              </Routes>

              <Footer />
            </div>
          </>
        </Router>
      </LoginProvider>
    </ApolloProvider>
  );
}

export default App;
