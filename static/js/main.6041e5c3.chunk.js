(this["webpackJsonpnearvember-challenge-2"]=this["webpackJsonpnearvember-challenge-2"]||[]).push([[0],{123:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/nearvember-challenge-3",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"challenge3.lkskrnk.testnet";e.exports=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"};case"production":case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},145:function(e,t){},201:function(e,t,n){},207:function(e,t){},217:function(e,t){},235:function(e,t){},265:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),a=n(124),s=n(43),o=n(0),i=n(52),l=n.n(i),d=(n(74),n(28)),u=n(268),b=n(267),j=n(2);function h(e){var t=e.error,n=e.callback;function r(){n()}return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u.a,{appear:!0,show:""!==t,as:o.Fragment,children:Object(j.jsx)(b.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:r,children:Object(j.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(j.jsx)(u.a.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(j.jsx)(b.a.Overlay,{className:"fixed inset-0"})}),Object(j.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(j.jsx)(u.a.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(j.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[Object(j.jsx)(b.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Opps, something went wrong"}),Object(j.jsx)("div",{className:"mt-2",children:Object(j.jsx)("p",{className:"text-sm text-gray-500",children:t})}),Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:r,children:"Close"})})]})})]})})})})}var m=n(40),x=n(110),p=n(122),g=new m.GiphyFetch("oW0VXSxqLF9GYLy5XFqTykhmPXzBvf0A");function f(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(p.a)(Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.random({tag:"Chuck Norris"});case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)}))),[]),n&&Object(j.jsx)(x.Gif,{gif:n,width:800,className:"mx-auto"})}var O=function(){return Object(j.jsx)("div",{className:"grid grid-cols-1 gap-4",children:Object(j.jsx)(f,{})})},v=function(e){var t=e.currentUser,n=e.contract,r=Object(o.useState)(!1),c=Object(d.a)(r,2),a=c[0],s=c[1],i=Object(o.useState)(""),l=Object(d.a)(i,2),u=l[0],b=l[1],m=Object(o.useState)(""),x=Object(d.a)(m,2),p=x[0],g=x[1],f=Object(o.useState)(""),v=Object(d.a)(f,2),w=v[0],N=v[1];Object(o.useEffect)((function(){n.get_response({accountId:t.accountId}).then((function(e){console.log(e),g(e)}))}));var y=function(){return""!==u};return Object(j.jsxs)("div",{className:"md:container md:mx-auto",children:[a?Object(j.jsx)("div",{className:"mt-4 mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-20 w-20"}):Object(j.jsx)("div",{className:"mt-4 h-20 w-20"}),Object(j.jsx)("div",{className:"grid grid-cols-1 gap-4",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"p-8",children:[Object(j.jsx)("div",{className:"uppercase tracking-wide text-sm text-indigo-500 font-semibold",children:"What's Your Name?!"}),Object(j.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[Object(j.jsx)("input",{type:"text",className:"border-2 p-1 border-green-500 rounded",value:u,placeholder:"Enter Your Name",onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("button",{disabled:!y(),className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",onClick:function(){s(!0),y&&n.hello_world({name:u}).then((function(){s(!1),b("")}),(function(e){N("".concat(e)),s(!1)}))},children:"Send"})]}),Object(j.jsx)(h,{error:w,callback:function(){return N("")}})]})})}),p&&Object(j.jsxs)("div",{className:"p-8",children:[Object(j.jsx)("div",{className:"uppercase tracking-wide text-sm text-indigo-500 font-semibold",children:"CHUCKY SPEAKS:"}),Object(j.jsx)("p",{className:"mt-2 text-gray-500",children:p}),Object(j.jsx)(O,{})]})]})},w=function(e){var t=e.contract,n=e.currentUser,r=e.nearConfig,c=e.wallet;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4",children:[Object(j.jsxs)("div",{className:"flex-shrink-0",children:[Object(j.jsx)("img",{className:"h-12 w-24",src:"https://docs.near.org/img/near_logo.svg",alt:"NEAR Logo"}),n?Object(j.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:function(){c.signOut(),window.location.replace(window.location.origin+window.location.pathname)},children:"Log out"}):Object(j.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:function(){c.requestSignIn(r.contractName,"NEAR Hello Chuck App")},children:"Log in"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text-xl font-medium text-black",children:"Near Hello Chuck"}),n?Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"text-gray-500",children:["Account ID: ",n.accountId," "]})}):Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"text-gray-500",children:"Sign In To Use The App"})})]})]}),n&&Object(j.jsx)(v,{currentUser:n,contract:t})]})},N=(n(201),n(123)),y=n.n(N),k=n(27);function C(){return(C=Object(s.a)(c.a.mark((function e(){var t,n,r,o,i,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y()("production"),e.next=3,k.connect(Object(a.a)({deps:{keyStore:new k.keyStores.BrowserLocalStorageKeyStore}},t));case 3:if(n=e.sent,r=new k.WalletConnection(n),o=new k.providers.JsonRpcProvider(t.nodeUrl),!r.getAccountId()){e.next=12;break}return e.t0=r.getAccountId(),e.next=10,r.account().state();case 10:e.t1=e.sent.amount,i={accountId:e.t0,balance:e.t1};case 12:return e.next=14,new k.Contract(r.account(),t.contractName,{viewMethods:["get_response"],changeMethods:["hello_world"],sender:r.getAccountId()});case 14:return l=e.sent,d=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.txStatus(t,i.accountId);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.abrupt("return",{contract:l,currentUser:i,nearConfig:t,walletConnection:r,transactionByHash:d});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.nearInitPromise=function(){return C.apply(this,arguments)}().then((function(e){var t=e.contract,n=e.currentUser,r=e.nearConfig,c=e.walletConnection,a=e.transactionByHash;l.a.render(Object(j.jsx)(w,{contract:t,currentUser:n,nearConfig:r,wallet:c,transactionByHash:a}),document.getElementById("root"))}))}},[[265,1,2]]]);
//# sourceMappingURL=main.6041e5c3.chunk.js.map