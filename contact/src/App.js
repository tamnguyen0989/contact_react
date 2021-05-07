import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import { GlobalProvider } from './context/Provider';
import routes from './routes/base.routes'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Switch>
            {
              routes.map((route, index) => (
                <Route
                  path={route.path}
                  exact
                  render={(props) => <route.component {...props} />}
                  key={index}
                />
              ))
            }
          </Switch>
        </Router>
      </GlobalProvider>

    </div>
  );
}

export default App;
