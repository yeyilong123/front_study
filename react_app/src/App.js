import React from 'react';
import	{	BrowserRouter as	Router,	Route,	Link	}	from	"react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <h1>哈哈哈</h1>
      <Router>
        <Link to="/">首页</Link>
        <Router path="/" component={Home}></Router>
      </Router>
    </div>
  );
}

export default App;
