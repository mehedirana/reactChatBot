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
                
            </div>
        </BrowserRouter>

    </div>
    )
};

export default App;