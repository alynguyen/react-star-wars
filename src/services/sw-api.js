
export function getAllStarships() {
  return fetch(`https://swapi.co/api/starships/`)
    .then(res => res.json())
}

export async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()));
  const pilotObjects = await Promise.all(promises);
  return pilotObjects;
}