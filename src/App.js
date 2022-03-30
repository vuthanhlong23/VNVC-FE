import React from 'react';

class App extends React.Component {
  render() {
    return (
        <Router>
           <Switch>
              <Route exact path = "/customer/login">
                  <CustomerLogin />
              </Route>
          </Switch>   
        </Router>
  );
}
}

export default App;