var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'img/logo/tot.json'
})

var animation1 = bodymovin.loadAnimation({
  container: document.getElementById('back-movin'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'img/back/tot.json'
})