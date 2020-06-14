import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router";

import {Home} from "./Components/Home/Home";
import {ScheduleCreator} from "./Components/ScheduleConstructor/ScheduleCreator/ScheduleCreator";
import {ScheduleEditor} from "./Components/ScheduleConstructor/ScheduleEditor/ScheduleEditor";
import {UserSchedules} from "./Components/UserSchedules/UserSchedules";
import {Login} from "./Components/Auth/Login/Login";
import {SignUp} from "./Components/Auth/Signup/SignUp";
import {withRedirect} from "./HOC/redirect";

let App = (props) => {
  return (
    <div className="app">
      <Header />
      <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/createSchedule" render={() => <ScheduleCreator />} />
          <Route path="/scheduleEditor" render={() => <ScheduleEditor />} />
          <Route path="/mySchedules" render={() => <UserSchedules />} />
      </Switch>
    </div>
  );
}


export default App;
