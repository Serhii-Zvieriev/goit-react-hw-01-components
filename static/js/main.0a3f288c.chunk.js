(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(a,e,s){a.exports={profile:"SocialProfile_profile__3iQdn",description:"SocialProfile_description__3cD2Y",avatar:"SocialProfile_avatar__16Av9",stats:"SocialProfile_stats__QwIZ2",label:"SocialProfile_label__1qZX8",quantity:"SocialProfile_quantity__1WPh-"}},function(a,e,s){a.exports={statistics:"Statistics_statistics__2YVJd",statList:"Statistics_statList__3mNwd",item:"Statistics_item__302l0",label:"Statistics_label__26Q2W",percentage:"Statistics_percentage__3F3cF",title:"Statistics_title__1s8ck"}},function(a,e,s){a.exports={item:"FriendList_item__AFusP",avatar:"FriendList_avatar__3AkUi",status:"FriendList_status__3p8R3"}},,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,,function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(a){a.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},,,,,function(a,e,s){},,,,,function(a,e,s){},function(a,e,s){"use strict";s.r(e);var t=s(5),i=s.n(t),n=s(8),c=s.n(n),r=(s(16),s(1)),l=s.n(r),o=s(4),d=s.n(o),j=s(0);function p(a){var e=a.friends;return Object(j.jsx)("ul",{className:d.a.friendList,children:e.map((function(a){var e=a.avatar,s=a.name,t=a.isOnline,i=a.id;return Object(j.jsxs)("li",{className:d.a.item,children:[Object(j.jsx)("span",{className:d.a.status,style:{backgroundColor:t&&"green"},children:t}),Object(j.jsx)("img",{className:d.a.avatar,src:e,alt:s,width:"48"}),Object(j.jsx)("p",{className:d.a.name,children:s})]},i)}))})}p.prototype={friends:l.a.arrayOf(l.a.shape({id:l.a.string.isRequired,isOnline:l.a.bool.isRequired,name:l.a.string.isRequired,avatar:l.a.string.isRequired}))};var m=p,b=s(2),u=s.n(b);function O(a){var e=a.obj,s=e.avatar,t=e.name,i=e.tag,n=e.location,c=e.stats,r=c.followers,l=c.views,o=c.likes;return Object(j.jsxs)("div",{className:u.a.profile,children:[Object(j.jsxs)("div",{className:u.a.description,children:[Object(j.jsx)("img",{src:s,alt:t,className:u.a.avatar,width:"160"}),Object(j.jsx)("p",{className:"name",children:t}),Object(j.jsxs)("p",{className:"tag",children:["@",i]}),Object(j.jsx)("p",{className:"location",children:n})]}),Object(j.jsxs)("ul",{className:u.a.stats,children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:u.a.label,children:"Followers"}),Object(j.jsx)("span",{className:u.a.quantity,children:r})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:u.a.label,children:"Views"}),Object(j.jsx)("span",{className:u.a.quantity,children:l})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:u.a.label,children:"Likes"}),Object(j.jsx)("span",{className:u.a.quantity,children:o})]})]})]})}O.defaultProps={obj:{stats:{followers:0,views:0,likes:0}}},O.prototype={obj:l.a.arrayOf(l.a.shape({avatar:l.a.string.isRequired,name:l.a.string.isRequired,tag:l.a.string.isRequired,location:l.a.string.isRequired,stats:l.a.arrayOf(l.a.shape({followers:l.a.number.isRequired,views:l.a.number.isRequired,likes:l.a.number.isRequired}))}))};var f=O,h=s(3),_=s.n(h),x=s(9),g=s.n(x);var v=function(a){var e=a.title,s=void 0===e?"":e,t=a.stats;return Object(j.jsxs)("section",{className:_.a.statistics,children:[s&&Object(j.jsx)("h2",{className:_.a.title,children:s}),Object(j.jsx)("ul",{className:_.a.statList,children:t.map((function(a){var e=a.id,s=a.label,t=a.percentage,i=void 0===t?0:t;return Object(j.jsxs)("li",{className:_.a.item,style:{backgroundColor:g()()},children:[Object(j.jsx)("span",{className:_.a.label,children:s}),Object(j.jsxs)("span",{className:_.a.percentage,children:[i,"%"]})]},e)}))})]})};s(21);var N=function(){return Object(j.jsx)("div",{children:"TransactionHistory"})},w=s(10),q=s(7),y=s(11);var S=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(f,{obj:w}),Object(j.jsx)(v,{title:"Upload stats",stats:q}),Object(j.jsx)(v,{stats:q}),Object(j.jsx)(m,{friends:y}),Object(j.jsx)(N,{})]})};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.0a3f288c.chunk.js.map