(()=>{var n=document.querySelector(".trial .container"),l=n.querySelector(".trial-agree label").innerHTML.trim(),s=n.querySelector(".trial-submit button");s.addEventListener("click",function(i){let t={},e={},o=new FormData(n.querySelector(".trial-form"));if(!o.has("agree"))return;for(let r of o.entries()){if(!r[1]||r[0]==="email"&&!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{1,9})$/.test(r[1]))return;e[r[0]]=r[1]}t.rnField6={value:e.company},t.rnField5={firstName:e.firstName,lastName:e.lastName},t.rnField2={value:e.email},t.rnField7={area:e.area,phone:e.phone},t.rnField9={value:e.state},t.rnField10={selectedValue:[{value:l,amount:0,label:l}]};let a=new URLSearchParams;a.append("form_id",1),a.append("action","rednao_smart_forms_save_form_values"),a.append("formString",JSON.stringify(t)),a.append("requestUrl","https://pay.aurreum.com/2023/01/09/aurreum/"),fetch("https://pay.aurreum.com/wp-admin/admin-ajax.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a.toString(),mode:"no-cors"}).then(()=>{i.target.parentElement.previousElementSibling.style.display="block";for(let r of n.querySelector(".trial-form"))["checkbox","submit"].includes(r.type)||(r.value="")}).catch(()=>{})});})();
