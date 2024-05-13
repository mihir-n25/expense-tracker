import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{textAlign : 'center' , padding : '0 10%'}}>
            Try Saying : <br/>
            Add {isIncome ? 'Income ' : 'Expense '}
             {isIncome ? '₹1000 ' : '₹2000 '}
             {isIncome ? 'Buisness ' : 'Sale '}
             {isIncome ? 'Monday ' : 'Wednesday '}
        </div>
    )
}

export default InfoCard;