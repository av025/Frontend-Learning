import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import App from './App.jsx'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* React-redux also provide Provider component so we can use our store in all component as GlobalContext and it has prop store in which we pass store data  */}
    <Provider store={store}>

    <App />
    </Provider>
  </StrictMode>,
)
