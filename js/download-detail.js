//页面传参并筛选数据
var url_params = new URLSearchParams(location.search)
var param_version = url_params.get('version')
var param_build_number = url_params.get('build_number')
var param_date = url_params.get('date')
var param_key = url_params.get('key')
var version_buildnumber = param_version + '.' + param_build_number
var version = param_version.split('-')[0]
var version_number = param_version.split('-')[1]
var list = [
  {
    key: 'server',
    value: 'ADPS Server',
    types: {
      Ubuntu: [
        {
          arch: 'amd64',
          file_title: 'Ubuntu 18.04 (amd64), DEB Package, ADPS Server',
          file_name: 'adps-server-ubuntu18.04-amd64.zip'
        },
        {
          arch: 'arm64',
          file_title: 'Ubuntu 18.04 (arm64), DEB Package, ADPS Server',
          file_name: 'adps-server-ubuntu18.04-arm64.zip'
        }
      ],
      CentOS: [
        {
          arch: 'x86_64',
          file_title: 'CentOS 7 (x86_64), RPM Package, ADPS Server',
          file_name: 'adps-server-centos7.x-x86_64.zip'
        },
        {
          arch: 'aarch64',
          file_title: 'CentOS 7 (aarch64), RPM Package, ADPS Server',
          file_name: 'adps-server-centos7.x-aarch64.zip'
        }
      ]
    }
  },
  {
    key: 'tools',
    value: 'ADPS Tools',
    types: {
      '-': [
        {
          arch: '-',
          file_title: 'Linux, TAR  Package, ADPS tools',
          file_name: 'adps-tools-linux.zip'
        }
      ]
    }
  },
  {
    key: 'agent',
    value: 'ADPS Agent',
    types: {
      Windows: [
        {
          arch: '-',
          file_title: 'Microsoft Windows, EXE Package, ADPS Agent',
          file_name: `adps_${version_buildnumber}.dbg.exe`
        }
      ],
      Linux: [
        {
          arch: 'x86_64',
          file_title: 'Linux (x86_64), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_x86_64.zip'
        },
        {
          arch: 'i686',
          file_title: 'Linux (i686), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_i686.zip'
        },
        {
          arch: 'ia64',
          file_title: 'Linux (ia64), RPM Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_ia64.zip'
        },
        {
          arch: 'aarch64',
          file_title: 'Linux (aarch64), RPMPackage, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_aarch64.zip'
        },
        {
          arch: 'ppc',
          file_title: 'Linux (x86_64), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_ppc.zip'
        },
        {
          arch: 'ppc64',
          file_title: 'Linux (x86_64), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_ppc64.zip'
        },
        {
          arch: 'ppc64le',
          file_title: 'Linux (x86_64), RPM Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_ppc64le.zip'
        },
        {
          arch: 's390',
          file_title: 'Linux (aarch64), RPM Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_s390.zip'
        },
        {
          arch: 's390x',
          file_title: 'Linux (aarch64), RPM Package, ADPS Agent',
          file_name: 'adps-agent-linux_rpm_s390x.zip'
        }
      ],
      Ubuntu: [
        {
          arch: 'amd64',
          file_title: 'Ubuntu  (amd64), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-linux_deb_amd64.zip'
        },
        {
          arch: 'arm64',
          file_title: 'Ubuntu (arm64), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-linux_deb_arm64.zip'
        },
        {
          arch: 'i686',
          file_title: 'Ubuntu (i686), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-linux_deb_i686.zip'
        }
      ],
      Solaris: [
        {
          arch: 'x86_64',
          file_title: 'Solaris (x86_64), GZ  Package, ADPS Agent',
          file_name: `adps-${version_buildnumber}.dbg-sol10-x86_64-local.gz`
        },
        {
          arch: 'i386',
          file_title: 'Solaris (i386), GZ  Package, ADPS Agent',
          file_name: `adps-${version_buildnumber}.dbg-sol10-i386-local.gz`
        },
        {
          arch: 'sparc64',
          file_title: 'Solaris (sparc64), GZ Package, ADPS Agent',
          file_name: `adps-${version_buildnumber}.dbg-sol9-sparc64-local.gz`
        },
        {
          arch: 'sparc',
          file_title: 'Solaris (sparc), GZ Package, ADPS Agent',
          file_name: `adps-${version_buildnumber}.dbg-sol9-sparc-local.gz`
        }
      ],
      AIX: [
        {
          arch: 'ppc64',
          file_title: 'AIX (ppc64), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-aix_rpm_ppc64.zip'
        },
        {
          arch: 'ppc',
          file_title: 'AIX (ppc), RPM  Package, ADPS Agent',
          file_name: 'adps-agent-aix_rpm_ppc.zip'
        }
      ],
      HP: [
        {
          arch: 'ia64',
          file_title: 'HP (ia64), GZ  Package, ADPS Agent',
          file_name: `adps-${version}.${version_number}.${param_build_number}.dbg-ia64.depot.gz`
        },
        {
          arch: 'hppa64',
          file_title: 'HP (hppa64), GZ  Package, ADPS Agent',
          file_name: `adps-${version}.${version_number}.${param_build_number}.dbg-hppa64.depot.gz`
        }
      ]
    }
  },
  {
    key: 'iso',
    value: 'APDS OS Recovery ISO',
    types: {
      Linux: [
        {
          arch: 'x86_64',
          file_title: 'Linux (x86_64), ISO  Image, ADPS OS Recovery ISO',
          file_name: `adps_bootable_recovery-${version}~4.15.18.x86_64.iso`
        },
        {
          arch: 'x86_64',
          file_title: 'Linux (x86_64), ISO  Image, ADPS OS Recovery ISO',
          file_name: `adps_bootable_recovery-${version}~4.4.228.x86_64.iso`
        },
        {
          arch: 'x86_64',
          file_title: 'Linux (x86_64), ISO  Image, ADPS OS Recovery ISO',
          file_name: `adps_bootable_recovery-${version}~5.0.21.x86_64.iso`
        },
        {
          arch: 'i686',
          file_title: 'Linux (i686) , ISO  Image, ADPS OS Recovery ISO',
          file_name: `adps_bootable_recovery-${version}~4.15.18.i686.iso`
        },
        {
          arch: 'i686',
          file_title: 'Linux (i686) , ISO  Image, ADPS OS Recovery ISO',
          file_name: `adps_bootable_recovery-${version}~4.4.228.i686.iso`
        },
        {
          arch: 'arm64',
          file_title: 'Linux (arm64), ISO  Image, ADPS OS Recovery ISO',
          file_name: `adps_bootable_recovery-${version}.arm64.iso`
        }
      ]
    }
  }
]

