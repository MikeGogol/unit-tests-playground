// tests

import getWinner from "../../Utils/getWinner";

const playerOne = {
  name: "Bartek",
  //   points: 20,
};
const playerTwo = {
  name: "Tomek",
  points: 50,
};

describe("Testing get winner function", () => {
  // it should throw if user has no points

  it("should throw if user has no points ", () => {
    expect(() => getWinner(playerOne, playerTwo)).toThrowError();
  });

  it("Should return undefined if draw", () => {
    const playerOne = {
      name: "Bartek",
      points: 20,
    };
    const playerTwo = {
      name: "Tomek",
      points: 20,
    };
    const result = getWinner(playerOne, playerTwo);
    expect(result).toBeUndefined();
  });

  it("Should return info that player 1 wins", () => {
    const playerOne = {
      name: "Bartek",
      points: 300,
    };
    const playerTwo = {
      name: "Tomek",
      points: 20,
    };
    const result = getWinner(playerOne, playerTwo);
    expect(result).toMatch("Bartek");
  });

  it("Should return info that player 2 wins", () => {
    const playerOne = {
      name: "Bartek",
      points: 10,
    };
    const playerTwo = {
      name: "Tomek",
      points: 400,
    };
    const result = getWinner(playerOne, playerTwo);
    expect(result).toMatch("Tomek");
  });
});
