import { getImageAndBreed } from "./getImageAndBreed";

test("getImageAndBreed returns an ImageAndBreed object", () => {
  return getImageAndBreed().then((data) => {
    expect(typeof data.breed).toBe("string");
    expect(typeof data.imageURL).toBe("string");
  });
});
