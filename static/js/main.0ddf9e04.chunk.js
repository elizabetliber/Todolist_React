(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(14),n(8)),l=n(2),s=n(3),u=n(1),d=n(5),m=n(4),h=(n(15),n(16),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={done:!1},a.onDone=a.onDone.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onDone",value:function(){this.setState((function(e){return{done:!e.done}}))}},{key:"render",value:function(){var e=this,t="form-control mr-1";return this.state.done&&(t+=" done"),o.a.createElement("div",{className:"input-group mt-2"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("div",{className:"input-group-text"},o.a.createElement("input",{type:"checkbox","aria-label":"Checkbox for following text input",onClick:function(){return e.onDone}}))),o.a.createElement("input",{className:t,"aria-label":"Text input with checkbox",value:this.props.task.title}),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.onDelete(e.props.key)}},"delete"))}}]),n}(a.Component)),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).input1Change=function(e){var t=a.state;t.value=e.target.value,t.changed=t.value!==t.valueOld,a.setState(t)},a.state={tasks:[{id:1,title:"task \u21161",done:!0},{id:2,title:"task \u21162",done:!1},{id:3,title:"task \u21163",done:!1}],value:"",valueOld:""},a.onDelete=a.onDelete.bind(Object(u.a)(a)),a.onAdd=a.onAdd.bind(Object(u.a)(a)),a.itemId=4,a}return Object(s.a)(n,[{key:"onDelete",value:function(e){this.setState((function(t){return{tasks:t.tasks.filter((function(t){return t.id!==e}))}}))}},{key:"onAdd",value:function(e){var t={id:this.itemId++,title:e,done:!1};this.setState((function(e){var n=e.tasks;return{tasks:[].concat(Object(c.a)(n),[t])}}))}},{key:"render",value:function(){var e=this,t=this.state.tasks;return o.a.createElement("div",{className:"container"},o.a.createElement("em",null,"Todo List"),o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"text","data-class":"hello",className:"form-control  mr-1","aria-label":"Text input with checkbox",onChange:this.input1Change,value:this.state.value}),o.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.onAdd(e.state.value)}},"+ add")),o.a.createElement("div",null,t.map((function(n){return o.a.createElement(h,{task:n,key:n.id,onDelete:function(){return e.onDelete(n.id)},done:t.done})}))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0ddf9e04.chunk.js.map