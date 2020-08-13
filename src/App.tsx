import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './css/tailwind.css';
import './css/_components.css';
import './css/_palettes.css';
import './css/main.css';
import { StockPage, StockList } from "./stocks";
import PortfolioPage from "./asset/PortfolioPage";

const App = () => {
  return <>
          <Switch>
              <Route path="/stocklist" component={StockList}/>
              <Route path="/stockpage" component={StockPage}/>
              <Route path="/portfolio" component={PortfolioPage}/>
          </Switch>
  </>
}

export default App;
