(function(t){function e(e){for(var s,o,c=e[0],a=e[1],u=e[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/interview-calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1ab9":function(t,e,n){"use strict";n("3b5d")},2988:function(t,e,n){"use strict";n("925d")},"2d9c":function(t,e,n){},3481:function(t,e,n){},"3b5d":function(t,e,n){},4771:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"white-block"}),n("h1",{staticClass:"application-name"},[t._v(" Interview calculator 🧮 ")]),n("ThemeSwitcher"),n("div",{staticClass:"chat",attrs:{id:"chat"}},[n("div",{staticClass:"chat__segment",attrs:{id:"firstQuestion"}},[t._m(0),n("div",{staticClass:"answers"},[n("div",{staticClass:"answers__body"},t._l(this.branches,(function(e,s){return n("div",{key:s,staticClass:"answer",on:{click:function(n){return t.choseBranch(e.short,e.id)}}},[t._v(t._s(e.title))])})),0),n("div",{staticClass:"help",attrs:{id:"help-1"}},[t._v(" Выберите один из вариантов ответа ")])])]),n("WebDesigner",{key:t.webKeyRerender,on:{scrollToEnd:function(e){return t.scrollToEnd()}}}),n("JuniorFrontend",{key:t.juniorKeyRerender,on:{scrollToEnd:function(e){return t.scrollToEnd()}}}),n("Tester",{key:t.testerKeyRerender,on:{unHide:function(e){return t.unHideFirstQuestion()}}})],1),n("div",{staticClass:"result",attrs:{id:"result"}},[this.question===this.currentBranchLength?n("div",{staticClass:"result__body",attrs:{id:"results"}},[n("h2",{staticClass:"result__title",attrs:{id:"result-1"}},[t._v(t._s(t.result))])]):t._e()])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question"},[n("div",{staticClass:"question__body"},[n("h2",{staticClass:"question__title"},[t._v(" Для начала давай определимся на какую вакансию ты претендуешь? ")])])])}],o=n("5530"),c=n("b047"),a=n.n(c),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"arrow arrow--un-clicked",on:{click:function(e){return t.openCloseThemes(e)}}}),n("div",{staticClass:"switcher switcher--close"},[n("input",{staticClass:"switcher__radio switcher__radio--light",attrs:{type:"radio",name:"color-theme",value:"light","aria-label":"Светлая"},on:{click:function(e){return t.switchTheme(e)}}}),n("input",{staticClass:"switcher__radio switcher__radio--auto",attrs:{type:"radio",name:"color-theme",value:"auto","aria-label":"Автоматическкая",checked:""},on:{click:function(e){return t.switchTheme(e)}}}),n("input",{staticClass:"switcher__radio switcher__radio--dark",attrs:{type:"radio",name:"color-theme",value:"dark","aria-label":"Темная"},on:{click:function(e){return t.switchTheme(e)}}}),n("div",{staticClass:"switcher__status"})])])},l=[],d=(n("ac1f"),n("1276"),{name:"ThemeSwitcher",data:function(){return{arrow:".arrow",switcher:".switcher",switcherRadioLight:".switcher__radio--light",switcherRadioAuto:".switcher__radio--auto",switcherRadioDark:".switcher__radio--dark"}},methods:{openCloseThemes:function(t){var e=document.querySelector("".concat(this.arrow)),n=document.querySelector("".concat(this.switcher));e.className=e.className.split(" ")[0],n.className=n.className.split(" ")[0],this.arrowFlag||"scroll"===t.type?(this.arrowFlag||"scroll"===t.type)&&(e.className+=" arrow--un-clicked",n.className+=" switcher--close",this.arrowFlag=!this.arrowFlag):(e.className+=" arrow--clicked",n.className+=" switcher--open",this.arrowFlag=!this.arrowFlag)},switchTheme:function(t){if(this.eventValue!==t.target.value)if(this.eventValue=t.target.value,localStorage.getItem("color-theme")){if("auto"===t.target.value)return localStorage.removeItem("color-theme"),void document.documentElement.setAttribute("data-theme","auto");localStorage.setItem("color-theme",t.target.value),document.documentElement.setAttribute("data-theme",t.target.value)}else localStorage.setItem("color-theme",t.target.value),document.documentElement.setAttribute("data-theme",t.target.value)}},mounted:function(){this.handleDebouncedScroll=a()(this.openCloseThemes,1),window.addEventListener("scroll",this.handleDebouncedScroll),"light"===localStorage.getItem("color-theme")?(document.documentElement.setAttribute("data-theme","light"),document.querySelector("".concat(this.switcherRadioLight)).checked="checked"):"dark"===localStorage.getItem("color-theme")?(document.documentElement.setAttribute("data-theme","dark"),document.querySelector("".concat(this.switcherRadioDark)).checked="checked"):(document.documentElement.setAttribute("data-theme","auto"),document.querySelector("".concat(this.switcherRadioAuto)).checked="checked")}}),h=d,m=(n("65ff"),n("2877")),f=Object(m["a"])(h,u,l,!1,null,"721f6ee8",null),w=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.isBeginWebDesigner?n("div",{staticClass:"web-designer"},[n("Percent",{attrs:{newScore:this.score}}),t._l(this.array[0],(function(e,s){return n("div",{key:s,staticClass:"chat__segment"},[n("div",{staticClass:"question"},[n("div",{staticClass:"question__body"},[n("h3",{staticClass:"question__title"},[t._v(t._s(e[0].title))])])]),n("div",{staticClass:"answers"},[n("div",{staticClass:"answers__body",attrs:{id:"answers-0"}},t._l(e[1],(function(e,s){return n("div",{key:s,staticClass:"answer",on:{"~click":function(n){return t.newQuestion(e.count,e.id)}}},[t._v(t._s(e.title))])})),0)])])}))],2):t._e()},b=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"percent"},[n("h2",{staticClass:"percent__title"},[t._v(t._s(t.viewCount)+"%")])])},v=[],_={name:"Percent",props:["newScore"],data:function(){return{count:0}},methods:{fastAddition:function(){}},computed:{viewCount:function(){var t=this,e=0;return e=this.newScore-this.count,this.count!==this.newScore&&e>0?setTimeout((function(){return t.count++}),10):this.count!==this.newScore&&e<0&&setTimeout((function(){return t.count--}),10),e=0,this.count}}},y=_,C=(n("2988"),Object(m["a"])(y,g,v,!1,null,"878cd74c",null)),k=C.exports,S=n("2f62"),N={name:"WebDesigner",components:{Percent:k},data:function(){return{arrayId:[],maxNumberOfAnswers:3}},computed:Object(S["b"])(["isBeginWebDesigner","webQuestions","webAnswers","question","array","thisAnswers","thisAnswersId","score"]),methods:Object(o["a"])(Object(o["a"])({},Object(S["c"])(["addNewSegment","addQuestion","addScore","mulScore","nullOrHundred"])),{},{newQuestion:function(t,e){var n=this;this.hideAnswers(e),this.addQuestion(),this.question<this.webQuestions.length?(this.addScore(t),this.addNewSegment()):this.mulScore(t),this.nullOrHundred(),setTimeout((function(){return n.$emit("scrollToEnd")}),1)},hideAnswers:function(t){for(var e=document.getElementsByClassName("answer"),n=[],s=this.thisAnswers.length;s>0;s--)n.push(e[e.length-s]);for(var i=0;i<this.thisAnswersId.length;i++)this.thisAnswersId[i]!==t?n[i].className+=" hidden":n[i].className+=" chosen";this.arrayId=[]}}),watch:{},mounted:function(){this.isBeginWebDesigner&&this.addNewSegment()}},q=N,j=(n("f9a1"),Object(m["a"])(q,p,b,!1,null,"1bc9a396",null)),O=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.isBeginJuniorFrontend?n("div",{staticClass:"junior-frontend"},[n("Percent",{attrs:{newScore:this.score}}),t._l(this.array[0],(function(e){return n("div",{key:e.id,staticClass:"chat__segment"},[n("div",{staticClass:"question"},[n("div",{staticClass:"question__body"},[n("h3",{staticClass:"question__title"},[t._v(t._s(e[0].title))])])]),n("div",{staticClass:"answers"},[n("div",{staticClass:"answers__body",attrs:{id:"answers-0"}},t._l(e[1],(function(e,s){return n("div",{key:s,staticClass:"answer",on:{"~click":function(n){return t.newQuestion(e.count,e.id)}}},[t._v(t._s(e.title))])})),0)])])})),t._l(this.array[1],(function(e){return n("InputAnswer",{key:e.id,attrs:{segment:e},on:{scrollToEnd:function(e){return t.scrollToEnd()}}})})),t._l(this.array[2],(function(e){return n("div",{key:e.id,staticClass:"chat__segment"},[n("div",{staticClass:"question"},[n("div",{staticClass:"question__body"},[n("h3",{staticClass:"question__title"},[t._v(t._s(e[0].title))])])]),n("div",{staticClass:"answers"},[n("div",{staticClass:"answers__body",attrs:{id:"answers-1"}},t._l(e[1],(function(e,s){return n("div",{key:s,staticClass:"answer",on:{"~click":function(n){return t.newQuestion(e.count,e.id)}}},[t._v(t._s(e.title))])})),0)])])}))],2):t._e()},B=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat__segment"},[n("div",{staticClass:"question"},[n("div",{staticClass:"question__body"},[n("h3",{staticClass:"question__title"},[t._v(t._s(t.segment[0].title))])])]),n("div",{staticClass:"answers big-margin",attrs:{id:"input-answer"}},[n("div",{staticClass:"answers__body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputNumber,expression:"inputNumber"}],staticClass:"answer to-input",attrs:{type:"text",disabled:t.disabled},domProps:{value:t.inputNumber},on:{focusout:function(e){return t.questionWithInput()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.questionWithInput()},input:function(e){e.target.composing||(t.inputNumber=e.target.value)}}})]),t._m(0)])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"help another-position",attrs:{id:"help-2"}},[t._v(" Введите число от 0 до 10,"),n("br"),t._v(" где 0 — это совершенно не люблю, а 10 — обожаю ")])}],I=(n("a9e3"),n("9129"),{name:"InputAnswer",props:["segment"],data:function(){return{disabled:!1,inputNumber:"",oldInputNumber:""}},methods:Object(o["a"])(Object(o["a"])({},Object(S["c"])(["addNewSegment","addQuestion","addScore","mulScore","nullOrHundred"])),{},{questionWithInput:function(){this.disabled||(document.getElementById("input-answer").style.marginBottom="20px",this.inputNumber?(0===Number(this.inputNumber)?this.addNew(20):this.addNew(-50),this.disabled=!this.disabled,this.arrayId=[],document.getElementById("help-2").style.opacity="0",setTimeout((function(){document.getElementById("help-2").style.display="none"}),500)):this.inputUndefined())},inputUndefined:function(){this.inputNumber=this.oldInputNumber},addNew:function(t){this.addQuestion(),this.addScore(t),this.addNewSegment(),this.nullOrHundred(),this.$emit("scrollToEnd")}}),watch:{inputNumber:function(t){(Number.isNaN(+t)||t<0||t>10||t.length>1&&"10"!==t)&&this.inputUndefined(),this.oldInputNumber=t}}}),Q=I,R=(n("a55d"),Object(m["a"])(Q,A,T,!1,null,"a57dc04a",null)),x=R.exports,F={name:"JuniorFrontend",components:{Percent:k,InputAnswer:x},data:function(){return{arrayId:[],maxNumberOfAnswers:3,isInput:!1}},computed:Object(S["b"])(["isBeginJuniorFrontend","i","interrupt","juniorQuestions","juniorAnswers","question","array","thisAnswers","thisAnswersId","score"]),methods:Object(o["a"])(Object(o["a"])({},Object(S["c"])(["whatsInterrupt","addNewSegment","addQuestion","addScore","mulScore","nullOrHundred"])),{},{newQuestion:function(t,e){this.hideAnswers(e),this.addQuestion(),this.question<this.juniorQuestions.length?(this.addScore(t),this.addNewSegment()):this.mulScore(t),this.nullOrHundred(),this.scrollToEnd()},hideAnswers:function(t){for(var e=document.getElementsByClassName("answer"),n=[],s=this.thisAnswers.length;s>0;s--)n.push(e[e.length-s]);for(var i=0;i<this.thisAnswersId.length;i++)this.thisAnswersId[i]!==t?n[i].className+=" hidden":n[i].className+=" chosen";this.arrayId=[]},scrollToEnd:function(){var t=this;setTimeout((function(){return t.$emit("scrollToEnd")}),1)}}),watch:{},mounted:function(){this.isBeginJuniorFrontend&&(this.whatsInterrupt(3),this.addNewSegment())}},H=F,P=(n("1ab9"),Object(m["a"])(H,E,B,!1,null,"52417fa4",null)),$=P.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.isBeginTester?n("div",[n("div",{staticClass:"question tester-anim"},[t._m(0),n("button",{staticClass:"maybe",on:{click:function(e){return t.goBack()}}},[t._v("Возможно")])])]):t._e()},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question__body"},[n("h2",{staticClass:"question__title"},[t._v(" Прости, но такой вакансии пока нет, может на кого-то другого хочешь попробоваться? ")])])}],D={name:"Tester",methods:{goBack:function(){var t=this;document.getElementsByClassName("tester-anim")[0].style.opacity="0",setTimeout((function(){return t.$emit("unHide")}),300)}},computed:Object(S["b"])(["isBeginTester"])},L=D,W=(n("9268"),Object(m["a"])(L,J,K,!1,null,"5837cb75",null)),M=W.exports,z={name:"App",components:{ThemeSwitcher:w,WebDesigner:O,JuniorFrontend:$,Tester:M},data:function(){return{flag:!1,scrollH:document.documentElement.scrollHeight,scrollT:0,hidden1:{},hidden2:{},chosen:{},webKeyRerender:0,juniorKeyRerender:1,testerKeyRerender:2,arrowFlag:!1,eventValue:""}},computed:Object(S["b"])(["branches","currentBranchLength","juniorQuestions","juniorAnswers","question","result"]),methods:Object(o["a"])(Object(o["a"])({},Object(S["c"])(["whatsChosen","clearAllSegments"])),{},{choseBranch:function(t,e){this.flag||(this.flag=!this.flag,this.whatsChosen(t),this.hideFirstQuestion(e),this.clearAllSegments(),this.forceRerender())},forceRerender:function(){this.webKeyRerender++,this.juniorKeyRerender++,this.testerKeyRerender++},hideFirstQuestion:function(t){for(var e=document.getElementsByClassName("answer"),n=0;n<this.branches.length;n++)e[n].className+=n!==t?" hidden":" chosen";this.hidden1=document.getElementsByClassName("hidden")[0],this.hidden2=document.getElementsByClassName("hidden")[1],this.chosen=document.getElementsByClassName("chosen")[0],document.getElementById("help-1").style.opacity="0",setTimeout((function(){document.getElementById("help-1").style.display="none"}),500)},unHideFirstQuestion:function(){this.flag=!this.flag,this.whatsChosen("tes"),this.getBackClasses(),document.getElementById("help-1").style.opacity="1",document.getElementById("help-1").style.display="inherit",this.webKeyRerender++,this.juniorKeyRerender++,this.testerKeyRerender++},getBackClasses:function(){var t=this;this.hidden1.className="answer",this.hidden2.className="answer",this.hidden1.style.transition="font-size 0.5s, opacity 0.5s, margin 0.5s",this.hidden2.style.transition="font-size 0.5s, opacity 0.5s, margin 0.5s",setTimeout((function(){t.hidden1.style.transition="font-size 0.5s, opacity 0s, margin 0.5s",t.hidden2.style.transition="font-size 0.5s, opacity 0s, margin 0.5s"}),500),this.chosen.className="answer"},scrollToEnd:function(){var t=document.getElementById("result"),e=t.getBoundingClientRect().bottom,n=0;setTimeout((function(){var t=setInterval((function(){var s=e/500;s>window.pageYOffset-e&&document.documentElement.clientHeight+window.pageYOffset<document.body.offsetHeight&&document.documentElement.scrollTop>=n?(n=document.documentElement.scrollTop,window.scrollBy(0,s)):clearInterval(t)}),10)}),10)}})},U=z,V=(n("034f"),Object(m["a"])(U,i,r,!1,null,null,null)),Y=V.exports,G={state:{questions:[{id:0,title:"Есть ли у тебя опыт?"},{id:1,title:"Начнём с простого, div от span отличишь?"},{id:2,title:"Окей, а с JS у тебя как?"},{id:3,title:"Насколько ты любишь PHP?"},{id:4,title:"Сколько дней в неделю планируешь ходить в офис?"},{id:5,title:"Кстати, а оценку задач ты как даёшь?"}],answers:[[{id:0,title:"Больше 5 лет работаю по этой специальности",count:20},{id:1,title:"Ну немножко поработать успел",count:10},{id:2,title:"Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу",count:0}],[{id:3,title:"Естественно, первый для контейнеров, второй для текста",count:15},{id:4,title:"Код пишут компьютеры, пусть они и отличают",count:10},{id:5,title:"Думаю, что да",count:-5}],[{id:6,title:"Я как-то больше по JQuery",count:-30},{id:7,title:"Норм, прошёл курс",count:5},{id:8,title:"На чистом JS уже не первый год пишу",count:20}],[],[{id:9,title:"Я хочу работать удалённо",count:-20},{id:10,title:"3-4 дня в неделю будет норм",count:5},{id:11,title:"Я перееду в ваш офис, крепитесь",count:20}],[{id:12,title:"По часам",count:1.8},{id:13,title:"По дням",count:1.3},{id:14,title:"По наитию",count:.6}]]},getters:{juniorQuestions:function(t){return t.questions},juniorAnswers:function(t){return t.answers}}},X={state:{questions:[{id:0,title:"Есть ли у тебя опыт?"},{id:1,title:"В какой программе делаешь макеты?"},{id:2,title:"Любишь играться со шрифтами?"},{id:3,title:"А белый цвет сможешь белее сделать?"},{id:4,title:"Последний вопрос: в какую сторону расти планируешь?"},{id:5,title:"Кстати, а оценку задач ты как даёшь?"}],answers:[[{id:0,title:"Больше 5 лет работаю по этой специальности",count:20},{id:1,title:"Ну немножко поработать успел",count:10},{id:2,title:"Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу",count:0}],[{id:3,title:"Figma",count:15},{id:4,title:"Photoshop",count:-10},{id:5,title:"В такой, о которой вы не слышали",count:0}],[{id:6,title:"Я живу этим",count:20},{id:7,title:"Если очень попросите",count:10},{id:8,title:"Я сам/сама создаю шрифты",count:30},{id:9,title:"Нет, в игры не играю",count:-5}],[{id:10,title:"Я же говорил(а), что этого заказчика забанить надо",count:15},{id:11,title:"Пусть заказчик приедет и на Ретине посмотрит ещё разок",count:5},{id:12,title:"Конечно, сделаю, если #fff недостаточно",count:-10}],[{id:13,title:"До арт-дира, естественно",count:20},{id:14,title:"В какую-то одну сферу хочу, но пока не знаю какую",count:10},{id:15,title:"Пока расту в ширину",count:5}],[{id:14,title:"По часам",count:1.5},{id:15,title:"По дням",count:1.2},{id:16,title:"По наитию",count:.7}]]},getters:{webQuestions:function(t){return t.questions},webAnswers:function(t){return t.answers}}};s["a"].use(S["a"]);var Z=new S["a"].Store({state:{branches:[{id:0,title:"Веб-дизайнер",short:"web",chosen:!1},{id:1,title:"Джуниор фронтенд разработчик",short:"jun",chosen:!1},{id:2,title:"Тестеровщик",short:"tes",chosen:!1}],results:["К сожалению, нам с тобой не по пути","Ну если больше никто не придёт, то возьмём тебя","Проверь почту, там уже лежит оффер"],i:0,currentBranchLength:-1,whichBranch:"",array:[[]],interrupt:-1,question:0,newQuestion:0,score:0},getters:{branches:function(t){return t.branches},isBeginWebDesigner:function(t){return t.branches[0].chosen},isBeginJuniorFrontend:function(t){return t.branches[1].chosen},isBeginTester:function(t){return t.branches[2].chosen},i:function(t){return t.i},currentBranchLength:function(t){return t.currentBranchLength},interrupt:function(t){return t.interrupt},question:function(t){return t.question},array:function(t){return t.array},massiveOfCurrentAnswers:function(t,e){return e.array[t.i][t.question-t.newQuestion][1]},thisAnswers:function(t,e){for(var n=[],s=0;s<e.massiveOfCurrentAnswers.length;s++)n.push(e.massiveOfCurrentAnswers[s]);return n},thisAnswersId:function(t,e){for(var n=[],s=0;s<e.massiveOfCurrentAnswers.length;s++)n.push(e.thisAnswers[s].id);return n},score:function(t){return t.score},result:function(t){return t.score<=50?t.results[0]:t.score<=80?t.results[1]:t.results[2]}},mutations:{whatsInterrupt:function(t,e){t.interrupt=e},whatsChosen:function(t,e){switch(t.whichBranch=e,e){case"web":t.branches[0].chosen=!t.branches[0].chosen,t.currentBranchLength=t.web.questions.length;break;case"jun":t.branches[1].chosen=!t.branches[1].chosen,t.currentBranchLength=t.jun.questions.length;break;case"tes":t.branches[2].chosen=!t.branches[2].chosen;break;default:break}},addNewSegment:function(t){switch(t.interrupt!==t.question&&t.interrupt+1!==t.question||!t.question||(t.i++,t.array.push([]),t.newQuestion=t.question),t.whichBranch){case"web":t.array[t.i].push([t.web.questions[t.question],t.web.answers[t.question]]);break;case"jun":t.array[t.i].push([t.jun.questions[t.question],t.jun.answers[t.question]]);break;default:break}},clearAllSegments:function(t){t.array=[[]]},addQuestion:function(t){t.question++},addScore:function(t,e){t.score+=e},mulScore:function(t,e){t.score=Math.round(t.score*e)},nullOrHundred:function(t){t.score<0?t.score=0:t.score>100&&(t.score=100)}},actions:{},modules:{jun:G,web:X}});n("ce52"),n("7e79"),n("bb62");s["a"].config.productionTip=!1,new s["a"]({store:Z,render:function(t){return t(Y)}}).$mount("#app")},"65ff":function(t,e,n){"use strict";n("7c49")},"7c49":function(t,e,n){},"7e79":function(t,e,n){},"85ec":function(t,e,n){},"925d":function(t,e,n){},9268:function(t,e,n){"use strict";n("4771")},a55d:function(t,e,n){"use strict";n("2d9c")},bb62:function(t,e,n){},ce52:function(t,e,n){},f9a1:function(t,e,n){"use strict";n("3481")}});
//# sourceMappingURL=app.7e962c91.js.map