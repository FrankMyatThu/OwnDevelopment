import api from "./api";

export const ACTION_TYPES = {
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

export const fetchall = () => dispatch => {

    api.dCandidate().fetchAll()    
    .then(
        Response => {
            dispatch({
                type : ACTION_TYPES.FETCH_ALL,
                payload : Response.data
            })
        }
    )
    .catch(err => console.log(err))
        
}