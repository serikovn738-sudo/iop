/* ===== Меняйте здесь ===== */
const PHONE = "77764735888";   // номер WhatsApp без плюса
const PRICES = [
  ["Мужская стрижка","Стрижка волос, укладка",5000],
  ["Стрижка отец + сын","Два образа — один стиль",8500],
  ["Оконтовка головы","Контур, чёткие линии",1500],
  ["Оконтовка бороды","Контур, коррекция формы",2500],
  ["Стрижка бороды","Моделирование, оформление",3500],
  ["Детская стрижка","До 10 лет",4000]
];
const GIS_URL = "https://2gis.kz/pavlodar/search/Berzloy%20Barbershop"; // ссылка на карточку в 2ГИС
const REVIEWS = [   // замените на настоящие отзывы из 2ГИС
  {n:"Имя клиента", t:"Сюда вставьте настоящий отзыв из 2ГИС.", s:5},
  {n:"Имя клиента", t:"Сюда вставьте настоящий отзыв из 2ГИС.", s:5},
  {n:"Имя клиента", t:"Сюда вставьте настоящий отзыв из 2ГИС.", s:5}
];
/* ========================= */
const fmt=n=>n.toLocaleString("ru-RU")+" ₸";
const list=document.getElementById("list"),sel=document.getElementById("s");
list.innerHTML=PRICES.map(r=>`<div class="row"><div class="t"><b>${r[0]}</b><small>${r[1]}</small></div><span class="pr">${fmt(r[2])}</span></div>`).join("");
PRICES.forEach(r=>sel.add(new Option(r[0]+" — "+fmt(r[2]),r[0])));

document.getElementById("f").addEventListener("submit",e=>{
  e.preventDefault();
  const t=`Здравствуйте! Хочу записаться.\nИмя: ${n.value}\nУслуга: ${s.value}\nВремя: ${d.value.replace("T"," ")}`;
  window.open("https://wa.me/"+PHONE+"?text="+encodeURIComponent(t),"_blank");
});
document.querySelectorAll("#menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
document.getElementById("y").textContent=new Date().getFullYear();
document.getElementById("revs").innerHTML=REVIEWS.map(r=>`<div class="rev"><span class="st" aria-label="${r.s} из 5">${"★".repeat(r.s)}</span><p>${r.t}</p><b>${r.n}</b></div>`).join("");
document.getElementById("gis").href=GIS_URL;
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
