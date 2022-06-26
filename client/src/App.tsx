import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import EditClient from "./pages/EditClient";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allClients: {
          merge(_, incoming) {
            return incoming;
          },
        },
        allProjects: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="projects/:id" element={<Project />}></Route>
              <Route path="/client/edit/:id" element={<EditClient />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
