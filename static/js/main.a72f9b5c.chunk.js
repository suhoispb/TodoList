(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n(10),r=n.n(c),i=n(8),s=n(6),l=n(7),u=n(2),d=n(3),b=n(5),j=n(4),m=(n(17),function(t){var e=t.toDo,n=t.done;return Object(o.jsxs)("div",{className:"app-header d-flex",children:[Object(o.jsx)("h1",{children:"Todo List"}),Object(o.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}),f=(n(18),function(){return Object(o.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"type to search"})}),p=n(11),O=(n(19),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onToggleImportant,c=t.onToggleDone,r=t.important,i="todo-list-item";return t.done&&(i+=" done"),r&&(i+=" important"),Object(o.jsxs)("span",{className:i,children:[Object(o.jsx)("span",{className:"todo-list-item-label",onClick:c,children:e}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a,children:Object(o.jsx)("i",{className:"fa fa-exclamation"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(o.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(a.Component)),h=(n(20),function(t){var e=t.todos,n=t.onDeleted,a=t.onToggleImportant,c=t.onToggleDone,r=e.map((function(t){var e=t.id,r=Object(p.a)(t,["id"]);return Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(O,Object(s.a)(Object(s.a)({},r),{},{onDeleted:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleDone:function(){return c(e)}}))},e)}));return Object(o.jsx)("ul",{className:"list-group todo-list",children:r})}),g=(n(21),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-info",children:"All"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Active"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Done"})]})}}]),n}(a.Component)),x=(n(22),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{className:"item-add-form",children:Object(o.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return t.props.onItemAdded("Hello World")},children:"Add Item"})})}}]),n}(a.Component)),v=(n(23),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={todoData:[t.createTodoItem("Drink Coffee"),t.createTodoItem("Make Awesome App"),t.createTodoItem("Have a lunch")]},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(l.a)(n.slice(0,o)),Object(l.a)(n.slice(o+1)))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(l.a)(e),[n])}}))},t.onToggleDone=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"done")}}))},t.onToggleImportant=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"important")}}))},t}return Object(d.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],c=Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},n,!a[n]));return[].concat(Object(l.a)(t.slice(0,o)),[c],Object(l.a)(t.slice(o+1)))}},{key:"render",value:function(){var t=this.state.todoData,e=t.filter((function(t){return t.done})).length,n=t.length-e;return Object(o.jsxs)("div",{className:"todo-app",children:[Object(o.jsx)(m,{toDo:n,done:e}),Object(o.jsxs)("div",{className:"top-panel d-flex",children:[Object(o.jsx)(f,{}),Object(o.jsx)(g,{})]}),Object(o.jsx)(h,{todos:t,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(o.jsx)(x,{onItemAdded:this.addItem})]})}}]),n}(a.Component));r.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.a72f9b5c.chunk.js.map