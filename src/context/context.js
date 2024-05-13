import React , {createContext, useReducer} from 'react';
import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactionss')) || [[
    {
      "amount": 5000,
      "category": "Other",
      "type": "Expense",
      "date": "2024-03-09",
      "id": "7b00348b-d2d7-4bdb-a0da-4835eadccc1b"
    },
    {
      "amount": 2000,
      "category": "Food",
      "type": "Expense",
      "date": "2024-03-18",
      "id": "082b9e05-1d10-47d2-8449-e28c839e0cdb"
    },
    {
      "amount": 3000,
      "category": "Shopping",
      "type": "Expense",
      "date": "2024-03-13",
      "id": "d0d0d95e-8387-4457-b88a-dd98efc6a024"
    },
    {
      "amount": 2000,
      "category": "Investments",
      "type": "Income",
      "date": "2024-03-06",
      "id": "ef50a045-f430-43ed-b693-c1fcb9ea3eca"
    },
    {
      "amount": 13000,
      "category": "Salary",
      "type": "Income",
      "date": "2024-03-18",
      "id": "f2af5335-404f-43b8-acb9-86ad1af13581"
    },
    {
      "amount": 9000,
      "category": "Rental income",
      "type": "Income",
      "date": "2024-03-18",
      "id": "11fb900c-e8ee-4449-9a70-00c7c71893ab"
    }
  ]];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions , dispatch] = useReducer(contextReducer , initialState );

    const deleteTransaction = (id) => dispatch({ type : 'DELETE_TRANSACTION' , payload : id})
    const addTransaction = (transaction) => dispatch({ type : 'ADD_TRANSACTION' , payload : transaction})

    const balance = transactions.reduce((acc , currVal) => {
        return(currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    } , 0);

    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}