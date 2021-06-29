import sub from "../dist"

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

describe("Test", () => {
  test("basic", () => {
    expect(sub("Hello World", 0, true, 2, true)).toBe("Hello");
  });

  test("next word", () => {
    expect(sub(lorem, 0, true, 22, true)).toBe("Lorem ipsum dolor sit amet");
  });

  test("prev word", () => {
    expect(sub(lorem, 0, false, 22, false)).toBe("Lorem ipsum dolor sit");
  });

  test("with zero and next word", () => {
    expect(sub(lorem, 0, false, 0, true)).toBe("");
  });

  test("with zero - one and next word", () => {
    expect(sub(lorem, 0, false, 1, true)).toBe("Lorem");
  });

  test("with zero and prev word", () => {
    expect(sub(lorem, 0, false, 0, false)).toBe("");
  });

  test("trim on whitespace", () => {
    expect(sub(lorem, 0, false, 6, false)).toBe("Lorem");
  });

  test("with start", () => {
    expect(sub(lorem, 1, true, 6, false)).toBe("");
  });

  test("with start and end mid word", () => {
    expect(sub(lorem, 1, true, 9, true)).toBe("ipsum");
  });

  test("with start > end follows the spec of substring, so they get swapped", () => {
    expect(sub(lorem, 9, true, 1, true)).toBe("ipsum");
  });
});