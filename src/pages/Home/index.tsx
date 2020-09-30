import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '@/redux/action_creator';
import { useTypedSelector } from '@/redux/reducer';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';

const Home: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const jump = useCallback((page) => {
    history.push(`/${page}/${new Date().getTime()}`);
  }, []);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const sysData = useTypedSelector((state) => state.sysData);

  console.log('sysData', sysData);

  return (
    <div className="home">
      <h1>page Home</h1>
      <Link className="menu" to={{ pathname: '/A' }}>AAA</Link>
      <button className="menu" type="button" onClick={() => jump('B')}>BBB</button>
    </div>
  );
};

export default Home;
