import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import NhapThongTinVacXin from './components/nhapthongtinvacxin';

class App extends React.Component {
  render() {
    return (
        <Router>
           <Switch>
              <Route exact path = "/nhapthongtinvacxin">
                  <NhapThongTinVacXin/>
              </Route>
          </Switch>   
        </Router>
  );
}
}

export default App;