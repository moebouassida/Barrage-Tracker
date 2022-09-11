import React from 'react'

import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import DataVis from './dataVis'
import Home from './home'
import User from './user'
import Connected from './connected'
import Edit from './editHome'


ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <Router>
            <Routes>
                <Route path='/'element={<Home />}/>
                <Route path='/data'element={<DataVis />}/>
                <Route path='/login'element={<User />}/>
                <Route path='/account'element={<Connected />}/>
                <Route path='/edit'element={<Edit />}/>
            </Routes>
        </Router>
    </div>

)

