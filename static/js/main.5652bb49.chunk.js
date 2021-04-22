(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{106:function(e,t,n){e.exports=n(164)},108:function(e,t,n){},113:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){},124:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=(n(108),n(36)),c=n.n(u),i=n(11),o=n(37),s=n(38),l=n(40),f=n(39),d=n(41),p=n(1),m=(n(113),n(8)),h=n.n(m),v=function(e){return a.a.createElement("nav",{className:h.a.nav},a.a.createElement("div",{className:h.a.item},a.a.createElement(i.b,{to:"/profile",activeClassName:h.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(h.a.item)},a.a.createElement(i.b,{to:"/dialogs",activeClassName:h.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(h.a.item)},a.a.createElement(i.b,{to:"/users",activeClassName:h.a.activeLink},"Users")),a.a.createElement("div",{className:h.a.item},a.a.createElement(i.b,{to:"/news",activeClassName:h.a.activeLink},"News")),a.a.createElement("div",{className:h.a.item},a.a.createElement(i.b,{to:"/music",activeClassName:h.a.activeLink},"Music")),a.a.createElement("div",{className:h.a.item},a.a.createElement(i.b,{to:"/settings",activeClassName:h.a.activeLink},"Settings")))},g=(n(120),function(e){return a.a.createElement("div",null,"News")}),E=(n(122),function(e){return a.a.createElement("div",null,"Music")}),b=(n(124),function(e){return a.a.createElement("div",null,"Settings")}),O=n(50),S=n.n(O),w=function(e){return a.a.createElement("header",{className:S.a.header},a.a.createElement("img",{src:"https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"}),a.a.createElement("div",{className:S.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," ",a.a.createElement("button",{onClick:e.logout},"LOG OUT")):a.a.createElement(i.b,{to:"/login"},a.a.createElement("button",null,"LOGIN"))))},y=n(19),C=n(21),_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(w,this.props)}}]),t}(a.a.Component),j=Object(y.b)(function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}},{logout:C.d})(_),T=n(5),P={initialized:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(T.a)({},e,{initialized:!0});default:return e}},I=n(53),k=a.a.lazy(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,313))}),L=a.a.lazy(function(){return n.e(3).then(n.bind(null,314))}),N=a.a.lazy(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,315))}),U=a.a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,316))}),A=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(j,null),a.a.createElement(v,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},a.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(k,null)}}),a.a.createElement(p.b,{path:"/dialogs",render:function(){return a.a.createElement(N,null)}}),a.a.createElement(p.b,{path:"/users",render:function(){return a.a.createElement(L,null)}}),a.a.createElement(p.b,{path:"/news",component:g}),a.a.createElement(p.b,{path:"/music",component:E}),a.a.createElement(p.b,{path:"/settings",component:b}),a.a.createElement(p.b,{path:"/login",component:U})))):a.a.createElement(I.a,null)}}]),t}(a.a.Component),R=Object(y.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(Object(C.b)());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}})(A),G=n(18),D=n(54),F=n(66),H={},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;arguments.length>1&&arguments[1];return e},M=n(55),B=n(72),W=n(172),V=Object(G.c)({profilePage:D.b,dialogsPage:F.b,usersPage:M.a,sidebar:z,auth:C.a,form:W.a,app:x}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,X=Object(G.e)(V,J(Object(G.a)(B.a)));window.store=X;var Y=X;c.a.render(a.a.createElement(i.a,null,a.a.createElement(y.a,{store:Y},a.a.createElement(R,null))),document.getElementById("root"))},21:function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return p});var r=n(4),a=n.n(r),u=n(7),c=n(5),i=n(6),o=n(24),s={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){var n,r,u,c,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:if(0!==(n=e.sent).resultCode){e.next=7;break}return r=n.data,u=r.id,c=r.email,o=r.login,t(l(u,c,o,!0)),e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,r){return function(){var c=Object(u.a)(a.a.mark(function u(c){var s,l;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n,r);case 2:0===(s=a.sent).resultCode?c(f()):(10===s.resultCode&&c(m()),l=s.messages.length>0?s.messages[0]:"Some error",c(Object(o.a)("login",{_error:l})));case 4:case"end":return a.stop()}},u,this)}));return function(e){return c.apply(this,arguments)}}()},p=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptcha();case 2:n=e.sent,t({type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:n.url}});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(c.a)({},e,t.payload);default:return e}}},50:function(e,t,n){e.exports={header:"Header_header__1xnBv",loginBlock:"Header_loginBlock__2XFe3"}},53:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(71),c=n.n(u);t.a=function(){return a.a.createElement("div",{className:c.a.loader},"Loading...")}},54:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return m}),n.d(t,"g",function(){return h}),n.d(t,"e",function(){return v}),n.d(t,"f",function(){return g});var r=n(4),a=n.n(r),u=n(7),c=n(22),i=n(5),o=n(6),s=n(24),l={posts:[{id:1,text:"HEY)",likesCount:5},{id:2,text:"WHAT TIME IS IT?",likesCount:6}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostBody:e}},d=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(t){o.b.getProfile(e).then(function(e){t({type:"SET-USER-PROFILE",profile:e})})}},m=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(d(r));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(d(e));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.photos});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n,r){var u,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=r().auth.id,t.next=3,o.b.saveProfile(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(p(u)),t.next=10;break;case 8:return n(Object(s.a)("profileDataForm",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 10:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,text:t.newPostBody,likesCount:0};return Object(i.a)({},e,{posts:Object(c.a)(e.posts).concat([n])});case"SET-USER-PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}},55:function(e,t,n){"use strict";n.d(t,"d",function(){return d}),n.d(t,"c",function(){return h}),n.d(t,"b",function(){return v}),n.d(t,"e",function(){return g});var r=n(4),a=n.n(r),u=n(7),c=n(22),i=n(5),o=n(6),s={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},l=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},p=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},m=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},h=function(e,t){return function(){var n=Object(u.a)(a.a.mark(function n(r){var u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),n.next=3,o.d.getUsers(e,t);case 3:return u=n.sent,r(p(!1)),r({type:"SET-USERS",users:u.items}),r({type:"SET-TOTAL-USERS-COUNT",totalCount:u.totalCount}),n.abrupt("return",u);case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(m(!0,e)),t.next=3,o.d.followUser(e);case 3:0===t.sent.resultCode&&n(l(e)),n(m(!1,e));case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(m(!0,e)),t.next=3,o.d.unfollowUser(e);case 3:0===t.sent.resultCode&&n(f(e)),n(m(!1,e));case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(i.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!1}):e})});case"SET-USERS":return Object(i.a)({},e,{users:t.users});case"SET-CURRENT-PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.followingInProgress?Object(c.a)(e.followingInProgress).concat([t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}}},6:function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return o});var r=n(57),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"2a8d8ce3-a4a1-4df0-a097-633d8850e8c4"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},followUser:function(e){return a.post("follow/".concat(e)).then(function(e){return e.data})},unfollowUser:function(e){return a.delete("follow/".concat(e)).then(function(e){return e.data})}},c={getProfile:function(e){return a.get("profile/".concat(e)).then(function(e){return e.data})},getStatus:function(e){return a.get("profile/status/".concat(e)).then(function(e){return e.data})},updateStatus:function(e){return a.put("profile/status",{status:e}).then(function(e){return e.data})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},saveProfile:function(e){return a.put("profile",e).then(function(e){return e.data})}},i={me:function(){return a.get("auth/me").then(function(e){return e.data})},login:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then(function(e){return e.data})},logout:function(){return a.delete("auth/login").then(function(e){return e.data})}},o={getCaptcha:function(){return a.get("security/get-captcha-url").then(function(e){return e.data})}}},66:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(22),a=n(5),u={dialogs:[{id:1,name:"Mops"},{id:2,name:"Sveta"},{id:3,name:"Valya"},{id:4,name:"Alla"},{id:5,name:"Dima"}],messages:[{id:1,text:"Hello)"},{id:2,text:"Long to no see!"},{id:3,text:"How you doing?"},{id:4,text:"Hey, I am great"},{id:5,text:"Thank you"}]},c=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(a.a)({},e,{messages:Object(r.a)(e.messages).concat([{id:6,text:t.newMessageBody}])});default:return e}}},71:function(e,t,n){e.exports={loader:"Preloader_loader__2yIVJ",load4:"Preloader_load4__1EHBT"}},8:function(e,t,n){e.exports={nav:"Navbar_nav__3gSkF",item:"Navbar_item__2ufRQ",activeLink:"Navbar_activeLink__25a8D"}}},[[106,7,6]]]);
//# sourceMappingURL=main.5652bb49.chunk.js.map