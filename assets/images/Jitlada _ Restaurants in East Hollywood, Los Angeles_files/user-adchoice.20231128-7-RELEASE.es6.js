/*! 20231128-7-RELEASE */

((t,e,i)=>{let n;const a={"adChoiceBtn.title":"Why do I see this item?"};TRC._translationQueue=TRC._translationQueue||[],TRC._translationQueue.push({adchoice:a});const o=function(){n=TRC.translationManager.getLabel({feature:"adchoice"})||a,i.userAdChoice.isInitialized=!0},s=function(t,a){if(!t.hasFloatingButton&&a.plink){t.hasFloatingButton=!0;const o=e.trcGetCurrentStyle(t,"position"),s=e.createElement("div"),c=e.createElement("a");o&&"static"!==o||(t.style.position="relative");let l="trc_user_adChoice_btn";("STATIC"===a["adc-type"]||i.Device.isTouchDevice)&&(l+=" trc_user_adChoice_btn_static"),i.dom.addClass(s,l),s.setAttribute("title",n["adChoiceBtn.title"]),c.setAttribute("href",a.plink),c.setAttribute("target","_blank"),c.appendChild(s),t.appendChild(c)}},c=function(t){for(let e=0;e<t.boxes.length;e++)s(t.boxes[e],t.recommendationList[e])};i.userAdChoice={init:o,initForMode:c,locale:"en",isInitialized:!1}})(window,document,TRC);