import asyncCall from "../../Utils/asyncCall";

describe("Testing async function", () => {
  it("Should return provided data", async () => {
    const someData = { testValue: "ValueLogic" };
    const result = await asyncCall(someData);
    expect(result).toMatchObject(someData);
  });
});
