const baseUrl= 'http://acnhapi.com/v1a'

export function getFossils() {
  return fetch(`${baseUrl}/fossils`)
  .then(res => res.json())
}

export function getVillagers(){
  return fetch(`${baseUrl}/villagers`)
  .then(res => res.json())
}

export function getSongs(){
  return fetch(`${baseUrl}/songs`)
  .then(res => res.json())
}