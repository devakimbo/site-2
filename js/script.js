(()=>{const i=(r,e,t)=>{let o;return function(){let a=this,s=arguments,m=()=>{o=null,t||r.apply(a,s)},h=t&&!o;clearTimeout(o),o=setTimeout(m,e),h&&r.apply(a,s)}};window.onload=()=>{var r=document.querySelectorAll(".lazy");r.forEach(e=>{var t=new Image;t.src=e.getAttribute("data-src"),t.sizes=e.hasAttribute("data-sizes")?e.getAttribute("data-sizes"):"",t.srcset=e.hasAttribute("data-srcset")?e.getAttribute("data-srcset"):"",t.className=e.getAttribute("class"),t.title=e.getAttribute("title"),t.alt=e.getAttribute("alt"),t.onload=function(){e.src=e.getAttribute("data-src"),e.sizes=e.hasAttribute("data-sizes")?e.getAttribute("data-sizes"):"",e.srcset=e.hasAttribute("data-srcset")?e.getAttribute("data-srcset"):"",e.classList.add("loaded")}})};let l,c=!0,n=!1,u=!1,d="";for(item of document.querySelectorAll(".search input"))item.addEventListener("keyup",async r=>{const e=r.target;d=e.value;try{c&&(c=!1,await g(),n=!0),n&&(n=!1,$(d,e.parentNode),n=!0)}catch(t){console.error(t)}});function b(r,e){let t=new XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===4&&t.status===200){let o=JSON.parse(t.responseText);e&&e(o)}},t.open("GET",r),t.send()}function $(r,e){let t=l.search(r),o="";if(t.length===0)u=!1,o="";else{for(let a in t)o=o+'<li><a href="'+t[a].item.permalink+'" tabindex="0"><span class="title">'+t[a].item.title+"</span>";u=!0}e.querySelector("ul").innerHTML=o}function g(){return new Promise((r,e)=>b("/index.json",t=>{let o={shouldSort:!0,location:0,distance:100,threshold:.4,minMatchCharLength:2,keys:["title","permalink","summary","tags"]};try{l=new Fuse(t,o),r()}catch(a){e(a)}}))}const f=document.querySelector("header.header"),p=i(function(){window.scrollY?f.classList.add("scrolled"):f.classList.remove("scrolled")},50);document.addEventListener("scroll",p);p();})();
