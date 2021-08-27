import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* 모든 페이지에 공통으로 노출됨 */}
        <Switch>
          {/* url에 따라 각각 다른 페이지를 보여준다. 
          exact 생략시 일치하는 첫번째 결과 보여줌 */}
          <Route exact path="/">
            <DayList />
          </Route>
          {/* day라는 변수로 / 뒤의 값을 얻을 수 있다.*/}
          <Route path="/day/:day">
            <Day />
          </Route>
          {/* 모든 패스 조건에 일치하지 않는 경우 */}
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
