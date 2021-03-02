// function takes as argument 2 players and returns a winner
const getWinner = (playerOne, playerTwo) => {
  if (!playerOne.points || !playerTwo.points) {
    throw new Error("Cannot calculate points");
  }

  if (playerOne.points === playerTwo.points) {
    return;
  }

  if (playerOne.points > playerTwo.points) {
    return playerOne.name;
  } else {
    return playerTwo.name;
  }
};

export default getWinner;
