import { formatName } from "./formatName";

test("formatName capitalises names and rearranges names when longer than one word", () => {
  expect(formatName("dachshund")).toBe("Dachshund");
  expect(formatName("shepherd-german")).toBe("German Shepherd");
});
