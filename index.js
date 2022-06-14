import a from"./config.js";let clock=document.querySelector("#clock");function getClock(){let a=new Date,b=String(a.getHours()).padStart(2,"0"),c=String(a.getMinutes()).padStart(2,"0");clock.innerText=`${b}:${c}`}function timeout(a){return new Promise(b=>setTimeout(b,a))}async function sleep(a,b,...c){return await timeout(a),b(...c)}getClock(),setInterval(getClock,1e3),document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("name"),d=document.getElementById("image__header"),f=document.getElementById("message__inner");c.innerText+=a.nome,d.src=a.pfp;for(var g,b=0,e=a.primeiras.length;b<e;b++)setTimeout(async function(b){0==b?((g=document.createElement("div")).setAttribute("id",`message__${[b]}`),g.innerHTML+=`
                        <div class="message__box -send -show" style="display: block;">
                        <div style="background-image: url(&quot;${a.pfp}&quot;);" class="profile lazyloaded">
                        </div>
                        <div class="name font -ssm"><span template_target="target1">${a.nome}</span></div>
                        <div class="message load" style="display: inline-block;">
                          <div class="loading"><span></span><span></span><span></span></div>
                        </div>
                        <div class="message text" style="display: none;">
                          <p class="text">${a.primeiras[b]}</p>
                        </div>
                      </div>`,f.appendChild(g),await sleep(1e3,function(){g.querySelector(".message.load").style.display="none",g.querySelector(".message.text").style.display="inline-block"})):((g=document.createElement("div")).setAttribute("id",`message__${[b]}`),g.innerHTML+=`
        <div class="message__box -send -show" style="display: block;">

        <div class="message load" style="display: inline-block;">
          <div class="loading"><span></span><span></span><span></span></div>
        </div>
        <div class="message text" style="display: none;">
          <p class="text">${a.primeiras[b]}</p>
        </div>
      </div>
      `,f.appendChild(g),await sleep(2e3,function(){g.querySelector(".message.load").style.display="none",g.querySelector(".message.text").style.display="inline-block"}),f.scrollTop+=30)},b*a.tempo,b);sleep(b*a.tempo,function(){f.innerHTML+=`
    <div class="message__box -receive -show" style="display: block;">
    <div class="message">
      <p class="text">Escolha um</p>
    </div>
    </div>`,f.scrollTop+=40}),sleep(b*a.tempo,function(){f.innerHTML+=`
        <div show-step="1" step-delay="16000" class="message__box -receive -show" style="display: block;">
        <div class="message -form">
            <div class="selections -type">
                <div class="selection"> <input input-type="1" type="radio" class="radioSelect" id="radioRepeatStep5">
                    <label for="radioRepeatStep5" class="label btn_toggle"
                        template_target="target5">N\xe3o. Quero
                        conhecer.</label>
                </div>
                <div class="selection"> <input input-type="2" type="radio" class="radioSelect" id="radioRepeatStep6">
                    <label for="radioRepeatStep6" class="label btn_toggle"
                        template_target="target6">Conhe\xe7o, mas quero
                        saber mais.</label>
                </div>
                <div class="selection"> <input input-type="3" type="radio" class="radioSelect" id="radioRepeatStep7">
                    <label for="radioRepeatStep7" class="label btn_toggle"
                        template_target="target7">Sim, \xe9
                        sensacional.</label>
                </div>
            </div>
        </div>
    </div>`,f.scrollTop+=50}),sleep(b*a.temporesposta,function(){document.querySelectorAll(".radioSelect").forEach(function(b){b.addEventListener("click",async function(d){let c=b.getAttribute("input-type");switch(c){case"1":b.parentElement.nextElementSibling.querySelector("input").setAttribute("disabled","disabled"),b.parentElement.nextElementSibling.nextElementSibling.querySelector("input").setAttribute("disabled","disabled");break;case"2":b.parentElement.previousElementSibling.querySelector("input").setAttribute("disabled","disabled"),b.parentElement.nextElementSibling.querySelector("input").setAttribute("disabled","disabled");break;case"3":b.parentElement.previousElementSibling.querySelector("input").setAttribute("disabled","disabled"),b.parentElement.previousElementSibling.previousElementSibling.querySelector("input").setAttribute("disabled","disabled")}f.scrollTop+=100,g=document.createElement("div"),g.innerHTML+=`
                        <div class="message__box -send -show" style="display: block;">
                        <div style="background-image: url(&quot;${a.pfp}&quot;);" class="profile lazyloaded">
                        </div>
                        <div class="name font -ssm"><span template_target="target1">${a.nome}</span></div>
                        <div class="message load" style="display: inline-block;">
                          <div class="loading"><span></span><span></span><span></span></div>
                        </div>
                        <div class="message text" style="display: none;">
                          <p class="text">${a.falalink}</p>
                        </div>
                      </div>`,f.appendChild(g),await sleep(2e3,function(){g.querySelector(".message.load").style.display="none",g.querySelector(".message.text").style.display="inline-block"}),await sleep(500,function(){f.scrollTop+=1e3,f.innerHTML+=`<div class="buttons -exp"> <a href="${a.link}" target="_blank" class="button -primary -hand"> <span class="ico" template_target="target2">ASSISTE ESSE
          V\xcdDEO AGORA!</span> </a> </div>`})})})})})