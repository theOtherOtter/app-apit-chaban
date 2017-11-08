import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    //Link,
} from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/homepage';
import Singlepage from './pages/singlepage';
//import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route path="/:id" component={Singlepage}/>
                    <Route path="/" exact component={Homepage}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
