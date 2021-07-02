export default function (to, from, savedPosition) {
  if (from.name === 'associations' && to.name === 'associations')
    return {
      selector: 'header',
      offset: { x: 0, y: -64 },
      behavior: 'smooth',
    }
  else return { x: 0, y: 0 }
}
