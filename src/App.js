import React from "react"
// import { Routes, Route } from "react-router-dom"
import { Switch, Redirect, Route } from "react-router-dom"

import Home from "./pages/Home"
import News from "./pages/News"
import Todo from "./pages/Todo"
import HeaderNavbar from "./components/navbar"

function App() {
  return (
    <div className="App">
      {/* 2 */}
      <HeaderNavbar />
      <Switch>
        {/* <Redirect from="/home" to="/" /> */}
        {/* <Redirect from="/home" to="/" exact /> */}
        {/* <Redirect from="/nhom7-list/:newId" to="/nhom777/:newId" exact /> */}

        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/todo" component={Todo} />
      </Switch>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/todo" element={<Todo />} />
      </Routes> */}
    </div>
  )
}

export default App
