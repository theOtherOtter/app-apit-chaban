import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/homepage';
import Singlepage from './pages/singlepage';
import NotFound from './pages/notfound';
//import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/:id(\d+)" component={Singlepage}/>
                    <Route path="/404NotFound" component={NotFound}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
