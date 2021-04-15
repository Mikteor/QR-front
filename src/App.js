import { createBrowserHistory } from "history";
import {
  Router,
  Switch,
  Route,
  
} from "react-router-dom";
import styles from './styles/app.module.css'

import Layout from './components/layout/index'
import Main from './pages/main'
import Winners from './pages/winners'
import History from './pages/history'
import Ndfl from './pages/ndfl'
import Statistic from './pages/statistic'

function App() {
  const history = createBrowserHistory();
  
  return (
      <Router history={history}>
        <div className={styles.appGrid}>
            <Layout histCurrent={history} className={styles.layout} />
            <Switch>
              <div className={styles.main}>
                <Route exact path="/" component={Main} />
                <Route exact path="/winners" component={Winners} />
                <Route exact path="/history" component={History} />
                <Route exact path="/ndfl" component={Ndfl} />
                <Route exact path="/statistic" component={Statistic} />
              </div>
                
            </Switch>
        </div>
      
      </Router>
  );
}

export default App;
