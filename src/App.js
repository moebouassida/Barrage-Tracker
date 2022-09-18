import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import DataVis from './dataVis'
import Home from './home'
import User from './user'
import Connected from './connected'
import Edit from './EditHome'
import Input from './Input'
import Enregistrement  from'./Enregistrement'
import { UserContext } from './UserContext'


function App()
{
    const [value,setValue]=useState(false)
    useEffect(() => {
        const handleTabClose = event => {
          event.preventDefault();
          localStorage.removeItem('username');
          localStorage.removeItem('token');
          setValue(false);
        };
    
        window.addEventListener('beforeunload', handleTabClose);
    
        return () => {
          window.removeEventListener('beforeunload', handleTabClose);
        };
      }, []);
return (
    <div>
    <Router>
        <UserContext.Provider value={{value,setValue}}>
        <Routes>
                <Route path='/'element={<Home />}/>
                <Route path='/data'element={<DataVis />}/>
                <Route path='/login'element={<User />}/>
                <Route path='/account'element={<Connected />}/>
                <Route path='/input'element={<Input />}/>
                <Route path='/edit'element={<Edit />}/>
                <Route path='/enregistrement'element={<Enregistrement />}/>

        </Routes>
        </UserContext.Provider>
    </Router>
</div>

)
}

export default App;

