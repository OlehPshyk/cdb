!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var i,o,s;o=[t],void 0===(s="function"==typeof(i=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",class:"modal-visible",loadClass:"vanilla-modal",clickOutside:!0,closeKeys:[27],transitions:!0,transitionEnd:null,onBeforeOpen:null,onBeforeClose:null,onOpen:null,onClose:null};function o(e){console.error("VanillaModal: "+e)}function s(e,t){var n=(t||document).querySelector(e);return n||o(e+" not found in document."),n}function a(e,t){e instanceof HTMLElement||o("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter((function(e){return e!==t})).concat(t).join(" "))}function r(e,t){for(var n=(e.target.document||e.target.ownerDocument).querySelectorAll(t),i=0;i<n.length;i+=1)for(var o=e.target;o&&o!==document.body;){if(o===n[i])return o;o=o.parentNode}return null}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isOpen=!1,this.current=null,this.isListening=!1,this.settings=function(e){return n({},i,e,{transitionEnd:(s=document.createElement("div"),(t=[{key:"transition",value:"transitionend"},{key:"OTransition",value:"otransitionend"},{key:"MozTransition",value:"transitionend"},{key:"WebkitTransition",value:"webkitTransitionEnd"}],o=function(e){var t=e.key;return void 0!==s.style[t]},function(e){var n=t.filter(o);return n[0]?n[0][e]:void 0})("value"))});var t,o,s}(t),this.dom=this.getDomNodes(),this.open=this.open.bind(this),this.close=this.close.bind(this),this.closeKeyHandler=this.closeKeyHandler.bind(this),this.outsideClickHandler=this.outsideClickHandler.bind(this),this.delegateOpen=this.delegateOpen.bind(this),this.delegateClose=this.delegateClose.bind(this),this.listen=this.listen.bind(this),this.destroy=this.destroy.bind(this),this.addLoadedCssClass(),this.listen()}return t(e,[{key:"getDomNodes",value:function(){var e=this.settings,t=e.modal,n=e.page,i=e.modalInner,o=e.modalContent;return{modal:s(t),page:s(n),modalInner:s(i,s(t)),modalContent:s(o,s(t))}}},{key:"addLoadedCssClass",value:function(){a(this.dom.page,this.settings.loadClass)}},{key:"setOpenId",value:function(e){this.dom.page.setAttribute("data-current-modal",e||"anonymous")}},{key:"removeOpenId",value:function(){this.dom.page.removeAttribute("data-current-modal")}},{key:"open",value:function(e,t){var n=this.dom.page,i=this.settings,s=i.onBeforeOpen,r=i.onOpen;this.closeModal(t),this.current instanceof HTMLElement==0?(this.releaseNode(this.current),this.current=function(e){return e&&"string"==typeof e.hash?document.querySelector(e.hash):"string"==typeof e?document.querySelector(e):(o("No selector supplied to open()"),null)}(e),"function"==typeof s&&s.call(this,t),this.captureNode(this.current),a(n,this.settings.class),this.setOpenId(this.current.id),this.isOpen=!0,"function"==typeof r&&r.call(this,t)):o("VanillaModal target must exist on page.")}},{key:"detectTransition",value:function(){var e=this.dom.modal,t=window.getComputedStyle(e,null);return Boolean(["transitionDuration","oTransitionDuration","MozTransitionDuration","webkitTransitionDuration"].filter((function(e){return"string"==typeof t[e]&&parseFloat(t[e])>0})).length)}},{key:"close",value:function(e){var t,n,i=this.settings,s=i.transitions,a=i.transitionEnd,r=i.onBeforeClose,l=this.detectTransition();this.isOpen&&(this.isOpen=!1,"function"==typeof r&&r.call(this,e),t=this.dom.page,n=this.settings.class,t instanceof HTMLElement||o("Not a valid HTML element."),t.setAttribute("class",t.className.split(" ").filter((function(e){return e!==n})).join(" ")),s&&a&&l?this.closeModalWithTransition(e):this.closeModal(e))}},{key:"closeModal",value:function(e){var t=this.settings.onClose;this.removeOpenId(this.dom.page),this.releaseNode(this.current),this.isOpen=!1,this.current=null,"function"==typeof t&&t.call(this,e)}},{key:"closeModalWithTransition",value:function(e){var t=this,n=this.dom.modal,i=this.settings.transitionEnd;n.addEventListener(i,(function o(){n.removeEventListener(i,o),t.closeModal(e)}))}},{key:"captureNode",value:function(e){for(var t=this.dom.modalContent;e.childNodes.length;)t.appendChild(e.childNodes[0])}},{key:"releaseNode",value:function(e){for(var t=this.dom.modalContent;t.childNodes.length;)e.appendChild(t.childNodes[0])}},{key:"closeKeyHandler",value:function(e){var t,n=this.settings.closeKeys;t=n,"[object Array]"===Object.prototype.toString.call(t)&&t.length&&n.indexOf(e.which)>-1&&!0===this.isOpen&&(e.preventDefault(),this.close(e))}},{key:"outsideClickHandler",value:function(e){var t=this.settings.clickOutside,n=this.dom.modalInner;if(t){for(var i=e.target;i&&i!==document.body;){if(i===n)return;i=i.parentNode}this.close(e)}}},{key:"delegateOpen",value:function(e){var t=r(e,this.settings.open);t&&(e.preventDefault(),this.open(t,e))}},{key:"delegateClose",value:function(e){r(e,this.settings.close)&&(e.preventDefault(),this.close(e))}},{key:"listen",value:function(){var e=this.dom.modal;this.isListening?o("Event listeners already applied."):(e.addEventListener("click",this.outsideClickHandler,!1),document.addEventListener("keydown",this.closeKeyHandler,!1),document.addEventListener("click",this.delegateOpen,!1),document.addEventListener("click",this.delegateClose,!1),this.isListening=!0)}},{key:"destroy",value:function(){var e=this.dom.modal;this.isListening?(this.close(),e.removeEventListener("click",this.outsideClickHandler),document.removeEventListener("keydown",this.closeKeyHandler),document.removeEventListener("click",this.delegateOpen),document.removeEventListener("click",this.delegateClose),this.isListening=!1):o("Event listeners already removed.")}}]),e}();e.default=l})?i.apply(t,o):i)||(e.exports=s)},function(e,t,n){n(4),e.exports=n(3)},function(e,t){function n(e){this.context=e,this._createMasterGain(),this._createStereoDelay(),this._ampAttackTime=0,this._ampReleaseTime=2.2,this._filterAttackTime=.01,this._filterReleaseTime=1,this._filterEnvMod=0,this._filterCutoff=5e3,this._filterRes=0,this.setOscWave("sawtooth")}n.prototype.playNote=function(e,t,n,i){(t*=.5)<=0?t=.01:t>.5&&(t=.5),void 0!==i&&0!==i||(i=this.context.currentTime);var o=i,s=this.context.createGain(),a=this._createLowPassFilter();s.connect(a);var r=this.context.createOscillator();r.type=this.wave,r.connect(s);var l=this._MIDIToFrequency(e);r.frequency.value=l,r.start(0),r.stop(o+this._ampAttackTime+this._ampReleaseTime),s.gain.cancelScheduledValues(o),s.gain.setValueAtTime(0,o),s.gain.linearRampToValueAtTime(t,o+this._ampAttackTime),s.gain.exponentialRampToValueAtTime(.01,o+this._ampAttackTime+this._ampReleaseTime),a.frequency.cancelScheduledValues(o),a.frequency.value=this._filterCutoff*n,a.Q.value=this._filterRes,a.frequency.setValueAtTime(this._filterCutoff*n,o),a.frequency.linearRampToValueAtTime(this._filterCutoff*n+1e4*this._filterEnvMod,o+this._filterAttackTime),a.frequency.linearRampToValueAtTime(this._filterCutoff*n,o+this._filterAttackTime+this._filterReleaseTime)},n.prototype.setOscWave=function(e){var t;switch(e){case 0:t="sine";break;case 1:t="square";break;case 2:t="sawtooth";break;case 3:t="triangle";break;default:t="sawtooth"}this.wave=t},n.prototype.setMasterGain=function(e){this._gainNode.gain.value=.8*e},n.prototype.setAmpAttackTime=function(e){this._ampAttackTime=5*e},n.prototype.setAmpReleaseTime=function(e){this._ampReleaseTime=5*e},n.prototype.setFilterAttackTime=function(e){this._filterAttackTime=5*e},n.prototype.setFilterReleaseTime=function(e){this._filterReleaseTime=5*e},n.prototype.setFilterCutoff=function(e){this._filterCutoff=1e4*e},n.prototype.setFilterResonance=function(e){this._filterRes=2*e},n.prototype.setFilterEnvMod=function(e){this._filterEnvMod=10*e},n.prototype.setDelayTimeTempo=function(e,t){this.setDelayTime(60/e*t)},n.prototype.setDelayTime=function(e){this._leftDelay.delayTime.value=e,this._rightDelay.delayTime.value=2*e},n.prototype.setDelayFeedback=function(e){this._leftFeedback.gain.value=e,this._rightFeedback.gain.value=e},n.prototype._createMasterGain=function(){this._gainNode=this.context.createGain(),this._gainNode.connect(this.context.destination),this.setMasterGain(.5)},n.prototype._createLowPassFilter=function(){var e=this.context.createBiquadFilter();return e.type="lowpass",e.frequency.value=this._filterCutoff,e.Q.value=.99,e.connect(this._leftDelay),e.connect(this._rightDelay),e.connect(this._gainNode),e},n.prototype._createStereoDelay=function(){this._merger=this.context.createChannelMerger(2),this._merger.connect(this.context.destination),this._leftDelay=this.context.createDelay(),this._rightDelay=this.context.createDelay(),this._leftFeedback=this.context.createGain(),this._rightFeedback=this.context.createGain(),this._leftDelay.connect(this._leftFeedback),this._leftFeedback.connect(this._rightDelay),this._rightDelay.connect(this._rightFeedback),this._rightFeedback.connect(this._leftDelay),this._leftFeedback.connect(this._merger,0,0),this._rightFeedback.connect(this._merger,0,1),this.setDelayTime(.25),this.setDelayFeedback(0)},n.prototype.noteToMIDI=function(e,t){"DB"===(e=e.toUpperCase())?e="C#":"EB"===e?e="D#":"GB"===e?e="F#":"AB"===e?e="G#":"BB"===e&&(e="A#");return noteNumber=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"].indexOf(e)+12*t+21},n.prototype._MIDIToFrequency=function(e){return 440*Math.pow(2,(e-69)/12)},e.exports=n},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=()=>{document.querySelector(".js-game-top").addEventListener("click",e=>{const t=e.target.closest('[data-id="tg1-btn"]');t&&t.classList.toggle("active")});const e=document.querySelector(".js-g2-btn"),t=()=>{e.classList.toggle("hover")};setTimeout(t,1e3),setInterval(t,5e3);var i=new(n(2))(new(window.AudioContext||window.webkitAudioContext));i.setOscWave(3);document.querySelector(".js-game-medium").addEventListener("mousedown",e=>{const t=e.target.closest('[data-id="g3-btn"]');t&&(i.setDelayFeedback(.2),i.setDelayTimeTempo(110,.25),i.setFilterCutoff(.2),i.setAmpReleaseTime(.7),i.setFilterEnvMod(.8),i.setFilterAttackTime(.9),i.playNote(i.noteToMIDI(t.dataset.note||"C",4),1,1,0))})},o=n(0),s=n.n(o);var a=()=>{const e=document.querySelectorAll("[data-q-ch]"),t=document.querySelector("[data-q]");let n=parseInt(t.value);0===n?e[0].setAttribute("disabled",!0):e[0].removeAttribute("disabled"),30===n?e[1].setAttribute("disabled",!0):e[1].removeAttribute("disabled");new s.a({modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",loadClass:"vanilla-modal",class:"modal-visible",clickOutside:!0,closeKeys:[27],transitions:!0,onBeforeOpen:null,onBeforeClose:null,onOpen:null,onClose:null});const i=i=>{let o=parseInt(t.value);t.value=o+parseInt(i.target.dataset.qCh),n=parseInt(t.value),0===n?e[0].setAttribute("disabled",!0):e[0].removeAttribute("disabled"),30===n?e[1].setAttribute("disabled",!0):e[1].removeAttribute("disabled")};[...e].map(e=>e.addEventListener("click",i))};document.addEventListener("DOMContentLoaded",()=>{i(),a()})}]);
//# sourceMappingURL=app.js.map