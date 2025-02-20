(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7300],{63985:function(e,t,i){Promise.resolve().then(i.bind(i,34108))},34108:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return F}});var r=i(57437),s=i(11322),n=i(76509),a=i(59452),l=i(2265),c=i(99376),o=i(41129),d=i(51759),x=i(92369),u=i(54105),h=i(5409),p=i(25776),f=i(67813),m=i(79854),g=i(31564),j=i(14393),b=i(52407);function S(e){let{release:t}=e,i=(0,u.ff)("secondaryGray.900","white");return(0,r.jsxs)(h.k,{direction:"column",children:[(0,r.jsx)(g.x,{color:i,fontSize:"md",fontWeight:"400",lineHeight:"100%",alignSelf:"end",children:t?.date}),(0,r.jsx)(h.k,{direction:"row",gap:"18px",justifyContent:"space-between",mt:"20px",children:(0,r.jsxs)(h.k,{direction:"column",children:[(0,r.jsx)(g.x,{color:i,fontSize:"2xl",fontWeight:"700",children:"Title"}),(0,r.jsx)(g.x,{color:i,fontSize:"lg",fontWeight:"400",lineHeight:"100%",children:t?.title})]})}),(0,r.jsx)(g.x,{color:i,fontSize:"2xl",fontWeight:"700",mt:"20px",children:"Artist"}),(0,r.jsx)(g.x,{color:i,fontSize:"lg",fontWeight:"400",lineHeight:"100%",children:t?.artist?.name})]})}var T=i(72758),w=i(70131),k=i(72952),y=i(98690),R=i(28421),Z=i(64322),E=i(66075),C=i(80555),v=i(66233),z=i(22264),O=i(77763),D=i(24525),W=i(71594);let P=(0,D.Cl)();function _(e){let{tableData:t}=e;l.useEffect(()=>{m([...t])},[t]);let[i,n]=l.useState([]),c=(0,u.ff)("navy.700","white"),o=(0,u.ff)("gray.200","whiteAlpha.100"),d=(0,u.ff)("brand.400","white"),x=(0,u.ff)("green.900","green.500"),p=[P.display({id:"index",size:60,maxSize:60,minSize:60,cell:e=>(0,r.jsxs)(w.Vp,{m:"0px",size:"lg",variant:"outline",color:c,children:[(0,r.jsx)(w.AD,{color:c,as:O.FW}),(0,r.jsx)(w.Sn,{color:c,children:e.row.index+1})]},e.row.index)}),P.accessor("title",{id:"name",maxSize:320,minSize:150,header:()=>(0,r.jsx)(g.x,{justifyContent:"space-between",align:"center",color:"gray.400",children:"TITLE"}),cell:e=>(0,r.jsxs)(h.k,{align:"center",children:[(0,r.jsx)(a.o,{ratio:1,children:(0,r.jsx)(k.E,{src:e.cover,w:"36px",borderRadius:"20px",alt:""})}),(0,r.jsx)(h.k,{direction:"column",children:(0,r.jsx)(g.x,{color:c,fontWeight:"700",children:e.getValue()})})]})}),P.accessor("artist",{id:"artist",maxSize:320,minSize:150,header:()=>(0,r.jsx)(g.x,{justifyContent:"space-between",align:"center",color:"gray.400",children:"ARTIST"}),cell:e=>(0,r.jsx)(g.x,{color:c,fontWeight:"600",children:e.getValue().name})}),P.accessor("state",{id:"state",size:128,maxSize:128,minSize:128,header:()=>(0,r.jsx)(g.x,{justifyContent:"space-between",align:"center",color:"gray.400",children:"STATUS"}),cell:e=>(0,r.jsxs)(h.k,{direction:"row",w:"100%",justifyContent:"start",alignItems:"center",children:["COMPLETE"!=e.getValue()&&(0,r.jsx)(y.J,{as:O.Fbu,borderRadius:"16px",color:d,width:{base:"20px","2xl":"30px","3xl":"40px"},height:{base:"20px","2xl":"30px","3xl":"40px"}},"incomplete"),"COMPLETE"==e.getValue()&&(0,r.jsx)(y.J,{as:O.ZSR,borderRadius:"16px",color:x,width:{base:"20px","2xl":"30px","3xl":"40px"},height:{base:"20px","2xl":"30px","3xl":"40px"}},"complete")]})})],[f,m]=l.useState(()=>[...t]),j=(0,W.b7)({data:f,columns:p,state:{sorting:i},onSortingChange:n,getCoreRowModel:(0,D.sC)(),getSortedRowModel:(0,D.tj)(),debugTable:!0});return(0,r.jsx)(h.k,{direction:"column",w:"100%",overflowX:{sm:"scroll",lg:"hidden"},children:(0,r.jsx)(s.xu,{children:(0,r.jsxs)(R.i,{variant:"simple",color:"gray.500",mt:"12px",children:[(0,r.jsx)(Z.h,{children:j.getHeaderGroups().map(e=>(0,r.jsx)(E.Tr,{children:e.headers.map(e=>(0,r.jsx)(C.Th,{colSpan:e.colSpan,pe:"10px",borderColor:o,cursor:"pointer",onClick:e.column.getToggleSortingHandler(),children:(0,r.jsxs)(h.k,{justifyContent:"space-between",align:"center",fontSize:{base:"sm","2xl":"lg","3xl":"2xl"},color:"gray.400",children:[(0,W.ie)(e.column.columnDef.header,e.getContext()),{asc:"",desc:""}[e.column.getIsSorted()]??null]})},e.id))},e.id))}),(0,r.jsx)(v.p,{children:j.getRowModel().rows.slice(0,11).map(e=>(0,r.jsx)(E.Tr,{children:e.getVisibleCells().map(e=>(0,r.jsx)(z.Td,{fontSize:{base:"sm","2xl":"lg","3xl":"2xl"},minW:{sm:"150px",md:"200px",lg:"auto"},borderColor:"transparent",children:(0,W.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})})}function L(e){let t=(0,u.ff)("secondaryGray.900","white"),i=(0,u.ff)("secondaryGray.600","secondaryGray.500"),{release:n}=e,[a,c]=(0,l.useState)("info");return(0,r.jsx)(T.Z,{mt:"20px",p:{base:"20px",md:"20px 40px"},children:(0,r.jsx)(s.xu,{w:"100%",mb:"40px",children:(0,r.jsx)(h.k,{direction:{base:"column","3xl":"row"},children:(0,r.jsx)(s.xu,{me:{md:"40px","3xl":"40px"},children:(0,r.jsxs)(p.m,{variant:"soft-rounded",colorScheme:"brandTabs",mb:"60px",children:[(0,r.jsx)(f.t,{overflowX:{sm:"scroll",lg:"unset"},children:(0,r.jsxs)(h.k,{children:[(0,r.jsxs)(m.O,{pb:"0px",flexDirection:"column",onClick:()=>c("info"),me:"10px",bg:"unset",_selected:{bg:"none"},_focus:{border:"none"},minW:"max-content",children:[(0,r.jsx)(h.k,{align:"center",children:(0,r.jsx)(g.x,{color:"info"===a?t:i,fontSize:"lg",fontWeight:"500",children:"Information"})}),(0,r.jsx)(s.xu,{height:"4px",w:"100%",transition:"0.1s linear",bg:"info"===a?"brand.500":"transparent",mt:"15px",borderRadius:"30px"})]}),(0,r.jsxs)(m.O,{pb:"0px",flexDirection:"column",onClick:()=>c("track"),bg:"unset",_selected:{bg:"none"},_focus:{border:"none"},minW:"max-content",children:[(0,r.jsx)(h.k,{align:"center",children:(0,r.jsx)(g.x,{color:"track"===a?t:i,fontSize:"lg",fontWeight:"500",children:"Tracks"})}),(0,r.jsx)(s.xu,{height:"4px",w:"100%",transition:"0.1s linear",bg:"track"===a?"brand.500":"transparent",mt:"15px",borderRadius:"30px"})]})]})}),(0,r.jsxs)(j.n,{pt:"30px",children:[(0,r.jsx)(b.x,{px:"0px",children:(0,r.jsx)(S,{release:n})}),(0,r.jsx)(b.x,{px:"0px",children:(0,r.jsx)(_,{tableData:n?.tracks})})]})]})})})})})}var M=i(49028),N=i(79630),I=i(61669),G=i(43326),A=i(66056),H=i(30301);function V(e){let{...t}=e,i={...H.xk},n=(0,u.ff)("secondaryGray.900","white");return(0,r.jsxs)(T.Z,{justifyContent:"center",alignItems:"center",flexDirection:"column",w:"100%",mb:{base:"20px",lg:"0px"},...t,children:[(0,r.jsxs)(h.k,{justify:"space-between",px:"20px",pt:"5px",w:"100%",children:[(0,r.jsxs)(h.k,{align:"center",w:"100%",children:[(0,r.jsxs)(h.k,{flexDirection:"column",me:"20px",children:[(0,r.jsx)(g.x,{color:n,fontSize:"34px",fontWeight:"700",lineHeight:"100%",children:"$37.5K"}),(0,r.jsx)(g.x,{color:"secondaryGray.600",fontSize:"sm",fontWeight:"500",mt:"4px",children:"Overall Revenue"})]}),(0,r.jsxs)(h.k,{align:"center",children:[(0,r.jsx)(y.J,{as:G.Tvk,color:"green.500",me:"2px"}),(0,r.jsx)(g.x,{color:"green.500",fontSize:"sm",fontWeight:"700",children:"+2.45%"})]})]}),(0,r.jsxs)(I.P,{fontSize:"sm",variant:"subtle",defaultValue:"monthly",width:"unset",fontWeight:"700",children:[(0,r.jsx)("option",{value:"daily",children:"Daily"}),(0,r.jsx)("option",{value:"monthly",children:"Monthly"}),(0,r.jsx)("option",{value:"yearly",children:"Yearly"})]})]}),(0,r.jsx)(s.xu,{minH:"260px",mt:"auto",w:"100%",children:(0,r.jsx)(A.Z,{chartData:H.IQ,chartOptions:i})})]})}function F(){let e=(0,l.useContext)(d.p),t=(0,l.useContext)(x.l),i=new Number((0,c.useSearchParams)().get("id")).valueOf();(0,l.useEffect)(()=>{e.setLoading(!1),t.setToggleSidebar(!1),p()},[i]);let[u,h]=(0,l.useState)(new M.c),p=async()=>{i&&h(N.Z.filter(e=>e.id==i)[0])};return(0,r.jsxs)(s.xu,{maxW:"100%",pt:{base:"130px",lg:"100px","2xl":"120px"},children:[(0,r.jsxs)(n.r,{maxW:"100%",display:{base:"block",lg:"grid"},gridTemplateColumns:"2.95fr 1fr",children:[(0,r.jsx)(s.xu,{gridArea:"1 / 1 / 2 / 2",me:{lg:"20px"},mb:{base:"20px",lg:"0px"},children:(0,r.jsx)(a.o,{w:"100%",maxW:"100%",ratio:1130/636,children:(0,r.jsx)(o.E,{src:u?.cover,w:"100%",borderRadius:"20px",alt:""})})}),(0,r.jsx)(s.xu,{gridArea:"1 / 2 / 2 / 2",me:{lg:"20px"},mb:{base:"20px",lg:"0px"},children:(0,r.jsx)(V,{})})]}),(0,r.jsx)(L,{release:u})]})}},72758:function(e,t,i){"use strict";var r=i(57437),s=i(62218),n=i(24403),a=i(79230);let l=(0,s.G)((e,t)=>{let{size:i,variant:s,...l}=e,c=(0,n.mq)("Card",{size:i,variant:s});return(0,r.jsx)(a.m.div,{ref:t,__css:c,...l})});t.Z=l},92369:function(e,t,i){"use strict";i.d(t,{l:function(){return r}});let r=(0,i(2265).createContext)({})},49028:function(e,t,i){"use strict";i.d(t,{c:function(){return r}});class r{constructor(){this.tracks=[],this.distributions=[]}}},80751:function(e,t){"use strict";t.Z=[{id:1,name:"Artist Test",type:"ARTIST"},{id:2,name:"Label Test",type:"LABEL"}]},35248:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var r=[{id:"1",name:"Spotify",picture:{src:"/prototype-music-releases/_next/static/media/spotify.20e6f0aa.svg",height:32,width:32,blurWidth:0,blurHeight:0}},{id:"2",name:"Deezer",picture:{src:"/prototype-music-releases/_next/static/media/deezer.d95b2050.svg",height:32,width:32,blurWidth:0,blurHeight:0}},{id:"3",name:"Youtube",picture:{src:"/prototype-music-releases/_next/static/media/youtube.2878bb79.svg",height:32,width:32,blurWidth:0,blurHeight:0}}]},79630:function(e,t,i){"use strict";var r=i(80751),s=i(35248),n=i(34093);let a=[{id:1,cover:"",title:"Release 1",created_time:new Date("2025-02-19T12:00:00Z"),date:"Feb 19, 2025",artist:r.Z[0],idState:3,state:"COMPLETE",tracks:n.Z.filter(e=>1==e.idRelease),distributions:s.Z},{id:2,cover:"",title:"Release 2",created_time:new Date("2025-01-19T12:00:00Z"),date:"Jan 19, 2025",artist:r.Z[0],idState:3,state:"COMPLETE",tracks:n.Z.filter(e=>2==e.idRelease),distributions:s.Z},{id:3,cover:"",title:"Release 3",created_time:new Date("2024-12-19T12:00:00Z"),date:"Dec 19, 2024",artist:r.Z[0],idState:2,state:"PENDING",tracks:n.Z.filter(e=>3==e.idRelease),distributions:[s.Z[1]]},{id:4,cover:"",title:"Release 4",created_time:new Date("2024-11-19T12:00:00Z"),date:"Nov 19, 2024",artist:r.Z[0],idState:3,state:"COMPLETE",tracks:n.Z.filter(e=>4==e.idRelease),distributions:s.Z},{id:5,cover:"",title:"Release 5",created_time:new Date("2024-10-19T12:00:00Z"),date:"Oct 19, 2024",artist:r.Z[0],idState:3,state:"COMPLETE",tracks:n.Z.filter(e=>5==e.idRelease),distributions:s.Z},{id:6,cover:"",title:"Release 6",created_time:new Date("2024-09-19T12:00:00Z"),date:"Sep 19, 2024",artist:r.Z[0],idState:2,state:"PENDING",tracks:n.Z.filter(e=>6==e.idRelease),distributions:[s.Z[0]]},{id:999,cover:"",title:"Release 6",created_time:new Date("2024-09-19T12:00:00Z"),date:"Sep 19, 2024",artist:r.Z[0],idState:1,state:"INCOMPLETE",tracks:[],distributions:[]}];t.Z=a},34093:function(e,t,i){"use strict";var r=i(80751);let s=[{id:1,artist:r.Z[0],title:"Track R1-1",idState:3,state:"COMPLETE",date:"Feb 10, 2025",idRelease:1},{id:2,artist:r.Z[0],title:"Track R1-2",idState:3,state:"COMPLETE",date:"Feb 12, 2025",idRelease:1},{id:3,artist:r.Z[0],title:"Track R1-3",idState:3,state:"COMPLETE",date:"Feb 15, 2025",idRelease:1},{id:4,artist:r.Z[0],title:"Track R2-1",idState:1,state:"COMPLETE",date:"Jan 10, 2025",idRelease:2},{id:5,artist:r.Z[0],title:"Track R2-2",idState:1,state:"COMPLETE",date:"Jan 10, 2025",idRelease:2},{id:6,artist:r.Z[0],title:"Track R3-1",idState:2,state:"PENDING",idRelease:3,date:"Dec 8, 2024"},{id:7,artist:r.Z[0],title:"Track R3-2",idState:3,state:"COMPLETE",idRelease:3,date:"Dec 9, 2024"},{id:8,artist:r.Z[0],title:"Track R4-1",idState:3,state:"COMPLETE",idRelease:4,date:"Nov 19, 2024"},{id:9,artist:r.Z[0],title:"Track R5-1",idState:3,state:"COMPLETE",idRelease:5,date:"Oct 19, 2024"},{id:10,artist:r.Z[0],title:"Track R4-1",idState:3,state:"COMPLETE",idRelease:6,date:"Sep 19, 2024"}];t.Z=s}},function(e){e.O(0,[1582,9929,21,7689,2329,1997,2880,3634,2971,2117,1744],function(){return e(e.s=63985)}),_N_E=e.O()}]);