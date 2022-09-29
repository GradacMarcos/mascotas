let baseUrl = "https://dog.ceo/dog-api";

// Solicitud GET (Request).
async function get(url) {
  let result = fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("Solicitud fallida", err));

  return result;
}
