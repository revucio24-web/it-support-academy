import{t as e}from"./lektionen.C6zYDvgQ.js";var t=document.getElementById(`suche-input`),n=document.getElementById(`suche-ergebnisse`),r=`/it-support-academy/`;t?.addEventListener(`input`,()=>{let i=t.value.toLowerCase().trim();if(!i){n.hidden=!0,n.innerHTML=``;return}let a=[];for(let t of e){(t.title||``).toLowerCase().includes(i)&&a.push({slug:t.slug,titel:t.title,modul:t.module,level:t.level,typ:`Lektion`,meta:t.schwerpunkt?.join(` · `)||``});for(let e of t.fehler||[]){let n=(e.titel||``).toLowerCase(),r=(e.symptom||``).toLowerCase();(n.includes(i)||r.includes(i))&&a.push({slug:t.slug,titel:e.titel,modul:t.module,level:t.level,typ:`Fehler`,meta:e.symptom||``})}}n.innerHTML=a.length===0?`<p class="suche-hinweis" style="padding: 1rem;">Keine Treffer gefunden.</p>`:a.slice(0,12).map(e=>`<a class="suche-ergebnis" href="${r}lektionen/${e.slug}">
          <span class="badge ${e.level===1?`badge-level-1`:`badge-level-2`}">${e.typ} M${e.modul}</span>
          <span>
            <strong>${e.titel}</strong>
            <span class="titel">${e.meta.slice(0,90)}</span>
          </span>
        </a>`).join(``),n.hidden=!1});