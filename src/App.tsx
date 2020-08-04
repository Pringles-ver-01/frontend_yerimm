import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { OpinionRegister, OpinionList, OpinionDetail } from "./opinion";
import './css/tailwind.css';
import './css/components/buttons.css'
import {StockPage} from "./stocks";

const App = () => {
  return <>
          <Switch>
              <Route path="/opinionList" component={OpinionList}/>
              <Route path="/opinionRegister" component={OpinionRegister}/>
              <Route path="/opinionDetail" component={OpinionDetail}/>
              <Route path="/stockpage" component={StockPage}/>
          </Switch>
  </>
}

export default App;
