import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';

const App = () => {
    return (
    <div>
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Landing} />
                <Route exact path="/" component={About} />
                <Route exact path="/" component={Shop}/>
            </div>
        </BrowserRouter>

    </div>
    )
};

export default App;