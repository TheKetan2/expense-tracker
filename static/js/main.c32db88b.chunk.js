(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c);function u(){return r.a.createElement("h2",null,"Expense Tracker")}var o=n(1),i=n(5),s=n(2),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)({},e,{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},E={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300}]},d=Object(a.createContext)(E),p=function(e){var t=e.children,n=Object(a.useReducer)(m,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)};function f(){var e=Object(a.useContext)(d).transactions.reduce((function(e,t){return e+t.amount}),0);return r.a.createElement("div",null,r.a.createElement("p",null,"YOUR BALANCE"),r.a.createElement("h2",null,e<0?"-$"+Math.abs(e):"+$"+Math.abs(e)))}function b(){var e=Object(a.useContext)(d).transactions;return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",class:"money plus"},"+$",e.filter((function(e){return e.amount>0})).reduce((function(e,t){return e+t.amount}),0))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",class:"money minus"},"-$",e.filter((function(e){return e.amount<0})).reduce((function(e,t){return e+t.amount}),0))))}n(11);function v(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction;return r.a.createElement("li",{class:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,t.amount<0?"-$"+Math.abs(t.amount):"+$"+Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},"x"))}function h(){var e=Object(a.useContext)(d).transactions;return r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e){return r.a.createElement(v,{transaction:e})}))))}function x(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(d).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e10*Math.random()),text:n,amount:Number(i)};m(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",id:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},">Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",id:"amount",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))}l.a.render(r.a.createElement((function(){return r.a.createElement(p,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(x,null)))}),null),document.querySelector("#root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.c32db88b.chunk.js.map