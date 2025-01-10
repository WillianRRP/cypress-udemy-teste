/// <reference types="cypress"/>

it("A external test...", () => {});

describe("Shold group tests", () => {
  describe("Shold group more specific tests", () => {
    it("A specefic test...", () => {});
  }),
    describe("Shold group more specific tests 2", () => {
      it.skip("A specefic test 2...", () => {});
    }),
    it("A internal test...", () => {});
});