/* ============ DATA ============ */
const IMG = id => `assets/media/${id}?v=4`;
const DISHES = [
 // Phở
 {c:"pho",n:"Beef Phở (1–2 items)",p:16.25,d:"USDA Angus beef — choose rare beef, brisket, or meatballs — in our slow-simmered broth.",img:"a11c64_75648cb7f8a3420e8756e22deab1d03e-mv2.jpg",t:["pop"]},
 {c:"pho",n:"Beef Phở (3 items)",p:17.25,d:"All three: rare beef, brisket and meatballs. The full house.",img:"a11c64_02a453928e144fa983ad81a8b14df334-mv2.jpg",t:["pop"]},
 {c:"pho",n:"Chicken Phở",p:16.25,d:"Shredded chicken breast in golden chicken broth with rice noodle.",img:"a11c64_ff4b7a0109284ed1af78e52b61ec3f37-mv2.jpg",t:[]},
 {c:"pho",n:"Vegetable Phở",p:16.25,d:"Tofu, mushroom, carrot, broccoli and napa cabbage in veggie broth.",img:"a11c64_48fd2d12ddaa4563b7f310a13ce0e068-mv2.jpg",t:["veg"]},
 {c:"pho",n:"Beef Satay Phở",p:17.00,d:"Rare beef in a spicy beef satay broth with rice noodle. Contains peanut.",img:"a11c64_00ceb07b327045d2889a331f0967a97f-mv2.jpg",t:["spicy","nut"]},
 {c:"pho",n:"Crab Paste Noodle Soup",p:17.00,d:"Crab paste, ground pork, egg, tomato, pork ham and fried tofu over vermicelli.",img:"a11c64_9fee67328fbf4278b83b1e7dcde54030-mv2.jpg",t:[]},
 {c:"pho",n:"Curry Chicken Noodle Soup",p:17.75,d:"Creamy coconut curry with sliced chicken breast, potato and carrot over vermicelli.",img:"a11c64_72bf5c23edf14e33a63c50196c6078d4-mv2.jpg",t:["spicy","pop"]},
 {c:"pho",n:"Five Spice Chicken Phở",p:17.00,d:"Roasted then lightly fried boneless leg quarter, served alongside chicken phở.",img:"a11c64_986abc5eafff44138e38c67b25888a92-mv2.jpg",t:[]},
 {c:"pho",n:"Grilled Tiger Shrimp Phở",p:17.50,d:"Char-grilled tiger shrimp with rice noodle in chicken broth.",img:"a11c64_8318b5d20ec5404c8475e0e0439d116f-mv2.jpg",t:[]},
 // Garlic noodle
 {c:"gn",n:"Garlic Noodle · Five Spice Chicken",p:16.25,d:"House wheat noodle stir-fried in garlic butter, topped with scallion.",img:"a11c64_a7b0d43bd00f44c286d681fa055db935-mv2.jpg",t:[]},
 {c:"gn",n:"Garlic Noodle · Grilled Pork",p:16.25,d:"Smoky grilled pork over buttery garlic noodles.",img:"a11c64_589dd6fb56e846d09b43a80a0693652e-mv2.jpg",t:[]},
 {c:"gn",n:"Garlic Noodle · Grilled Beef",p:17.00,d:"Marinated grilled beef over the house garlic noodle.",img:"a11c64_e3d9a990aaf140d6ae8e5ec16986bf20-mv2.jpg",t:[]},
 {c:"gn",n:"Garlic Noodle · Tiger Shrimp",p:17.00,d:"Grilled tiger shrimp on garlic-butter noodles.",img:"a11c64_8e567835abc443dc8f8ad07ae027b45f-mv2.jpg",t:[]},
 {c:"gn",n:"Garlic Noodle · Imperial Rolls",p:16.25,d:"Crispy imperial rolls over garlic noodles with fish sauce.",img:"a11c64_0530b63406d74001a10a73ba5fe04cea-mv2.jpg",t:[]},
 {c:"gn",n:"Garlic Noodle · Seasoned Veggie",p:16.25,d:"Soy-seasoned stir-fried vegetables over garlic noodles.",img:"a11c64_021f188258dc4d31bd5dec6d545bc690-mv2.jpg",t:["veg"]},
 {c:"gn",n:"Garlic Noodle · Filet Mignon Shaken Beef",p:19.50,d:"Cubed filet mignon, wok-shaken in our house sauce.",img:"a11c64_ef56063bc5ac4920986b555f8560e3ff-mv2.jpg",t:["pop"]},
 {c:"gn",n:"Garlic Noodle · Shaken Tiger Shrimp",p:18.50,d:"Tiger shrimp shaken with bell pepper and onion over garlic noodle.",img:"a11c64_51f1022c96e84666b6f83b10f227abe3-mv2.jpg",t:[]},
 // Rice
 {c:"rice",n:"Rice Plate · Five Spice Chicken",p:16.25,d:"Steam rice, pickled cabbage, cucumber, tomato — fried egg on request.",img:"a11c64_074c06d7956d47f38dc173b0663f0d56-mv2.jpg",t:[]},
 {c:"rice",n:"Rice Plate · Grilled Pork",p:16.25,d:"Char-grilled pork over steam rice with house fish sauce.",img:"a11c64_de9a6f94d8d6400fb185b81d66d42b46-mv2.jpg",t:["pop"]},
 {c:"rice",n:"Rice Plate · Grilled Beef",p:17.00,d:"Marinated grilled beef with all the fixings.",img:"a11c64_a74ca2f39f3548f28d6ef11ae380af41-mv2.jpg",t:[]},
 {c:"rice",n:"Rice Plate · Grilled Tiger Shrimp",p:17.00,d:"Grilled tiger shrimp over steam rice.",img:"a11c64_5552c37762dd469690eb907d4bd5a142-mv2.jpg",t:[]},
 {c:"rice",n:"Rice Plate · Imperial Rolls",p:16.25,d:"Crispy pork imperial rolls over rice.",img:"a11c64_a01e3ad27d2c44368e3bd2cbb15f0f99-mv2.jpg",t:[]},
 {c:"rice",n:"Rice Plate · Seasoned Veggie",p:16.25,d:"Soy-seasoned stir-fried veggies over steam rice.",img:"a11c64_d53043e3366a4894a8b2dde4c383f05b-mv2.jpg",t:["veg"]},
 {c:"rice",n:"Rice Plate · Filet Mignon Shaken Beef",p:19.50,d:"The famous shaken beef, rice-plate style.",img:"a11c64_3542ac89b1914ff585930a1a0e6f63ef-mv2.jpg",t:["pop"]},
 {c:"rice",n:"Rice Plate · Shaken Tiger Shrimp",p:18.50,d:"Wok-shaken tiger shrimp with bell pepper and onion.",img:"a11c64_d3896f3bd5164491a933cfae5a342893-mv2.jpg",t:[]},
 // Vermicelli
 {c:"verm",n:"Vermicelli Salad · Five Spice Chicken",p:16.25,d:"Vermicelli, lettuce, herbs, pineapple and peanut with fish sauce.",img:"a11c64_a3be0efdbfc248768cf1f45e5bdc84a9-mv2.jpg",t:["nut"]},
 {c:"verm",n:"Vermicelli Salad · Grilled Pork",p:16.25,d:"Smoky pork over a cool, herby vermicelli bowl.",img:"a11c64_83f2ccd3e1764a55b0d0ef94bf89a075-mv2.jpg",t:["nut"]},
 {c:"verm",n:"Vermicelli Salad · Grilled Beef",p:17.00,d:"Grilled beef, fresh mint, crushed peanut.",img:"a11c64_ef6760bc01d345a58549111b45fe86f4-mv2.jpg",t:["nut"]},
 {c:"verm",n:"Vermicelli Salad · Grilled Tiger Shrimp",p:17.00,d:"Grilled shrimp over cool vermicelli and herbs.",img:"a11c64_8318b5d20ec5404c8475e0e0439d116f-mv2.jpg",t:["nut"]},
 {c:"verm",n:"Vermicelli Salad · Imperial Rolls",p:16.25,d:"Crispy rolls over the fresh vermicelli salad.",img:"a11c64_d2247215d4a84ec8849d109317136849-mv2.jpg",t:["nut"]},
 {c:"verm",n:"Vermicelli · Filet Mignon Shaken Beef",p:19.50,d:"Shaken filet mignon over vermicelli salad.",img:"a11c64_de398625f25945929e659847a379c0f1-mv2.jpg",t:["pop","nut"]},
 {c:"verm",n:"Vermicelli · Shaken Tiger Shrimp",p:18.50,d:"Shaken tiger shrimp over vermicelli salad.",img:"a11c64_bd68da23a6c048eca292dabc5ef97206-mv2.jpg",t:["nut"]},
 // Appetizers
 {c:"app",n:"Fresh Shrimp Rolls",p:9.00,d:"Rice paper, poached shrimp, mint and vermicelli with peanut sauce.",img:"a11c64_61096353f2bd4d46b6a50d3ad390c374-mv2.jpg",t:["pop","nut"]},
 {c:"app",n:"Fresh Grilled Pork Rolls",p:9.00,d:"Grilled pork, lettuce, mint and vermicelli with fish sauce.",img:"a11c64_c693152290a84db4be765f46a96f703f-mv2.jpg",t:[]},
 {c:"app",n:"Tofu Rolls",p:9.00,d:"Sliced fried tofu wrapped fresh, with veggie sauce.",img:"a11c64_63a00031984741eab90920812a62ea86-mv2.jpg",t:["veg"]},
 {c:"app",n:"Fresh Veggie Rolls",p:9.00,d:"Stir-fried seasoned veggie rolls with soy vinaigrette.",img:"a11c64_2205525eee42492e9d04f79eae65cd4a-mv2.jpg",t:["veg"]},
 {c:"app",n:"Imperial Rolls",p:9.00,d:"Crispy fried rolls of ground pork, taro, carrot and black fungus.",img:"a11c64_790dbde1156e467387ffa2402a8308d4-mv2.jpg",t:["pop"]},
 {c:"app",n:"Pot Stickers",p:8.00,d:"Deep-fried chicken dumplings with soy vinaigrette.",img:"a11c64_aeffc05e5a324a48bf96cf14d9d10ca2-mv2.jpg",t:[]},
 {c:"app",n:"Butterfly Shrimps",p:10.00,d:"Crispy-coated shrimp with house dressing.",img:"a11c64_68d7eb46d10641b58828af9f25794c96-mv2.jpg",t:[]},
 {c:"app",n:"Angel Wings (6 pcs)",p:10.00,d:"Cánh gà chiên nước mắm — fried wings in a sweet-savory fish sauce glaze.",img:"a11c64_04b75831b6514f5fa95c3c8363d7a48d-mv2.jpg",t:["pop"]},
 {c:"app",n:"Angel Wings (12 pcs)",p:18.00,d:"Double the wings, double the glaze.",img:"a11c64_04b75831b6514f5fa95c3c8363d7a48d-mv2.jpg",t:[]},
 {c:"app",n:"Fried Tofu",p:8.00,d:"Golden fried tofu, crisp outside and pillowy inside.",img:"a11c64_485b676a4667434f8e3555f6cd451eb6-mv2.jpg",t:["veg"]},
 {c:"app",n:"Cabbage Salad (chicken or tofu)",p:12.50,d:"Cabbage, daikon, carrot, mint, peanut and house fish sauce.",img:"a11c64_751ae75e705e4bdcb3f5a5288539d3ff-mv2.jpg",t:["nut"]},
 {c:"app",n:"Papaya Salad (shrimp, beef or tofu)",p:13.50,d:"Shredded papaya, basil, crushed peanut, shallot and house dressing.",img:"a11c64_751ae75e705e4bdcb3f5a5288539d3ff-mv2.jpg",t:["nut"]},
 // Specials + sides
 {c:"spec",n:"Filet Mignon Shaken Beef (10 oz)",p:28.50,d:"Cubed filet mignon in house special sauce, stir-fried with bell pepper and onion.",img:"a11c64_ee2dbfc68a07462eb389ec7b2c1ec05e-mv2.jpg",t:["pop"]},
 {c:"spec",n:"Shaken Tiger Shrimp (14 pcs)",p:25.50,d:"Tiger shrimp in house special sauce with bell pepper and white onion.",img:"a11c64_c6080ed7f0f94e998c0e40bf04e5d9eb-mv2.jpg",t:["pop"]},
 {c:"spec",n:"Broccoli with Garlic Oyster Sauce",p:13.00,d:"Crisp broccoli glossed in garlic oyster sauce.",img:"a11c64_424a8798a3964bad9fb8ba977e58f399-mv2.jpg",t:[]},
 {c:"spec",n:"Sautéed String Bean",p:13.00,d:"Wok-sautéed string beans, simple and perfect.",img:"a11c64_35cf4a3e6a8347cc849fcca025c7a234-mv2.jpg",t:["veg"]},
 {c:"spec",n:"Seasoned Veggie",p:13.00,d:"Stir-fried cabbage, carrot, tofu, mushroom, black fungus and celery.",img:"a11c64_d53043e3366a4894a8b2dde4c383f05b-mv2.jpg",t:["veg"]},
 {c:"spec",n:"House Garlic Noodle",p:9.50,d:"The legendary side: wheat noodle, garlic, butter, scallion.",img:"a11c64_a7b0d43bd00f44c286d681fa055db935-mv2.jpg",t:["veg","pop"]}
];
const CATS = [["all","All"],["pho","Phở & Soups"],["gn","Garlic Noodle"],["rice","Rice Plates"],["verm","Vermicelli"],["app","Appetizers"],["spec","Specials & Sides"]];
const DRINKS = [["Vietnamese Ice Coffee",5.50],["Crème Brûlée Coffee",7.00],["Boba Milk Tea",6.00],["Crème Brûlée Milk Tea",7.00],["Thai Tea",5.50],["Passion Fruit Green Tea",6.00],["Lychee Mojito",6.00],["Strawberry Lemonade",6.00],["Salted Plum Soda",6.00],["Fresh Lemonade",5.50]];
const GALLERY = [
 ["a11c64_75648cb7f8a3420e8756e22deab1d03e-mv2.jpg","Beef Phở, the flagship bowl"],
 ["a11c64_ee2dbfc68a07462eb389ec7b2c1ec05e-mv2.jpg","Filet Mignon Shaken Beef"],
 ["a11c64_c6080ed7f0f94e998c0e40bf04e5d9eb-mv2.jpg","Shaken Tiger Shrimp"],
 ["a11c64_72bf5c23edf14e33a63c50196c6078d4-mv2.jpg","Curry Chicken Noodle Soup"],
 ["a11c64_c693152290a84db4be765f46a96f703f-mv2.jpg","Fresh Grilled Pork Rolls"],
 ["a11c64_04b75831b6514f5fa95c3c8363d7a48d-mv2.jpg","Angel Wings"],
 ["a11c64_589dd6fb56e846d09b43a80a0693652e-mv2.jpg","Grilled Pork Garlic Noodle"],
 ["a11c64_3542ac89b1914ff585930a1a0e6f63ef-mv2.jpg","Shaken Beef Rice Plate"],
 ["a11c64_a3be0efdbfc248768cf1f45e5bdc84a9-mv2.jpg","Five Spice Chicken Vermicelli"],
 ["a11c64_5552c37762dd469690eb907d4bd5a142-mv2.jpg","Grilled Shrimp Rice Plate"],
 ["a11c64_2205525eee42492e9d04f79eae65cd4a-mv2.jpg","Fresh Veggie Rolls"],
 ["a11c64_125552a1c38a492cbe0e8f408179414d-mv2.jpeg","House drinks"]
];

