import {useHistory} from 'react-router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import { GlobalProvider } from './context/Provider';
import routes from './routes/base.routes'
import isAuthenticated from './utils/isAuthenticated';

const RenderRoute = (route) => {
  const history = useHistory()
  if(route.needsAuth && !isAuthenticated()){
    history.push('/auth/login')
  }
  window.document.title = route.title || 'TrulyContacts'
  return <Route
    path={route.path}
    exact
    render={(props) => <route.component {...props} />}
  />
}

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Switch>
            {
              routes.map((route, index) => (
                <RenderRoute key={index} {...route} />
              ))
            }
          </Switch>
        </Router>
      </GlobalProvider>

    </div>
  );
}

export default App;
