(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={root:"Chats_root__33drF",searchWrapper:"Chats_searchWrapper__M9y5G",item:"Chats_item__jxSbr",itemSelected:"Chats_itemSelected__2ioyG",itemInfo:"Chats_itemInfo__Xq5Qf",itemInfoTitle:"Chats_itemInfoTitle__3AIzD",itemInfoSubtitle:"Chats_itemInfoSubtitle__3zlq5"}},11:function(e,t,a){e.exports={root:"Message_root__2yStS",textRight:"Message_textRight__25mi4",message:"Message_message__PJskQ",messageDetails:"Message_messageDetails__343Eb",sender:"Message_sender___VILF",time:"Message_time__VBN1C"}},12:function(e,t,a){e.exports={root:"Login_root__2NvZI",inputWrapper:"Login_inputWrapper__3UZjA",input:"Login_input__PMIes",button:"Login_button__2fjXT",error:"Login_error__3I9nt"}},17:function(e,t,a){e.exports={root:"ChatRoom_root__2E0TI",header:"ChatRoom_header__3f4Oz",roomName:"ChatRoom_roomName__1LVKv",messagesContainer:"ChatRoom_messagesContainer__2B9qb",messageWrapper:"ChatRoom_messageWrapper__UVqta",typing:"ChatRoom_typing__1caoR"}},2:function(e,t){e.exports={COMMUNITY_CHAT:"COMMUNITY_CHAT",USER_CONNECTED:"USER_CONNECTED",MESSAGE_RECIEVED:"MESSAGE_RECIEVED",MESSAGE_SENT:"MESSAGE_SENT",USER_DISCONNECTED:"USER_DISCONNECTED",TYPING:"TYPING",VERIFY_USER:"VERIFY_USER",LOGOUT:"LOGOUT",PRIVATE_MESSAGE:"PRIVATE_MESSAGE"}},20:function(e,t,a){e.exports={root:"MessageInput_root__aW0js",form:"MessageInput_form__1nNby",input:"MessageInput_input__3OSNL",button:"MessageInput_button__10Vx3"}},33:function(e,t,a){e.exports={root:"Avatar_root__2udP3",avatar:"Avatar_avatar__2fyJS"}},52:function(e,t,a){e.exports={main:"Layout_main__11IA2"}},53:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t,a){e.exports=a(98)},68:function(e,t,a){},8:function(e,t,a){e.exports={iconLink:"Sidebar_iconLink__26bt9",iconLinkSelected:"Sidebar_iconLinkSelected__lKLMT",root:"Sidebar_root__2M6e6",logo:"Sidebar_logo__3aS-N",iconLinkWrapper:"Sidebar_iconLinkWrapper__3tKvC"}},91:function(e,t){},98:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(50),c=a.n(r),o=(a(68),a(6)),i=a(9),l=a(15),u=a(51),m=a.n(u),E=a(2),_=a(52),p=a.n(_),d=a(8),f=a.n(d),g=a(56),v=a(19),h=a(33),C=a.n(h),S=a(53),N=a.n(S),b=function(e){var t=e.img,a=void 0===t?N.a:t;return s.a.createElement("div",{className:C.a.root},s.a.createElement("img",{src:a,alt:"avatar",className:C.a.avatar}))},I=function(e){e.user;var t=e.logout;return s.a.createElement("nav",{className:f.a.root},s.a.createElement("div",{className:f.a.logo},s.a.createElement(b,null)),s.a.createElement("div",{className:f.a.iconLinkWrapper},s.a.createElement(l.b,{to:"/chats",className:f.a.iconLink,activeClassName:f.a.iconLinkSelected},s.a.createElement(v.a,null)),s.a.createElement(l.b,{to:"/users",className:f.a.iconLink,activeClassName:f.a.iconLinkSelected},s.a.createElement(g.a,null))),s.a.createElement("div",{className:f.a.iconLink,onClick:t},s.a.createElement(v.b,null)))},T=function(e){var t=e.user,a=e.handleLogout,n=e.children;return s.a.createElement("main",{className:p.a.main},s.a.createElement(I,{user:t,logout:a}),n)},M=a(12),O=a.n(M),y=function(e){var t=e.socket,a=e.handleUser,r=Object(n.useState)(""),c=Object(o.a)(r,2),i=c[0],l=c[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),_=m[0],p=m[1],d=function(e){var t=e.user;e.isUser?p("User name taken"):a(t)};return s.a.createElement("div",{className:O.a.root},s.a.createElement("h1",{className:O.a.title},"\xbfComo te llamas?"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.emit(E.VERIFY_USER,i,d)},autoComplete:"off"},s.a.createElement("div",{className:O.a.inputWrapper},s.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;l(t)},className:O.a.input}),s.a.createElement("button",{type:"submit",disabled:i.length<1,className:O.a.button},"Entrar")),s.a.createElement("p",{className:O.a.error},_)))},k=a(60),R=a(57),U=a(58),A=a(61),j=a(59),L=a(62),D=a(10),G=a.n(D),x=function(e){var t=e.data,a=e.activeChat,r=e.setActiveChat,c=(e.onSendPrivateMessage,Object(n.useState)("")),i=Object(o.a)(c,2);i[0],i[1];return s.a.createElement("div",{className:G.a.root},s.a.createElement("div",null,t.map(function(e){var t=e.messages,n=null,c="",o=G.a.item;if(t){var i=t.slice(-1)[0];i&&(c=i.message)}return a?a.id!==e.id?n=function(){return r(e)}:o="".concat(G.a.item," ").concat(G.a.itemSelected):n=function(){return r(e)},s.a.createElement("div",{key:e.id,onClick:n,className:o},s.a.createElement(b,null),s.a.createElement("div",{className:G.a.itemInfo},s.a.createElement("span",{className:G.a.itemInfoTitle},e.name),s.a.createElement("span",{className:G.a.itemInfoSubtitle},c)))})))},P=a(17),V=a.n(P),W=a(11),Y=a.n(W),w=function(e){var t=e.time,a=e.message,n=e.sender,r=e.right,c=void 0!==r&&r,o=Y.a.root;return c&&(o="".concat(Y.a.root," ").concat(Y.a.textRight)),s.a.createElement("div",{className:o},s.a.createElement("span",{className:Y.a.message},a),s.a.createElement("div",{className:Y.a.messageDetails},s.a.createElement("span",{className:Y.a.sender},n),s.a.createElement("span",{className:Y.a.time},t)))},F=a(20),H=a.n(F),q=function(e){var t=e.sendMessage,a=e.sendTyping,r=Object(n.useState)(""),c=Object(o.a)(r,2),i=c[0],l=c[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),E=m[0],_=m[1],p=Date.now(),d=null,f=function(){d&&(clearInterval(d),a(!1))},g=function(){E||(_(!0),a(!0),d=setInterval(function(){Date.now()-p>300&&(_(!1),f())},300))};return Object(n.useEffect)(function(){return function(){f()}},[]),s.a.createElement("div",{className:H.a.root},s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),l("")},autoComplete:"off",className:H.a.form},s.a.createElement("input",{type:"text",autoFocus:!0,value:i,onKeyUp:function(e){13!==e.keyCode&&g()},onChange:function(e){var t=e.target.value;l(t)},className:H.a.input}),s.a.createElement("button",{disabled:i.length<1,type:"submit",className:H.a.button},s.a.createElement(v.c,null))))},J=function(e){var t=e.name,a=e.user,r=e.messages,c=void 0===r?[]:r,o=e.typingUsers,i=void 0===o?[]:o,l=e.sendMessage,u=e.sendTyping,m=s.a.createRef();return Object(n.useEffect)(function(){m.current.scrollTop=m.current.scrollHeight},[]),s.a.createElement("div",{className:V.a.root},s.a.createElement("header",{className:V.a.header},s.a.createElement("h2",{className:V.a.roomName},t)),s.a.createElement("div",{className:V.a.messagesContainer,ref:m},c.map(function(e){var t=!1,n=e.sender;return a.name===e.sender&&(t=!0),a.name===e.sender&&(n=""),s.a.createElement(w,{key:e.id,message:e.message,sender:n,time:e.time,right:t})})),s.a.createElement("div",{className:V.a.typing},i.map(function(e){return s.a.createElement("span",{key:e},e," esta escribiendo...")})),s.a.createElement(q,{sendMessage:l,sendTyping:u}))},K=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(A.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(s)))).state={chats:[],activeChat:null,users:[]},a.initSocket=function(e){var t=a.props.user;e.emit(E.COMMUNITY_CHAT,a.resetChat),e.on(E.PRIVATE_MESSAGE,a.addChat),e.on("connect",function(){e.emit(E.COMMUNITY_CHAT,a.resetChat)}),e.emit(E.PRIVATE_MESSAGE,{reciever:"Emma",sender:t.name}),e.on(E.USER_CONNECTED,function(e){var n=Object.values(e).filter(function(e){return e.id!==t.id});a.setState({users:n})})},a.sendOpenPrivateMessage=function(e){var t=a.props,n=t.socket,s=t.user,r=a.state.activeChat;n.emit(E.PRIVATE_MESSAGE,{reciever:e,sender:s.name,activeChat:r})},a.updateTypingInChat=function(e){return function(t){var n=t.isTyping,s=t.user;if(s!==a.props.user.name){var r=a.state.chats.map(function(t){return t.id===e&&(n&&!t.typingUsers.includes(s)?t.typingUsers.push(s):!n&&t.typingUsers.includes(s)&&(t.typingUsers=t.typingUsers.filter(function(e){return e!==s}))),t});a.setState({chats:r})}}},a.addMessageToChat=function(e){return function(t){var n=a.state.chats.map(function(a){return a.id===e&&a.messages.push(t),a});a.setState({chats:n})}},a.addChat=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.props.socket,s=a.state.chats,r=t?[e]:[].concat(Object(k.a)(s),[e]);a.setState({chats:r});var c="".concat(E.MESSAGE_RECIEVED,"-").concat(e.id),o="".concat(E.TYPING,"-").concat(e.id);n.on(o,a.updateTypingInChat(e.id)),n.on(c,a.addMessageToChat(e.id))},a.resetChat=function(e){return a.addChat(e,!0)},a.sendMessage=function(e,t){a.props.socket.emit(E.MESSAGE_SENT,{chatId:e,message:t})},a.sendTyping=function(e,t){a.props.socket.emit(E.TYPING,{chatId:e,isTyping:t})},a.setActiveChat=function(e){a.setState({activeChat:e})},a}return Object(L.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.socket;this.initSocket(e)}},{key:"componentWillMount",value:function(){var e=this.props.socket;e.off(E.PRIVATE_MESSAGE),e.off(E.USER_CONNECTED),e.off(E.USER_DISCONNECTED)}},{key:"render",value:function(){var e=this,t=this.props.user,a=this.state,n=a.chats,r=a.activeChat,c=a.users,o=null;return o=null!==r?function(){return s.a.createElement(J,{name:r.name,user:t,messages:r.messages,typingUsers:r.typingUsers,sendMessage:function(t){return e.sendMessage(r.id,t)},sendTyping:function(t){return e.sendTyping(r.id,t)}})}:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"Escoge un chat!"))},s.a.createElement(i.d,null,s.a.createElement(i.b,{path:"/chats",render:function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(x,Object.assign({},t,{title:"Chats",data:n,activeChat:r,setActiveChat:e.setActiveChat,onSendPrivateMessage:e.sendOpenPrivateMessage})),s.a.createElement(o,null))}}),s.a.createElement(i.b,{path:"/users",render:function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(x,Object.assign({},t,{title:"Users",data:c,activeChat:r,setActiveChat:e.setActiveChat,onSendPrivateMessage:e.sendOpenPrivateMessage})),s.a.createElement(o,null))}}),s.a.createElement(i.b,{component:o}),s.a.createElement(i.a,{to:"/"}))}}]),t}(n.Component),z=function(){var e=null,t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(null),_=Object(o.a)(u,2),p=_[0],d=_[1],f=function(e){e.emit(E.VERIFY_USER,p.name,function(e){var t=e.isUser,a=e.user;d(t?null:a)})},g=function(e){r.emit(E.USER_CONNECTED,e),d(e)};return Object(n.useEffect)(function(){!function(){var e=m()("/");e.on("connect",function(){p?f(r):console.log("Connected")}),c(e)}()},[]),e=p?s.a.createElement(T,{user:p,handleLogout:function(e){r.emit(E.LOGOUT),d(null)}},s.a.createElement(K,{socket:r,user:p}),s.a.createElement(i.a,{to:"/chats"})):s.a.createElement(i.d,null,s.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return s.a.createElement(y,Object.assign({},e,{socket:r,handleUser:g}))}}),s.a.createElement(i.a,{to:"/"})),s.a.createElement(l.a,null,e)};c.a.render(s.a.createElement(z,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.37e997a7.chunk.js.map