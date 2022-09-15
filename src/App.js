import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import DataVis from './dataVis'
import Home from './home'
import User from './user'
import Connected from './connected'
import Edit from './EditHome'
import Input from './Input'
import { UserContext } from './UserContext'


function App()
{
    const [value,setValue]=useState(false)
return (
    <div>
    <Router>
        <UserContext.Provider value={{value,setValue}}>
        <Routes>
                <Route path='/'element={<Home />}/>
                <Route path='/data'element={<DataVis />}/>
                <Route path='/login'element={<User />}/>
                <Route path='/account'element={<Connected />}/>
                <Route path='/edit'element={<Edit />}/>
                <Route path='/input'element={<Input />}/>
        </Routes>
        </UserContext.Provider>
    </Router>
</div>

)
}

export default App;

