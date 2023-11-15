(()=>{var q=[{version:"3.0.44811-1.9aae84c",adps_date:"2023-10-13",adpa_date:"2023-10-13"},{version:"3.0.35274-1.f48708b",adps_date:"2022-07-01",adpa_date:"2023-02-24"}],p=(b,d,h)=>{const m=`${b}.${d}`,c=`${b}.${d}`,g=`${b.split("-")[0]}.${b.split("-")[1]}.${d}`;let e="powerlinux_",a=`${b}.${d}`,i="Ubuntu 20.04, ISO Image, ADPA ISO",j="ADPA_3.0.44811_Autoinstall_Ub20.04_amd64.iso",k=[];b==="3.0.35274-1"&&(e="",a=b.split("-")[0],i="Ubuntu 18.04, ISO Image, ADPA ISO",j="ADPA-Autoinstall-Ub18.04-amd64-v1.0.0.iso",k=["agent.Ubuntu.ppc64le","iso.Linux.amd64"]);const l=[{key:"server",value:"ADPS Server",types:{Ubuntu:[{arch:"amd64",file_title:"Ubuntu 18.04 (amd64), DEB Package, ADPS Server",file_name:"adps-server-amd64.zip"},{arch:"arm64",file_title:"Ubuntu 18.04 (arm64), DEB Package, ADPS Server",file_name:"adps-server-arm64.zip"}],CentOS:[{arch:"x86_64",file_title:"CentOS 7 (x86_64), RPM Package, ADPS Server",file_name:"adps-server-x86_64.zip"},{arch:"aarch64",file_title:"CentOS 7 (aarch64), RPM Package, ADPS Server",file_name:"adps-server-aarch64.zip"}]}},{key:"tools",value:"ADPS Tools",types:{"-":[{arch:"-",file_title:"Linux, TAR Package, ADPS tools",file_name:"adps-tools-linux.zip"}]}},{key:"agent",value:"ADPS Agent",types:{Windows:[{arch:"-",file_title:"Microsoft Windows, EXE Package, ADPS Agent",file_name:`adps_${m}.dbg.exe`}],Linux:[{arch:"x86_64",file_title:"Linux (x86_64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_x86_64.zip"},{arch:"i686",file_title:"Linux (i686), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_i686.zip"},{arch:"ia64",file_title:"Linux (ia64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ia64.zip"},{arch:"aarch64",file_title:"Linux (aarch64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_aarch64.zip"},{arch:"ppc",file_title:"Linux (x86_64), RPM Package, ADPS Agent",file_name:`adps-agent-linux_rpm_${e}ppc.zip`},{arch:"ppc64",file_title:"Linux (x86_64), RPM Package, ADPS Agent",file_name:`adps-agent-linux_rpm_${e}ppc64.zip`},{arch:"ppc64le",file_title:"Linux (x86_64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ppc64le.zip"},{arch:"s390",file_title:"Linux (aarch64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_s390.zip"},{arch:"s390x",file_title:"Linux (aarch64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_s390x.zip"}],Ubuntu:[{arch:"amd64",file_title:"Ubuntu (amd64), DEB Package, ADPS Agent",file_name:"adps-agent-linux_deb_amd64.zip"},{arch:"arm64",file_title:"Ubuntu (arm64), DEB Package, ADPS Agent",file_name:"adps-agent-linux_deb_arm64.zip"},{arch:"i686",file_title:"Ubuntu (i686), DEB Package, ADPS Agent",file_name:"adps-agent-linux_deb_i686.zip"},{arch:"ppc64le",file_title:"Ubuntu (x86_64), DEB Package, ADPS Agent",file_name:"adps-agent-linux_deb_ppc64le.zip"}],Solaris:[{arch:"x86_64",file_title:"Solaris (x86_64), GZ Package, ADPS Agent",file_name:`adps-${c}.dbg-sol10-x86_64-local.gz`},{arch:"i386",file_title:"Solaris (i386), GZ Package, ADPS Agent",file_name:`adps-${c}.dbg-sol10-i386-local.gz`},{arch:"sparc64",file_title:"Solaris (sparc64), GZ Package, ADPS Agent",file_name:`adps-${c}.dbg-sol9-sparc64-local.gz`},{arch:"sparc",file_title:"Solaris (sparc), GZ Package, ADPS Agent",file_name:`adps-${c}.dbg-sol9-sparc-local.gz`}],AIX:[{arch:"ppc64",file_title:"AIX (ppc64), RPM Package, ADPS Agent",file_name:"adps-agent-aix_rpm_ppc64.zip"},{arch:"ppc",file_title:"AIX (ppc), RPM Package, ADPS Agent",file_name:"adps-agent-aix_rpm_ppc.zip"}],HP:[{arch:"ia64",file_title:"HP (ia64), GZ Package, ADPS Agent",file_name:`adps-${g}.dbg-ia64.depot.gz`},{arch:"hppa64",file_title:"HP (hppa64), GZ Package, ADPS Agent",file_name:`adps-${g}.dbg-hppa64.depot.gz`}]}},{key:"iso",value:"APDS OS Recovery ISO",types:{Linux:[{arch:"x86_64",file_title:"Linux (x86_64), ISO Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.15.18.x86_64.iso`},{arch:"x86_64",file_title:"Linux (x86_64), ISO Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.4.228.x86_64.iso`},{arch:"x86_64",file_title:"Linux (x86_64), ISO Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~5.0.21.x86_64.iso`},{arch:"i686",file_title:"Linux (i686), ISO Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.15.18.i686.iso`},{arch:"i686",file_title:"Linux (i686), ISO Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.4.228.i686.iso`},{arch:"arm64",file_title:"Linux (arm64), ISO Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}.arm64.iso`},{arch:"amd64",file_title:"Linux (amd64), ISO Image, ADPS OS Recovery ISO",file_name:"adps_bootable_recovery-3.0.44811-1.9aae84c.dbg~nt.amd64.iso"},{arch:"amd64",file_title:"Linux (amd64), ISO Image, ADPS OS Recovery ISO",file_name:"adps_bootable_recovery-3.0.44811-1.9aae84c.dbg~nt52.amd64.iso"}]}},{key:"adpa",value:"ADPA ISO",types:{Ubuntu:[{arch:"x86_64",file_title:i,file_name:j}]}}],f=l.find(a=>a.key===h);return k.forEach(a=>{if(h===a.split(".")[0]){const b=a.split(".")[1],c=a.split(".")[2];f.types[b]=f.types[b].filter(a=>a.arch!==c)}}),f},o={versions:q,getDownloadList:p},e=new URLSearchParams(location.search),c=e.get("version"),g=e.get("build_number"),h=e.get("date"),n=e.get("key"),i=c.split("-")[0],j="https://s3.us-central-1.wasabisys.com/aurreum-repo/download/",d=document.querySelector(".download-detail .container"),l=d.querySelector(".select-system"),a=d.querySelector(".select-architecture"),f=d.querySelector(".detail-tbody"),b=o.getDownloadList(c,g,n),m,k;document.querySelector(".download-category").innerText=`Download ${b.value}`,d.querySelector(".value").innerText=h,a.add(new Option("All","All")),m=!0,fetch(`${j}${i}.json`,{method:"GET"}).then(a=>a.json()).then(d=>{k=d;for(const d in b.types)if(Object.prototype.hasOwnProperty.call(b.types,d))if(l.add(new Option(d,d)),m){for(let n=0;n<b.types[d].length;n++){let o=!1;const l=document.createElement("div"),e=b.types[d][n];(e.arch==="-"||b.types[d].length===1)&&a.remove(0),l.className="detail-item",l.setAttribute("data-arch",e.arch),f.appendChild(l),o=Array.prototype.some.call(a.options,a=>a.value===e.arch),o||a.add(new Option(e.arch,e.arch));const m=k.find(a=>a.name===e.file_name),p=m.size.replace("i",""),q=e.file_name.endsWith("depot.gz")?"depot.gz":e.file_name.split(".").pop(),r=`${j}${i}/${e.file_name}`;l.innerHTML=`
            <div class="row">
              <ul>
                <li class="content-title">${e.file_title} ${c}</li>
                <li class="content-description">File Size: ${p}</li>
                <li class="content-description">File Type: ${q}</li>
              </ul>
              <div class="download-button">
                <button type="button" class="btn text-nowrap button-download" data-href="${r}">
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
                    <div class="content-title col-lg-4">Name:</div>
                    <div class="content-text col-lg-8">${e.file_name}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-4">Release Date:</div>
                    <div class="content-text col-lg-8">${h}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-4">Build Number:</div>
                    <div class="content-text col-lg-8">${g}</div>
                  </div>
                </div>
                <div class="right-more">
                  <div class="right-description">
                    <div class="description-title">${e.file_title} ${c}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-3">MD5SUM:</div>
                    <div class="content-text col-lg-9">${m.md5_sum}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-3">SHA256SUM:</div>
                    <div class="content-text col-lg-9">${m.sha256_sum}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-3">SHA512SUM:</div>
                    <div class="content-text col-lg-9">${m.sha512_sum}</div>
                  </div>
                </div>
              </div>
            </div>`}m=!1}}).catch(()=>{console.error}),l.addEventListener("change",d=>{f.innerHTML="",a.options.length=0,a.add(new Option("All","All"));for(let n=0;n<b.types[d.target.value].length;n++){let o=!1;const l=document.createElement("div"),e=b.types[d.target.value][n];(e.arch==="-"||b.types[d.target.value].length===1)&&a.remove(0),l.className="detail-item",l.setAttribute("data-arch",e.arch),f.appendChild(l),o=Array.prototype.some.call(a.options,a=>a.value===e.arch),o||a.add(new Option(e.arch,e.arch));const m=k.find(a=>a.name===e.file_name),p=m.size.replace("i",""),q=e.file_name.endsWith("depot.gz")?"depot.gz":e.file_name.split(".").pop(),r=`${j}${i}/${e.file_name}`;l.innerHTML=`
    <div class="row">
      <ul>
        <li class="content-title">${e.file_title} ${c}</li>
        <li class="content-description">File Size: ${p}</li>
        <li class="content-description">File Type: ${q}</li>
      </ul>
      <div class="download-button">
        <button type="button" class="btn text-nowrap button-download" data-href="${r}">
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
            <div class="content-title col-lg-4">Name:</div>
            <div class="content-text col-lg-8">${e.file_name}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-4">Release Date:</div>
            <div class="content-text col-lg-8">${h}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-4">Build Number:</div>
            <div class="content-text col-lg-8">${g}</div>
          </div>
        </div>
        <div class="right-more">
          <div class="right-description">
            <div class="description-title">${e.file_title} ${c}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-3">MD5SUM:</div>
            <div class="content-text col-lg-9">${m.md5_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-3">SHA256SUM:</div>
            <div class="content-text col-lg-9">${m.sha256_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-3">SHA512SUM:</div>
            <div class="content-text col-lg-9">${m.sha512_sum}</div>
          </div>
        </div>
      </div>
    </div>`}}),a.addEventListener("change",b=>{const a=document.getElementsByClassName("detail-item");if(b.target.value==="All")for(let b=0;b<a.length;b++)a[b].style.display="block";else for(let c=0;c<a.length;c++)a[c].style.display="none",b.target.value===a[c].dataset.arch&&(a[c].style.display="block")}),document.addEventListener("click",a=>{if(a.target.className.indexOf("button-more")===0&&(a.target.style.display="none",a.target.nextElementSibling.style.display="block"),a.target.className.indexOf("close")===0&&(a.target.parentElement.style.display="none",a.target.parentElement.previousElementSibling.style.display="initial"),a.target.className.indexOf("button-download")===16){const c=a.target.dataset.href,b=document.createElement("div");b.innerHTML=`<form id="download-form" style="display:none" action="${c}"></form>`,document.body.appendChild(b),document.getElementById("download-form").submit(),document.body.removeChild(b)}})})()