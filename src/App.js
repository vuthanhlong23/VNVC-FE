import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import NhapThongTinVacXin from './components/nhapthongtinvacxin';
import Trangchu from './components/trangchu';
import Datmuavacxin1 from './components/datmuavx1';
import NhapThongTinVacXin_KHKTT from './components/nhapthongtinvacxin_khktt';
import NhapThongTinVacXin_KHTT from './components/nhapthongtinvacxin_khtt';
import Thanhtoan from './components/thanhtoan';
import DangKyThanhVien from './components/dangkythanhvien';

class App extends React.Component {
  render() {
    return (
        <Router>
           <Switch>
              <Route exact path = "/nhapthongtinvacxin">
                  <Header/>
                  <NhapThongTinVacXin/>
              </Route>
              <Route exact path = "/trangchu">
                  <Trangchu/>
              </Route>
              <Route exact path = "/datmuavacxin1">
                  <Header/>
                  <Datmuavacxin1/>
              </Route>
              <Route exact path = "/nhapthongtinvacxin_khktt">
                  <Header/>
                  <NhapThongTinVacXin_KHKTT/>
              </Route>
              <Route exact path = "/nhapthongtinvacxin_khtt">
                  <Header/>
                  <NhapThongTinVacXin_KHTT/>
              </Route>
              <Route exact path = "/thanhtoan">
                  <Header/>
                  <Thanhtoan/>
              </Route>
              <Route exact path = "/dangkythanhvien">
                  <Header/>
                  <DangKyThanhVien/>
              </Route>
          </Switch>   
        </Router>
  );
}
}

export default App;