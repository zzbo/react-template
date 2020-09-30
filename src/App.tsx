import React, { FC, useCallback } from 'react';
import {
  Route, Switch, BrowserRouter, RouteProps,
} from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import routePath, { RouterItem } from './router';
import './App.scss';

const App: FC = () => {
  const renderRouter = useCallback((path: RouterItem[], prefix = '') => {
    const routes: RouteProps[] = path.reduce((pre: RouteProps[], item) => {
      if (item.children && item.children.length > 0) {
        return [
          ...pre,
          ...renderRouter(item.children, prefix + item.path),
          <Route
            key={item.path}
            exact={item.exact}
            path={prefix + item.path}
            component={item.component}
          /> as RouteProps,
        ];
      }
      return [...pre, <Route
        key={item.path}
        exact={item.exact}
        path={prefix + item.path}
        component={item.component}
      />] as RouteProps[];
    }, []);
    return routes;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {renderRouter(routePath)}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
