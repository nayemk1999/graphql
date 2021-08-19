import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { onError } from "@apollo/client/link/error";
import AllData from "./Components/AllData/AllData";
import Episode from "./Components/AllData/Episode/Episode";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <AllData />
          </Route>
          <Route path='/home'>
            <AllData />
          </Route>
          <Route path='/episode-page'>
            <Episode />
          </Route>
        </Switch>
      </Router>

    </ApolloProvider>
  );
}

export default App;
