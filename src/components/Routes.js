import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'components/Home/Home'

const Routes = (props) => {
  //console.log(props)
  
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </main>
  )
}

export default Routes
