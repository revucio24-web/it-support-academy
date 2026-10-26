import{t as e}from"./escape.CfOHO0aD.js";var t=document.getElementById(`wiederholung-liste`),n=`/it-support-academy/`;function r(e,t){try{return JSON.parse(localStorage.getItem(e)||``)??t}catch{return t}}var i=r(`quiz-fehler`,{}),a=JSON.parse(t.dataset.lektionen||`[]`),o=[];for(let[e,t]of Object.entries(i)){let n=a.find(t=>t.slug===e);if(n)for(let[r,i]of Object.entries(t)){if(i.richtig)continue;let t=n.quiz?.[Number(r)];t&&o.push({slug:e,lektionTitel:n.title||e,frage:t.frage,optionen:t.optionen||[],richtigeAntwort:t.antwort,deineAntwort:i.selectedIdx,erklaerung:t.erklaerung||``,level:n.level})}}if(o.length===0)t.innerHTML=`
      <div class="leer">
        <strong>🎉 Keine falschen Fragen</strong>
        <p>Alles richtig beantwortet — oder noch keine Quizfragen bearbeitet.</p>
        <a class="btn" href="${n}quiz" style="margin-top: 1rem;">Zur Quiz-Zentrale</a>
      </div>
    `;else{let r={};for(let e of o)r[e.slug]||(r[e.slug]=[]),r[e.slug].push(e);t.innerHTML=Object.entries(r).map(([t,r])=>{let i=r[0].level;return`
        <section class="wiederholung-gruppe">
          <h2>
            <a href="${n}lektionen/${e(t)}">${e(r[0].lektionTitel)}</a>
            <span class="badge ${i===1?`badge-level-1`:`badge-level-2`}">${e(r.length)} falsch</span>
          </h2>
          ${r.map(t=>{let n=t.optionen.map((n,r)=>{let i=r===t.richtigeAntwort,a=r===t.deineAntwort;return`
                  <div class="option ${i?`correct`:a?`wrong`:``}">
                    <span class="option-buchstabe">${String.fromCharCode(65+r)}</span>
                    <span>${e(n)}</span>
                    ${i?`<span class="hinweis richtig">✓ Richtig</span>`:``}
                    ${a&&!i?`<span class="hinweis falsch">✗ Deine Antwort</span>`:``}
                  </div>`}).join(``);return`
              <div class="wiederholung-frage">
                <p class="frage"><strong>Frage:</strong> ${e(t.frage)}</p>
                <div class="optionen">${n}</div>
                ${t.erklaerung?`<p class="erklaerung"><strong>Erklärung:</strong> ${e(t.erklaerung)}</p>`:``}
              </div>`}).join(``)}
        </section>`}).join(``)}document.getElementById(`clear-fehler`)?.addEventListener(`click`,()=>{localStorage.removeItem(`quiz-fehler`),location.reload()});