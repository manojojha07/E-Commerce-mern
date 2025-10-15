
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  <ShopContextProvider>
    <StrictMode>
<App />
    </StrictMode>
     
   </ShopContextProvider> 
   </BrowserRouter>, 
 )
