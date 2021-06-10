import { useState } from 'react';

export const useCalculatePrice = () => {
  const [data, setData] = useState(0);

  const obtainPrice = (quantity, price) => {
    setData(data => data + parseFloat(quantity * price));
  }

  return [data, obtainPrice];
}