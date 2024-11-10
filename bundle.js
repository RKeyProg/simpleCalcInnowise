(()=>{var e={365:(e,n,t)=>{"use strict";t.d(n,{A:()=>h});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),c=t.n(s),l=new URL(t(570),t.b),u=new URL(t(370),t.b),d=a()(o()),p=c()(l),f=c()(u);d.push([e.id,`:root {\n  --body-bg-color: #000;\n  --main-bg-color: #17171c;\n  --btn-bg: #2e2f38;\n  --btn-bg-light: #4e505f;\n  --btn-bg-blue: #4b5efc;\n  --primary-text: #fff;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  background: var(--body-bg-color);\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Work Sans', sans-serif;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n\nbody.light-theme {\n  --body-bg-color: #fff;\n  --main-bg-color: #f1f2f3;\n  --btn-bg: #fff;\n  --btn-bg-light: #d2d3da;\n  --btn-bg-blue: #4b5efc;\n  --primary-text: #000;\n}\n\nbutton {\n  background: none;\n  border: none;\n  padding: 0;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\ninput {\n  outline: none;\n  background: transparent;\n  border: none;\n  font-family: inherit;\n}\n\n.calc-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 500px;\n  background: var(--main-bg-color);\n  border-radius: 20px;\n  padding: 1rem 1.2rem;\n}\n\n/* buttons */\n\n.buttons {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  width: 100%;\n  height: fit-content;\n  gap: 0.5rem;\n}\n\n.buttons__button {\n  font-family: 'Work Sans', sans-serif;\n  background: var(--btn-bg);\n  border-radius: 24px;\n  font-size: 1.5rem;\n  color: var(--primary-text);\n  padding: 0.75rem 0.5rem;\n  filter: none;\n  transition: filter 0.3s ease;\n}\n\n.buttons__button:hover {\n  filter: drop-shadow(0 0 2px var(--btn-bg-blue));\n}\n\n.button_col_1-3 {\n  grid-column: 1 / 3;\n}\n\n.button_color_light {\n  background: var(--btn-bg-light);\n}\n\n.button_color_blue {\n  background: var(--btn-bg-blue);\n}\n\n/* result-area */\n\n.result-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: fit-content;\n  margin-bottom: 1rem;\n  font-family: 'Work Sans', sans-serif;\n}\n\n.result-area__input {\n  width: 100%;\n  font-size: 3rem;\n  text-align: right;\n  color: var(--primary-text);\n}\n\n.result-area__prev {\n  width: 100%;\n  font-size: 1.5rem;\n  text-align: right;\n  margin-top: 1rem;\n}\n\n/* theme-switcher */\n\n.theme-switcher {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.theme-switcher__button {\n  position: relative;\n  width: 4.5rem;\n  height: 2rem;\n  background: var(--btn-bg);\n  border-radius: 2rem;\n  padding: 4px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.theme-switcher__button::after {\n  z-index: 1;\n  content: '';\n  position: absolute;\n  background: center / cover no-repeat\n    url(${p});\n  width: 1.5rem;\n  height: 1.5rem;\n  right: 4px;\n  transition: opacity 0.3s ease;\n  transition-delay: 0.3s;\n  opacity: 1;\n}\n\n.theme-switcher__button::before {\n  z-index: 1;\n  content: '';\n  position: absolute;\n  background: center / cover no-repeat\n    url(${f});\n  width: 1.5rem;\n  height: 1.5rem;\n  left: 4px;\n  transition: opacity 0.3s ease;\n  transition-delay: 0.3s;\n  opacity: 0;\n}\n\n.theme-switcher__button:hover {\n  cursor: pointer;\n}\n\n.theme-switcher__button:hover .theme-switcher__circle {\n  filter: drop-shadow(0 0 2px var(--btn-bg-blue));\n}\n\n.theme-switcher__circle {\n  z-index: 100;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background: var(--btn-bg-light);\n  transition: all 0.3s ease;\n  filter: none;\n}\n\n.theme-switcher__input {\n  display: none;\n}\n\n.theme-switcher__input:checked\n  + .theme-switcher__button\n  .theme-switcher__circle {\n  transform: translateX(2.5rem); /* Положение круга при активном чекбоксе */\n}\n\n.theme-switcher__input:checked + .theme-switcher__button::after {\n  opacity: 0;\n}\n\n.theme-switcher__input:checked + .theme-switcher__button::before {\n  opacity: 1;\n}\n`,""]);const h=d},314:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},417:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},659:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},606:()=>{const e=document.getElementById("calculatorInput"),n=document.getElementById("prevAction"),t=document.querySelectorAll(".buttons__button");function r(){e.value.length>=15?(e.style.fontSize="1.5rem",n.style.fontSize="1rem"):e.value.length>=9?(e.style.fontSize="2rem",n.style.fontSize="1.5rem"):e.style.fontSize="3rem"}function o(n){const t=["+","-","*","/",",","%"].includes(n.key);if(t&&"-"!==n.key&&0===e.value.length)return!1;if(!(n.key>="0"&&n.key<="9"||t||-1!==["Backspace","ArrowLeft","ArrowRight","Delete","Enter"].indexOf(n.key)||n.ctrlKey))return!1;let r=function(){const n=e.value.charAt(e.value.length-1);return["+","-","*","/",",","%"].includes(n)?n:""}();return!("%"===r&&n.key>="0"&&n.key<="9"||("%"!==r||"-"!==n.key&&"+"!==n.key&&"*"!==n.key&&"/"!==n.key)&&("-"!==n.key||"%"!==r&&"*"!==r&&"/"!==r&&"+"!==r)&&("-"===n.key&&"-"===r||(t&&r?(","===n.key||(e.value=e.value.slice(0,-1)+n.key),1):","===n.key&&e.value.split(/[+\-*/%]/).pop().trim().includes(","))))}function i(e){const n=e.toString().replace(/\s/g,"").replace(/\./g,",").split(",");return n[0]&&(n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g," ")),n.join(",")}function a(e){function n(e,n,t){switch(t){case"+":return e+n;case"-":return e-n;case"*":return e*n;case"/":return e/n;default:return n}}function t(e){return"+"===e||"-"===e?1:"*"===e||"/"===e?2:0}e=e.replace(/\s+/g,"").replace(/,/g,".");let r=[],o=[],i="";for(let n=0;n<e.length;n++){const t=e[n];!isNaN(t)||"."===t||"%"===t&&i?i+=t:"-"!==t||0!==n&&!"+-*/".includes(e[n-1])?(i&&(r.push(i),i=""),"+-*/".includes(t)&&o.push(t)):i+=t}return i&&r.push(i),[r,o]=function(e,n){const t=e.map(((e,n)=>{if(e.includes("%"))return n})).filter((e=>void 0!==e));return e=e.map((e=>e.includes("%")?parseFloat(e.slice(0,-1)):parseFloat(e))),0===t.length||t.forEach((t=>{let r="";for(let o=0;o<t;o++)r+=e[o]+n[o];"*"===n[t-1]||"/"===n[t-1]||0===t?e[t]=e[t]/100:("+"===n[t-1]||"-"===n[t-1])&&(r=r.slice(0,-1),e[t]=a(r)*(e[t]/100))})),[e,n]}(r,o),function(e,r){const o=[],i=[];for(let a=0;a<e.length;a++)if(o.push(parseFloat(e[a])),a<r.length){for(;i.length&&t(i[i.length-1])>=t(r[a]);){const e=o.pop(),t=o.pop(),r=i.pop();o.push(n(t,e,r))}i.push(r[a])}for(;i.length;){const e=o.pop(),t=o.pop(),r=i.pop();o.push(n(t,e,r))}return o[0]}(r,o)}e.addEventListener("input",(n=>{e.value=i(n.target.value),r()})),t.forEach((t=>{t.addEventListener("click",(()=>{const s=new KeyboardEvent("keydown",{key:t.dataset.value});switch(t.dataset.value){case"reset":e.value="",n.value="",r();break;case"changeSign":e.value&&(e.value=i(-1*a(e.value)));break;case"=":n.value=e.value,e.value=i(a(e.value)),r();break;default:o(s)&&(e.value=i(e.value+t.dataset.value),r())}}))})),e.addEventListener("keydown",(e=>{o(e)||e.preventDefault()})),e.addEventListener("keydown",(function(t){if("Enter"===t.key){n.value=e.value;const o=i(a(e.value));e.value=o,r(),t.preventDefault()}}))},54:()=>{const e=document.querySelector(".theme-switcher__input");"light"===localStorage.getItem("theme")&&(document.body.classList.add("light-theme"),e.checked=!0),e.addEventListener("change",(()=>{document.body.classList.toggle("light-theme"),document.body.classList.contains("light-theme")?localStorage.setItem("theme","light"):localStorage.removeItem("theme")}))},570:e=>{"use strict";e.exports="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20opacity%3D%220.7%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.03239%206.23185C6.2001%207.49474%205%209.60796%205%2011.9999C5%2015.8659%208.13401%2018.9999%2012%2018.9999C14.3918%2018.9999%2016.5049%2017.7999%2017.7678%2015.9678C17.5146%2015.9893%2017.2585%2016.0002%2017%2016.0002C12.0294%2016.0002%208%2011.9707%208%207.00018C8%206.7415%208.01094%206.48523%208.03239%206.23185ZM3%2011.9999C3%208.04172%205.55459%204.68278%209.10211%203.47692L10.3707%204.7456C10.1306%205.45176%2010%206.20968%2010%207.00018C10%2010.8662%2013.134%2014.0002%2017%2014.0002C17.7904%2014.0002%2018.5482%2013.8696%2019.2542%2013.6296L20.5228%2014.8983C19.3168%2018.4455%2015.958%2020.9999%2012%2020.9999C7.02944%2020.9999%203%2016.9705%203%2011.9999Z%22%20fill%3D%22%234B5EFC%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"},370:e=>{"use strict";e.exports="data:image/svg+xml,%3Csvg%20width%3D%2272%22%20height%3D%2272%22%20viewBox%3D%220%200%2072%2072%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22sun%22%20opacity%3D%220.7%22%3E%3Cpath%20id%3D%22Union%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M39%206V9V15V18H33V15V9V6H39ZM6%2033H9H15H18V39H15H9H6V33ZM57%2033H54V39H57H63H66V33H63H57ZM39%2054V57V63V66H33V63V57V54H39ZM52.9705%2057.2134L55.0919%2059.3347L59.3345%2055.092L57.2132%2052.9707L52.9705%2048.7281L50.8492%2046.6068L46.6066%2050.8494L48.7279%2052.9707L52.9705%2057.2134ZM21.1507%2025.3935L19.0294%2023.2722L14.7867%2019.0296L12.6654%2016.9082L16.9081%2012.6656L19.0294%2014.7869L23.272%2019.0296L25.3933%2021.1509L21.1507%2025.3935ZM57.2132%2019.0293L59.3345%2016.908L55.0919%2012.6653L52.9705%2014.7866L48.7279%2019.0293L46.6066%2021.1506L50.8492%2025.3932L52.9705%2023.2719L57.2132%2019.0293ZM25.3933%2050.8491L23.272%2052.9704L19.0294%2057.2131L16.9081%2059.3344L12.6654%2055.0918L14.7867%2052.9704L19.0294%2048.7278L21.1507%2046.6065L25.3933%2050.8491ZM30%2036C30%2032.6863%2032.6863%2030%2036%2030C39.3137%2030%2042%2032.6863%2042%2036C42%2039.3137%2039.3137%2042%2036%2042C32.6863%2042%2030%2039.3137%2030%2036ZM36%2024C29.3726%2024%2024%2029.3726%2024%2036C24%2042.6274%2029.3726%2048%2036%2048C42.6274%2048%2048%2042.6274%2048%2036C48%2029.3726%2042.6274%2024%2036%2024Z%22%20fill%3D%22%234B5EFC%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";t(606),t(54);var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),s=t(56),c=t.n(s),l=t(540),u=t.n(l),d=t(113),p=t.n(d),f=t(365),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(f.A,h),f.A&&f.A.locals&&f.A.locals})()})();