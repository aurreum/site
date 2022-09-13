const selectVersion = document.getElementsByTagName('select')[0]
const release_version = document.getElementsByClassName('release-version')
const release_date = document.getElementsByClassName('release-date')
const content = document.getElementById('content')
var version_date = selectVersion.options[selectVersion.selectedIndex].value
var version = version_date.split('|')[0].slice(0, 11)
var build_number = version_date.split('|')[0].slice(12, 19)
var date = version_date.split('|')[1]
for (let i = 0; i < release_version.length; i++) {
  release_version[i].innerText = version
  release_date[i].innerText = date
}

selectVersion.addEventListener('change', function (e) {
  version_date = e.target.options[e.target.selectedIndex].value
  version = version_date.split('|')[0].slice(0, 11)
  date = version_date.split('|')[1]
  for (let i = 0; i < release_version.length; i++) {
    release_version[i].innerText = version
    release_date[i].innerText = date
  }
})

document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('page-jump') === 0 ) {
    e.target.href = e.target.dataset.href + '?version=' + version + '&build_number=' + build_number + '&date=' + date + '&key=' + e.target.dataset.key
  }
  if (e.target.className.indexOf('click-arrow') === 0) {
    if (e.target.parentElement.dataset.show === 'true') {
      content.style.paddingBottom = '86px'
      e.target.parentElement.parentElement.nextElementSibling.style.display = 'none'
      e.target.style.transform = 'rotate(-90deg)'
      e.target.parentElement.dataset.show = 'false'
    } else {
      content.style.paddingBottom = 0
      e.target.parentElement.parentElement.nextElementSibling.style.display = 'block'
      e.target.style.transform = ''
      e.target.parentElement.dataset.show = 'true'
    }
  }
})
