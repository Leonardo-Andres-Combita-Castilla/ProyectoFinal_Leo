import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from './pages/Home'

// devs
import Dev from './pages/Devs'
import PerfilDev from './pages/PerfilDev'

// companies
import Companies from './pages/Companies'
import PerfilCompany from './pages/PerfilCompany'


function MyRoutes () {
    return (
    <BrowserRouter>

            <Routes>

                <Route path = "/" element = {<Home/>}/>

                {/* rutas desarrolladores */}
                <Route path = "/devs" element = {<Dev/>}/>
                <Route path = "/devs/perfil/:id" element={<PerfilDev/>}/> 

                {/* rutas empresas */}
                <Route path = "/companies" element = {<Companies/>}/>
                <Route path = "/companies/perfil/:id" element={<PerfilCompany/>}/>
                
            </Routes>
    </BrowserRouter>
    )
}

export default MyRoutes
