(this["webpackJsonpapp-cliente"]=this["webpackJsonpapp-cliente"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(5),r=n.n(c),o=(n(11),n(3)),i=n.n(o),d=n(6),u=n(4);n(13);var p=n(0);function l(e){var t=e.data;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"card-container",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("strong",{className:"name",children:t.name})," ",Object(p.jsxs)("p",{children:["Exp: ",t.exp]}),Object(p.jsxs)("div",{className:"imgPoke",children:[Object(p.jsx)("img",{alt:"Imagen Pokemon",src:t.img||"/img/pokemon4.png"}),Object(p.jsxs)("button",{onClick:function(e){!function(e){void 0===e.name?alert("Busca un Pokemon para poder Descargarlo"):function(t){var n=new FileReader;n.onload=function(t){var n=document.createElement("a");n.href=t.target.result,n.target="_blank",n.download=e.name||"o.txt";var a=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});n.dispatchEvent(a),(window.URL||window.webkitURL).revokeObjectURL(n.href)},n.readAsDataURL(t)}(function(e){var t=[];return t.push("Datos de ".concat(e.name,"\n")),t.push("Nombre: "),t.push(e.name),t.push("\n"),t.push("Orden en la Pokedex: "),t.push(e.order),t.push("\n"),t.push("Experiencia:"),t.push(e.exp),t.push("\n"),t.push("Typo:"),t.push(e.type),t.push("\n"),t.push("Altura:"),t.push(e.size),t.push("\n"),t.push("Ataque:"),t.push(e.attack),t.push("\n"),t.push("Hp:"),t.push(e.hp),t.push("\n"),t.push("Defensa:"),t.push(e.defe),new Blob(t,{type:"text/plain"})}(e,e.name))}(t)},className:"descargar",children:[t.name||"Busca el Pokemon para Descargarlo"," "]})]}),Object(p.jsxs)("div",{className:"dataPoke",children:[Object(p.jsxs)("div",{className:"pokedexOrder",children:[Object(p.jsxs)("strong",{className:"order",children:["#",t.order||"Order Pokedex"]}),Object(p.jsx)("strong",{className:"type",children:t.type||"Type Pokemon"})]}),Object(p.jsxs)("div",{className:"atributos",children:[Object(p.jsxs)("p",{children:["Size ",Object(p.jsx)("br",{})," ",t.size]}),Object(p.jsxs)("p",{children:["Hp ",Object(p.jsx)("br",{})," ",t.hp]}),Object(p.jsxs)("p",{children:["Attack ",Object(p.jsx)("br",{})," ",t.attack]}),Object(p.jsxs)("p",{children:["Defends ",Object(p.jsx)("br",{})," ",t.defe]})]})]})]})})})}n(15);function j(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),r=Object(u.a)(c,2),o=r[0],j=r[1],h=function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,(a=n,fetch("/api/PokeApi",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({pokeName:a})}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){null!=e.HandleError?alert("Debes escribir el nombre del Pokemon de forma correcta"):j({name:e.Pokedata.name,exp:e.Pokedata.base_experience,order:e.Pokedata.order,type:e.Pokedata.types[0].type.name,size:e.Pokedata.height,hp:e.Pokedata.stats[0].base_stat,attack:e.Pokedata.stats[1].base_stat,defe:e.Pokedata.stats[2].base_stat,img:e.Pokedata.sprites.other.dream_world.front_default})}));case 3:s("");case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("div",{className:"home",children:Object(p.jsx)("li",{onClick:function(){window.location.reload()},children:"HOME"})}),Object(p.jsxs)("form",{onSubmit:h,autoComplete:"off",children:[Object(p.jsx)("input",{type:"search",name:"pokeName",value:n,onChange:function(e){var t=e.target.value;s(t.toLowerCase())},placeholder:"Busca tu Pokemon Favorito",required:!0}),Object(p.jsx)("button",{type:"submit",children:"Enviar"})]})]})})}),Object(p.jsx)(l,{data:o})]})}var h=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.3effbb21.chunk.js.map