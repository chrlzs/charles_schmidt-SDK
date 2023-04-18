import RingSDK from "../src/lib/ringSDK";

const ring = new RingSDK({
    accessToken: "Rjw-Ly35cRWJnnNZ_jH2"
});

async function getLOTRMovieTitles() {
    const result = await ring.getAllMovies();
    console.log("Name: " + result.docs[0].name);
    return result.docs[0].name;
  }


  getLOTRMovieTitles();
