(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{384:function(t,e,o){var content=o(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("ddb9f932",content,!0,{sourceMap:!1})},402:function(t,e,o){"use strict";o(384)},403:function(t,e,o){var n=o(17)(!1);n.push([t.i,".log-list[data-v-fd2bdec0]{height:60vh;overflow-y:auto}.v-list-item__subtitle[data-v-fd2bdec0],.v-list-item__title[data-v-fd2bdec0]{flex:1 1 100%;text-overflow:ellipsis;white-space:normal}",""]),t.exports=n},422:function(t,e,o){"use strict";o.r(e);o(81);var n=o(25),r=o(39),c=o(40),l=o(37),v=o(23),h=o(20),d=(o(12),o(60),o(416)),f=o(383),w=function t(e){var o=this;Object(n.a)(this,t),this.init=function(){o.choosen=o.nowstage.eventChoise().choosens},this.refresh=function(t){o.charactor=t.charastatus,o.logs=t.logs,o.nowstage.depth=t.depth,o.nowstage.nowDepth=t.nowDepth,o.nowstage.understanding=t.understanding,o.nowstage.nowLastBoss=t.nowLastBoss,o.nowstage.nowMiddleBoss=t.nowMiddleBoss,o.choosen=o.nowstage.eventChoise().choosens},this.action=function(t){o.refresh(o.nowstage.eventChoise().choosenResults(t))},this.charactor=e.charactor,this.logs=e.logs,this.choosen=e.choosen,this.nowstage=e.nowstage},m=function t(e){var o=this;Object(n.a)(this,t),this.isWinLastBoss=function(){return void 0!==o.nowLastBoss&&o.nowLastBoss.nowHp<=0},this.logs=e.world.logs,this.charastatus=e.world.charactor,this.choosenCard=e.choosenCard,this.middleBoss=e.world.nowstage.middleBoss,this.nowMiddleBoss=e.world.nowstage.nowMiddleBoss,this.lastBoss=e.world.nowstage.lastBoss,this.nowLastBoss=e.world.nowstage.nowLastBoss,this.depth=e.world.nowstage.depth,this.nowDepth=e.world.nowstage.nowDepth||0,this.understanding=e.world.nowstage.understanding},_={nickname:"test",name:"テスト名前",text:"テスト説明",hp:100,attack:20,magic:10,brave:100,ambish:0,lead:100,fame:50,stigma:0,search:0,battleExperience:100,searchExperience:0,successrate:1,relics:[{name:"仮データ特権",text:"武力が2倍になるよ",effect:function(t){var e=Object(f.cloneDeep)(t);return e.attack*=2,e}}],result:(new(function(){function t(){Object(n.a)(this,t)}return Object(r.a)(t,[{key:"result",value:function(){for(var t=Object(f.cloneDeep)(this),e=0;e<t.relics.length;e++)t=t.relics[e].effect(t);return t}}]),t}())).result};function B(t){return"/browser_world/"+t}var y=1,C=2,x=3,L={choosen:y,choosenFunction:function(t){return!0},avatar:B("favicon.ico"),title:"ぼこぼこにするサンプル",text:"ぼこぼこにするぜ",comment:"「ぼっこぼこ」"},j={choosen:C,choosenFunction:function(t){return!0},avatar:B("favicon.ico"),title:"もっとぼこぼこにするサンプル",text:"もっとぼこぼこにするぜ",comment:"「ぼっこぼこ」"},k={title:"goblin battle",text:"goblin battle",choosens:[L,{choosen:x,choosenFunction:function(t){return!0},avatar:B("favicon.ico"),title:"殴らない選択肢サンプル",text:"殴らない",comment:"「やさしいね」"},j],choosenResults:function(t){if(void 0===t.nowLastBoss)return t;switch(t.logs.push(t.choosenCard),t.choosenCard.choosen){case y:t.nowLastBoss.nowHp-=t.charastatus.result().attack;var e={avatar:"",title:"",text:"",comment:"ダメージ:"+t.charastatus.result().attack};t.logs.push(e);break;case C:t.nowLastBoss.nowHp-=2*t.charastatus.result().attack;var o={avatar:"",title:"",text:"",comment:"ダメージ:"+2*t.charastatus.result().attack};t.logs.push(o)}return t}},O={title:function(){return"goblinStage"},text:function(){return"深度:"+this.nowDepth},depth:8,nowDepth:0,middleBossDepth:0,middleBoss:{},lastBossDepth:0,lastBoss:{goblin:{title:function(){return"goblin HP:"+this.hp},text:function(){return""},hp:100,nowHp:100,events:[k],eventChoise:function(){return this.events[0]}}},ramdomEvent:{go:{title:"susumu",text:"goblin battle",choosens:[{choosen:1,choosenFunction:function(t){return!0},avatar:B("favicon.ico"),title:"すすむぜサンプル",text:"すすむぜ",comment:"「すすむ」"}],choosenResults:function(t){return t.logs.push(t.choosenCard),t.nowDepth+=1,t}}},understanding:0,eventChoise:function(){return this.nowDepth===this.depth?(void 0===this.nowLastBoss&&(this.nowLastBoss=this.lastBoss.goblin),this.nowLastBoss.eventChoise()):this.ramdomEvent.go}};function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(v.a)(t);if(e){var r=Object(v.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var D=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},E=function(t){Object(c.a)(o,t);var e=M(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).formError="",t.nowStageTitle="",t.nowStageText="",t.nowEventTitle="",t.nowEventText="",t.newWorld=new w({charactor:_,choosen:[],logs:[],nowstage:O}),t}return Object(r.a)(o,[{key:"mounted",value:function(){this.choiceEventFromNow()}},{key:"chooseCard",value:function(t){this.newWorld.action(new m({world:this.newWorld,choosenCard:t}))}},{key:"choiceEventFromNow",value:function(){this.newWorld.init()}},{key:"onChange",value:function(){setTimeout((function(){var element=document.getElementById("scroll");null!=element&&element.scrollTo({top:element.scrollHeight,behavior:"smooth"})}),100)}},{key:"next",value:function(){this.formError=""}},{key:"backMenu",value:function(){this.$router.push("/")}}]),o}(d.b);D([Object(d.c)("newWorld.logs")],E.prototype,"onChange",null);var R=E=D([Object(d.a)({})],E),T=(o(402),o(88)),W=o(137),H=o.n(W),P=o(248),V=o(423),F=o(420),I=o(148),S=o(172),J=o(174),N=o(79),$=o(421),component=Object(T.a)(R,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{attrs:{justify:"center",align:"start"}},[o("v-col",{attrs:{cols:"12"}},[o("font",{attrs:{color:"red"}},[t._v(t._s(t.formError))])],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-card",{staticClass:"elevation-1"},[o("v-row",{attrs:{justify:"start",align:"start"}},[o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"title"},[t._v("\n            "+t._s(t.newWorld.nowstage.title())+"\n          ")])]),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.newWorld.nowstage.text())+"\n          ")])])],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[t.newWorld.nowstage.nowLastBoss?o("div",[o("v-card",{staticClass:"elevation-1"},[o("v-row",{attrs:{justify:"start",align:"start"}},[o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"title"},[t._v("\n              "+t._s(t.newWorld.nowstage.nowLastBoss.title())+"\n            ")])]),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle"},[t._v("\n              "+t._s(t.newWorld.nowstage.nowLastBoss.text())+"\n            ")])])],1)],1)],1):t._e()]),t._v(" "),o("v-col",{attrs:{cols:"8"}},[o("v-row",{attrs:{justify:"start",align:"start"}},[t._l(t.newWorld.choosen,(function(e,n){return[o("v-col",{key:n,attrs:{cols:"4"}},[o("v-card",{staticClass:"elevation-1",attrs:{disabled:!e.choosenFunction(t.defaultStatus)},on:{click:function(o){return t.chooseCard(e)}}},[o("v-row",{staticClass:"pl-4",attrs:{justify:"start",align:"start","no-gutters":""}},[o("v-col",{attrs:{cols:"12"}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.text)}})],1)],1),t._v(" "),o("v-col",{attrs:{cols:"4"}},[""!=e.avatar?o("v-list-item-avatar",[o("v-img",{attrs:{src:e.avatar}})],1):t._e()],1),t._v(" "),o("v-col",{attrs:{cols:"8"}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:t._s(e.comment)}})],1)],1)],1)],1)],1)]}))],2)],1),t._v(" "),o("v-col",{staticClass:"log-list",attrs:{id:"scroll",cols:"4"}},[o("v-list",{attrs:{"three-line":""}},[t._l(t.newWorld.logs,(function(e,n){return[o("v-card",{key:n,staticClass:"elevation-1"},[o("v-row",{staticClass:"pl-4",attrs:{justify:"start",align:"start","no-gutters":""}},[o("v-col",{attrs:{cols:"12"}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.text)}})],1)],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[""!=e.avatar?o("v-list-item-avatar",[o("v-img",{attrs:{src:e.avatar}})],1):t._e()],1),t._v(" "),o("v-col",{attrs:{cols:"10"}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:t._s(e.comment)}})],1)],1)],1)],1)]}))],2)],1),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("v-btn",{attrs:{primary:"",color:"primary"},on:{click:function(e){return t.backMenu()}}},[t._v("メニュー画面へ")])],1),t._v(" "),o("v-col",{staticClass:"text-md-right",attrs:{cols:"6"}})],1)}),[],!1,null,"fd2bdec0",null);e.default=component.exports;H()(component,{VBtn:P.a,VCard:V.a,VCol:F.a,VImg:I.a,VList:S.a,VListItemAvatar:J.a,VListItemContent:N.a,VListItemSubtitle:N.b,VListItemTitle:N.c,VRow:$.a})}}]);