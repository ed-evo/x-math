(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(t,n,e){var content=e(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("dc093880",content,!0,{sourceMap:!1})},247:function(t,n,e){"use strict";e.d(n,"a",(function(){return _}));e(73);var r=e(17),o=e(16),c=e(31),f=e(36),l=e(19),v=e(257),d=(e(383),e(30),e(33),e(5),e(83),e(197));function h(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(l.a)(t);if(n){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(f.a)(this,e)}}var m=function(t){Object(c.a)(e,t);var n=h(e);function e(t){return Object(o.a)(this,e),n.call(this,t)}return Object(r.a)(e)}(Object(v.a)(Error)),_=function(){function t(n,e){Object(o.a)(this,t),this._question=n,this._choices=e,this._creationTime=d.DateTime.now().setZone("Europe/Rome")}return Object(r.a)(t,[{key:"creationTime",get:function(){return this._creationTime}},{key:"question",get:function(){return this._question}},{key:"choices",get:function(){return this._choices}},{key:"answer",get:function(){return this._answer},set:function(t){this._answer=t,this._answerTime=d.DateTime.now().setZone("Europe/Rome"),console.log(this)}},{key:"isAnswered",get:function(){return void 0!==this._answer}},{key:"answerTime",get:function(){return this._answerTime}},{key:"isCorrect",get:function(){if(!this.isAnswered)throw new m("Domanda non risposta");var t=this.question.value,n=!1;return this.answer===t?n=!0:Number.isNaN(this.answer)&&(n=!this.choices.has(t)),n}},{key:"reset",value:function(){this._answer=void 0}},{key:"toString",value:function(){return"".concat(this.question.toString()," = ").concat(this.answer)}}]),t}()},248:function(t,n,e){"use strict";e.d(n,"a",(function(){return _}));var r,o=e(31),c=e(36),f=e(19),l=e(16),v=e(17);e(33),e(5),e(73);function d(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(f.a)(t);if(n){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}!function(t){t.ADDITION="+",t.SUBTRACTION="-",t.MULTIPLICATION="x",t.DIVISION="/"}(r||(r={}));var h=function(){function t(n){Object(l.a)(this,t),this._value=n}return Object(v.a)(t,[{key:"value",get:function(){return this._value}},{key:"toString",value:function(){return""+this.value}}]),t}(),m=function(){function t(n,e,r){Object(l.a)(this,t),this._operator=n,this._leftHandSide=e,this._rightHandSide=r}return Object(v.a)(t,[{key:"operator",get:function(){return this._operator}},{key:"leftHandSide",get:function(){return this._leftHandSide}},{key:"rightHandSide",get:function(){return this._rightHandSide}},{key:"toInfixString",value:function(){return"".concat(this.leftHandSide," ").concat(this.operator," ").concat(this.rightHandSide)}},{key:"toString",value:function(){return this.toInfixString()}}]),t}(),_=function(t){Object(o.a)(e,t);var n=d(e);function e(t,o){return Object(l.a)(this,e),n.call(this,r.MULTIPLICATION,new h(t),new h(o))}return Object(v.a)(e,[{key:"value",get:function(){return this.leftHandSide.value*this.rightHandSide.value}}]),e}(m)},256:function(t,n,e){"use strict";var r={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=e(94),c=e(149),f=e.n(c),l=e(394),v=e(400),d=e(395),h=e(258),m=e(401),_=e(396),w=e(191),y=e(192),O=e(123),k=e(193),x=e(92),j=e(397),V=e(399),S=e(398),I=e(254),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[e("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i,attrs:{to:n.to,router:"",exact:""}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(n.title)}})],1)],1)})),1)],1),t._v(" "),e("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e("v-app-bar-nav-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.clipped=!t.clipped}}},[e("v-icon",[t._v("mdi-application")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.fixed=!t.fixed}}},[e("v-icon",[t._v("mdi-minus")])],1),t._v(" "),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),e("v-main",[e("v-container",[e("Nuxt")],1)],1),t._v(" "),e("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(n){t.rightDrawer=n},expression:"rightDrawer"}},[e("v-list",[e("v-list-item",{nativeOn:{click:function(n){t.right=!t.right}}},[e("v-list-item-action",[e("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),e("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e("v-footer",{attrs:{absolute:!t.fixed,app:""}},[e("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);n.a=component.exports;f()(component,{VApp:l.a,VAppBar:v.a,VAppBarNavIcon:d.a,VBtn:h.a,VContainer:m.a,VFooter:_.a,VIcon:w.a,VList:y.a,VListItem:O.a,VListItemAction:k.a,VListItemContent:x.a,VListItemTitle:x.b,VMain:j.a,VNavigationDrawer:V.a,VSpacer:S.a,VToolbarTitle:I.a})},285:function(t,n,e){e(286),t.exports=e(287)},317:function(t,n,e){"use strict";e(237)},318:function(t,n,e){var r=e(26)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},380:function(t,n,e){"use strict";e.r(n),e.d(n,"next",(function(){return f})),e.d(n,"submit",(function(){return l}));var r=e(37),o=(e(102),e(5),e(264),e(49),e(265),e(266),e(267),e(268),e(269),e(270),e(271),e(272),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(50),e(59),e(126)),c=e(247);function f(t){var n=t.state,e=t.commit,r=Object(o.sample)(n.tabelline),f=new Set;Object(o.random)(1,100)%4<3&&f.add(r.value);do{var l=Object(o.sample)(n.tabelline);f.add(l.value)}while(f.size<3);return(f=new Set(Object(o.shuffle)(Array.from(f)))).add(NaN),e("setCurrent",{current:new c.a(r,f)}),r}function l(t,n){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function t(n,e){var r,o,c,f,l,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.state,o=n.getters,c=n.commit,f=n.dispatch,l=e.value,c("setAnswer",{answer:l}),v=o.isCorrect,c("addLog",{question:r.question}),t.next=7,f("next");case 7:return t.abrupt("return",v);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},384:function(t,n,e){"use strict";function r(t){return t.question.question}function o(t){return t.question.isCorrect}function c(t){return t.question.choices}function f(t){return t.history}e.r(n),e.d(n,"question",(function(){return r})),e.d(n,"isCorrect",(function(){return o})),e.d(n,"choices",(function(){return c})),e.d(n,"logs",(function(){return f}))},385:function(t,n,e){"use strict";function r(t,n){var e=n.current;t.question=e}function o(t,n){var e=t.question,r=n.answer;e.answer=r}function c(t,n){var e=t.history,r=n.question;e.unshift(r)}e.r(n),e.d(n,"setCurrent",(function(){return r})),e.d(n,"setAnswer",(function(){return o})),e.d(n,"addLog",(function(){return c}))},386:function(t,n,e){"use strict";e.r(n),e.d(n,"tabelline",(function(){return c})),e.d(n,"question",(function(){return f})),e.d(n,"history",(function(){return l}));e(281),e(282),e(5),e(61);var r=e(248),o=[1,2,3,4,5,6,7,8,9,10],c=o.flatMap((function(a){return o.map((function(b){return new r.a(a,b)}))})),f=null,l=[]},85:function(t,n,e){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(317),e(94)),c=e(149),f=e.n(c),l=e(394),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);n.a=component.exports;f()(component,{VApp:l.a})}},[[285,7,1,8]]]);