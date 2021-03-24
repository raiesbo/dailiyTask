import { Home } from './pages/home.page';
import { Calendar } from './pages/calendar.page';
import { Contact } from './pages/contact.page';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
