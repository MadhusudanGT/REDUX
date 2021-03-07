// import {BUG_ADDED,BUG_REMOVE} from "./actionTypes";
import * as actions from "./actionTypes";

let lastId=0;

export default function reducer(state = [],action){
    // if(action.type===actions.BUG_ADDED)
    //     return [
    //         ...state, 
    //         {
    //             id:++lastId,
    //             description:action.payload.description,
    //             resolved:false
    //         }
    //     ];
      
    //     else if(action.type ===actions.BUG_REMOVED)
    //         return state.filter(bug=>bug.id !== action.payload.id);
    //         return state;

    // else if(action.type===actions.BUG_RESLOVED)
    // return state.map(bug => bug.id !== action.payload.id ? bug :
    //     {...bug,resolved:true})

        switch(action.type){
            case actions.BUG_ADDED:
                return [
                    ...state, 
                    {
                        id:++lastId,
                        description:action.payload.description,
                        resolved:false
                    }
                ];
            case actions.BUG_REMOVED:
                return state.filter(bug=>bug.id !== action.payload.id);
                return state;
            case actions.BUG_RESLOVED:
                return state.map(bug => bug.id !== action.payload.id ? bug :
                        {...bug,resolved:true})
                        default:
                            return state;
        }
}