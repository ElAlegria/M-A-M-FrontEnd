class Api {
  async ArtistInfoTryParty(Artist) {
    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${Artist}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "cecf47d4eamsh0e62e2a6e19aeadp1d4ab7jsn64992d4d4797",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Error:${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

const api = new Api();
export default api;
