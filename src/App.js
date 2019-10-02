import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuctionList from "./components/AuctionList";
import Auction from "./components/Auction";
import TopAppBar from "./components/TopAppBar";

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/auctions">Auctions</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auctions">
            <TopAppBar />
            <AuctionList />
          </Route>
          <Route path="/auction">
            <TopAppBar />
            <Auction />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
