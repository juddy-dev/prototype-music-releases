(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1966],{20167:function(e,t,s){Promise.resolve().then(s.bind(s,67691))},67691:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return J}});var l=s(57437),i=s(54105),n=s(36389),r=s(11322),a=s(5409),x=s(77890),o=s(61669),c=s(98690),p=s(31564),d=s(30719),f=s(15577),u=s(93515),h=s(86856),b=s(36177),m=s(64963),A=s(37461),g=s(2265),j=s(77763),v=s(51759),S=s(92369),w=s(59452),y=s(77064),C=s(99376),E=s(72758),_=s(41129),k=s(49058),R=s(43346);function z(e){var t;let{release:s,onCloseEdit:x}=e,o=(0,C.useRouter)(),d=(0,i.ff)("navy.700","white"),v=(0,i.ff)("brand.400","brand.600"),S=(0,i.ff)("transparent","transparent"),z=(0,i.ff)("white","white"),Z=(0,i.ff)("brand.300","white"),B=(0,i.ff)("green.900","green.500"),{isOpen:G,onOpen:J,onClose:L}=(0,n.q)(),P=(0,i.ff)({bg:"transparent"},{bg:"transparent"}),T=(0,i.ff)({bg:"transparent"},{bg:"transparent"}),W=(0,i.ff)({bg:"transparent"},{bg:"transparent"}),F=(0,i.ff)({color:"brand.800"},{color:"brand.400"}),I=(0,i.ff)({color:"brand.900"},{color:"brand.400"});(0,g.useEffect)(()=>{G||x()},[G]);let M=()=>{o.push("/user/distributions/releases/detail?id="+s?.id)};return(0,l.jsxs)(E.Z,{p:"20px",cursor:"pointer",children:[(0,l.jsxs)(a.k,{direction:{base:"column"},justify:"center",gap:"9px",children:[(0,l.jsxs)(r.xu,{mb:{base:"20px","3xl":"20px"},position:"relative",children:[(0,l.jsx)(w.o,{ratio:1.4,w:"100%",children:(0,l.jsx)(_.E,{src:s?.cover,w:"100%",borderRadius:"20px",alt:"",onClick:M})}),(0,l.jsx)(c.J,{as:j.$l_,position:"absolute",top:"5%",right:"5%",bg:v,borderRadius:"32px",p:"3px",color:z,h:{base:"40px","2xl":"44px","3xl":"48px"},w:{base:"40px","2xl":"44px","3xl":"48px"}},"complete")]}),(0,l.jsx)(a.k,{flexDirection:"column",justify:"space-between",h:"100%",onClick:M,children:(0,l.jsxs)(a.k,{direction:"column",children:[(0,l.jsx)(p.x,{color:d,fontSize:{base:"xl",lg:"lg","3xl":"2xl"},mb:"5px",fontWeight:"bold",me:"14px",children:s?.title}),(0,l.jsx)(p.x,{color:"secondaryGray.800",fontSize:{base:"sm",lg:"md","3xl":"xl"},fontWeight:"500",me:"14px",children:(t=s?.artist,k.k.isValidNumber(t?.id)?t.name:"Various Artist")}),(0,l.jsxs)(a.k,{gap:"12px",alignItems:"center",children:[s?.state!=="COMPLETE"&&(0,l.jsx)(c.J,{as:j.Fbu,color:Z,h:{base:"20px","3xl":"40px"},w:{base:"20px","3xl":"40px"}},"complete"),s?.state=="COMPLETE"&&(0,l.jsx)(c.J,{as:j.ZSR,bg:S,borderRadius:"16px",color:B,h:{base:"20px","3xl":"40px"},w:{base:"20px","3xl":"40px"}},"complete"),(0,l.jsx)(p.x,{color:"secondaryGray.600",fontSize:{base:"sm",lg:"md","3xl":"xl"},fontWeight:"400",me:"14px",children:s?.state})]})]})}),(0,l.jsx)(a.k,{flexDirection:"row",justify:"flex-end",w:"100%",children:2==s.idState&&(0,l.jsx)(y.h,{"aria-label":"Edit",bg:P,_hover:T,_active:W,_focus:W,onClick:J,icon:(0,l.jsx)(c.J,{as:j.zmo,width:{base:"20px","2xl":"30px","3xl":"40px"},height:{base:"20px","2xl":"30px","3xl":"40px"},color:Z,_hover:F,_active:I,_focus:I})})})]}),(0,l.jsxs)(f.u_,{onClose:L,size:"full",isOpen:G,scrollBehavior:"inside",motionPreset:"slideInBottom",children:[(0,l.jsx)(u.Z,{}),(0,l.jsxs)(h.h,{children:[(0,l.jsx)(b.x,{fontSize:{base:"xl","2xl":"2xl","3xl":"3xl"},children:"Edit release"}),(0,l.jsx)(m.o,{fontSize:{base:"sm","2xl":"lg","3xl":"xl"}}),(0,l.jsx)(A.f,{children:(0,l.jsx)(R.Z,{idRelease:s?.id,onSavedRelease:L})})]})]})]})}var Z=s(78947),B=s(79630),G=s(80751);function J(){let e=(0,g.useContext)(v.p),t=(0,g.useContext)(S.l);(0,g.useEffect)(()=>{e.setLoading(!1),t.setToggleSidebar(!1),Q(),H()},[]);let s=(0,i.ff)("secondaryGray.900","white"),w=(0,i.ff)("transparent","navy.800"),{isOpen:y,onOpen:C,onClose:E}=(0,n.q)(),_=(0,i.ff)({bg:"gray.100"},{bg:"whiteAlpha.100"}),k=(0,i.ff)({bg:"gray.200"},{bg:"whiteAlpha.200"}),[J,L]=(0,g.useState)(!0),[P,T]=(0,g.useState)([]),[W,F]=(0,g.useState)([]),[I,M]=(0,g.useState)(0),[N,U]=(0,g.useState)([]),[V,D]=(0,g.useState)("-1"),[O,X]=(0,g.useState)("-1"),H=async()=>{T(B.Z.filter(e=>1!==e.idState))},Q=async()=>{U(G.Z?.filter(e=>"ARTIST"===e.type))},Y=async()=>{M(999)},q=()=>{M(0),H()};(0,g.useEffect)(()=>{I&&I>0&&C()},[I]),(0,g.useEffect)(()=>{y||q()},[y]),(0,g.useEffect)(()=>{et()},[V,O,P]);let K=()=>!!V&&"0"!==V&&"-1"!==V,$=()=>!!V&&"0"===V,ee=()=>!!O&&"-1"!==O,et=()=>{let e=P;ee()&&(e=e.filter(e=>e.idState.toString()===O)),K()?e=e.filter(e=>e.artist.id?.toString()===V):$()&&(e=e.filter(e=>!e.artist.id)),F(e)};return(0,l.jsxs)(r.xu,{pt:{base:"130px",lg:"100px","2xl":"120px"},children:[(0,l.jsx)(a.k,{w:"100%",mb:"20px",justifyContent:"end",children:(0,l.jsx)(x.z,{type:"submit",variant:"brand",fontWeight:"500",w:"min-content",fontSize:{base:"md","2xl":"xl","3xl":"2xl"},h:{base:"44px","3xl":"64px"},mt:"9px",mb:"9px",onClick:Y,children:"Create release"})}),(0,l.jsxs)(a.k,{w:"100%",mb:"20px",children:[(0,l.jsxs)(o.P,{id:"filterArtist",variant:"main",fontSize:{base:"sm","2xl":"xl","3xl":"2xl"},minH:{base:"44px","2xl":"64px"},me:{base:"10px",md:"20px"},value:V,onChange:e=>{let{value:t}=e.target;D(t)},children:[(0,l.jsx)("option",{value:"-1",children:"All artist"},"allArtist"),(0,l.jsx)("option",{value:"0",children:"Various Artist"},"variousArtist"),N.map(e=>(0,l.jsx)("option",{value:e?.id,children:e.name},e.id))]}),(0,l.jsxs)(o.P,{id:"filterStatus",variant:"main",fontSize:{base:"sm","2xl":"xl","3xl":"2xl"},minH:{base:"44px","2xl":"64px"},me:{base:"10px",md:"20px"},value:O,onChange:e=>{let{value:t}=e.target;X(t)},children:[(0,l.jsx)("option",{value:"-1",children:"All Status"},"allStatus"),(0,l.jsx)("option",{value:"2",children:"Incomplete"},"incomplete"),(0,l.jsx)("option",{value:"3",children:"Complete"},"complete")]}),(0,l.jsx)(x.z,{me:{base:"10px",md:"20px"},bg:w,border:"1px solid",color:"secondaryGray.600",borderColor:(0,i.ff)("secondaryGray.100","whiteAlpha.100"),borderRadius:"16px",_placeholder:{color:"secondaryGray.600"},_hover:_,_active:k,_focus:k,onClick:()=>{L(!J)},w:{base:"44px","2xl":"64px"},h:{base:"44px","2xl":"64px"},children:(0,l.jsx)(c.J,{color:s,as:J?j.CG1:j.VzJ,w:{base:"20px","2xl":"32px"},h:{base:"20px","2xl":"32px"}})})]}),(0,l.jsxs)(p.x,{mt:"25px",mb:"36px",color:s,fontSize:{base:"2xl","3xl":"3xl"},ms:"24px",fontWeight:"700",children:[W.length," Results"]}),J&&(0,l.jsx)(d.M,{columns:{sm:1,md:2,lg:4,xl:4},gap:"20px",children:W?.map((e,t)=>l.jsx(z,{release:e,onCloseEdit:q},t))}),!J&&(0,l.jsx)(Z.Z,{withTitle:!1,tableData:W,withLastest:!1,onCloseEdit:q}),(0,l.jsxs)(f.u_,{onClose:E,size:"full",isOpen:y,scrollBehavior:"inside",motionPreset:"slideInBottom",children:[(0,l.jsx)(u.Z,{}),(0,l.jsxs)(h.h,{children:[(0,l.jsx)(b.x,{fontSize:{base:"xl","2xl":"2xl","3xl":"3xl"},children:"New release"}),(0,l.jsx)(m.o,{fontSize:{base:"sm","2xl":"lg","3xl":"xl"}}),(0,l.jsx)(A.f,{children:(0,l.jsx)(R.Z,{idRelease:I,onSavedRelease:E})})]})]})]})}},41129:function(e,t,s){"use strict";s.d(t,{E:function(){return o}});var l=s(57437),i=s(11322),n=s(37765),r=s.n(n),a={src:"/prototype-music-releases//_next/static/media/default.c57d4cec.png",height:756,width:1080,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAFVBMVEUfLG0xM2YoL2cbLnM7NmItPnZbQWdFdXA9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAClJREFUeJwtxsENACAMA7FckrL/yBUIv6yZKEnUiZ7DD8iXwBRbLbRlAQqaAGEYIk9KAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},x=s(40257);function o(e){let{src:t,alt:s,nextProps:n={},...o}=e,c="string"==typeof t?t:t?.src;return(0,l.jsx)(i.xu,{overflow:"hidden",position:"relative",...o,children:(0,l.jsx)(r(),{layout:"fill",objectFit:"fill",src:function(e){if(!e)return a;{if(e.match("http"))return e;let t=x.env.NEXT_PUBLIC_BASE_PATH||"";return e.match(t)?e:`${t}${e}`}}(c),alt:s,...n})})}},51759:function(e,t,s){"use strict";s.d(t,{p:function(){return l}});let l=(0,s(2265).createContext)({})}},function(e){e.O(0,[1582,2502,21,3883,6584,7689,1737,9320,2329,1077,7253,1997,5943,8058,2971,2117,1744],function(){return e(e.s=20167)}),_N_E=e.O()}]);