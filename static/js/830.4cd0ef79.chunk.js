"use strict";(self.webpackChunkreact_barbershop=self.webpackChunkreact_barbershop||[]).push([[830],{5471:function(e,a,r){r.r(a),r.d(a,{default:function(){return y}});var t=r(4554),n=r(4567),o=r(4751),i=r(2163),s=r.p+"static/media/gallery1-418.69d99dfefa3b25798a06.webp",c=r.p+"static/media/gallery2-418.78700dd84e74f3bb4d02.webp",l=r.p+"static/media/gallery3-418.0930c0208f105161432a.webp",d=r.p+"static/media/gallery4-418.73889274885b51a68217.webp",m=r.p+"static/media/gallery1-330.ff43775848f2a7fd2c82.webp",u=r.p+"static/media/gallery2-330.ff8a9bae63f7a8f462ed.webp",p=r.p+"static/media/gallery3-330.509b098796140233b4f4.webp",f=r.p+"static/media/gallery4-330.6461914b19eff055b22c.webp",g=r.p+"static/media/gallery1-270.92259258d324d73d3b20.webp",v=r.p+"static/media/gallery2-270.6db048eb48c2f43fafab.webp",b=r.p+"static/media/gallery3-270.48279a9a907070bd54c3.webp",h=r.p+"static/media/gallery4-270.aeb4b072bd0ae431f2ae.webp",w=r(184);function Z(){var e=[{src:s},{src:c},{src:l},{src:d}],a=[{src:m},{src:u},{src:p},{src:f}],r=[{src:g},{src:v},{src:b},{src:h}];return(0,w.jsxs)(t.Z,{children:[(0,w.jsx)(n.Z,{sx:{color:"#303030",textTransform:"uppercase",ml:{sm:"80px"},position:{sm:"relative"},"&::before":{sm:{position:"absolute",left:-80,top:"0.5em",content:'""',width:60,height:1,background:"#303030"}}},children:'In Latin "Barba" means "Beard"'}),(0,w.jsx)(o.Z,{sx:{display:{md:"none"},width:418,mx:"auto"},cols:1,gap:30,children:e.map((function(e,a){return(0,w.jsx)(i.Z,{children:(0,w.jsx)("img",{src:e.src,alt:"Barber services Customer"})},a)}))}),(0,w.jsx)(o.Z,{sx:{display:{xs:"none",md:"grid",lg:"none"},width:690,mx:"auto"},cols:2,gap:30,children:a.map((function(e,a){return(0,w.jsx)(i.Z,{children:(0,w.jsx)("img",{src:e.src,alt:"Barber services Customer"})},a)}))}),(0,w.jsx)(o.Z,{sx:{display:{xs:"none",lg:"grid"},width:1170,mx:"auto"},cols:4,gap:30,children:r.map((function(e,a){return(0,w.jsx)(i.Z,{children:(0,w.jsx)("img",{src:e.src,alt:"Barber services Customer"})},a)}))})]})}function y(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(Z,{})})}},4751:function(e,a,r){var t=r(3366),n=r(7462),o=r(4419),i=r(8182),s=r(2791),c=r(6934),l=r(1402),d=r(4406),m=r(1393),u=r(184),p=["children","className","cols","component","rowHeight","gap","style","variant"],f=(0,c.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:function(e,a){var r=e.ownerState;return[a.root,a[r.variant]]}})((function(e){var a=e.ownerState;return(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===a.variant&&{display:"block"})})),g=s.forwardRef((function(e,a){var r=(0,l.Z)({props:e,name:"MuiImageList"}),c=r.children,g=r.className,v=r.cols,b=void 0===v?2:v,h=r.component,w=void 0===h?"ul":h,Z=r.rowHeight,y=void 0===Z?"auto":Z,x=r.gap,j=void 0===x?4:x,I=r.style,C=r.variant,k=void 0===C?"standard":C,L=(0,t.Z)(r,p),M=s.useMemo((function(){return{rowHeight:y,gap:j,variant:k}}),[y,j,k]);s.useEffect((function(){0}),[]);var S="masonry"===k?(0,n.Z)({columnCount:b,columnGap:j},I):(0,n.Z)({gridTemplateColumns:"repeat(".concat(b,", 1fr)"),gap:j},I),N=(0,n.Z)({},r,{component:w,gap:j,rowHeight:y,variant:k}),R=function(e){var a=e.classes,r={root:["root",e.variant]};return(0,o.Z)(r,d.Q,a)}(N);return(0,u.jsx)(f,(0,n.Z)({as:w,className:(0,i.Z)(R.root,R[k],g),ref:a,style:S,ownerState:N},L,{children:(0,u.jsx)(m.Z.Provider,{value:M,children:c})}))}));a.Z=g},1393:function(e,a,r){var t=r(2791).createContext({});a.Z=t},4406:function(e,a,r){r.d(a,{Q:function(){return n}});var t=r(1217);function n(e){return(0,t.Z)("MuiImageList",e)}var o=(0,r(5878).Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);a.Z=o},2163:function(e,a,r){var t=r(4942),n=r(3366),o=r(7462),i=r(4419),s=r(8182),c=r(2791),l=(r(7441),r(1393)),d=r(6934),m=r(1402),u=r(9103),p=r(3154),f=r(184),g=["children","className","cols","component","rows","style"],v=(0,d.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(e,a){var r=e.ownerState;return[(0,t.Z)({},"& .".concat(p.Z.img),a.img),a.root,a[r.variant]]}})((function(e){var a=e.ownerState;return(0,o.Z)({display:"block",position:"relative"},"standard"===a.variant&&{display:"flex",flexDirection:"column"},"woven"===a.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},(0,t.Z)({},"& .".concat(p.Z.img),(0,o.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===a.variant&&{height:"auto",flexGrow:1})))})),b=c.forwardRef((function(e,a){var r=(0,m.Z)({props:e,name:"MuiImageListItem"}),t=r.children,d=r.className,b=r.cols,h=void 0===b?1:b,w=r.component,Z=void 0===w?"li":w,y=r.rows,x=void 0===y?1:y,j=r.style,I=(0,n.Z)(r,g),C=c.useContext(l.Z),k=C.rowHeight,L=void 0===k?"auto":k,M=C.gap,S=C.variant,N="auto";"woven"===S?N=void 0:"auto"!==L&&(N=L*x+M*(x-1));var R=(0,o.Z)({},r,{cols:h,component:Z,gap:M,rowHeight:L,rows:x,variant:S}),B=function(e){var a=e.classes,r={root:["root",e.variant],img:["img"]};return(0,i.Z)(r,p.w,a)}(R);return(0,f.jsx)(v,(0,o.Z)({as:Z,className:(0,s.Z)(B.root,B[S],d),ref:a,style:(0,o.Z)({height:N,gridColumnEnd:"masonry"!==S?"span ".concat(h):void 0,gridRowEnd:"masonry"!==S?"span ".concat(x):void 0,marginBottom:"masonry"===S?M:void 0},j),ownerState:R},I,{children:c.Children.map(t,(function(e){return c.isValidElement(e)?"img"===e.type||(0,u.Z)(e,["Image"])?c.cloneElement(e,{className:(0,s.Z)(B.img,e.props.className)}):e:null}))}))}));a.Z=b},3154:function(e,a,r){r.d(a,{w:function(){return n}});var t=r(1217);function n(e){return(0,t.Z)("MuiImageListItem",e)}var o=(0,r(5878).Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);a.Z=o}}]);
//# sourceMappingURL=830.4cd0ef79.chunk.js.map