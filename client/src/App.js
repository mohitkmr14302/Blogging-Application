import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Box } from '@material-ui/core';
import Header from './component/Header';
import Home from './component/home/Home';
import Detailview from './component/post/Detailview';
import Createview from './component/post/Createview';
import Updateview from './component/post/Updateview';
import About from './component/home/About';
import Contact from './component/home/ContactUs';
import Login from './component/Login'
import Register from './component/Register'
import Profile from './component/home/Profile'

function App() {
  document.title = "NITA BLOG";
  return (
    <BrowserRouter>
      
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={Detailview} />
          <Route exact path='/create' component={Createview} />
          <Route exact path='/update/:id' component={Updateview} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/userprofile' component={Profile} />
          <Route exact path='/register' component={Register} />

        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
