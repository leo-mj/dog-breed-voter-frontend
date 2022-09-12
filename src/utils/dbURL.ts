export const dataBaseURL =
  process.env.NODE_ENV === "production"
    ? "https://dog-breed-voter.herokuapp.com"
    : "http://localhost:4000";
