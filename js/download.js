const download = document.querySelector('.download .container')
const selectVersion = download.querySelector('.download-select .form-select')
const releaseVersion = download.getElementsByClassName('release-version')
const releaseDate = download.getElementsByClassName('release-date')
let version_date = selectVersion.options[selectVersion.selectedIndex].value
let version = version_date.split('|')[0].slice(0, 11)
let build_number = version_date.split('|')[0].slice(12, 19)
let date = version_date.split('|')[1]
Array.prototype.forEach.call(releaseVersion, (item, index) => {
  item.innerText = version
  releaseDate[index].innerText = date
})

selectVersion.addEventListener('change', function (e) {
  version_date = e.target.options[e.target.selectedIndex].value
  version = version_date.split('|')[0].slice(0, 11)
  date = version_date.split('|')[1]
  Array.prototype.forEach.call(releaseVersion, (item, index) => {
    item.innerText = version
    releaseDate[index].innerText = date
  })
})

document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('page-jump') === 0) {
    let params = new URLSearchParams()
    params.append('version', version)
    params.append('build_number', build_number)
    params.append('date', date)
    params.append('key', e.target.dataset.key)
    e.target.href = e.target.dataset.href + '?' + params.toString()
  }
  if (e.target.className.indexOf('click-arrow') === 0) {
    if (e.target.parentElement.dataset.show === 'true') {
      e.target.parentElement.parentElement.nextElementSibling.classList.add('shield')
      e.target.classList.add('arrow-transform')
      e.target.parentElement.dataset.show = 'false'
    } else {
      e.target.parentElement.parentElement.nextElementSibling.classList.remove('shield')
      e.target.classList.remove('arrow-transform')
      e.target.parentElement.dataset.show = 'true'
    }
  }
})
