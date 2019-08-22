const toText = (response: Response) => response.text()

export function fetchShaders() {
  const vert = fetch('shaders/vertex.hlsl').then(toText)
  const frag = fetch('shaders/fragment.hlsl').then(toText)
  return Promise.all([vert, frag])
}