var list_data
for (let i = 0; i < list.length; i++) {
  if (param_key == list[i].key) {
    list_data = list[i]
    break
  }
}

//获取json数据并初始化页面
const detail = document.querySelector('.download-detail .container')
const select_system = detail.querySelector('.select-system')
const select_architecture = detail.querySelector('.select-architecture')
const detail_body = detail.querySelector('.detail-tbody')
detail.querySelector('.download-category').innerText = list_data.value
detail.querySelector('.value').innerText = param_date
select_architecture.add(new Option('All', 'All'))
var is_default = true
var json_data
fetch(`/json/${param_version}.json`, {
  method: 'GET'
}).then(res => res.json())
.then(data => {
  json_data = data
  for (let p in list_data.types) {
    select_system.add(new Option(p, p))
    if (is_default) {
      for (let i = 0; i < list_data.types[p].length; i++) {
        var exist_option = false
        var detail_item = document.createElement('div')
        var operating_system = list_data.types[p][i]
        if (operating_system.arch === '-') {
          select_architecture.remove(0)
        }
        detail_item.className = 'detail-item'
        detail_item.setAttribute('data-arch', operating_system.arch)
        detail_body.appendChild(detail_item)
        for (let j = 0; j < select_architecture.options.length; j++) {
          if (operating_system.arch === select_architecture.options[j].value) {
            exist_option = true
          }
        }
        if (!exist_option) {
          select_architecture.add(new Option(operating_system.arch, operating_system.arch))
        }
        var package_item = json_data.find(item => item.name === operating_system.file_name)
        detail_item.innerHTML = `
        <div class="row">
          <ul>
            <li class="content-title">${operating_system.file_title} ${param_version}</li>
            <li class="content-description">File size: ${parseInt(package_item.size)} MB</li>
            <li class="content-description">File Type: ${operating_system.file_name.split('.').pop()}</li>
          </ul>
          <div class="download-button">
            <button type="button" class="btn text-nowrap button-download" data-href="https://repo.aurreum.com/download/${version}/${operating_system.file_name}">
              DOWNLOAD NOW
            </button>
          </div>
        </div>
        <a href="javascript:void(0);" class="button-more">Read More</a>
        <div class="content-more">
          <button type="button" class="close">&times;</button>
          <div class="d-flex">
            <div class="left-more">
              <div class="content-line row">
                <div class="content-title col-lg-3">Name:</div>
                <div class="content-text col-lg-9">${operating_system.file_name}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-3">Release Date:</div>
                <div class="content-text col-lg-9">${param_date}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-3">Build Number:</div>
                <div class="content-text col-lg-9">${param_build_number}</div>
              </div>
            </div>
            <div class="right-more">
              <div class="right-description">
                <div class="description-title">${operating_system.file_title} ${param_version}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-2">MD5SUM:</div>
                <div class="content-text col-lg-10">${package_item.md5_sum}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-2">SHA1SUM:</div>
                <div class="content-text col-lg-10">${package_item.sha1_sum}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-2 d-flex">SHA256SUM:</div>
                <div class="content-text col-lg-10 d-flex">${package_item.sha256_sum}</div>
              </div>
            </div>
          </div>
        </div>`
      }
      is_default = false
    }
  }
})
.catch(e => {
  console.log(e)
})

