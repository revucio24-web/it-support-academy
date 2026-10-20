import{t as e}from"./lektionen.C0WzercP.js";var t=document.getElementById(`lesezeichen-liste`),n=JSON.parse(localStorage.getItem(`kurs-lesezeichen`)||`[]`);if(n.length===0)t.innerHTML=`<p class="intro">Keine Lesezeichen gespeichert. Klicke auf einer Fehlerkarte auf ⭐ um sie hier zu speichern.</p>`;else{let r=[];for(let t of e)for(let e of t.fehler||[]){let i=`fehler-${t.slug}-${(e.titel||``).toLowerCase().replace(/\s+/g,`-`).slice(0,30)}`;n.includes(i)&&r.push({slug:t.slug,...e,modul:t.module})}t.innerHTML=r.length===0?`<p class="intro">Keine Lesezeichen gefunden.</p>`:r.map(e=>{let t=`fehler-${e.slug}-${(e.titel||``).toLowerCase().replace(/\s+/g,`-`).slice(0,30)}`,n=(e.diagnose_schritte||e.diagnose||[]).map(e=>`<li>${e}</li>`).join(``);return`
        <div class="fehler-karte" data-bookmark-id="${t}">
          <div class="fehler-header">
            <h4>⚠️ ${e.titel}</h4>
            <div class="fehler-header-actions">
              <span class="badge badge-level-2">Modul ${e.modul}</span>
              <button class="bookmark-btn active" data-bookmark="${t}" title="Entfernen">★</button>
            </div>
          </div>
          <div class="fehler-body">
            <div class="fehler-abschnitt">
              <h5>Symptomatik</h5>
              <p>${e.symptom}</p>
            </div>
            <div class="fehler-abschnitt">
              <h5>Ursache</h5>
              <p>${e.ursache}</p>
            </div>
            <div class="fehler-abschnitt">
              <h5>Diagnose-Schritte</h5>
              <ol>${n}</ol>
            </div>
            <div class="fehler-abschnitt">
              <h5>Lösung</h5>
              <p>${e.loesung}</p>
            </div>
            <div class="fehler-abschnitt">
              <h5>Prävention</h5>
              <p>${e.praevention}</p>
            </div>
          </div>
        </div>
        <a href="/lektionen/${e.slug}" class="btn btn-secondary more-btn">Zur Lektion: ${e.slug}</a>
      `}).join(``),document.querySelectorAll(`.bookmark-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-bookmark`),n=JSON.parse(localStorage.getItem(`kurs-lesezeichen`)||`[]`);n=n.filter(e=>e!==t),localStorage.setItem(`kurs-lesezeichen`,JSON.stringify(n)),window.location.reload()})})}