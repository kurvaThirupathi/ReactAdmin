export const reducer = (state,action) => {
    switch(action.type){
       case "LOGIN":
         return {
            ...state,
            isLoggedIn:action.payload
         }

       
    }

}