(()=>{const i=(o,t,e)=>{let r;return function(){let n=this,a=arguments,c=()=>{r=null,e||o.apply(n,a)},d=e&&!r;clearTimeout(r),r=setTimeout(c,t),d&&o.apply(n,a)}};window.onload=()=>{var o=document.querySelectorAll(".lazy");o.forEach(t=>{var e=new Image;e.src=t.getAttribute("data-src"),e.sizes=t.hasAttribute("data-sizes")?t.getAttribute("data-sizes"):"",e.srcset=t.hasAttribute("data-srcset")?t.getAttribute("data-srcset"):"",e.className=t.getAttribute("class"),e.title=t.getAttribute("title"),e.alt=t.getAttribute("alt"),e.onload=function(){t.src=t.getAttribute("data-src"),t.sizes=t.hasAttribute("data-sizes")?t.getAttribute("data-sizes"):"",t.srcset=t.hasAttribute("data-srcset")?t.getAttribute("data-srcset"):"",t.classList.add("loaded")}})};const s=document.querySelector("header.header"),l=i(function(){window.scrollY?s.classList.add("scrolled"):s.classList.remove("scrolled")},50);document.addEventListener("scroll",l);l();})();
