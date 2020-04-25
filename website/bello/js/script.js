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

var index_cont_btn = 1;

function switchBackground() {
   if (index_cont_btn == 1) {
      var cont = document.getElementById("cont-btn");
      cont.className = "bg-orange";
      index_cont_btn = 0;
   }
   else {
      var cont = document.getElementById("cont-btn");
      cont.className = "bg-orange";
      index_cont_btn = 1;
   }
}

setInterval(switchBackground(), 2000);