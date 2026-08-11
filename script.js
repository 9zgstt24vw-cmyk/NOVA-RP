const players = [
  {name:"NOVA_Turbo", role:"Founder", level:99, online:true},
  {name:"Shadow", role:"Police", level:76, online:true},
  {name:"Kairo", role:"Gang Leader", level:71, online:false},
  {name:"Viper", role:"Mechanic", level:64, online:true},
  {name:"Raven", role:"EMS", level:58, online:true},
  {name:"Ghost", role:"Citizen", level:52, online:false},
  {name:"Luna", role:"Business Owner", level:49, online:true},
  {name:"Maverick", role:"Citizen", level:44, online:true}
];

const staff = [
  {name:"NOVA_Turbo", role:"Founder"},
  {name:"NOVA_Admin", role:"Administrator"},
  {name:"NOVA_Mod", role:"Moderator"}
];

const playersGrid = document.getElementById("playersGrid");
const search = document.getElementById("playerSearch");

function initials(name){ return name.replace("NOVA_","").slice(0,2).toUpperCase(); }

function renderPlayers(list=players){
  playersGrid.innerHTML = list.map(p => `
    <article class="player-card">
      <div class="avatar">${initials(p.name)}</div>
      <h3>${p.name}</h3>
      <span class="tag">${p.role}</span>
      <div class="player-meta">
        <span>Level ${p.level}</span>
        <span class="${p.online?'online':''}">${p.online?'● Online':'● Offline'}</span>
      </div>
    </article>`).join("");
}
renderPlayers();

search.addEventListener("input", e => {
  const q=e.target.value.toLowerCase().trim();
  renderPlayers(players.filter(p => (p.name+" "+p.role).toLowerCase().includes(q)));
});

document.getElementById("staffGrid").innerHTML = staff.map(s => `
  <article class="staff-card">
    <div class="avatar">${initials(s.name)}</div>
    <div><h3>${s.name}</h3><p>${s.role}</p></div>
  </article>`).join("");

// Music: browser autoplay is normally blocked, so it starts only after clicking the button.
const audio=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
let playing=false;
musicBtn.addEventListener("click", async ()=>{
  try{
    if(!playing){ await audio.play(); playing=true; musicBtn.textContent="Ⅱ"; musicBtn.title="إيقاف الموسيقى"; }
    else{ audio.pause(); playing=false; musicBtn.textContent="♫"; musicBtn.title="تشغيل الموسيقى"; }
  }catch(e){
    alert("أضف ملف الموسيقى باسم assets/music.mp3 ثم اضغط الزر مرة أخرى.");
  }
});

// غيّر هذا الرقم لاحقاً أو اربطه بواجهة API حقيقية.
setInterval(()=>{
  const el=document.getElementById("onlineCount");
  const current=parseInt(el.textContent,10);
  el.textContent=Math.max(0,current + Math.floor(Math.random()*5)-2);
},5000);

// رابط Discord: ضع الرابط الحقيقي هنا.
const DISCORD_URL = "#";
document.querySelector(".discord-btn").href = DISCORD_URL;
