(()=>{var h=new URLSearchParams(location.search),d=h.get("version"),e=h.get("build_number"),j=h.get("date"),q=h.get("key"),f=`${d}.${e}`,a=d.split("-")[0],o=d.split("-")[1],k=[{key:"server",value:"ADPS Server",types:{Ubuntu:[{arch:"amd64",file_title:"Ubuntu 18.04 (amd64), DEB Package, ADPS Server",file_name:"adps-server-ubuntu18.04-amd64.zip"},{arch:"arm64",file_title:"Ubuntu 18.04 (arm64), DEB Package, ADPS Server",file_name:"adps-server-ubuntu18.04-arm64.zip"}],CentOS:[{arch:"x86_64",file_title:"CentOS 7 (x86_64), RPM Package, ADPS Server",file_name:"adps-server-centos7.x-x86_64.zip"},{arch:"aarch64",file_title:"CentOS 7 (aarch64), RPM Package, ADPS Server",file_name:"adps-server-centos7.x-aarch64.zip"}]}},{key:"tools",value:"ADPS Tools",types:{"-":[{arch:"-",file_title:"Linux, TAR  Package, ADPS tools",file_name:"adps-tools-linux.zip"}]}},{key:"agent",value:"ADPS Agent",types:{Windows:[{arch:"-",file_title:"Microsoft Windows, EXE Package, ADPS Agent",file_name:`adps_${f}.dbg.exe`}],Linux:[{arch:"x86_64",file_title:"Linux (x86_64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_x86_64.zip"},{arch:"i686",file_title:"Linux (i686), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_i686.zip"},{arch:"ia64",file_title:"Linux (ia64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ia64.zip"},{arch:"aarch64",file_title:"Linux (aarch64), RPMPackage, ADPS Agent",file_name:"adps-agent-linux_rpm_aarch64.zip"},{arch:"ppc",file_title:"Linux (x86_64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ppc.zip"},{arch:"ppc64",file_title:"Linux (x86_64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ppc64.zip"},{arch:"ppc64le",file_title:"Linux (x86_64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ppc64le.zip"},{arch:"s390",file_title:"Linux (aarch64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_s390.zip"},{arch:"s390x",file_title:"Linux (aarch64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_s390x.zip"}],Ubuntu:[{arch:"amd64",file_title:"Ubuntu  (amd64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_deb_amd64.zip"},{arch:"arm64",file_title:"Ubuntu (arm64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_deb_arm64.zip"},{arch:"i686",file_title:"Ubuntu (i686), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_deb_i686.zip"}],Solaris:[{arch:"x86_64",file_title:"Solaris (x86_64), GZ  Package, ADPS Agent",file_name:`adps-${f}.dbg-sol10-x86_64-local.gz`},{arch:"i386",file_title:"Solaris (i386), GZ  Package, ADPS Agent",file_name:`adps-${f}.dbg-sol10-i386-local.gz`},{arch:"sparc64",file_title:"Solaris (sparc64), GZ Package, ADPS Agent",file_name:`adps-${f}.dbg-sol9-sparc64-local.gz`},{arch:"sparc",file_title:"Solaris (sparc), GZ Package, ADPS Agent",file_name:`adps-${f}.dbg-sol9-sparc-local.gz`}],AIX:[{arch:"ppc64",file_title:"AIX (ppc64), RPM  Package, ADPS Agent",file_name:"adps-agent-aix_rpm_ppc64.zip"},{arch:"ppc",file_title:"AIX (ppc), RPM  Package, ADPS Agent",file_name:"adps-agent-aix_rpm_ppc.zip"}],HP:[{arch:"ia64",file_title:"HP (ia64), GZ  Package, ADPS Agent",file_name:`adps-${a}.${o}.${e}.dbg-ia64.depot.gz`},{arch:"hppa64",file_title:"HP (hppa64), GZ  Package, ADPS Agent",file_name:`adps-${a}.${o}.${e}.dbg-hppa64.depot.gz`}]}},{key:"iso",value:"APDS OS Recovery ISO",types:{Linux:[{arch:"x86_64",file_title:"Linux (x86_64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.15.18.x86_64.iso`},{arch:"x86_64",file_title:"Linux (x86_64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.4.228.x86_64.iso`},{arch:"x86_64",file_title:"Linux (x86_64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~5.0.21.x86_64.iso`},{arch:"i686",file_title:"Linux (i686) , ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.15.18.i686.iso`},{arch:"i686",file_title:"Linux (i686) , ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}~4.4.228.i686.iso`},{arch:"arm64",file_title:"Linux (arm64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${a}.arm64.iso`}]}},{key:"adpa",value:"ADPA ISO",types:{Ubuntu:[{arch:"x86_64",file_title:"Ubuntu 18.04, ISO  Image, ADPA ISO",file_name:"ADPS-Autoinstall-Ub18.04-amd64-v1.0.0.iso",download_url:"https://s3.us-central-1.wasabisys.com/adps/ADPS-Autoinstall-Ub18.04-amd64-v1.0.0.iso"}]}}],c,m,g,n,b,i,p,l;for(let a=0;a<k.length;a++)if(q===k[a].key){c=k[a];break}m="https://repo.aurreum.com",g=document.querySelector(".download-detail .container"),n=g.querySelector(".select-system"),b=g.querySelector(".select-architecture"),i=g.querySelector(".detail-tbody"),document.querySelector(".download-category").innerText=`Download ${c.value}`,g.querySelector(".value").innerText=j,b.add(new Option("All","All")),p=!0,fetch(`/json/${d}.json`,{method:"GET"}).then(a=>a.json()).then(f=>{l=f;for(const f in c.types)if(Object.prototype.hasOwnProperty.call(c.types,f))if(n.add(new Option(f,f)),p){for(let n=0;n<c.types[f].length;n++){let o=!1;const k=document.createElement("div"),g=c.types[f][n];(g.arch==="-"||c.types[f].length===1)&&b.remove(0),k.className="detail-item",k.setAttribute("data-arch",g.arch),i.appendChild(k),o=Array.prototype.some.call(b.options,a=>a.value===g.arch),o||b.add(new Option(g.arch,g.arch));const h=l.find(a=>a.name===g.file_name),p=h.size.endsWith("GB")?h.size:`${parseInt(h.size)} MB`,q=g.file_name.endsWith("depot.gz")?"depot.gz":g.file_name.split(".").pop(),r=g.download_url||`${m}/download/${a}/${g.file_name}`;k.innerHTML=`
            <div class="row">
              <ul>
                <li class="content-title">${g.file_title} ${d}</li>
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
                    <div class="content-text col-lg-8">${g.file_name}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-4">Release Date:</div>
                    <div class="content-text col-lg-8">${j}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-4">Build Number:</div>
                    <div class="content-text col-lg-8">${e}</div>
                  </div>
                </div>
                <div class="right-more">
                  <div class="right-description">
                    <div class="description-title">${g.file_title} ${d}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-2">MD5SUM:</div>
                    <div class="content-text col-lg-10">${h.md5_sum}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-2">SHA1SUM:</div>
                    <div class="content-text col-lg-10">${h.sha1_sum}</div>
                  </div>
                  <div class="content-line row">
                    <div class="content-title col-lg-2">SHA256SUM:</div>
                    <div class="content-text col-lg-10">${h.sha256_sum}</div>
                  </div>
                </div>
              </div>
            </div>`}p=!1}}).catch(()=>{console.error}),n.addEventListener("change",f=>{i.innerHTML="",b.options.length=0,b.add(new Option("All","All"));for(let n=0;n<c.types[f.target.value].length;n++){let o=!1;const k=document.createElement("div"),g=c.types[f.target.value][n];(g.arch==="-"||c.types[f.target.value].length===1)&&b.remove(0),k.className="detail-item",k.setAttribute("data-arch",g.arch),i.appendChild(k),o=Array.prototype.some.call(b.options,a=>a.value===g.arch),o||b.add(new Option(g.arch,g.arch));const h=l.find(a=>a.name===g.file_name),p=h.size.endsWith("GB")?h.size:`${parseInt(h.size)} MB`,q=g.file_name.endsWith("depot.gz")?"depot.gz":g.file_name.split(".").pop(),r=g.download_url||`${m}/download/${a}/${g.file_name}`;k.innerHTML=`
    <div class="row">
      <ul>
        <li class="content-title">${g.file_title} ${d}</li>
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
            <div class="content-text col-lg-8">${g.file_name}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-4">Release Date:</div>
            <div class="content-text col-lg-8">${j}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-4">Build Number:</div>
            <div class="content-text col-lg-8">${e}</div>
          </div>
        </div>
        <div class="right-more">
          <div class="right-description">
            <div class="description-title">${g.file_title} ${d}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">MD5SUM:</div>
            <div class="content-text col-lg-10">${h.md5_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">SHA1SUM:</div>
            <div class="content-text col-lg-10">${h.sha1_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">SHA256SUM:</div>
            <div class="content-text col-lg-10">${h.sha256_sum}</div>
          </div>
        </div>
      </div>
    </div>`}}),b.addEventListener("change",b=>{const a=document.getElementsByClassName("detail-item");if(b.target.value==="All")for(let b=0;b<a.length;b++)a[b].style.display="block";else for(let c=0;c<a.length;c++)a[c].style.display="none",b.target.value===a[c].dataset.arch&&(a[c].style.display="block")}),document.addEventListener("click",a=>{if(a.target.className.indexOf("button-more")===0&&(a.target.style.display="none",a.target.nextElementSibling.style.display="block"),a.target.className.indexOf("close")===0&&(a.target.parentElement.style.display="none",a.target.parentElement.previousElementSibling.style.display="initial"),a.target.className.indexOf("button-download")===16){const c=a.target.dataset.href,b=document.createElement("div");b.innerHTML=`<form id="download-form" style="display:none" action="${c}"></form>`,document.body.appendChild(b),document.getElementById("download-form").submit(),document.body.removeChild(b)}})})()