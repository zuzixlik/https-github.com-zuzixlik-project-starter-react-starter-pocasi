import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import './index.html';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/*const App = () => {
  const [dayTime, setDayTime] = useState(' ');
  const [timezone, setTimezone] = useState('Europe/Prague');
  const handleTimezoneChange (timezone) => {(select.value)}

  useEffect(() => {
    fetch(`http://worldclockapi.com/api/json/${timezone}/now`)
      .then((response) => response.json())
      .then((data) => setDaytime(data.currentDateTime));
  }, [timezone]);

  return (
    <>
      <div className="nameday">{dayTime}</div>
      <select>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">Londýn</option>
        <option value="Europe/Moscow">Moskva</option>
        <option handleTimezoneChange () value="Europe/Prague"  >Praha</option>
        <option value="Asia/Hong_Kong">Hong Kong</option>
        <option value="Asia/Jerusalem">Jeruzalém</option>
      </select>
    </>
  );
};*/

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Detail() {
  return <h2>Detail</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/detail" exact>
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

render(<App />, document.querySelector('#app'));