/* ============ STATE ============ */
let cat="all", query="", flags=new Set();
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const money=n=>"$"+n.toFixed(2);

/* ============ MENU RENDER ============ */
const tabsEl=$("#tabs");
CATS.forEach(([id,label],i)=>{
  const b=document.createElement("button");
  b.className="tab"+(i===0?" active":""); b.textContent=label; b.dataset.cat=id; b.setAttribute("role","tab");
  b.onclick=()=>{cat=id;$$(".tab").forEach(t=>t.classList.toggle("active",t===b));renderMenu();};
  tabsEl.appendChild(b);
});
$("#q").addEventListener("input",e=>{query=e.target.value.toLowerCase();renderMenu();});
$$(".pill").forEach(p=>p.onclick=()=>{const f=p.dataset.f;p.classList.toggle("on");flags.has(f)?flags.delete(f):flags.add(f);renderMenu();});

const TAGNAMES={spicy:"🌶 Spicy",veg:"🌱 Veggie",pop:"⭐ Favorite",nut:"🥜 Peanut"};
function renderMenu(){
  const grid=$("#menuGrid");
  const list=DISHES.filter(d=>
    (cat==="all"||d.c===cat)&&
    (d.n.toLowerCase().includes(query)||d.d.toLowerCase().includes(query))&&
    [...flags].every(f=>d.t.includes(f))
  );
  grid.innerHTML="";
  if(!list.length){grid.innerHTML=`<div class="no-results"><p style="font-size:40px">🥢</p><p>Nothing matched that craving — try another search or clear a filter.</p></div>`;return;}
  list.forEach((d,i)=>{
    const el=document.createElement("article");
    el.className="dish"; el.style.animation=`fadeUp .5s ${Math.min(i*0.04,0.4)}s both`;
    el.innerHTML=`
      <div class="dish-img"><img loading="lazy" src="${IMG(d.img)}" alt="${d.n}"></div>
      <div class="dish-body">
        <div class="dish-top"><h3>${d.n}</h3><span class="price">${money(d.p)}</span></div>
        <p>${d.d}</p>
        <div class="dish-tags">${d.t.map(t=>`<span class="dtag ${t}">${TAGNAMES[t]}</span>`).join("")}</div>
      </div>`;
    grid.appendChild(el);
  });
}
const style=document.createElement("style");
style.textContent="@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}";
document.head.appendChild(style);
renderMenu();

