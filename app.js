!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(t){"undefined"!=typeof self&&self,e.exports=(()=>{var e={75:function(e){(function(){var n,r,o,i,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=i-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,i=["moz","webkit"],a="AnimationFrame",s=o["request"+a],l=o["cancel"+a]||o["cancelRequest"+a],u=0;!s&&u<i.length;u++)s=o[i[u]+"Request"+a],l=o[i[u]+"Cancel"+a]||o[i[u]+"CancelRequest"+a];if(!s||!l){var c=0,d=0,p=[];s=function(e){if(0===p.length){var t=r(),n=Math.max(0,16.666666666666668-(t-c));c=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";r.d(o,{default:()=>A});var e=r(4087),t=r.n(e);const n=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var s="TYPE_CHARACTER",l="REMOVE_CHARACTER",u="REMOVE_ALL",c="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",p="CALL_FUNCTION",f="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",v="CHANGE_CURSOR",y="PASTE_STRING",g="HTML_TAG";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const A=function(){function r(o,b){var E=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),_(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),_(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),_(this,"setupWrapperElement",(function(){E.state.elements.container&&(E.state.elements.wrapper.className=E.options.wrapperClassName,E.state.elements.cursor.className=E.options.cursorClassName,E.state.elements.cursor.innerHTML=E.options.cursor,E.state.elements.container.innerHTML="",E.state.elements.container.appendChild(E.state.elements.wrapper),E.state.elements.container.appendChild(E.state.elements.cursor))})),_(this,"start",(function(){return E.state.eventLoopPaused=!1,E.runEventLoop(),E})),_(this,"pause",(function(){return E.state.eventLoopPaused=!0,E})),_(this,"stop",(function(){return E.state.eventLoop&&((0,e.cancel)(E.state.eventLoop),E.state.eventLoop=null),E})),_(this,"pauseFor",(function(e){return E.addEventToQueue(d,{ms:e}),E})),_(this,"typeOutAllStrings",(function(){return"string"==typeof E.options.strings?(E.typeString(E.options.strings).pauseFor(E.options.pauseFor),E):(E.options.strings.forEach((function(e){E.typeString(e).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed)})),E)})),_(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n(e))return E.typeOutHTMLString(e,t);if(e){var r=E.options||{},o=r.stringSplitter,i="function"==typeof o?o(e):e.split("");E.typeCharacters(i,t)}return E})),_(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n(e)?E.typeOutHTMLString(e,t,!0):(e&&E.addEventToQueue(y,{character:e,node:t}),E)})),_(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",E.addEventToQueue(f,{node:a,parentNode:t}),n?E.pasteString(s,a):E.typeString(s,a)):a.textContent&&(n?E.pasteString(a.textContent,t):E.typeString(a.textContent,t))}return E})),_(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return E.addEventToQueue(u,{speed:e}),E})),_(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return E.addEventToQueue(h,{speed:e}),E})),_(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return E.addEventToQueue(m,{delay:e}),E})),_(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return E.addEventToQueue(v,{cursor:e}),E})),_(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)E.addEventToQueue(l);return E})),_(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return E.addEventToQueue(p,{cb:e,thisArg:t}),E})),_(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){E.addEventToQueue(s,{character:e,node:t})})),E})),_(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){E.addEventToQueue(l)})),E})),_(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E.addEventToStateProperty(e,t,n,"eventQueue")})),_(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=E.options.loop;return r?E.addEventToStateProperty(e,t,n,"reverseCalledEvents"):E})),_(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return E.state[r]=n?[o].concat(w(E.state[r])):[].concat(w(E.state[r]),[o]),E})),_(this,"runEventLoop",(function(){E.state.lastFrameTime||(E.state.lastFrameTime=Date.now());var e=Date.now(),n=e-E.state.lastFrameTime;if(!E.state.eventQueue.length){if(!E.options.loop)return;E.state.eventQueue=w(E.state.calledEvents),E.state.calledEvents=[],E.options=T({},E.state.initialOptions)}if(E.state.eventLoop=t()(E.runEventLoop),!E.state.eventLoopPaused){if(E.state.pauseUntil){if(e<E.state.pauseUntil)return;E.state.pauseUntil=null}var r,o=w(E.state.eventQueue),i=o.shift();if(!(n<=(r=i.eventName===c||i.eventName===l?"natural"===E.options.deleteSpeed?a(40,80):E.options.deleteSpeed:"natural"===E.options.delay?a(120,160):E.options.delay))){var b=i.eventName,_=i.eventArgs;switch(E.logInDevMode({currentEvent:i,state:E.state,delay:r}),b){case y:case s:var A=_.character,k=_.node,S=document.createTextNode(A),C=S;E.options.onCreateTextNode&&"function"==typeof E.options.onCreateTextNode&&(C=E.options.onCreateTextNode(A,S)),C&&(k?k.appendChild(C):E.state.elements.wrapper.appendChild(C)),E.state.visibleNodes=[].concat(w(E.state.visibleNodes),[{type:"TEXT_NODE",character:A,node:C}]);break;case l:o.unshift({eventName:c,eventArgs:{removingCharacterNode:!0}});break;case d:var L=i.eventArgs.ms;E.state.pauseUntil=Date.now()+parseInt(L);break;case p:var O=i.eventArgs,N=O.cb,D=O.thisArg;N.call(D,{elements:E.state.elements});break;case f:var M=i.eventArgs,F=M.node,q=M.parentNode;q?q.appendChild(F):E.state.elements.wrapper.appendChild(F),E.state.visibleNodes=[].concat(w(E.state.visibleNodes),[{type:g,node:F,parentNode:q||E.state.elements.wrapper}]);break;case u:var x=E.state.visibleNodes,I=_.speed,R=[];I&&R.push({eventName:h,eventArgs:{speed:I,temp:!0}});for(var j=0,P=x.length;j<P;j++)R.push({eventName:c,eventArgs:{removingCharacterNode:!1}});I&&R.push({eventName:h,eventArgs:{speed:E.options.deleteSpeed,temp:!0}}),o.unshift.apply(o,R);break;case c:var H=i.eventArgs.removingCharacterNode;if(E.state.visibleNodes.length){var B=E.state.visibleNodes.pop(),Q=B.type,G=B.node,V=B.character;E.options.onRemoveNode&&"function"==typeof E.options.onRemoveNode&&E.options.onRemoveNode({node:G,character:V}),G&&G.parentNode.removeChild(G),Q===g&&H&&o.unshift({eventName:c,eventArgs:{}})}break;case h:E.options.deleteSpeed=i.eventArgs.speed;break;case m:E.options.delay=i.eventArgs.delay;break;case v:E.options.cursor=i.eventArgs.cursor,E.state.elements.cursor.innerHTML=i.eventArgs.cursor}E.options.loop&&(i.eventName===c||i.eventArgs&&i.eventArgs.temp||(E.state.calledEvents=[].concat(w(E.state.calledEvents),[i]))),E.state.eventQueue=o,E.state.lastFrameTime=e}}})),o)if("string"==typeof o){var A=document.querySelector(o);if(!A)throw new Error("Could not find container element");this.state.elements.container=A}else this.state.elements.container=o;b&&(this.options=T(T({},this.options),b)),this.state.initialOptions=T({},this.options),this.init()}var o;return(o=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(v,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(r.prototype,o),r}()})(),o.default})()}).call(this,n(4))},function(e,t,n){var r,o,i;o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",class:"modal-visible",loadClass:"vanilla-modal",clickOutside:!0,closeKeys:[27],transitions:!0,transitionEnd:null,onBeforeOpen:null,onBeforeClose:null,onOpen:null,onClose:null};function o(e){console.error("VanillaModal: "+e)}function i(e,t){var n=(t||document).querySelector(e);return n||o(e+" not found in document."),n}function a(e,t){e instanceof HTMLElement||o("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter((function(e){return e!==t})).concat(t).join(" "))}function s(e,t){for(var n=(e.target.document||e.target.ownerDocument).querySelectorAll(t),r=0;r<n.length;r+=1)for(var o=e.target;o&&o!==document.body;){if(o===n[r])return o;o=o.parentNode}return null}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isOpen=!1,this.current=null,this.isListening=!1,this.settings=function(e){return n({},r,e,{transitionEnd:(i=document.createElement("div"),(t=[{key:"transition",value:"transitionend"},{key:"OTransition",value:"otransitionend"},{key:"MozTransition",value:"transitionend"},{key:"WebkitTransition",value:"webkitTransitionEnd"}],o=function(e){var t=e.key;return void 0!==i.style[t]},function(e){var n=t.filter(o);return n[0]?n[0][e]:void 0})("value"))});var t,o,i}(t),this.dom=this.getDomNodes(),this.open=this.open.bind(this),this.close=this.close.bind(this),this.closeKeyHandler=this.closeKeyHandler.bind(this),this.outsideClickHandler=this.outsideClickHandler.bind(this),this.delegateOpen=this.delegateOpen.bind(this),this.delegateClose=this.delegateClose.bind(this),this.listen=this.listen.bind(this),this.destroy=this.destroy.bind(this),this.addLoadedCssClass(),this.listen()}return t(e,[{key:"getDomNodes",value:function(){var e=this.settings,t=e.modal,n=e.page,r=e.modalInner,o=e.modalContent;return{modal:i(t),page:i(n),modalInner:i(r,i(t)),modalContent:i(o,i(t))}}},{key:"addLoadedCssClass",value:function(){a(this.dom.page,this.settings.loadClass)}},{key:"setOpenId",value:function(e){this.dom.page.setAttribute("data-current-modal",e||"anonymous")}},{key:"removeOpenId",value:function(){this.dom.page.removeAttribute("data-current-modal")}},{key:"open",value:function(e,t){var n=this.dom.page,r=this.settings,i=r.onBeforeOpen,s=r.onOpen;this.closeModal(t),this.current instanceof HTMLElement==0?(this.releaseNode(this.current),this.current=function(e){return e&&"string"==typeof e.hash?document.querySelector(e.hash):"string"==typeof e?document.querySelector(e):(o("No selector supplied to open()"),null)}(e),"function"==typeof i&&i.call(this,t),this.captureNode(this.current),a(n,this.settings.class),this.setOpenId(this.current.id),this.isOpen=!0,"function"==typeof s&&s.call(this,t)):o("VanillaModal target must exist on page.")}},{key:"detectTransition",value:function(){var e=this.dom.modal,t=window.getComputedStyle(e,null);return Boolean(["transitionDuration","oTransitionDuration","MozTransitionDuration","webkitTransitionDuration"].filter((function(e){return"string"==typeof t[e]&&parseFloat(t[e])>0})).length)}},{key:"close",value:function(e){var t,n,r=this.settings,i=r.transitions,a=r.transitionEnd,s=r.onBeforeClose,l=this.detectTransition();this.isOpen&&(this.isOpen=!1,"function"==typeof s&&s.call(this,e),t=this.dom.page,n=this.settings.class,t instanceof HTMLElement||o("Not a valid HTML element."),t.setAttribute("class",t.className.split(" ").filter((function(e){return e!==n})).join(" ")),i&&a&&l?this.closeModalWithTransition(e):this.closeModal(e))}},{key:"closeModal",value:function(e){var t=this.settings.onClose;this.removeOpenId(this.dom.page),this.releaseNode(this.current),this.isOpen=!1,this.current=null,"function"==typeof t&&t.call(this,e)}},{key:"closeModalWithTransition",value:function(e){var t=this,n=this.dom.modal,r=this.settings.transitionEnd;n.addEventListener(r,(function o(){n.removeEventListener(r,o),t.closeModal(e)}))}},{key:"captureNode",value:function(e){for(var t=this.dom.modalContent;e.childNodes.length;)t.appendChild(e.childNodes[0])}},{key:"releaseNode",value:function(e){for(var t=this.dom.modalContent;t.childNodes.length;)e.appendChild(t.childNodes[0])}},{key:"closeKeyHandler",value:function(e){var t,n=this.settings.closeKeys;t=n,"[object Array]"===Object.prototype.toString.call(t)&&t.length&&n.indexOf(e.which)>-1&&!0===this.isOpen&&(e.preventDefault(),this.close(e))}},{key:"outsideClickHandler",value:function(e){var t=this.settings.clickOutside,n=this.dom.modalInner;if(t){for(var r=e.target;r&&r!==document.body;){if(r===n)return;r=r.parentNode}this.close(e)}}},{key:"delegateOpen",value:function(e){var t=s(e,this.settings.open);t&&(e.preventDefault(),this.open(t,e))}},{key:"delegateClose",value:function(e){s(e,this.settings.close)&&(e.preventDefault(),this.close(e))}},{key:"listen",value:function(){var e=this.dom.modal;this.isListening?o("Event listeners already applied."):(e.addEventListener("click",this.outsideClickHandler,!1),document.addEventListener("keydown",this.closeKeyHandler,!1),document.addEventListener("click",this.delegateOpen,!1),document.addEventListener("click",this.delegateClose,!1),this.isListening=!0)}},{key:"destroy",value:function(){var e=this.dom.modal;this.isListening?(this.close(),e.removeEventListener("click",this.outsideClickHandler),document.removeEventListener("keydown",this.closeKeyHandler),document.removeEventListener("click",this.delegateOpen),document.removeEventListener("click",this.delegateClose),this.isListening=!1):o("Event listeners already removed.")}}]),e}();e.default=l})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){n(6),e.exports=n(5)},function(e,t){function n(e){this.context=e,this._createMasterGain(),this._createStereoDelay(),this._ampAttackTime=0,this._ampReleaseTime=2.2,this._filterAttackTime=.01,this._filterReleaseTime=1,this._filterEnvMod=0,this._filterCutoff=5e3,this._filterRes=0,this.setOscWave("sawtooth")}n.prototype.playNote=function(e,t,n,r){(t*=.5)<=0?t=.01:t>.5&&(t=.5),void 0!==r&&0!==r||(r=this.context.currentTime);var o=r,i=this.context.createGain(),a=this._createLowPassFilter();i.connect(a);var s=this.context.createOscillator();s.type=this.wave,s.connect(i);var l=this._MIDIToFrequency(e);s.frequency.value=l,s.start(0),s.stop(o+this._ampAttackTime+this._ampReleaseTime),i.gain.cancelScheduledValues(o),i.gain.setValueAtTime(0,o),i.gain.linearRampToValueAtTime(t,o+this._ampAttackTime),i.gain.exponentialRampToValueAtTime(.01,o+this._ampAttackTime+this._ampReleaseTime),a.frequency.cancelScheduledValues(o),a.frequency.value=this._filterCutoff*n,a.Q.value=this._filterRes,a.frequency.setValueAtTime(this._filterCutoff*n,o),a.frequency.linearRampToValueAtTime(this._filterCutoff*n+1e4*this._filterEnvMod,o+this._filterAttackTime),a.frequency.linearRampToValueAtTime(this._filterCutoff*n,o+this._filterAttackTime+this._filterReleaseTime)},n.prototype.setOscWave=function(e){var t;switch(e){case 0:t="sine";break;case 1:t="square";break;case 2:t="sawtooth";break;case 3:t="triangle";break;default:t="sawtooth"}this.wave=t},n.prototype.setMasterGain=function(e){this._gainNode.gain.value=.8*e},n.prototype.setAmpAttackTime=function(e){this._ampAttackTime=5*e},n.prototype.setAmpReleaseTime=function(e){this._ampReleaseTime=5*e},n.prototype.setFilterAttackTime=function(e){this._filterAttackTime=5*e},n.prototype.setFilterReleaseTime=function(e){this._filterReleaseTime=5*e},n.prototype.setFilterCutoff=function(e){this._filterCutoff=1e4*e},n.prototype.setFilterResonance=function(e){this._filterRes=2*e},n.prototype.setFilterEnvMod=function(e){this._filterEnvMod=10*e},n.prototype.setDelayTimeTempo=function(e,t){this.setDelayTime(60/e*t)},n.prototype.setDelayTime=function(e){this._leftDelay.delayTime.value=e,this._rightDelay.delayTime.value=2*e},n.prototype.setDelayFeedback=function(e){this._leftFeedback.gain.value=e,this._rightFeedback.gain.value=e},n.prototype._createMasterGain=function(){this._gainNode=this.context.createGain(),this._gainNode.connect(this.context.destination),this.setMasterGain(.5)},n.prototype._createLowPassFilter=function(){var e=this.context.createBiquadFilter();return e.type="lowpass",e.frequency.value=this._filterCutoff,e.Q.value=.99,e.connect(this._leftDelay),e.connect(this._rightDelay),e.connect(this._gainNode),e},n.prototype._createStereoDelay=function(){this._merger=this.context.createChannelMerger(2),this._merger.connect(this.context.destination),this._leftDelay=this.context.createDelay(),this._rightDelay=this.context.createDelay(),this._leftFeedback=this.context.createGain(),this._rightFeedback=this.context.createGain(),this._leftDelay.connect(this._leftFeedback),this._leftFeedback.connect(this._rightDelay),this._rightDelay.connect(this._rightFeedback),this._rightFeedback.connect(this._leftDelay),this._leftFeedback.connect(this._merger,0,0),this._rightFeedback.connect(this._merger,0,1),this.setDelayTime(.25),this.setDelayFeedback(0)},n.prototype.noteToMIDI=function(e,t){"DB"===(e=e.toUpperCase())?e="C#":"EB"===e?e="D#":"GB"===e?e="F#":"AB"===e?e="G#":"BB"===e&&(e="A#");return noteNumber=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"].indexOf(e)+12*t+21},n.prototype._MIDIToFrequency=function(e){return 440*Math.pow(2,(e-69)/12)},e.exports=n},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,u=[],c=!1,d=-1;function p(){c&&l&&(c=!1,l.length?u=l.concat(u):d=-1,u.length&&f())}function f(){if(!c){var e=s(p);c=!0;for(var t=u.length;t;){for(l=u,u=[];++d<t;)l&&l[d].run();d=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||c||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=()=>{if(document.body.clientWidth>=576){const t=e=>{const t=e.target.closest('[data-id="tg1-btn"]');t&&t.classList.toggle("active")};let r=document.querySelector(".js-cdb-top");r&&r.addEventListener("click",t);const o=document.querySelector("[data-attention-lamp]");setInterval(()=>{o&&o.classList.toggle("active")},1e3);const i=document.querySelectorAll("[data-hover-link]"),a=e=>{document.querySelector(`[data-link-lamp="${e.target.dataset.hoverLink}"]`).classList.add("active")},s=e=>{document.querySelector(`[data-link-lamp="${e.target.dataset.hoverLink}"]`).classList.remove("active")};[...i].map(e=>e.addEventListener("mouseover",a)),[...i].map(e=>e.addEventListener("focus",a)),[...i].map(e=>e.addEventListener("mouseleave",s)),[...i].map(e=>e.addEventListener("blur",s));const l=document.querySelector(".js-g2-btn");if(l){const e=()=>{l.classList.toggle("hover")};setTimeout(e,1e3),setInterval(e,5e3)}var e=new(n(3))(new(window.AudioContext||window.webkitAudioContext));e.setOscWave(3);const u=t=>{const n=t.target.closest('[data-id="g3-btn"]');n&&(e.setDelayFeedback(.2),e.setDelayTimeTempo(110,.25),e.setFilterCutoff(.2),e.setAmpReleaseTime(.9),e.setFilterEnvMod(.8),e.setFilterAttackTime(.9),e.playNote(e.noteToMIDI(n.dataset.note||"C",3),1,1,0))};let c=document.querySelector(".js-cdb-medium");c&&c.addEventListener("mousedown",u)}},o=n(1),i=n.n(o),a=n(0),s=n.n(a);var l=()=>{let e,t,n,r,o=document.querySelectorAll("#mint-submit-form-1 [data-q-ch]"),a=document.querySelectorAll("#mint-submit-form-2 [data-q-ch]"),l=document.querySelector("#mint-submit-form-1 [data-q]"),u=document.querySelector("#mint-submit-form-2 [data-q]"),c=null,d=null,p=null,f=(e,t)=>(e*t).toFixed(4);e=parseInt(l.value),t=parseInt(u.value),n=f(parseInt(l.value),.052),r=f(parseInt(u.value),.0468),1===e?o[0].setAttribute("disabled",!0):o[0].removeAttribute("disabled"),30===e?o[1].setAttribute("disabled",!0):o[1].removeAttribute("disabled"),1===t?a[0].setAttribute("disabled",!0):a[0].removeAttribute("disabled"),30===t?a[1].setAttribute("disabled",!0):a[1].removeAttribute("disabled");const h=i=>{let s=document.body.dataset.currentModal;if("popup-1"===s){let t=parseInt(l.value);l.value=t+parseInt(i.target.dataset.qCh),e=parseInt(l.value),n=f(e,.052),c&&(c.innerText=n),1===e?o[0].setAttribute("disabled",!0):o[0].removeAttribute("disabled"),30===e?o[1].setAttribute("disabled",!0):o[1].removeAttribute("disabled")}if("popup-2"===s){let e=parseInt(u.value);u.value=e+parseInt(i.target.dataset.qCh),t=parseInt(u.value),r=f(t,.0468),d&&(d.innerText=r),1===t?a[0].setAttribute("disabled",!0):a[0].removeAttribute("disabled"),30===t?a[1].setAttribute("disabled",!0):a[1].removeAttribute("disabled")}},m=e=>{document.location.href=`${document.location.origin}${document.location.pathname}${e}`},v={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",loadClass:"vanilla-modal",class:"modal-visible",clickOutside:!0,closeKeys:[27],transitions:!0,onBeforeOpen:null,onBeforeClose:null,onOpen:()=>{if(p=document.body.dataset.currentModal,"popup-1"===p){let e,t;e=new s.a(document.getElementById("m-t1"),{loop:!1,delay:10}),t=new s.a(document.getElementById("m-t2"),{loop:!1,delay:10});const r=()=>{let e=document.querySelector("#m-t2").querySelector(".Typewriter__cursor");e&&e.remove(),c=document.querySelector("[data-total1]")},o=()=>{t.pauseFor(100).typeString(`Total: <span data-total1="total">${n}</span> Ξ`).start().callFunction(r)},i=()=>{let e=document.querySelector("#m-t1").querySelector(".Typewriter__cursor");e&&e.remove(),o()};let a=document.querySelector("#m-t2").querySelector(".Typewriter__cursor");a&&a.remove(),e.pauseFor(100).typeString("> Launch sequence initiated...<br><br>").pauseFor(300).typeString("> System demands 0.052 Ξ<br><br>").pauseFor(300).typeString("> Please enter quantity").start().callFunction(i)}if("popup-2"===p){let e,t;e=new s.a(document.getElementById("m-t3"),{loop:!1,delay:10}),t=new s.a(document.getElementById("m-t4"),{loop:!1,delay:10});const n=()=>{let e=document.querySelector("#m-t4").querySelector(".Typewriter__cursor");e&&e.remove(),d=document.querySelector("[data-total2]")},o=()=>{t.pauseFor(100).typeString(`Total: <span data-total2="total">${r}</span> Ξ`).start().callFunction(n)},i=()=>{let e=document.querySelector("#m-t3").querySelector(".Typewriter__cursor");e&&e.remove(),o()};let a=document.querySelector("#m-t4").querySelector(".Typewriter__cursor");a&&a.remove(),e.pauseFor(100).typeString("> Launch sequence initiated...<br><br>").pauseFor(300).typeString("> Partner discount detected<br><br>").typeString("> System demands 0.0468 Ξ<br><br>").pauseFor(300).typeString("> Please enter quantity").start().callFunction(i)}},onClose:()=>{document.querySelector("#m-t1").innerHTML="",document.querySelector("#m-t2").innerHTML="",document.querySelector("#m-t3").innerHTML="",document.querySelector("#m-t4").innerHTML="",n=f(1,.052),r=f(1,.0468),l.value=1,o[0].setAttribute("disabled",!0),u.value=1,a[0].setAttribute("disabled",!0)}};new i.a(v);[...o,...a].map(e=>e.addEventListener("click",h)),document.getElementById("mint-submit-form-1").addEventListener("submit",e=>{e.preventDefault(),m("thanks")}),document.getElementById("mint-submit-form-2").addEventListener("submit",e=>{e.preventDefault(),m("thanks")})};r(),l()}]);
//# sourceMappingURL=app.js.map