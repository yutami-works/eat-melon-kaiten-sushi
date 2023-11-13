const countEatMelon = (lines) => {
  const diskNum = Number(lines[0]);
  let eatMelon = 0;
  let throughDisk = 0;
  let eating = false;

  for (let i = 1; i <= diskNum; i++) {
    if (eating) {
      // 食べてる時は皿をスルーすることしかできない
      throughDisk += 1;
      if (throughDisk === 10) {
        // 10皿スルーは食べ終わりの合図
        eating = false;
        throughDisk = 0;
      }
    } else {
      if (lines[i] === 'melon') {
        // 皿がメロンなら食事モードへ以降
        eatMelon += 1;
        eating = true;
      }
    }
  }

  return eatMelon;
}

const case1 = [
'15',
'melon',
'ikura',
'sake',
'kappa',
'maguro',
'melon',
'uni',
'toro',
'ebi',
'amaebi',
'tamagoyaki',
'ika',
'anago',
'melon',
'hamachi'
];

const case2 = [
'20',
'katsuo',
'toro',
'maguro',
'katsuo',
'akagai',
'kisu',
'madai',
'katsuo',
'hokkigai',
'madai',
'uni',
'negitoro',
'hirame',
'iwashi',
'amaebi',
'iwashi',
'kisu',
'kani',
'hatahata',
'tai'
];

/* main */
const result = countEatMelon(case1);
console.log(result);