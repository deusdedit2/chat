import falas from './falas.json' assert {type: 'json'};

const clock=document.querySelector("#clock");function getClock(){const t=new Date;const e=String(t.getHours()).padStart(2,"0");const c=String(t.getMinutes()).padStart(2,"0");clock.innerText=`${e}:${c}`}getClock();setInterval(getClock,1e3);


function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(ms, fn, ...args) {
  await timeout(ms);
  return fn(...args);
}

document.addEventListener("DOMContentLoaded", () => {
  let name = document.getElementById("name");
  let pfp = document.getElementById("image__header");
  let divMessage = document.getElementById("message__inner");
  name.innerText += falas.nome
  pfp.src = falas.pfp
  var divMsg;


  for (var x = 0, ln = falas.primeiras.length; x < ln; x++) {
    setTimeout(async function (y) {

      y == 0 ? (
        divMsg = document.createElement('div'),
        divMsg.setAttribute('id', `message__${[y]}`),
        divMsg.innerHTML += `
                        <div class="message__box -send -show" style="display: block;">
                        <div style="background-image: url(&quot;${falas.pfp}&quot;);" class="profile lazyloaded">
                        </div>
                        <div class="name font -ssm"><span template_target="target1">${falas.nome}</span></div>
                        <div class="message load" style="display: inline-block;">
                          <div class="loading"><span></span><span></span><span></span></div>
                        </div>
                        <div class="message text" style="display: none;">
                          <p class="text">${falas.primeiras[y]}</p>
                        </div>
                      </div>`,
        divMessage.appendChild(divMsg),
        await sleep(1000, function () {
          divMsg.querySelector(".message.load").style.display = "none";
          divMsg.querySelector(".message.text").style.display = "inline-block";
        })
      ) : (
        divMsg = document.createElement('div'),
        divMsg.setAttribute('id', `message__${[y]}`),
        divMsg.innerHTML += `
        <div class="message__box -send -show" style="display: block;">

        <div class="message load" style="display: inline-block;">
          <div class="loading"><span></span><span></span><span></span></div>
        </div>
        <div class="message text" style="display: none;">
          <p class="text">${falas.primeiras[y]}</p>
        </div>
      </div>
      `,
      divMessage.appendChild(divMsg),
      await sleep(2000, function () {
        divMsg.querySelector(".message.load").style.display = "none";
        divMsg.querySelector(".message.text").style.display = "inline-block";
      }),
        divMessage.scrollTop += 30
      )

    }, x * falas.tempo, x);

  }

  sleep(x * falas.tempo, function () {
    divMessage.innerHTML += `
    <div class="message__box -receive -show" style="display: block;">
    <div class="message">
      <p class="text">Escolha um</p>
    </div>
    </div>`
    divMessage.scrollTop += 40
  })

  sleep(x * falas.tempo, function () {
    divMessage.innerHTML += `
        <div show-step="1" step-delay="16000" class="message__box -receive -show" style="display: block;">
        <div class="message -form">
            <div class="selections -type">
                <div class="selection"> <input input-type="1" type="radio" class="radioSelect" id="radioRepeatStep5">
                    <label for="radioRepeatStep5" class="label btn_toggle"
                        template_target="target5">Não. Quero
                        conhecer.</label>
                </div>
                <div class="selection"> <input input-type="2" type="radio" class="radioSelect" id="radioRepeatStep6">
                    <label for="radioRepeatStep6" class="label btn_toggle"
                        template_target="target6">Conheço, mas quero
                        saber mais.</label>
                </div>
                <div class="selection"> <input input-type="3" type="radio" class="radioSelect" id="radioRepeatStep7">
                    <label for="radioRepeatStep7" class="label btn_toggle"
                        template_target="target7">Sim, é
                        sensacional.</label>
                </div>
            </div>
        </div>
    </div>`
    divMessage.scrollTop += 50
  })


  sleep(x * falas.temporesposta, function () {

    document.querySelectorAll(".radioSelect").forEach(function (item) {
      item.addEventListener("click", async function (e) {
        let typeBtn = item.getAttribute("input-type");

        switch (typeBtn) {
          case "1":
            item.parentElement.nextElementSibling.querySelector("input").setAttribute("disabled", "disabled")
            item.parentElement.nextElementSibling.nextElementSibling.querySelector("input").setAttribute("disabled", "disabled")
            break;

          case "2":
            item.parentElement.previousElementSibling.querySelector("input").setAttribute("disabled", "disabled")
            item.parentElement.nextElementSibling.querySelector("input").setAttribute("disabled", "disabled")
            break;

          case "3":
            item.parentElement.previousElementSibling.querySelector("input").setAttribute("disabled", "disabled")
            item.parentElement.previousElementSibling.previousElementSibling.querySelector("input").setAttribute("disabled", "disabled")
            break;

          default:
            break;
        }
        divMessage.scrollTop += 100

        divMsg = document.createElement('div'),
        divMsg.innerHTML += `
                        <div class="message__box -send -show" style="display: block;">
                        <div style="background-image: url(&quot;${falas.pfp}&quot;);" class="profile lazyloaded">
                        </div>
                        <div class="name font -ssm"><span template_target="target1">${falas.nome}</span></div>
                        <div class="message load" style="display: inline-block;">
                          <div class="loading"><span></span><span></span><span></span></div>
                        </div>
                        <div class="message text" style="display: none;">
                          <p class="text">${falas.falalink}</p>
                        </div>
                      </div>`,
        divMessage.appendChild(divMsg),
        await sleep(2000, function () {
          divMsg.querySelector(".message.load").style.display = "none";
          divMsg.querySelector(".message.text").style.display = "inline-block";
        })
        await sleep(500,function(){
          divMessage.scrollTop += 1000
          divMessage.innerHTML += `<div class="buttons -exp"> <a href="${falas.link}" target="_blank" class="button -primary -hand"> <span class="ico" template_target="target2">ASSISTE ESSE
          VÍDEO AGORA!</span> </a> </div>`
        })
      })

    })

  })






})