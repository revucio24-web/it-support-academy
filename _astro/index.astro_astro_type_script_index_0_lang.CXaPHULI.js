import{t as e}from"./lektionen.C6zYDvgQ.js";import{t}from"./escape.CfOHO0aD.js";var n=document.getElementById(`suche-input`),r=document.getElementById(`suche-ergebnisse`),i=`/it-support-academy/`;n?.addEventListener(`input`,()=>{let a=n.value.toLowerCase().trim();if(!a){r.hidden=!0,r.innerHTML=``;return}let o=[];for(let t of e){(t.title||``).toLowerCase().includes(a)&&o.push({slug:t.slug,titel:t.title,modul:t.module,level:t.level,typ:`Lektion`,meta:t.schwerpunkt?.join(` · `)||``});for(let e of t.fehler||[]){let n=(e.titel||``).toLowerCase(),r=(e.symptom||``).toLowerCase();(n.includes(a)||r.includes(a))&&o.push({slug:t.slug,titel:e.titel,modul:t.module,level:t.level,typ:`Fehler`,meta:e.symptom||``})}}r.innerHTML=o.length===0?`<p class="suche-hinweis" style="padding: 1rem;">Keine Treffer gefunden.</p>`:o.slice(0,12).map(e=>`<a class="suche-ergebnis" href="${i}lektionen/${t(e.slug)}">
          <span class="badge ${e.level===1?`badge-level-1`:`badge-level-2`}">${t(e.typ)} M${t(e.modul)}</span>
          <span>
            <strong>${t(e.titel)}</strong>
            <span class="titel">${t(e.meta.slice(0,90))}</span>
          </span>
        </a>`).join(``),r.hidden=!1});