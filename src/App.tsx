import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
// import {
//   Route, Switch, BrowserRouter, RouteProps,
// } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import * as actions from '@/redux/action_creator';
// import { SystemProps } from '@/redux/types';
import { useTypedSelector } from '@/redux/reducer';
import './App.scss';

const App: FC = () => {
  const { getUserInfo } = actions;
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <div className="main" onClick={() => { dispatch(getUserInfo()); }}>
        Main
      </div>
      <Footer />
    </div>
  );
};

export default App;
