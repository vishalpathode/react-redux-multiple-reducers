import {createStore} from 'redux'
import rootReducer from './RootReducer'



/*if you want to use 'Redux DevTool' in browser, for 
debugging then we need to use 'redux-devtools-extension'
> npm install redux-devtools-extension
This 'redux-devtools-extension' extenion can use with Middleware
> npm install redux-logger

*/
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'




//const store = createStore(rootReducer)
/* used composeWithDevTools for redux-devtool-extension for debug on browser,
    how to see ? right click- inspect element - redux 
*/
// used applyMiddleware for logs
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store