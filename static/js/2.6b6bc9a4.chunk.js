(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{167:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(1),r=n(0),o=n.n(r),l=n(19),c=function(e){return{isAuth:e.auth.isAuth}},u=function(e){return Object(l.b)(c)(function(t){return t.isAuth?o.a.createElement(e,t):o.a.createElement(a.a,{to:"/login"})})}},242:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2aUOv",error:"FormsControls_error__2kvuB",formSummaryError:"FormsControls_formSummaryError__T7Hzf"}},243:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},244:function(e,t,n){"use strict";var a=n(169),r=n(0),o=n.n(r),l=n(242),c=n.n(l);t.a=function(e){return function(t){var n=t.input,r=t.meta,l=Object(a.a)(t,["input","meta"]),u=r.touched&&r.error;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement(e,Object.assign({},n,l)),u&&o.a.createElement("span",null," ",r.error," "))}}},248:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__26a_G",userAvatar:"ProfileInfo_userAvatar__1TN9_",contact:"ProfileInfo_contact__1YEAg"}},249:function(e,t,n){e.exports=n.p+"static/media/user.c7b5f6a0.png"},306:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__e1oxb",posts:"MyPosts_posts__Cp_N3"}},308:function(e,t,n){e.exports={item:"Post_item__3YHrq"}},313:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=n(248),c=n.n(l),u=n(53),i=n(249),s=n.n(i),m=function(e){var t=o(Object(a.useState)(e.status),2),n=t[0],l=t[1],c=o(Object(a.useState)(!1),2),u=c[0],i=c[1];Object(a.useEffect)(function(){l(e.status)},[e.status]);return r.a.createElement("div",null,!u&&r.a.createElement("div",null,r.a.createElement("b",null,"Status: "),"  ",r.a.createElement("span",{onDoubleClick:function(){i(!0)}},e.status||"\u2013\u2013\u2013\u2013\u2013\u2013")),u&&r.a.createElement("div",null,r.a.createElement("b",null,"Status: ")," ",r.a.createElement("input",{onBlur:function(){i(!1),e.updateStatus(n)},value:n,autoFocus:!0,onChange:function(e){l(e.target.value)}})))},f=n(243),p=n(170),d=n(171),E=n(244),b=n(242),v=n.n(b),h=Object(E.a)("input"),g=Object(E.a)("textarea"),O=Object(f.a)(15),P=Object(f.a)(30),_=Object(d.a)({form:"profileDataForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("button",null,"Save"),e.error&&r.a.createElement("div",{className:v.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("b",null,"Name"),": ",r.a.createElement(p.a,{component:h,name:"fullName",validate:[f.b,O]})),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),": ",r.a.createElement(p.a,{component:h,name:"lookingForAJob",type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"Professional skills"),": ",r.a.createElement(p.a,{component:g,name:"lookingForAJobDescription",validate:[f.b,P]})),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),": ",r.a.createElement(p.a,{component:g,name:"aboutMe",validate:[f.b,P]})),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(e.profile.contacts).map(function(e){return r.a.createElement("div",{className:c.a.contact},r.a.createElement("b",null,e)," ",r.a.createElement(p.a,{key:e,component:h,placeholder:e,name:"contacts.".concat(e)}))})))}),k=function(e){return r.a.createElement("div",null,e.isOwner&&r.a.createElement("button",{onClick:e.goToEditMode},"Edit"),r.a.createElement("div",null,r.a.createElement("b",null," Name "),": ",e.profile.fullName),r.a.createElement("div",null,r.a.createElement("b",null," Looking for a job"),": ",e.profile.lookingForAJob?"Yes":"No"),r.a.createElement("div",null,r.a.createElement("b",null,"Professional skills"),": ",e.profile.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),": ",e.profile.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts: ")," ",Object.keys(e.profile.contacts).map(function(t){if(e.profile.contacts[t])return r.a.createElement(S,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})})))},S=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:c.a.contact},r.a.createElement("b",null," ",t,": ")," ",n)},y=function(e){var t=o(Object(a.useState)(!1),2),n=t[0],l=t[1];if(!e.profile)return r.a.createElement(u.a,null);return r.a.createElement("div",{className:c.a.descriptionBlock},r.a.createElement("div",null,r.a.createElement("img",{className:c.a.userAvatar,src:e.profile.photos.large||s.a}),e.isOwner&&r.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})),n?r.a.createElement(_,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then(function(){l(!1)})}}):r.a.createElement(k,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){return l(!0)}}),r.a.createElement("div",null,r.a.createElement(m,{status:e.status,updateStatus:e.updateStatus})))},j=n(54),w=n(306),A=n.n(w),N=n(308),C=n.n(N),x=function(e){return r.a.createElement("div",{className:C.a.item},r.a.createElement("img",{src:"https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome-thumbnail.png"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like")," ",e.likesCount))},F=Object(E.a)("textarea"),B=Object(f.a)(10),I=Object(d.a)({form:"profileAddNewPostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(p.a,{component:F,name:"newPostBody",placeholder:"post message",validate:[f.b,B]}),r.a.createElement("button",null,"Add post"))}),M=function(e){var t=e.posts.map(function(e){return r.a.createElement(x,{message:e.text,key:e.id,likesCount:e.likesCount})});return r.a.createElement("div",{className:A.a.postsBlock},r.a.createElement("h3",null," My posts "),r.a.createElement(I,{onSubmit:function(t){var n=t.newPostBody;e.addPost(n)}}),r.a.createElement("div",{className:A.a.posts},t))},T=n(19),J=Object(T.b)(function(e){return{posts:e.profilePage.posts}},function(e){return{addPost:function(t){e(Object(j.a)(t))}}})(M),D=function(e){return r.a.createElement("div",null,r.a.createElement(y,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),r.a.createElement(J,null))},z=n(1),U=n(18),V=n(167);t.default=Object(U.d)(Object(T.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}},{getProfile:j.c,getStatus:j.d,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),z.f,V.a)(function(e){return Object(a.useEffect)(function(){var t=e.match.params.userId;t||(t=e.authorizedUserId)||e.history.push("/login"),e.getProfile(t),e.getStatus(t)},[]),r.a.createElement(D,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:!e.match.params.userId,savePhoto:e.savePhoto,saveProfile:e.saveProfile})})}}]);
//# sourceMappingURL=2.6b6bc9a4.chunk.js.map