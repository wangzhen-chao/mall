(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a1942cc"],{"1c9e":function(t,e,s){"use strict";var n=s("5152"),r=s.n(n);r.a},5152:function(t,e,s){},"5cb3":function(t,e,s){t.exports=s.p+"static/img/2.0a838c30.jpeg"},"78cf":function(t,e,s){},"887d":function(t,e,s){t.exports=s.p+"static/img/1.4d89cc52.gif"},"8fce":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"userinfo"},[n("nav-bar"),n("img",{staticClass:"backimg",attrs:{src:s("887d"),alt:""}}),n("user-detail",{attrs:{userInfo:t.model}}),n("show-ye")],1)},r=[],a=(s("96cf"),s("1da1")),c=s("0790"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"userdetail"},[n("div",[n("div",{staticClass:"user-img"},[t.userInfo.user_img?n("img",{attrs:{src:t.userInfo.user_img,alt:""}}):n("img",{attrs:{src:s("5cb3"),alt:""}})]),n("div",{staticClass:"user-edit"},[t._m(0),n("div",{on:{click:function(e){return t.$router.push("/edit")}}},[n("div",{staticClass:"edit-btn"},[t._v("编辑资料")])])])]),n("div",[n("h2",[t._v(t._s(t.userInfo.name))]),t.userInfo.user_desc?n("p",[t._v(t._s(t.userInfo.user_desc))]):n("p",[t._v("这个人很神秘，什么都没有写")])])])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[s("span",[t._v("0")]),s("span",{staticClass:"user-text"},[t._v("粉丝")])]),s("p",[s("span",[t._v("54")]),s("span",{staticClass:"user-text"},[t._v("关注")])]),s("p",[s("span",[t._v("0")]),s("span",{staticClass:"user-text"},[t._v("获赞")])])])}],o={props:["userInfo"]},l=o,d=(s("a4d0"),s("2877")),f=Object(d["a"])(l,i,u,!1,null,"25b3e2ee",null),v=f.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"editback",on:{click:function(e){return t.$router.push("/home")}}},[t._v("返回首页")])])},m=[],_={},g=_,h=(s("dedd"),Object(d["a"])(g,p,m,!1,null,null,null)),b=h.exports,w={data:function(){return{model:{}}},components:{NavBar:c["a"],UserDetail:v,ShowYe:b},methods:{userinfodata:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/user/"+localStorage.getItem("id"),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:s=e.sent,t.model=s.data[0],console.log(s);case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.userinfodata()},mounted:function(){document.querySelector("body").setAttribute("style","background-color:#f7f7f7")}},k=w,x=(s("1c9e"),Object(d["a"])(k,n,r,!1,null,null,null));e["default"]=x.exports},a4d0:function(t,e,s){"use strict";var n=s("78cf"),r=s.n(n);r.a},dbf4:function(t,e,s){},dedd:function(t,e,s){"use strict";var n=s("dbf4"),r=s.n(n);r.a}}]);
//# sourceMappingURL=chunk-2a1942cc.f6a04b8d.js.map