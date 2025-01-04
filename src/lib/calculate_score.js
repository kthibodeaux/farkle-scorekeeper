function tally(array) {
  return array.reduce((map, item) => {
    map.set(item, (map.get(item) || 0) + 1);
    return map;
  }, new Map());
}

const calculateScore = function(dice) {
  let score = 0

  // six of a kind
  if (dice.length === 6 && new Set(dice).size === 1) {
    score += 3000
    dice = []
  }

  // two triplets
  if (dice.length === 6 && new Set(dice).size === 2) {
    const map = tally(dice)
    const [key1, key2] = Array.from(map.keys())
    if (map.get(key1) === 3 && map.get(key2) === 3) {
      score += 2500
      dice = []
    }
  }

  // four of a kind plus a pair
  if (dice.length === 6 && new Set(dice).size === 2) {
    const map = tally(dice)
    const [key1, key2] = Array.from(map.keys())
    if (map.get(key1) === 4 && map.get(key2) === 2) {
      score += 1500
      dice = []
    }
  }

  // three pairs
  if (dice.length === 6 && new Set(dice).size === 3) {
    const map = tally(dice)
    if (Array.from(map.values()).every(v => v === 2)) {
      score += 1500
      dice = []
    }
  }

  // straight
  if (dice.length === 6 && new Set(dice).size === 6) {
    score += 1500
    dice = []
  }

  // five of a kind
  const fiveOfAKind = dice.find(d => dice.filter(x => x === d).length === 5)
  if (fiveOfAKind) {
    score += 2000
    dice = dice.filter(d => d !== fiveOfAKind)
  }

  // four of a kind
  const fourOfAKind = dice.find(d => dice.filter(x => x === d).length === 4)
  if (fourOfAKind) {
    score += 1000
    dice = dice.filter(d => d !== fourOfAKind)
  }

  // three of a kind
  const threeOfAKind = dice.find(d => dice.filter(x => x === d).length === 3)
  if (threeOfAKind) {
    if (threeOfAKind === 1) {
      score += 300
    } else {
      score += threeOfAKind * 100
    }
    dice = dice.filter(d => d !== threeOfAKind)
  }

  // one
  score += dice.filter(d => d === 1).length * 100
  dice = dice.filter(d => d !== 1)

  // five
  score += dice.filter(d => d === 5).length * 50
  dice = dice.filter(d => d !== 5)

  return score
}

export default calculateScore
