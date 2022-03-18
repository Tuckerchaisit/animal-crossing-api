const baseUrl= 'http://acnhapi.com/v1a'

export function getFossils() {
  return fetch(`${baseUrl}/fossils`)
  .then(res => res.json())
}