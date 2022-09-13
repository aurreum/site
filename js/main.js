// search form
document.querySelector('.search-icon').addEventListener('click', function (e) {
  document.querySelector('.search-group input').style.display = 'block'
  document.querySelector('.search-group button').style.display = 'block'

  document.querySelector('.search-icon').style.display = 'none'
  e.stopPropagation()
})

document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('search-content') === -1) {
    document.querySelector('.search-group input').style.display = 'none'
    document.querySelector('.search-group button').style.display = 'none'

    document.querySelector('.search-icon').style.display = 'block'
  }
})

// products hover
var timer
document.getElementsByClassName('nav-item')[0].addEventListener('mouseenter', function (e) {
  var name = e.target.className
  if (name === 'nav-item') {
    if (timer) clearTimeout(timer)
    e.target.children[1].style.display = 'block'
    document.getElementsByClassName('nav-item')[0].children[0].style.color = '#0a58ca'
    document.getElementsByClassName('nav-item')[0].style.cursor = 'pointer'
    document.getElementsByClassName('tab-pane')[0].style.display = 'block'
  }
})
document.getElementsByClassName('tab-pane')[0].addEventListener('mouseenter', function () {
  if (timer) clearTimeout(timer)
})

document.getElementsByClassName('nav-item')[0].addEventListener('mouseleave', function (e) {
  if (e.target.className.indexOf('nav-item') !== -1) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      e.target.children[1].style.display = 'none'
      document.getElementsByClassName('nav-item')[0].children[0].style.color = '#64758d'
      document.getElementsByClassName('tab-pane')[0].style.display = 'none'
      timer = null
    }, 200)
  }
})
document.getElementsByClassName('tab-pane')[0].addEventListener('mouseleave', function (e) {
  if (e.target.className.indexOf('tab-pane') !== -1) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      document.getElementsByClassName('division')[0].style.display = 'none'
      document.querySelector('.tab-pane').style.display = 'none'
      timer = null
    }, 200)
    document.getElementsByClassName('nav-item')[0].children[0].style.color = '#64758d'
  }
})
