(this["webpackJsonproll-dice"]=this["webpackJsonproll-dice"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/d20.619432a6.gif"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),o=a.n(i),l=(a(14),a(1)),r=a(2),s=a(5),u=a(4),m=(a(15),a(3)),d=a(8),h=a.n(d),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={numberDice:void 0},n.rollDice=n.rollDice.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"rollDice",value:function(){var e=this,t=Math.round(Math.random()*(this.props.diceSide-1)+1);this.setState({numberDice:c.a.createElement("img",{src:h.a,width:"70px",alt:"dice GIF"})}),setTimeout((function(){e.setState({numberDice:t})}),1800),setTimeout((function(){e.setState({numberDice:""})}),1e4)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"titleDice"},"D",this.props.diceSide),c.a.createElement("button",{className:"buttonRoll",type:"button",onClick:this.rollDice},"Roll"),c.a.createElement("h1",{className:"titleRolled"},this.state.numberDice))}}]),a}(n.Component),v=(a(16),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={diceRolled:6},n.changeInput=n.changeInput.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"changeInput",value:function(e){this.setState({diceRolled:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"dice-container"},c.a.createElement("form",{className:"form"},c.a.createElement("label",{className:"labelDice",htmlFor:"diceSide"},"Choose the dice "),c.a.createElement("select",{className:"selectInput",onChange:this.changeInput,name:"diceSide",id:"diceSide"},c.a.createElement("option",{value:"3"},"D3"),c.a.createElement("option",{value:"4"},"D4"),c.a.createElement("option",{selected:"selected",value:"6"},"D6"),c.a.createElement("option",{value:"8"},"D8"),c.a.createElement("option",{value:"10"},"D10"),c.a.createElement("option",{value:"12"},"D12"),c.a.createElement("option",{value:"20"},"D20"),c.a.createElement("option",{value:"100"},"D100")),c.a.createElement(p,{diceSide:this.state.diceRolled})))}}]),a}(n.Component)),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={choosenDice:void 0},n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Roll your dice!"),c.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ccb35adf.chunk.js.map