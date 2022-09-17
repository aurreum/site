const content = document.getElementById('content')
const download = document.querySelector('.download')
const selectVersion = download.querySelector('.select-version')
const releaseVersion = download.getElementsByClassName('release-version')
const releaseDate = download.getElementsByClassName('release-date')
var version_date = selectVersion.options[selectVersion.selectedIndex].value
var version = version_date.split('|')[0].slice(0, 11)
var build_number = version_date.split('|')[0].slice(12, 19)
var date = version_date.split('|')[1]
for (let i = 0; i < releaseVersion.length; i++) {
  releaseVersion[i].innerText = version
  releaseDate[i].innerText = date
}

selectVersion.addEventListener('change', function (e) {
  version_date = e.target.options[e.target.selectedIndex].value
  version = version_date.split('|')[0].slice(0, 11)
  date = version_date.split('|')[1]
  for (let i = 0; i < releaseVersion.length; i++) {
    releaseVersion[i].innerText = version
    releaseDate[i].innerText = date
  }
})

document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('page-jump') === 0) {
    var params = new URLSearchParams()
    params.append('version', version)
    params.append('build_number', build_number)
    params.append('date', date)
    params.append('key', e.target.dataset.key)
    e.target.href = e.target.dataset.href + '?' + params.toString()
  }
  if (e.target.className.indexOf('click-arrow') === 0) {
    if (e.target.parentElement.dataset.show === 'true') {
      content.classList.add('content')
      e.target.parentElement.parentElement.nextElementSibling.classList.add('shield')
      e.target.classList.add('arrow-transform')
      e.target.parentElement.dataset.show = 'false'
    } else {
      content.classList.remove('content')
      e.target.parentElement.parentElement.nextElementSibling.classList.remove('shield')
      e.target.classList.remove('arrow-transform')
      e.target.parentElement.dataset.show = 'true'
    }
  }
})
