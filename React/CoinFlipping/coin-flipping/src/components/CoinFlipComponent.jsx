import React, { useEffect } from 'react';

function CoinFlipComponent() {
  useEffect(() => {
    function tossCoin() {
      return Math.random() > 0.5 ? 'heads' : 'tails';
    }

    function fiveHeads() {
      return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        function flipCoin() {
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);

          if (result === 'heads') {
            headsCount++;
          } else {
            headsCount = 0;
          }

          if (headsCount === 5) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
          } else if (attempts > 100) {
            reject('Flipped more than 100 times without getting five heads in a row');
          } else {
            flipCoin();
          }
        }

        flipCoin();
      });
    }

    fiveHeads()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>Check the console for results.</p>
    </div>
  );
}

export default CoinFlipComponent;
