require("dotenv").config();
import RingSDK from "../../src/lib/ringSDK";
var ring = new RingSDK();

test("get all movies from getAllMovies()", async () => {
  const result = await ring.getAllMovies();
  console.log("ID: " + result.docs[0]._id);
  console.log("Name: " + result.docs[0].name);

  expect(result.docs.length).toBeGreaterThan(0);
});

test("get movie by id with getMovieById()", async () => {
  const movieId = process.env.MOVIE_ID;
  const result = await ring.getMovieById(movieId);
  console.log("ID: " + result.docs[0]._id);
  console.log("Name: " + result.docs[0].name);

  expect(result.docs.length).toBeGreaterThan(0);
});

test("get movie quotes by id with getMovieQuotesById()", async () => {
  const movieId = process.env.MOVIE_ID;
  const result = await ring.getMovieQuotesById(movieId);
  console.log("ID: " + result.docs[0]._id);
  console.log("Dialog: " + result.docs[0].dialog);

  expect(result.docs.length).toBeGreaterThan(0);
});