/* ============ DRINKS ============ */
$("#drinkList").innerHTML=DRINKS.map((d,i)=>`<div class="drink"><span class="n">${String(i+1).padStart(2,"0")}</span><b>${d[0]}</b><span class="dots"></span><span class="p">${money(d[1])}</span></div>`).join("");

/* ============ GALLERY ============ */
const track=$("#galTrack");
track.innerHTML=GALLERY.map(([id,cap])=>`<figure class="gal-item" tabindex="0"><img loading="lazy" src="assets/media/${id}?v=4" alt="${cap}"><figcaption>${cap}</figcaption></figure>`).join("");
$("#galNext").onclick=()=>track.scrollBy({left:track.clientWidth*.7,behavior:"smooth"});
$("#galPrev").onclick=()=>track.scrollBy({left:-track.clientWidth*.7,behavior:"smooth"});
let isDown=false,startX,scr;
track.addEventListener("pointerdown",e=>{isDown=true;track.classList.add("grabbing");startX=e.clientX;scr=track.scrollLeft});
window.addEventListener("pointerup",()=>{isDown=false;track.classList.remove("grabbing")});
track.addEventListener("pointermove",e=>{if(!isDown)return;track.scrollLeft=scr-(e.clientX-startX)});
track.addEventListener("click",e=>{
  const fig=e.target.closest(".gal-item"); if(!fig||Math.abs(track.scrollLeft-scr)>6)return;
  $("#lb-img").src=fig.querySelector("img").src;
  $("#lb-cap").textContent=fig.querySelector("figcaption").textContent;
  $("#lightbox").classList.add("on");
});
$("#lb-close").onclick=()=>$("#lightbox").classList.remove("on");
$("#lightbox").onclick=e=>{if(e.target.id==="lightbox")$("#lightbox").classList.remove("on")};
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape")return;
  $("#lightbox").classList.remove("on");
  if(typeof setNav==="function")setNav(false);
});

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(t._to);t._to=setTimeout(()=>t.classList.remove("show"),2200);}

