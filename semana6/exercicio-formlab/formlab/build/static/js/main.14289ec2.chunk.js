(this.webpackJsonpformlab=this.webpackJsonpformlab||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),o=t.n(r),c=(t(12),t(3)),u=t(4),i=t(6),m=t(5);t(13);var E=function(){return l.a.createElement("div",{className:"Etapa1"},l.a.createElement("h1",null,"ETAPA 1 - DADOS GERAIS"),l.a.createElement("p",null,"1. Qual o seu nome?"),l.a.createElement("input",null),l.a.createElement("p",null,"2. Qual sua idade?"),l.a.createElement("input",null),l.a.createElement("p",null,"3. Qual seu email?"),l.a.createElement("input",null),l.a.createElement("p",null,"4. Qual a sua escolaridade?"),l.a.createElement("select",null,l.a.createElement("option",{value:""},"Ensino M\xe9dio Incompleto"),l.a.createElement("option",{value:""},"Ensino M\xe9dio Completo"),l.a.createElement("option",{value:""},"Ensino Superior Incompleto"),l.a.createElement("option",{value:""},"Ensino Superior Completo")))};var s=function(){return l.a.createElement("div",{className:"Etapa2"},l.a.createElement("h1",null,"ETAPA 2 - INFORMA\xc7\xd5ES DO ENSINO SUPERIOR"),l.a.createElement("p",null,"5. Qual curso?"),l.a.createElement("input",null),l.a.createElement("p",null,"6. Qual unidade de ensino?"),l.a.createElement("input",null))};var p=function(){return l.a.createElement("div",{className:"Etapa3"},l.a.createElement("h1",null,"ETAPA 3 - INFORMA\xc7\xd5ES GERAIS DE ENSINO"),l.a.createElement("p",null,"5. Por que voc\xea n\xe3o terminou um curso de gradua\xe7\xe3o?"),l.a.createElement("input",null),l.a.createElement("p",null,"6. Voc\xea fez algum curso complementar?"),l.a.createElement("select",null,l.a.createElement("option",{value:""},"N\xe3o"),l.a.createElement("option",{value:""},"Curso de ingl\xeas"),l.a.createElement("option",{value:""},"Curso t\xe9cnico")))};var d=function(){return l.a.createElement("div",{className:"Final"},l.a.createElement("h1",null,"O FORMUL\xc1RIO ACABOU"),l.a.createElement("p",null,"Muito obrigado por participar! Entraremos em contato!"))},v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={etapa:1},e.renderizaEtapa=function(){switch(e.state.etapa){case 1:return l.a.createElement(E,null);case 2:return l.a.createElement(s,null);case 3:return l.a.createElement(p,null);case 4:return l.a.createElement(d,null);default:return}},e.irParaProximaEtapa=function(){var a=e.state.etapa;a++,e.setState({etapa:a})},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},this.renderizaEtapa(),4!==this.state.etapa?l.a.createElement("button",{onClick:this.irParaProximaEtapa},"Pr\xf3xima etapa"):l.a.createElement("div",null," "))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.14289ec2.chunk.js.map