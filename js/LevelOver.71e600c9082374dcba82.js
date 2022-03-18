(()=>{"use strict";var e={8724:(e,t,o)=>{e.exports=o.p+"assets/packed/LevelOver.23a2.mp3"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e=o(8724);const t={ez:0,hd:1,in:2,at:3};window.addEventListener("DOMContentLoaded",(()=>{document.querySelector("div#avatarBar").addEventListener("click",(e=>{var t=e.target;null==t.classList.toString().match("avatarBar")&&(t=e.target.parentElement),t.classList.toString().match("expand")?t.classList.remove("expand"):t.classList.add("expand")})),null!=window.localStorage.getItem("playerName")&&(console.log("Setting player name: ",window.localStorage.getItem("playerName")),document.querySelector("div#avatarBar").setAttribute("data-name",window.localStorage.getItem("playerName"))),null!=window.localStorage.getItem("playerAvatar")&&(console.log("Setting player avatar: ",window.localStorage.getItem("playerAvatar")),document.querySelector("div#avatarBar").children[0].setAttribute("style",'--avatar: url("'+window.localStorage.getItem("playerAvatar")+'");'));const o=sessionStorage.getItem("play"),r=sessionStorage.getItem("level"),n=t[r],a=parseInt(sessionStorage.getItem("score")),l=sessionStorage.getItem("maxCombo"),s=sessionStorage.getItem("perfect"),c=sessionStorage.getItem("good"),i=sessionStorage.getItem("early"),d=sessionStorage.getItem("bad"),u=sessionStorage.getItem("miss"),g=sessionStorage.getItem("mode");switch(sessionStorage.clear(),g){case"normal":default:break;case"auto":document.querySelector("#scrollFrame").classList.add("auto");break;case"hyper":document.querySelector("#scrollFrame").classList.add("hyper")}const m=Math.round((parseInt(s)+.65*parseInt(c))/(parseInt(s)+parseInt(c)+parseInt(d)+parseInt(u)+0)*1e4)/100,p=c-i;var w;document.getElementById("retryBtn").addEventListener("click",(()=>{window.actx.close(),location.href="../whilePlaying/index.html?play="+o+"&l="+r})),document.getElementById("backInResultBtn").addEventListener("click",(()=>{window.actx.close(),location.href="../songSelect/index.html"})),0==a&&(console.log("No grade"),w=""),a<699999&&0!=a&&(console.log("Grade: False"),w="F15F"),7e5<=a&&a<=819999&&(console.log("Grade:C"),w="C15C"),82e4<=a&&a<=879999&&(console.log("Grade:B"),w="B15B"),88e4<=a&&a<=919999&&(console.log("Grade:A"),w="A15A"),92e4<=a&&a<=959999&&(console.log("Grade:S"),w="S15S"),96e4<=a&&a<=999999&&(console.log("Grade:V"),w="V15V"),0==d&&0==u&&(console.log("Grade: V wih Full Combo"),w="V15FC"),1e6<=a&&(console.log("Grade:Phi"),w="phi15phi"),fetch("https://charts.phicommunity.com.cn/"+o+"/meta.json").then((e=>e.json())).then((t=>{var y,S;window.window.playResult={score:a,grade:w,play:o,playLevel:n,songInfo:t,maxCombo:l,accuracy:m,perFect:s,good:c,bad:d,miss:u,early:i,late:p,playLevelString:r,mode:g},console.log(window.playResult),fetch(e).then((e=>e.arrayBuffer())).then((e=>{window.actx=new(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext),window.actx.decodeAudioData(e,(function(e){var t=window.actx.createBufferSource();t.buffer=e,t.loop=!0,t.connect(window.actx.destination),t.start(0)}))})),document.body.setAttribute("style",`--background:url(${encodeURI("https://charts.phicommunity.com.cn/"+window.playResult.play+"/"+window.playResult.songInfo.illustration)});`),document.querySelector("#songImg").setAttribute("src",encodeURI("https://charts.phicommunity.com.cn/"+o+"/"+window.playResult.songInfo.illustration)),document.querySelector("#score").innerText=a.toString().padStart(7,"0"),document.querySelector("#gradeImage").src="../assets/images/"+w+".svg",document.querySelector("#maxCombo").innerText=l,document.querySelector("#accuracy").innerText=m+"%",document.querySelector("#perfect").innerText=s,document.querySelector("#good").innerText=c,document.querySelector("#bad").innerText=d,document.querySelector("#miss").innerText=u,document.querySelector("#early").innerText=i,document.querySelector("#late").innerText=p,document.querySelector("div.songName#songName").innerText=window.playResult.songInfo.name,document.querySelector("div.levelString#levelString").innerText=window.playResult.playLevelString.toUpperCase()+" Lv."+Math.floor(window.playResult.songInfo[window.playResult.playLevelString.toLowerCase()+"Ranking"]||0),y=window.playResult.accuracy>=70?(Math.pow((window.playResult.accuracy-55)/45,2)*(window.playResult.songInfo[window.playResult.playLevelString.toLowerCase()+"Ranking"]||0)).toFixed(2):0,window.playResult.score<88e4&&(S=0),document.querySelector("#rks").innerText=y,console.log("ΔRKS:",y),console.log("ΔData(KB):",S)})).catch((()=>{alert("歌曲信息获取失败！")}))}))})()})();