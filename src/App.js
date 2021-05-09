import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Posts from './components/Posts';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/posts/:slug'/>
        <Route component={Posts} path='/posts'/>
        <Route component={Projects} path='/projects'/>
        <Route component={About} path='/about'/>
      </Switch>
    </BrowserRouter>
  );

};

export default App;
