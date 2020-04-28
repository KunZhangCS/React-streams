import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {    
    return (        
        <div className="ui container">            
            {/* <BrowserRouter> */}
            {/* Use plain router to create own browser history object to be used in actions, for programmatic navigation,
            BrowserRouter has its own history object which is hard to manipulate. */}
            <Router history={history}>
                <div>
                    <Header />
                    {/* Use Switch to avoid StreamCreate and StreamShow render on the same page */}
                    <Switch>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete/:id' exact component={StreamDelete} />
                    <Route path='/streams/:id' exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    ) 
}

export default App;