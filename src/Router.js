import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AutomatizationCenter from './pages/automatization_center'
import PageBuilderCreator from './pages/page_builder_creator'
import PageBuilderEditor from './pages/page_builder_editor'
import ExtensionStoreCreator from './pages/extension_store_creator'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AutomatizationCenter} exact />
        <Route
          path="/pageBuilderCreator"
          component={PageBuilderCreator}
          exact
        />
        <Route path="/pageBuilderEditor" component={PageBuilderEditor} exact />
        <Route
          path="/extensionStoreCreator"
          component={ExtensionStoreCreator}
          exact
        />
        <Route component={() => <div>Página 404</div>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
