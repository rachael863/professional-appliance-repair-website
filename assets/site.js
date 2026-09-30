(function(){
  var menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navLinks");
  menuBtn.addEventListener("click",function(){var open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open));menuBtn.setAttribute("aria-label",open?"Close menu":"Open menu")});
  nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nav.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")})});

  var callDialog=document.getElementById("callDialog"),closeDialog=callDialog.querySelector(".dialog-close"),lastTrigger=null;
  function openDialog(e){e.preventDefault();lastTrigger=e.currentTarget;callDialog.classList.add("open");closeDialog.focus()}
  function hideDialog(){callDialog.classList.remove("open");if(lastTrigger){lastTrigger.focus()}}
  document.querySelectorAll(".call-trigger").forEach(function(b){b.addEventListener("click",openDialog)});
  closeDialog.addEventListener("click",hideDialog);
  callDialog.addEventListener("click",function(e){if(e.target===callDialog){hideDialog()}});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&callDialog.classList.contains("open")){hideDialog()}});
  document.getElementById("dialogRequest").addEventListener("click",function(){callDialog.classList.remove("open")});

  var appliance=document.getElementById("appliance"),zip=document.getElementById("zip");
  function moveToRequest(applianceValue,zipValue){if(applianceValue){appliance.value=applianceValue}if(zipValue){zip.value=zipValue}document.getElementById("request").scrollIntoView({behavior:"smooth"});setTimeout(function(){appliance.focus()},500)}
  document.querySelectorAll(".service-card").forEach(function(card){card.addEventListener("click",function(){moveToRequest(card.getAttribute("data-appliance"),"")})});
  document.getElementById("quickForm").addEventListener("submit",function(e){e.preventDefault();var a=document.getElementById("quickAppliance"),z=document.getElementById("quickZip");if(!a.value||!/^[0-9]{5}$/.test(z.value)){if(!a.value){a.focus()}else{z.focus()}return}moveToRequest(a.value,z.value)});

  document.getElementById("zipForm").addEventListener("submit",function(e){e.preventDefault();var v=document.getElementById("areaZip").value,s=document.getElementById("zipStatus");var covered=["70001","70002","70003","70004","70005","70006","70032","70043","70053","70054","70055","70056","70057","70058","70062","70065","70072","70114","70115","70116","70117","70118","70119","70122","70123","70124","70131"];if(!/^[0-9]{5}$/.test(v)){s.textContent="Enter a valid 5-digit ZIP code.";s.style.color="#a33320";return}if(covered.indexOf(v)>-1){s.textContent="Yes — "+v+" is in the listed service area. Diagnostic visits start at $129 plus tax; a ZIP-based travel charge may apply and will be confirmed before booking.";s.style.color="#1c715e"}else{s.textContent=v+" is outside the currently listed ZIP codes. Call 504-454-5040 to ask whether an exception is available.";s.style.color="#a33320"}});

  var current=1,steps=[].slice.call(document.querySelectorAll(".form-step")),next=document.getElementById("nextBtn"),back=document.getElementById("backBtn"),bar=document.getElementById("progressBar"),label=document.getElementById("progressLabel"),err=document.getElementById("formError"),form=document.getElementById("serviceForm"),success=document.getElementById("successCard");
  function showStep(n){current=n;steps.forEach(function(s){s.classList.toggle("active",Number(s.getAttribute("data-step"))===n)});bar.style.width=(n/3*100)+"%";label.textContent="Step "+n+" of 3";back.hidden=n===1;next.textContent=n===3?"Complete prototype request":"Continue →";err.textContent="";var focusable=steps[n-1].querySelector("select,input,textarea");if(focusable){focusable.focus()}}
  function validStep(){var required=[].slice.call(steps[current-1].querySelectorAll("[required]"));for(var i=0;i<required.length;i++){var f=required[i];if(!f.value.trim()||(f.id==="zip"&&!/^[0-9]{5}$/.test(f.value))){err.textContent=f.id==="zip"?"Enter a valid 5-digit service ZIP.":"Complete the required fields before continuing.";f.focus();return false}}return true}
  next.addEventListener("click",function(){if(!validStep()){return}if(current<3){showStep(current+1)}else{form.style.display="none";success.classList.add("show");success.focus()}});
  back.addEventListener("click",function(){if(current>1){showStep(current-1)}});
  document.getElementById("restartBtn").addEventListener("click",function(){form.reset();form.style.display="block";success.classList.remove("show");showStep(1)});
})();
