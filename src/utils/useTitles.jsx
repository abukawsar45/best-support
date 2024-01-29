import { useEffect } from 'react';

const useTitles = (title) => {
  useEffect(() => {
    document.title = `BestBuyApp ${title} `;
  });
};

export default useTitles;
