import { describe, expect, test } from "@jest/globals";
import { sum } from "./examplefn";
import path from "path";

describe("Example test - sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
