(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{242:function(t,e,n){t.exports={formControl:"FormsControls_formControl__2aUOv",error:"FormsControls_error__2kvuB",formSummaryError:"FormsControls_formSummaryError__T7Hzf"}},243:function(t,e,n){"use strict";var r=n(251),a=n(0),o=n.n(a),s=n(242),u=n.n(s);e.a=function(t){return function(e){var n=e.input,a=e.meta,s=Object(r.a)(e,["input","meta"]),i=a.touched&&a.error;return o.a.createElement("div",{className:u.a.formControl+" "+(i?u.a.error:"")},o.a.createElement(t,Object.assign({},n,s)),i&&o.a.createElement("span",null," ",a.error," "))}}},245:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});var r=function(t){if(!t)return"Field is required"},a=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},248:function(t,e,n){t.exports=n.p+"static/media/user.c7b5f6a0.png"},262:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__26a_G",userAvatar:"ProfileInfo_userAvatar__1TN9_"}},264:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__e1oxb",posts:"MyPosts_posts__Cp_N3"}},266:function(t,e,n){t.exports={item:"Post_item__3YHrq"}},312:function(t,e,n){"use strict";n.r(e);var r=n(26),a=n(27),o=n(50),s=n(28),u=n(51),i=n(0),l=n.n(i),c=n(262),p=n.n(c),f=n(69),m=n(248),d=n.n(m);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(t){var e=h(Object(i.useState)(t.status),2),n=e[0],r=e[1],a=h(Object(i.useState)(!1),2),o=a[0],s=a[1];Object(i.useEffect)(function(){r(t.status)},[t.status]);return l.a.createElement("div",null,!o&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){s(!0)}},t.status||"\u2013\u2013\u2013\u2013\u2013\u2013")),o&&l.a.createElement("div",null,l.a.createElement("input",{onBlur:function(){s(!1),t.updateStatus(n)},value:n,autoFocus:!0,onChange:function(t){r(t.target.value)}})))},E=function(t){return t.profile?l.a.createElement("div",null,l.a.createElement("div",{className:p.a.descriptionBlock},l.a.createElement("img",{className:p.a.userAvatar,src:null!==t.profile.photos.large?t.profile.photos.large:d.a}),l.a.createElement("p",null," ",t.profile.fullName),l.a.createElement("p",null," ",t.profile.aboutMe),l.a.createElement("p",null," ",t.profile.contacts.vk),l.a.createElement(v,{status:t.status,updateStatus:t.updateStatus}))):l.a.createElement(f.a,null)},b=n(70),g=n(264),_=n.n(g),y=n(266),k=n.n(y),O=function(t){return l.a.createElement("div",{className:k.a.item},l.a.createElement("img",{src:"https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome-thumbnail.png"}),t.message,l.a.createElement("div",null,l.a.createElement("span",null,"like")," ",t.likesCount))},S=n(243),j=n(43),P=n(44),w=n(245),C=Object(S.a)("textarea"),x=Object(w.a)(10),B=Object(P.a)({form:"profileAddNewPostForm"})(function(t){return l.a.createElement("form",{onSubmit:t.handleSubmit},l.a.createElement(j.a,{component:C,name:"newPostBody",placeholder:"post message",validate:[w.b,x]}),l.a.createElement("button",null,"Add post"))}),N=function(t){var e=t.posts.map(function(t){return l.a.createElement(O,{message:t.text,key:t.id,likesCount:t.likesCount})});return l.a.createElement("div",{className:_.a.postsBlock},l.a.createElement("h3",null," My posts "),l.a.createElement(B,{onSubmit:function(e){var n=e.newPostBody;t.addPost(n)}}),l.a.createElement("div",{className:_.a.posts},e))},A=n(18),F=Object(A.b)(function(t){return{posts:t.profilePage.posts}},function(t){return{addPost:function(e){t(Object(b.a)(e))}}})(N),I=function(t){return l.a.createElement("div",null,l.a.createElement(E,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),l.a.createElement(F,null))},M=n(1),z=n(17),T=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return l.a.createElement(I,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}]),e}(l.a.Component);e.default=Object(z.d)(Object(A.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}},{getProfile:b.c,getStatus:b.d,updateStatus:b.e}),M.f)(T)}}]);
//# sourceMappingURL=2.dcd8a756.chunk.js.map