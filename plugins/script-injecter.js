export default ({ app: { head, router, context } }, inject) => {
  head.scripts.push({
    src: 'http(s)://example.com/script.js',
    async: false,
    defer: true
  })
};