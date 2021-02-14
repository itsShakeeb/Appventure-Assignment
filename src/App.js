import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SubCategory1 from "./components/SubCategory/SubCategory1";
import SubCategory2 from "./components/SubCategory/SubCategory2";
import SubCategory3 from "./components/SubCategory/SubCategory3";
import SubCategory4 from "./components/SubCategory/SubCategory4";
import SubCategory5 from "./components/SubCategory/SubCategory5";
function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/subcategory1' component={SubCategory1} />
          <Route exact path='/subcategory2' component={SubCategory2} />
          <Route exact path='/subcategory3' component={SubCategory3} />
          <Route exact path='/subcategory4' component={SubCategory4} />
          <Route exact path='/subcategory5' component={SubCategory5} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
