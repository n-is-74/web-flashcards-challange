import React from 'react';
import Card from '../ui/Card';

function mainPage({ themes }) {
//   const [viktorinaState, setViktorinaState] = useState(viktorins);
  const viktorinsArray = themes;
  return (
    <div className="container">
      {viktorinsArray?.map((el) => <Card viktorina={el} />)}
    </div>
  );
}

export default mainPage;
