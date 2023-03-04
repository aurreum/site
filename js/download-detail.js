(()=>{var _=new URLSearchParams(location.search),o=_.get("version"),p=_.get("build_number"),g=_.get("date"),$=_.get("key"),u=o+"."+p,i=o.split("-")[0],x=o.split("-")[1],h=[{key:"server",value:"ADPS Server",types:{Ubuntu:[{arch:"amd64",file_title:"Ubuntu 18.04 (amd64), DEB Package, ADPS Server",file_name:"adps-server-ubuntu18.04-amd64.zip"},{arch:"arm64",file_title:"Ubuntu 18.04 (arm64), DEB Package, ADPS Server",file_name:"adps-server-ubuntu18.04-arm64.zip"}],CentOS:[{arch:"x86_64",file_title:"CentOS 7 (x86_64), RPM Package, ADPS Server",file_name:"adps-server-centos7.x-x86_64.zip"},{arch:"aarch64",file_title:"CentOS 7 (aarch64), RPM Package, ADPS Server",file_name:"adps-server-centos7.x-aarch64.zip"}]}},{key:"tools",value:"ADPS Tools",types:{"-":[{arch:"-",file_title:"Linux, TAR  Package, ADPS tools",file_name:"adps-tools-linux.zip"}]}},{key:"agent",value:"ADPS Agent",types:{Windows:[{arch:"-",file_title:"Microsoft Windows, EXE Package, ADPS Agent",file_name:`adps_${u}.dbg.exe`}],Linux:[{arch:"x86_64",file_title:"Linux (x86_64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_x86_64.zip"},{arch:"i686",file_title:"Linux (i686), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_i686.zip"},{arch:"ia64",file_title:"Linux (ia64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ia64.zip"},{arch:"aarch64",file_title:"Linux (aarch64), RPMPackage, ADPS Agent",file_name:"adps-agent-linux_rpm_aarch64.zip"},{arch:"ppc",file_title:"Linux (x86_64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ppc.zip"},{arch:"ppc64",file_title:"Linux (x86_64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ppc64.zip"},{arch:"ppc64le",file_title:"Linux (x86_64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_ppc64le.zip"},{arch:"s390",file_title:"Linux (aarch64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_s390.zip"},{arch:"s390x",file_title:"Linux (aarch64), RPM Package, ADPS Agent",file_name:"adps-agent-linux_rpm_s390x.zip"}],Ubuntu:[{arch:"amd64",file_title:"Ubuntu  (amd64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_deb_amd64.zip"},{arch:"arm64",file_title:"Ubuntu (arm64), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_deb_arm64.zip"},{arch:"i686",file_title:"Ubuntu (i686), RPM  Package, ADPS Agent",file_name:"adps-agent-linux_deb_i686.zip"}],Solaris:[{arch:"x86_64",file_title:"Solaris (x86_64), GZ  Package, ADPS Agent",file_name:`adps-${u}.dbg-sol10-x86_64-local.gz`},{arch:"i386",file_title:"Solaris (i386), GZ  Package, ADPS Agent",file_name:`adps-${u}.dbg-sol10-i386-local.gz`},{arch:"sparc64",file_title:"Solaris (sparc64), GZ Package, ADPS Agent",file_name:`adps-${u}.dbg-sol9-sparc64-local.gz`},{arch:"sparc",file_title:"Solaris (sparc), GZ Package, ADPS Agent",file_name:`adps-${u}.dbg-sol9-sparc-local.gz`}],AIX:[{arch:"ppc64",file_title:"AIX (ppc64), RPM  Package, ADPS Agent",file_name:"adps-agent-aix_rpm_ppc64.zip"},{arch:"ppc",file_title:"AIX (ppc), RPM  Package, ADPS Agent",file_name:"adps-agent-aix_rpm_ppc.zip"}],HP:[{arch:"ia64",file_title:"HP (ia64), GZ  Package, ADPS Agent",file_name:`adps-${i}.${x}.${p}.dbg-ia64.depot.gz`},{arch:"hppa64",file_title:"HP (hppa64), GZ  Package, ADPS Agent",file_name:`adps-${i}.${x}.${p}.dbg-hppa64.depot.gz`}]}},{key:"iso",value:"APDS OS Recovery ISO",types:{Linux:[{arch:"x86_64",file_title:"Linux (x86_64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${i}~4.15.18.x86_64.iso`},{arch:"x86_64",file_title:"Linux (x86_64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${i}~4.4.228.x86_64.iso`},{arch:"x86_64",file_title:"Linux (x86_64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${i}~5.0.21.x86_64.iso`},{arch:"i686",file_title:"Linux (i686) , ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${i}~4.15.18.i686.iso`},{arch:"i686",file_title:"Linux (i686) , ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${i}~4.4.228.i686.iso`},{arch:"arm64",file_title:"Linux (arm64), ISO  Image, ADPS OS Recovery ISO",file_name:`adps_bootable_recovery-${i}.arm64.iso`}]}}],r;for(let t=0;t<h.length;t++)if($==h[t].key){r=h[t];break}var A="https://repo.aurreum.com",f=document.querySelector(".download-detail .container"),b=f.querySelector(".select-system"),n=f.querySelector(".select-architecture"),S=f.querySelector(".detail-tbody");document.querySelector(".download-category").innerText="Download "+r.value;f.querySelector(".value").innerText=g;n.add(new Option("All","All"));var y=!0,P;fetch(`/json/${o}.json`,{method:"GET"}).then(t=>t.json()).then(t=>{P=t;for(let s in r.types)if(b.add(new Option(s,s)),y){for(let d=0;d<r.types[s].length;d++){var l=!1,a=document.createElement("div"),e=r.types[s][d];e.arch==="-"&&n.remove(0),a.className="detail-item",a.setAttribute("data-arch",e.arch),S.appendChild(a),l=Array.prototype.some.call(n.options,m=>m.value===e.arch),l||n.add(new Option(e.arch,e.arch));var c=P.find(m=>m.name===e.file_name);if(e.file_name.endsWith("depot.gz"))var v="depot.gz";else var v=e.file_name.split(".").pop();a.innerHTML=`
        <div class="row">
          <ul>
            <li class="content-title">${e.file_title} ${o}</li>
            <li class="content-description">File Size: ${parseInt(c.size)} MB</li>
            <li class="content-description">File Type: ${v}</li>
          </ul>
          <div class="download-button">
            <button type="button" class="btn text-nowrap button-download" data-href="${A}/download/${i}/${e.file_name}">
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
                <div class="content-text col-lg-8">${g}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-4">Build Number:</div>
                <div class="content-text col-lg-8">${p}</div>
              </div>
            </div>
            <div class="right-more">
              <div class="right-description">
                <div class="description-title">${e.file_title} ${o}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-2">MD5SUM:</div>
                <div class="content-text col-lg-10">${c.md5_sum}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-2">SHA1SUM:</div>
                <div class="content-text col-lg-10">${c.sha1_sum}</div>
              </div>
              <div class="content-line row">
                <div class="content-title col-lg-2">SHA256SUM:</div>
                <div class="content-text col-lg-10">${c.sha256_sum}</div>
              </div>
            </div>
          </div>
        </div>`}y=!1}}).catch(t=>{});b.addEventListener("change",function(t){S.innerHTML="",n.options.length=0,n.add(new Option("All","All"));for(let s=0;s<r.types[t.target.value].length;s++){var l=!1,a=document.createElement("div"),e=r.types[t.target.value][s];e.arch==="-"&&n.remove(0),a.className="detail-item",a.setAttribute("data-arch",e.arch),S.appendChild(a),l=Array.prototype.some.call(n.options,d=>d.value===e.arch),l||n.add(new Option(e.arch,e.arch));var c=P.find(d=>d.name===e.file_name);if(e.file_name.endsWith("depot.gz"))var v="depot.gz";else var v=e.file_name.split(".").pop();a.innerHTML=`
    <div class="row">
      <ul>
        <li class="content-title">${e.file_title} ${o}</li>
        <li class="content-description">File Size: ${parseInt(c.size)}MB</li>
        <li class="content-description">File Type: ${v}</li>
      </ul>
      <div class="download-button">
        <button type="button" class="btn text-nowrap button-download" data-href="${A}/download/${i}/${e.file_name}">
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
            <div class="content-text col-lg-8">${g}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-4">Build Number:</div>
            <div class="content-text col-lg-8">${p}</div>
          </div>
        </div>
        <div class="right-more">
          <div class="right-description">
            <div class="description-title">${e.file_title} ${o}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">MD5SUM:</div>
            <div class="content-text col-lg-10">${c.md5_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">SHA1SUM:</div>
            <div class="content-text col-lg-10">${c.sha1_sum}</div>
          </div>
          <div class="content-line row">
            <div class="content-title col-lg-2">SHA256SUM:</div>
            <div class="content-text col-lg-10">${c.sha256_sum}</div>
          </div>
        </div>
      </div>
    </div>`}});n.addEventListener("change",function(t){var l=document.getElementsByClassName("detail-item");if(t.target.value==="All")for(let a=0;a<l.length;a++)l[a].style.display="block";else for(let a=0;a<l.length;a++)l[a].style.display="none",t.target.value===l[a].dataset.arch&&(l[a].style.display="block")});document.addEventListener("click",function(t){if(t.target.className.indexOf("button-more")===0&&(t.target.style.display="none",t.target.nextElementSibling.style.display="block"),t.target.className.indexOf("close")===0&&(t.target.parentElement.style.display="none",t.target.parentElement.previousElementSibling.style.display="initial"),t.target.className.indexOf("button-download")===16){var l=t.target.dataset.href,a=document.createElement("div");a.innerHTML=`<form id="download-form" style="display:none" action="${l}"></form>`,document.body.appendChild(a),document.getElementById("download-form").submit(),document.body.removeChild(a)}});})();
