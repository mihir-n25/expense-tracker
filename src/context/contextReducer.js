//Reducer is a function that takes in the old state , and an action and gives new state.

const contextReducer = (state , action) => {
    let transactions;

  switch(action.type){
    case 'DELETE_TRANSACTION' : 
     transactions = state.filter((t) => t.id !== action.payload);

     localStorage.setItem("transactionss" , JSON.stringify(transactions))

    return transactions;
    case "ADD_TRANSACTION" : 
    transactions = [action.payload , ...state];

    localStorage.setItem("transactionss" , JSON.stringify(transactions))
    
     return transactions;
    default : 
    return state;
  }
  }

export default contextReducer;