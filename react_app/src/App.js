import React from 'react';
import	{	
  BrowserRouter as	Router,
  Route,
  Link,
	Switch}	from	"react-router-dom";
import Home from './components/Home'
import A from './components/A'
import B from './components/B'

function App() {
  return (
    <div className="App">
      <h1>哈哈哈</h1>
      <Router>
        <Link to="/">首页</Link>
        ----
        <Link to="/a">A页面</Link>
        ----
        <Link to="/b/124">带参页面</Link>
        
        {/* <Switch>
          <Route path="/a" component={A}></Route>
          <Route path="/" component={Home}></Route>
        </Switch> */}

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/a" component={A}></Route>
          <Route exact path="/b/:id" component={B}></Route>

      </Router>
    </div>
  );
}

export default App;