//添加select变化事件
select_system.addEventListener('change', function (e) {
  detail_body.innerHTML = ''
  select_architecture.options.length = 0
  select_architecture.add(new Option('All', 'All'))
  for (let i = 0; i < list_data.types[e.target.value].length; i++) {
    var exist_option = false
    var detail_item = document.createElement('div')
    var operating_system = list_data.types[e.target.value][i]
    if (operating_system.arch === '-') {
      select_architecture.remove(0)
    }
    detail_item.className = 'detail-item'
    detail_item.setAttribute('data-arch', operating_system.arch)
    detail_body.appendChild(detail_item)
    for (let j = 0; j < select_architecture.options.length; j++) {
      if (operating_system.arch === select_architecture.options[j].value) {
        exist_option = true
      }
    }
    if (!exist_option) {
      select_architecture.add(new Option(operating_system.arch, operating_system.arch))
    }
    var package_item = json_data.find(item => item.name === operating_system.file_name)
    detail_item.innerHTML = `
    <div class="row">
      <ul>
        <li class="content-title">${operating_system.file_title} ${param_version}</li>
        <li class="content-description">File size: ${parseInt(package_item.size)}MB</li>
        <li class="content-description">File Type: ${operating_system.file_name.split('.').pop()}</li>
      </ul>
      <div class="download-button">
        <button type="button" class="btn text-nowrap button-download" data-href="https://repo.aurreum.com/download/${version}/${operating_system.file_name}">
          DOWNLOAD NOW
        </button>
      </div>
    </div>
    <a href="javascript:void(0);" class="button-more">Read More</a>
    <div class="content-more">
      <button type="button" class="close">&times;</button>
      <div class="d-flex">
        <div class="left-more">
          <div class="content-line row">
            <div class="content-title col-lg-3">Name:</div>
            <div class="content-text col-lg-9">${operating_system.file_name}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-3">Release Date:</div>
            <div class="content-text col-lg-9">${param_date}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-3">Build Number:</div>
            <div class="content-text col-lg-9">${param_build_number}</div>
          </div>
        </div>
        <div class="right-more">
          <div class="right-description">
            <div class="description-title">${operating_system.file_title} ${param_version}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">MD5SUM:</div>
            <div class="content-text col-lg-10">${package_item.md5_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">SHA1SUM:</div>
            <div class="content-text col-lg-10">${package_item.sha1_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2 d-flex">SHA256SUM:</div>
            <div class="content-text col-lg-10 d-flex">${package_item.sha256_sum}</div>
          </div>
        </div>
      </div>
    </div>`
  }
})
select_architecture.addEventListener('change', function(e) {
  var detail_items = document.getElementsByClassName('detail-item')
  if (e.target.value === 'All') {
    for (let i = 0; i < detail_items.length; i++) {
      detail_items[i].style.display = 'block'
    }
  } else {
    for (let i = 0; i < detail_items.length; i++) {
      detail_items[i].style.display = 'none'
      if (e.target.value === detail_items[i].dataset.arch) {
        detail_items[i].style.display = 'block'
      }
    }
  }
})

//添加button点击下载事件
document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('button-more') === 0) {
    e.target.style.display = 'none'
    e.target.nextElementSibling.style.display = 'block'
  }
  if (e.target.className.indexOf('close') === 0) {
    e.target.parentElement.style.display = 'none'
    e.target.parentElement.previousElementSibling.style.display = 'initial'
  }
  if (e.target.className.indexOf('button-download') === 16) {
    var download_url = e.target.dataset.href
    var download_form = document.createElement('div')
    download_form.innerHTML = `<form id="download-form" style="display:none" action="${download_url}"></form>`
    document.body.appendChild(download_form)
    document.getElementById('download-form').submit()
    document.body.removeChild(download_form)
  }
})
