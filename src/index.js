import store from "./store";
import { bugAdded , bugRemoved, bugResloved} from './actionsCreator';
//first we need to think about action first and  after reducer
// const unsubscribe = store.subscribe(()=>{
//     console.log("Store changed!",store.getState())
// });

store.dispatch(bugAdded("Bug1"));
// store.dispatch(bugRemoved(1));
store.dispatch(bugResloved(1));
const unsubscribe = store.subscribe(()=>{
    console.log("Store changed!",store.getState())
});
// store.dispatch({
//     type:actions.BUG_ADDED,
//     payload:{
//         description:"Bug1"
//     }
// })

// // unsubscribe();

// store.dispatch({
//     type:actions.BUG_REMOVED,
//     payload:{
//         id:1
//     }
// })
console.log(store.getState());