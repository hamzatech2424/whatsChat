import React from 'react'
import MainNavigation from './src/Navigations/mainNavigation'
import { Provider } from "react-redux";
import Store from './src/Redux/Store'

const App = () => {

  return (
    <React.Fragment>
      <Provider store={Store}>
        <MainNavigation />
      </Provider>
    </React.Fragment>
  )
}

export default App