/* ============ CHROME ============ */
const hdr=$("#hdr");
addEventListener("scroll",()=>{
  hdr.classList.toggle("scrolled",scrollY>40);
  const h=document.documentElement;
  $("#progress").style.width=(scrollY/(h.scrollHeight-h.clientHeight)*100)+"%";
},{passive:true});
const nav=$("#nav"),ham=$("#hamburger");
const setNav=(o)=>{
  nav.classList.toggle("open",o);
  ham.classList.toggle("open",o);
  ham.setAttribute("aria-expanded",o);
  if(o) document.body.appendChild(nav);
  else hdr.appendChild(nav);
};
ham.onclick=()=>setNav(!nav.classList.contains("open"));
nav.addEventListener("click",e=>{if(e.target.tagName==="A")setNav(false)});

/* marquee duplicate */
const mt=$("#marqueeTrack"); mt.innerHTML+=mt.innerHTML;

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.14});
$$(".rv").forEach(el=>io.observe(el));

/* open-now status for each Visit Us card (America/Los_Angeles) */
(function(){
  const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const fmt=(mins)=>{
    const h=Math.floor(mins/60), m=mins%60, ap=h>=12?"pm":"am", hr=((h+11)%12)+1;
    return `${hr}:${String(m).padStart(2,"0")} ${ap}`;
  };
  try{
    const now=new Date(new Date().toLocaleString("en-US",{timeZone:"America/Los_Angeles"}));
    const day=now.getDay(), mins=now.getHours()*60+now.getMinutes();
    $$("[data-open-status]").forEach(el=>{
      const openAt=+el.dataset.open, closeAt=+el.dataset.close;
      const closed=new Set((el.dataset.closedDays||"").split(",").filter(Boolean).map(Number));
      const txt=el.querySelector(".open-txt");
      const isClosedDay=closed.has(day);
      const isOpen=!isClosedDay&&mins>=openAt&&mins<closeAt;
      if(isOpen){
        txt.textContent="Open now — come on in!";
        el.classList.remove("no");
      }else{
        el.classList.add("no");
        if(isClosedDay){
          txt.textContent=`Closed ${DAYS[day]}s — see you tomorrow`;
        }else{
          txt.textContent=`Closed now — opens ${fmt(openAt)}`;
        }
      }
    });
  }catch(e){
    $$("[data-open-status] .open-txt").forEach(t=>t.textContent="See hours above");
  }
})();

$("#yr").textContent=new Date().getFullYear();
addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),700));
setTimeout(()=>$("#loader").classList.add("done"),3200);
