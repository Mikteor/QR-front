import React, { useEffect } from "react";
import {setAuthToken} from './components/utils/axios'
import { useDispatch } from "react-redux";

import { createBrowserHistory } from "history";
import {
  Router,
  Switch,
  Route,
  
} from "react-router-dom";
import styles from './styles/app.module.css'

import Login from './components/login/login'

import Layout from './components/layout/index'
import Header from './components/layout/header'
import Main from './pages/main'
import Winners from './pages/winners'
import History from './pages/history'
import Ndfl from './pages/ndfl'
import Statistic from './pages/statistic'
import Validation from "./pages/validation";
import { getAllUsers } from "./redux/actions/users";
import { getAllBundles } from "./redux/actions/data";

function App() {
  const dispatch = useDispatch()
  const history = createBrowserHistory();
  const token = localStorage.token
  console.log('token: ', token)

  useEffect(() => {
    setAuthToken(localStorage.token)
    if(localStorage.token){
      dispatch(getAllBundles());


    }
  }, [])


  return (
      <Router history={history}>

        {!token? <Login /> :
          <div className={styles.appGrid}>
              <div className={styles.layout}>
                <Layout histCurrent={history}  />
              </div>
              <div  className={styles.header}>
                <Header histCurrent={history}/>
              </div>
              <Switch>
                <div className={styles.main}>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/winners" component={Winners} />
                  <Route exact path="/history" component={History} />
                  <Route exact path="/ndfl" component={Ndfl} />
                  <Route exact path="/statistic" component={Statistic} />
                  <Route exact path='/validation/:link' component={Validation} />
                </div>
                  
              </Switch>
          </div>
        }
      </Router>
  );
}

export default App;
