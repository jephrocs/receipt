// import React from 'react';

// export const Balance = () => {
//     return (
//         <div>
//             <h4>Balance</h4>
//             <h1>970.00</h1 >
//         </div>
//     )
// }

// export default Balance;


import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}