import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AutomatizationCenter from './pages/automatization_center';
import PageBuilderCreator from './pages/page_builder_creator';
import PageBuilderEditor from './pages/page_builder_editor';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/AutomatizationCenter" component={AutomatizationCenter} exact />
      <Route path="/pageBuilderCreator" component={PageBuilderCreator} exact />
      <Route path="/pageBuilderEditor" component={PageBuilderEditor} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);