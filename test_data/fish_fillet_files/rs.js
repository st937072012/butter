ns_=self.ns_||{},ns_.ax_cid="6036255",ns_.ax_c3="/.+/",ns_.ax_i="",ns_.ax_g="",typeof ns_=="undefined"&&(ns_={}),ns_.extend=function(a,b){for(var c in b)a[c]=b[c];return a},ns_.encode=typeof encodeURIComponent=="function"?encodeURIComponent:function(a){return escape(a).replace(/\//g,"%2F")},ns_.b={},ns_.b.ie=/MSIE/.test(navigator.userAgent),ns_.b.ie9=ns_.b.ie&&typeof document.addEventListener=="function",ns_.b.sf=typeof navigator.vendor=="string"?/apple/i.test(navigator.vendor):!1,ns_.b.ch=!!window.chrome,ns_.b.ff=typeof navigator.userAgent=="string"?/firefox/i.test(navigator.userAgent):!1,ns_.b.op=!!window.opera,typeof ns_.ar=="undefined"&&(ns_.ar={push:function(){for(var a=0,b=arguments.length;a<b;a++)this[this.length]=arguments[a]},splice:function(){var a=ns_.ar.create(),b=arguments;if(b.length<=1)return a;if(b.length>2)for(var c=2,d=b.length;c<d;c++)a[a.length]=b[c];var e=this.slice(0,b[0]),f=this.slice(b[0],b[0]+b[1]),g=this.slice(b[0]+b[1]),h=e.concat(a,g);this.length=0;for(var c=0,d=h.length;c<d;c++)this[this.length]=h[c];return f},shift:function(){for(var a=0,b=this[0],c=this.length-1;a<c;a++)this[a]=this[a+1];return this.length--,b}}),ns_.ar.create=function(){var a=[];for(var b in a)delete a[b];for(var c=0,d=arguments.length;c<d;c++)a[a.length]=arguments[c];return a},ns_.ar.indexOf=function(a,b){var c=-1;return ns_.ar.each(a,function(a,d){a==b&&(c=d)},this),c},ns_.ar.merge=function(){var a=ns_.ar.create();return ns_.ar.each(arguments,function(b){ns_.ar.each(b,function(b,c){a[c]=b})},this),a},ns_.ar.pair=function(a,b){var c=ns_.ar.create();return ns_.ar.each(b,function(b,d){c[c.length]=d+a+b},this),c},ns_.ar.each=function(a,b,c){try{if(typeof b=="function"){c=typeof c!="undefined"?c:this.each.caller;if(typeof a["length"]!="number"||typeof a[0]=="undefined"){var d=typeof a.__proto__!="undefined";for(var e in a)(!d||d&&typeof a.__proto__[e]=="undefined")&&typeof a[e]!="function"&&b.call(c,a[e],e)}else for(var e=0,f=a.length;e<f;e++)b.call(c,a[e],e)}}catch(g){}},typeof ns_.dom=="undefined"&&(ns_.dom={cache:{},getElementsByTagName:function(a,b){var c,a=a,b=typeof b!="string"?b:document.getElementById(b)||document;return b.getElementsByTagName?c=b.getElementsByTagName(a):b.all&&b.all.tags&&(c=b.all.tags(a)),c||[]},addEvent:function(a,b,c){var d=!0,e=null;typeof c=="function"&&b=="unload"&&(e=function(){try{c.call(this)}catch(d){}ns_.dom.cache.del(a,b,c)}),e=e||c;if(document.attachEvent)d=a.attachEvent(b.substring(0,1)==b.substring(0,1).toUpperCase()?b:"on"+b,e);else if(document.addEventListener)a.addEventListener(b,e,!1);else{document.layers&&elem==document&&b.toLowerCase()=="click"&&(b="mouseup",elem.captureEvents(Event.MOUSEUP));var f=elem["on"+b];typeof f!="function"?elem["on"+b]=e:elem["on"+b]=function(a){f&&f(a),e(a)}}return d&&ns_.dom.cache&&ns_.dom.cache.add(a,b,c,!1,e),d},removeEvent:function(a,b,c){ns_.dom.cache.del(a,b,c)}}),ns_.dom.cache={_events:ns_.ar.create(),add:function(a,b,c,d){this._events[this._events.length]=arguments},del:function(a,b,c){ns_.ar.each(this._events,function(d,e){if(!c&&d[0]==a&&d[1]==b)throw this.detach(d[0],d[1],d[2],d[3]),this._events.splice(e,1),"Event found";if(!!c&&d[0]==a&&d[1]==b&&d[2]==c)throw this.detach(d[0],d[1],d[2],d[3]),this._events.splice(e,1),"Event found"},ns_.dom.cache)},detach:function(a,b,c,d){typeof c=="function"&&b=="unload"&&ns_.ar.each(this._events,function(d,e){if(d[0]==a&&d[1]==b&&d[2]==c&&typeof d[4]=="function")throw c=d[4],""},ns_.dom.cache),a.detachEvent?a.detachEvent(b.substring(0,1)==b.substring(0,1).toUpperCase()?b:"on"+b,c):typeof a.removeEventListener!="undefined"&&(ns_.b.ie?a.removeEventListener(b,c):a.removeEventListener(b,c,d))},flush:function(){try{ns_.ar.each(this._events,function(a,b){typeof a!="undefined"&&a[1]!="unload"&&this.detach(a[0],a[1],a[2],a[3])},ns_.dom.cache),this._events=[]}catch(a){}}},ns_.dom.addEvent(window,"unload",function(){ns_.dom.cache.flush()}),ns_=self.ns_||{},ns_.ax=ns_.ax||function(){function ec(a){return typeof a=="string"}function fc(a){return typeof a=="function"}function gc(a){return typeof a=="number"}function hc(a){return typeof a!="undefined"}function ic(a){return!hc(a)}function jc(a){return typeof a=="object"}function kc(b,c){return b&&b[m][a]()==c}function lc(a){return a&&a==a.top}function mc(a,b){a[L]&&a[L](b,"*")}function nc(a){Q[L]&&a&&v(Q,H,a)}function oc(a,b){var c;ns_.ax.crossDomain=ns_.ax.crossDomain||[],c=ns_.ax.crossDomain;if(ic(c[a]))try{c[a]=ic(b.NaN)}catch(d){c[a]=!0}return c[a]}function pc(a,b,c){if(Rb&&oc(c,a))return!1;try{return a[b]}catch(d){}return!1}function qc(a,b){var c=R.createElement("SCRIPT");c.type="text/javascript",c.src=a,c.async=!0,b.parentNode.insertBefore(c,b)}function rc(a,b){return a[a.length]=b,a}function sc(){return R.hasFocus?R.hasFocus():!0}function tc(){var a=[];for(var b in a)delete a[b];return a}function uc(a,b){var d=window,e=window,f=0;while(d!=cb&&f<10){var g=d.parent;try{if(g.location.href)for(var h=ns_.dom.getElementsByTagName("iframe",g.document.body),i=h[c],j=0;j<i;++j){var k=h[j];if(k.contentWindow==d&&(k[db]==a||k.style[db].replace("px","")==a)&&(k[eb]==b||k.style[eb].replace("px","")==b)){e=g;break}}d=g}catch(l){d=cb}++f}return e}function bd(a,b,c){var d=0,e=0,f,g,h,i,j;if(!a)return[0,0];a=Pb&&kc(a,"EMBED")&&kc(a.parentNode,"OBJECT")?a.parentNode:kc(a,"OBJECT")?ns_.dom.getElementsByTagName("EMBED",a)[0]||a:a,b=b||document,c=c||b.defaultView||b.parentWindow,g=b.body,h=b.documentElement,Zc=Zc||1;if(fc(a[xb])&&!kc(a,"EMBED"))return f=a[xb](),i=c.pageXOffset||h.scrollLeft||g.scrollLeft,j=c.pageYOffset||h.scrollTop||g.scrollTop,Pb&&!_b&&(f.left/=Zc,f.top/=Zc,i/=Zc,j/=Zc),[f.left+i,f.top+j];do{a!=g?(d+=a.offsetTop||0,e+=a.offsetLeft||0):(d+=Math.abs(a.offsetTop)||0,e+=Math.abs(a.offsetLeft)||0);if(a.offsetParent==g&&a.style["position"]=="absolute")break}while(a=a.offsetParent);return!b.querySelectorAll&&gc(g.clientTop)&&(d+=g.clientTop,e+=g.clientLeft),[e,d]}function cd(a){var b=0;a=a||window;while(!lc(a))b++,a=a.parent;return b}function dd(a){var b=R.createElement("iframe"),c,d,e;if(!b)return a;b.style.position="absolute",b.style.top="-32000px";if(S.appendChild(b)){try{if(c=b.contentDocument){c.open(),c.writeln("<!DOCTYPE html><html><head><title></title></head><body></body></html>"),c.close();if(e=c.createElement("script")){e.type="text/javascript",e.text='function m(a,b,c,d){var e;return a.sheet.insertRule("@media ("+c+":"+d+") {div {text-decoration: underline} }",0),e=getComputedStyle(b,null).textDecoration=="underline",a.sheet.deleteRule(0),e}function bs(a,b,c,d,e,f,g,h){var i=(e+f)/2;return g==0||f-e<h?i:m(a,b,c,i+d)?bs(a,b,c,d,i,f,g-1,h):bs(a,b,c,d,e,i,g-1,h)}var doc=document,s=doc.createElement("style");n=doc.createElement("div"),doc.body.appendChild(s);var zoom=bs(s,n,"min--moz-device-pixel-ratio","",.1,10,15,1e-4);',c.body.appendChild(e);if(d=b.contentWindow)a=d.zoom||a}}}catch(f){}S.removeChild(b)}return a}function ed(a){var b=Q.devicePixelRatio||1,c=R.createElement("div");return c.innerHTML=[1,2,3,4,5].join("<br/>"),c.setAttribute("style","font: 100px/1em sans-serif; -webkit-text-size-adjust:none;visibility:hidden; position:absolute;"),S.appendChild(c),a=500/c.clientHeight,S.removeChild(c),a}function fd(){var a=screen,b=window.top,c=cd(),d,e,f,g,h,i=1,j;if(Xb)return dd(i);if(Rb&&!Vb)return ed(i);if(Pb&&!_b){if(S&&S[xb]){f=S[xb](),h=f.right-f.left;if(g=S.offsetWidth)return h/g}}else if(a.logicalXDPI&&a.deviceXDPI)return a.deviceXDPI/a.logicalXDPI;return d=pc(b,rb,c),e=pc(b,tb,c),j=pc(b,"devicePixelRatio",c)||1,gc(d)&&gc(e)&&d&&j?(Wb&&bc?e>d&&(i=8/(e-d)):i=e/(d*j),Vb&&(g=qd()?a[eb]:a[db],i=i/(e/g)*j),i):1}function gd(b,c){var d,e,f,g;c=c||document,d=c.defaultView||c.parentWindow,e=c.body;if(!b)return[d.pageXOffset||c.documentElement.scrollLeft||e.scrollLeft,d.pageYOffset||c.documentElement.scrollTop||e.scrollTop];var h=bd(b,c),i=h[1],j=h[0],k=b;if(Qb)i-=Q.pageYOffset,j-=Q.pageXOffset;else do if(!Q.opera||k[m]&&k[m][a]()=="BODY")f=k.scrollTop||0,g=k.scrollLeft||0,Pb&&!_b&&(f/=Zc,g/=Zc),i-=f,j-=g;while(k=k[t]);return[j,i]}function hd(a){var b=["Width","Height"],d=tc(),e=Qb?fd():1;if(a&&a.nodeName!="BODY")return[a.clientWidth||Number(a.width),a.clientHeight||Number(a.height)];for(var f=b[c],g=b[--f];g;g=b[--f])W&&W["client"+g]?d[f]=jb(W["client"+g]*e):gc(Q["inner"+g])?d[f]=jb(Q["inner"+g]*e):d[f]=jb(document.body["client"+g]*e);return d}function id(a,b,c,d){return c=c||0,d=d||0,{left:a,top:b,width:c,height:d,area:c*d}}function jd(a,b){var c,d,e,f,g={};return b.area?(c=a[bb]+a[db],d=a[cb]+a[eb],e=b[bb]+b[db],f=b[cb]+b[eb],(b[bb]>=a[bb]&&b[bb]<=c||a[bb]>=b[bb]&&a[bb]<=e)&&(b[cb]>=a[cb]&&b[cb]<=d||a[cb]>=b[cb]&&a[cb]<=f)?(g[bb]=ib(b[bb],a[bb]),g[cb]=ib(b[cb],a[cb]),g[db]=hb(e,c)-g[bb],g[eb]=hb(f,d)-g[cb],g):null):a}function kd(a,b,c,d){var e=kb({},b),f=1;e[yb]=!1;while(a[bb]+a[db]*f<=e[bb])e[bb]-=c,e[yb]=!0;while(a[bb]+a[db]*(1-f)>=e[bb]+e[db])e[bb]+=c,e[yb]=!0;while(a[cb]+a[eb]*f<=e[cb])e[cb]-=d,e[yb]=!0;while(a[cb]+a[eb]*(1-f)>=e[cb]+e[eb])e[cb]+=d,e[yb]=!0;return e[yb]&&(e[db]=c,e[eb]=d),e}function ld(a,b){var c=0,d,e=0,f=Q,g,h,i,k=0,l,m,n;Zc=fd(),l=rd(Q),m=l.box;if(b){b[N+"vsd"]=jb(m[db])+j+jb(m[eb]),b[N+"sd"]=jb(l.fw)+j+jb(l.fh);if(m[bb]||m[cb])b[N+"vsp"]=jb(m[bb])+j+jb(m[cb])}Vc=["&"];if(Qb&&ic(ns_.ax.operaFirstLoad))return ns_.ax.operaFirstLoad=!1,0;d=sd(Q,c,l,a);if(!(d.flags&Bb))return 1;n=d[gb];if(d.visible&&n.area){h=d[gb];while(!lc(f)&&h)f=f.parent,g=sd(f,++c,l,a),g.flags&Bb&&(n=g[gb],h=jd(h,n),lc(f)&&(m=kd(n,m,l.fw,l.fh)));lc(Q)&&(m=kd(n,m,l.fw,l.fh)),h&&(!m[yb]||n[db]<=m[db]&&n[eb]<=m[eb])&&(h=jd(h,m)),h&&d.box.area&&(e=hb(h[db],d.box[db])*hb(h[eb],d.box[eb]))}return b&&f==f[cb]&&(b[N+"vvd"]=jb(n[db])+j+jb(n[eb]),b[N+"vvp"]=jb(n[bb])+j+jb(n[cb])),h&&e&&a&&(i=td(a,Q,d,0),n=i.box,h=jd(h,n),h&&n.area&&(k=hb(h[db],n[db])*hb(h[eb],n[eb])),b&&(b[N+"vad"]=jb(n[db])+j+jb(n[eb]),b[N+"vap"]=jb(n[bb])+j+jb(n[cb]))),a?i&&i.box.area?k/i.box.area:0:d&&d.box.area?e/d.box.area:0}function md(a,b){var c;if(lc(a)&&!Qb&&!Pb)c=pc(a,vb,b)||window[vb]||pc(a,Z,b)||window[Z];else if(lc(a)||Qb)c=pc(a,vb,b),ac?c=c||window[Z]:c=c||pc(a,Z,b);return gc(c)&&!Qb&&!Rb&&(!Pb||_b)&&(c*=Zc),c}function nd(a,b){var c;if(lc(a)&&!Qb&&!Pb)c=pc(a,wb,b)||window[wb]||pc(a,$,b)||window[$];else if(lc(a)||Qb)c=pc(a,wb,b),ac?c=c||window[$]:c=c||pc(a,$,b);return gc(c)&&!Qb&&!Rb&&(!Pb||_b)&&(c*=Zc),c}function od(a,b){function c(c,d){return pc(a,c,b)||d}if(!a)return!0;var d=c("PAGE_HIDDEN","hidden"),e=c("PAGE_VISIBLE","visible"),f=c("PAGE_PREVIEW","preview"),g=c("PAGE_PRERENDER","prerender"),h=c("visibilityState")||c(ob+nb)||c(lb+nb)||c("o"+nb)||c("ms"+nb),i=c("hidden")||c(ob+mb)||c(lb+mb)||c("o"+mb)||c("ms"+mb);return i!==void 0?!i:h!==void 0?h==e||h==1:!0}function pd(a,b){return!b&&gc(a[Ab])?ad:od(pc(a,"document",b),b)}function qd(){var a=pc(Q,"screen",0)||screen;return Vb?lc(Q)?pc(Q,zb,0)==90||pc(Q,zb,0)==-90:pc(Q,tb,0)>pc(Q,ub,0):a[db]>a[eb]}function rd(a){function m(b,c){return pc(a,b,0)||c}function n(b,c){return pc(a.screen,b,0)||c}var b=m("fullScreen",!1),c,d,e,f,g,h,i,j,k,l;c=n(bb,0),d=n(cb,0),g=e=n(db,0),h=f=n(eb,0),b||(c=n(qb+"Left",c),d=n(qb+"Top",d),e=n(qb+"Width",e),f=n(qb+"Height",f)),Vb&&(qd()&&(e+=f,f=e-f,e-=f,g+=h,h=g-h,g-=h),f<h&&d===0&&(d=h-f));if(_b||Wb)c*=Zc,d*=Zc,e*=Zc,f*=Zc,g*=Zc,h*=Zc;return rc(Vc,Ad({fs:b!==void 0?b:"na",l:c,t:d,w:e,h:f},"s_")),{fullScreen:b,fw:g,fh:h,box:id(c,d,e,f)}}function sd(a,b,c,d){function X(c,d){var e=pc(a,c,b);return e!==!1?e:d||!1}var e=X("document"),f=pc(e,"compatMode",b)||"CSS1Compat",g=f=="CSS1Compat"?pc(e,"documentElement",b):pc(e,"body",b),h=c.box,i=h.left,j=h.top,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,w=0,y=0,z=0,B=0,C=i,D=j,E,F,G=i,H=j,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W;(U=X("locationbar"))&&U[fb]&&(B|=Hb),(U=X("menubar"))&&U[fb]&&(B|=Ib),(U=X("personalbar"))&&U[fb]&&(B|=Jb),(U=X("scrollbars"))&&U[fb]&&(B|=Kb),(U=X("statusbar"))&&U[fb]&&(B|=Lb),(U=X("toolbar"))&&U[fb]&&(B|=Mb);if(lc(a)||Qb)i=md(a,b),j=nd(a,b),gc(i)&&gc(j)&&(B|=Bb);ns_.ax.mouseMoveInfo=ns_.ax.mouseMoveInfo||tc(),V=ns_.ax.mouseMoveInfo[b],gc(X(lb+"InnerScreenX"))&&(i=X(lb+"InnerScreenX",0),j=X(lb+"InnerScreenY",0),gc(j)&&(i*=Zc,j*=Zc,B|=Bb));if(!lc(a)&&!(B&Bb)){i=j=0,O=a,P=X("parent"),Q=b+1;while(P){if((R=pc(O,"frameElement",Q-1))&&(S=pc(P,"document",Q))&&pc(S,x,Q))N=gd(R,S),i+=N[0]*Zc,j+=N[1]*Zc,B|=Bb;else if(B&Bb){B^=Bb;break}if(lc(P)){parentWindowScreenLeft=md(P,Q),parentWindowScreenTop=nd(P,Q),i+=parentWindowScreenLeft,j+=parentWindowScreenTop;if(T=ns_.ax.mouseMoveInfo[Q])T.updateBrowserMargins(parentWindowScreenLeft,parentWindowScreenTop),i+=T[pb+"Left"],j+=T[pb+"Top"];P=null}else O=P,P=pc(P,"parent",Q++)}}V||(ns_.ax.mouseMoveInfo[b]=V={detected:!1,clientX:0,clientY:0,screenX:0,screenY:0,browserMarginTop:0,browserMarginLeft:0,initBrowserMargins:function(){var c=oc(b,a),d=!c,e=0;if(!lc(a)||Qb)return;Ob?Rb&&d?e=Vb?75:74:Yb&&c&&(e=85):c?ac?e=54:Xb?e=63:Wb&&(e=107):Rb&&(Sb?e=85:Tb&&(Vb?e=93:e=Ub?192:79)),V[pb+"Top"]=e,ns_.ax[pb+"Top"]=e},updateBrowserMargins:function(b,c){var d=V,e=d[Z]-d[_],f=d[$]-d[ab];if(!d.detected||Pb)return;!Qb&&lc(a)&&B&Bb&&(e!=b||f!=c)&&(d[pb+"Left"]=e-b,d[pb+"Top"]=f-c)},handler:function(b){var c=V;b=b||a.event,c[_]=b[_],c[ab]=b[ab];if(!Pb||_b)c[_]*=Zc,c[ab]*=Zc;c[Z]=b[Z],c[$]=b[$];if(Qb||_b)c[Z]*=Zc,c[$]*=Zc;c.detected=!0}},V.initBrowserMargins(),g&&v(g,A,V.handler)),g&&pc(g,"fireEvent",b)&&(ns_.ax.fireEvent=!0,g.fireEvent("on"+A),ns_.ax.fireEvent=!1),V.detected&&(V.updateBrowserMargins(i,j),V.detected=!1,Pb&&(i=V[Z]-V[_],j=V[$]-V[ab],B|=Bb)),!c.fullScreen&&lc(a)&&B&Bb&&(i+=V[pb+"Left"],j+=V[pb+"Top"]);if(lc(a)){k=X(tb,window[tb]),l=X(ub,window[ub]);if(k||l)!Qb&&!Rb&&(k*=Zc,l*=Zc),bc&&i<0&&jb(k+2*i)==jb(h.width)&&(i=0,k=h.width),B|=Cb}m=pc(g,"clientLeft",b)||0,n=pc(g,"clientTop",b)||0,o=pc(g,"clientWidth",b)||0,p=pc(g,"clientHeight",b)||0;if(o||p){if(!Pb||_b||!b&&!lc(window))m*=Zc,n*=Zc,o*=Zc,p*=Zc;B|=Db}q=X("innerWidth",0),r=X("innerHeight",0);if(q||r){if(!Qb||lc(a))q*=Zc,r*=Zc;B|=Eb}if(g&&fc(pc(g,xb,b))){var Y=g[xb]();if(Y){s=Y.left,t=Y.top;if(!Pb){var bb=hd(d);Y.bottom==0||Y.bottom<bb[1]?(u=Y.right-Y.left,w=bb[1]-Y.top):Y.right==0||Y.right<bb[0]?(u=bb[0]-Y.left,w=Y.bottom-Y.top):(u=Y.right-Y.left,w=Y.bottom-Y.top)}else u=pc(g,"scrollWidth",b),w=pc(g,"scrollHeight",b);Pb&&!_b&&(s/=Zc,t/=Zc,u/=Zc,w/=Zc),B|=Fb}}else if(g){s=pc(g,"offsetLeft",b),t=pc(g,"offsetTop",b),u=pc(g,"scrollWidth",b)||pc(g,"offsetWidth",b),w=pc(g,"scrollHeight",b)||pc(g,"offsetHeight",b);if(u||w)B|=Fb}return B&Fb&&(s*=Zc,t*=Zc,u*=Zc,w*=Zc),gc(X("pageXOffset"))||gc(X("scrollX"))?(y=X("pageXOffset")||X("scrollX",0),z=X("pageYOffset")||X("scrollY",0)):g&&(y=pc(g,"scrollLeft",b)||0,z=pc(g,"scrollTop",b)||0),(y||z)&&(!Pb||_b)&&(y*=Zc,z*=Zc,B|=Gb),Pb&&(s-=y,t-=z),B&Bb&&(C=i,D=j,G=i,H=j,B&Gb&&(G-=y,H-=z)),B&Cb&&(E&&F?(E=hb(k-V[pb+"Left"],E),F=hb(l-V[pb+"Top"],F)):(E=k-V[pb+"Left"],F=l-V[pb+"Top"])),B&Eb&&(E=q,F=r),B&Db&&(C+=m,D+=n,E=o,F=p),B&Fb&&(B&Db||(C+=s,D+=t),I=u,J=w),W=pd(a,b),rc(Vc,Ad({v:W,cmp:f,sX:i,sY:j,oW:k,oH:l,cL:m,cT:n,cW:o,cH:p,iW:q,iH:r,bL:s,bT:t,bW:u,bH:w,scrX:y,scrY:z},"w"+b+"_")),{visible:W,flags:B,box:id(G,H,I,J),visibleBox:id(C,D,E,F)}}function td(a,b,c,d){function j(a,b){return pc(e,a,d)||b||!1}var e=Pb&&kc(a,"EMBED")&&kc(a.parentNode,"OBJECT")?a.parentNode:kc(a,"OBJECT")?ns_.dom.getElementsByTagName("EMBED",a)[0]||a:a,f=hd(a),g=f[0],h=f[1],i=gd(!Pb&&kc(e,"OBJECT")?e.childNodes[0]:e,pc(b,"document",d));return kc(e,"BODY")&&e.ownerDocument&&(g=c.visibleBox.width/Zc,h=c.visibleBox.height/Zc),g*=Zc,h*=Zc,{box:id(c.visibleBox.left+i[0]*Zc,c.visibleBox.top+i[1]*Zc,g,h)}}function ud(a,b,c){var d=this;if(!a)return;kb(d,{a:a,p:c||Mc,labels:{}}),kb(d.labels,a.l),kb(d.labels,zd(b))}function vd(a,b,c){return b["ns_"+n]="hidden",b[N+"pid"]=Ic,b[O+"mid"]=Jc,b[N+"vw"]=hd().join(j),b[N+"sc"]=gd().join(j),b[N+"sv"]=Oc,b[N+"tn"]=a.n.nodeName,new ud(a,b,c)}function wd(a,b,c){var d=a.n,e,g;b[N+"id"]=a.i,b[N+"sz"]=hd(d).join(j),b[N+"po"]=bd(d).join(j),b[N+"vi"]=jb(ld(d,b)*100);if(a.h&&!b[P]){b[P]="qp"+xc[a.b-1];if(b[P]=="qp1"){e=kb({},b),g=new wd(a,e,a.px.substring(0,a.px.indexOf(".com/")+5)+"p?c1=3&"),g.labels.c3="_e1_"+g.labels.c3;var h=g.process(!0,!0);a.V(h),Q[Ab]===0&&(b[N+"xx"]="1")}}else typeof b[P]==f&&(b[P]="show");if(d.src&&ec(d.src)||d[u]&&ec(d[u]))b[N+"src"]=X(d.src||d[u]);return new vd(a,b,c)}function xd(a,b,c){return b[P]="engaged",new wd(a,b,c)}function yd(a,b,c){return b[P]=c?J:I,new wd(a,b)}function zd(a){var b={},d="__p;__n;c1;ax_i;ax_g";if(!a)return b;if(!ec(a)&&a[c]){if(!ec(a[0])&&a[0][c]==2)for(var e=0,f=a[c],g=a[e];e<f;g=a[++e])b[g[0]]=g[1];else if(ec(a[0]))for(var e=0,f=a[c],g=a[e];e<f;g=a[++e])if(g.indexOf("=")!=-1){var h=g.split("=");b[h[0]]=h[1]}}else if(ec(a)){var i=a.replace("&amp;","&").split("&");for(var e=0,f=i[c],g=i[e];e<f;g=i[++e])if(g.indexOf("=")!=-1){var h=g.split("=");b[h[0]]=h[1]}}else if(jc(a))for(var e in a)(gc(a[e])||ec(a[e]))&&d.indexOf(e)==-1&&(b[e]=a[e]);return b}function Ad(a,b,c){var d=tc();b=b||"",c=c||"";for(var e in a)hc(a[e])&&rc(d,b+e+c+"="+a[e]);return d.join("&")}function Bd(a,b,d,e){function h(){f.k=!0}function i(){if(ns_.ax.fireEvent)return;f.o=!0,f.m||(f.m=V(k,Gc),f.p=+(new Date))}function j(){f.o=!1,f.m&&U(f.m),f.e&&(f.z+=+(new Date)-f.p),f.m=f.p=0}function k(){if(!f.o)return;f.d++,!f.e&&V(function(){if(!f.o)return;f.e=!0;if(f.xg&&f.xg!="engageurl"){var a=(new xd(f,{},unescape(f.xg))).process(!0);p(a)}},wc-Gc)}function m(a){a.ns__m=a.ns__p,delete a.ns__p,g[g[c]]=a,r(a);if(f.zi){var b=f.zi.substr(f.zi.indexOf("?")).split("&"),d={};ns_.ar.each(b,function(a){var b=a.split("=");/^(c\d|ax_|ns_)/.test(b[0])&&(d[b[0]]=b[1])});if(a.ax_i&&a.ax_i!="inviewurl"){var e=kb({},d);kb(e,zd(a)),d.c1&&(e.c1=a.c1),d.c3.indexOf("_e")==0&&(e.c3=d.c3.substr(0,d.c3.indexOf("_",1)+1)+e.c3),adViz(n(unescape(a.ax_i),e))}}}function n(a,b){var d=a+(a.charAt(a[c]-1)=="?"?"":"?");for(var e in b)switch(e){case"ns__t":d+=e+"="+ +(new Date)+"&";break;case"ns__p":d+="ns__m="+b[e]+"&";break;case"ns__m":d+="ns__p="+b[e]+"&";break;case"":break;default:d+=e+"="+b[e]+"&"}return d}function o(a){var b=a.substr(a.indexOf("?")+1).split("&"),c={};ns_.ar.each(b,function(a){var b=a.split("=");/^(c\d|ax_|ns_)/.test(b[0])&&(c[b[0]]=b[1])}),ns_.ar.each(g,function(a){if(a.ax_i&&a.ax_i!="inviewurl"){var b=kb({},c);kb(b,zd(a)),c.c1&&(b.c1=a.c1),c.c3.indexOf("_e")==0&&(b.c3=c.c3.substr(0,c.c3.indexOf("_",1)+1)+b.c3),adViz(n(unescape(a.ax_i),b))}})}function p(a){var b=a.substr(a.indexOf("?")+1).split("&"),c={};ns_.ar.each(b,function(a){var b=a.split("=");/^(c\d|ax_|ns_)/.test(b[0])&&(c[b[0]]=b[1])}),ns_.ar.each(g,function(a){if(a.ax_g&&a.ax_g!="engageurl"){var b=kb({},c);kb(b,zd(a)),c.c1&&(b.c1=a.c1),c.c3.indexOf("_e")==0&&(b.c3=c.c3.substr(0,c.c3.indexOf("_",1)+1)+b.c3),adViz(n(unescape(a.ax_g),b))}})}function q(a,b){var c=a.substr(0,a.indexOf("?")),d=a.substr(a.indexOf("?")+1).split("&"),e={};ns_.ar.each(d,function(a){var b=a.split("=");/^(c\d|ax_|ns_)/.test(b[0])&&(e[b[0]]=b[1])}),ns_.ar.each(g,function(a){var b=kb({},e);kb(b,zd(a)),e.c1&&(b.c1=a.c1),e.c3.indexOf("_e")==0&&(b.c3=e.c3.substr(0,e.c3.indexOf("_",1)+1)+b.c3),adViz(n(c,b))})}function r(a){if(!f.zr)return;var b=f.zr[0].substr(0,f.zr[0].indexOf("?")),c=f.zr[0].substr(f.zr[0].indexOf("?")+1).split("&"),d={};ns_.ar.each(c,function(a){var b=a.split("=");/^(c\d|ax_|ns_|uid)/.test(b[0])&&(d[b[0]]=b[1])});var e=kb({},d);kb(e,zd(a)),d.c1&&(e.c1=a.c1),qc(n(b,e),f.zr[1])}var f=this,g=tc();a.ph||(v(a,z,i),v(a,A,i),v(a,C,h),v(a,B,j)),kb(f,{c:0,n:a,px:b.__p.src,l:zd(b),f:!!d,i:a.id||a.name||a.nodeName,h:0,b:0,t:0,v:0,s:0,g:0,d:0,x:0,z:0,p:0,m:0,o:!1,e:!1,k:!1,w:!1,xi:b.ax_i||"",xg:b.ax_g||"",R:m,V:q,I:o,zi:"",zr:"",G:p,erase:function(){l.ph||(w(a,z,i),w(a,B,j),w(a,A,i),w(a,C,h)),delete f.n}})}function Cd(a){return a&&(a[n]==D||a[n]==H&&a.data&&zc.test(a.data))}function Dd(a){return a&&(a[n]==E||a[n]==H&&a.data&&Ac.test(a.data))}function Ed(a,b){a.h==0&&(a.h=+(new Date),a.b=0,a.t=0),a.v!=b&&(a.b=0,a.t=0,a.v=b),a.t++;if(a.b<yc&&a.t==xc[a.b])return++a.b}function Fd(a){return a.xi&&a.xi!="inviewurl"?unescape(a.xi):!1}function Gd(a){ns_.ar.each(a,function(a){a.erase(),Cc.splice(ns_.ar.indexOf(Cc,a),1)})}function Hd(a){var b=tc();try{var d=Q[Ab];gc(d)&&(ad=d>_c,_c=d),ns_.ar.each(Cc,function(c){var d={},e=d,f=ld(c.n)>Dc,g=wd;cc&&(f=f&&sc());if(Cd(a)||Dd(a)||!c.f&&f&&(c.t||!c.w)){a&&a.data&&zc.test(a.data)&&(e[N+"href"]=a.data.replace(zc,"$1"));if(c.b<yc){e[P]=Rc?"show":"hide",d=(new g(c,e)).labels;if(!c.w&&!c.t&&Fd(c)){var h=(new g(c,e,Fd(c))).process(!0);c.I(h)}}}if(f){if(!a||a[n]!=F&&a[n]!=G||!c.f)if(d[P]||Ed(c,f)){var h=(new g(c,d)).process();c.V(h)}}else if(c.f&&c.b<yc){e[P]="hide";var h=(new g(c,e)).process();c.V(h)}c.f=f,c.b>=yc&&rc(b,c)}),Gd(b),Cc[c]&&Id()}catch(e){}}function Id(){Tc=V(Hd,Ec)}function Jd(){Tc&&U(Tc)}function Kd(a){if(!Rc)return;var b=+(new Date);!a||a[n]!=F&&a[n]!=G?b-Pc>Hc&&(Jd(),Hd({type:"scroll"}),Pc=b,Qc=null):(Qc&&U(Qc),Qc=V(Kd,Hc))}function Ld(a){Nd(kb({},a)),Rc=!0,a[n]==D&&V(function(){Rc=!0},100);if(a[n]==H&&a[u]!=Q[b])mc(Q[b],[D,"&",location.href].join(""));else for(var d=0,e=Q.frames[c];d<e;d++)mc(Q.frames[d],[D,"&",location.href].join(""))}function Md(a){Nd(kb({},a)),Rc=!1;if(a[n]==H&&a[u]!=Q[b])mc(Q[b],[E,"&",location.href].join(""));else for(var d=0,e=Q.frames[c];d<e;d++)mc(Q.frames[d],[E,"&",location.href].join(""))}function Nd(a){Uc!=null&&U(Uc),Uc=V(function(){!Rc&&Tc?(Jd(),Hd(a),Jd(),Tc=!1):Rc&&!Tc&&Hd(a),Uc=null},Fc)}function Od(a){if(ns_.ax.fireEvent)return;Sc=!0,w(Q,A,Od),w(Q,B,Od),w(Q,z,Od)}function Pd(a){Jd();for(var b=0,d=Cc[c],e=Cc[b];b<d;e=Cc[++b])if(e.h>0&&e.b<yc){var f=new yd(e,{},!0);Wc[c]==Cc[c]&&(f.labels[N+"sz"]=Wc[b][0],f.labels[N+"vw"]=Wc[b][1],f.labels[N+"vi"]=Wc[b][2]);var g=f.process();e.V(g)}}function Qd(a){for(var b=0,d=Cc[c],e=Cc[b];b<d;e=Cc[++b])Wc[Wc[c]]=[hd(e.n).join(j),hd().join(j),jb(ld(e.n)*100)]}function Rd(){$c!=sc()&&(($c=!$c)?Ld({type:D}):Md({type:E})),Cc[c]&&V(Rd,Fc)}function Sd(){dc||(v(Q,D,Ld),v(Q,E,Md)),v(Q,F,Kd),v(Q,G,Kd),v(Q,J,Pd),ns_.b.ff&&v(Q,K,Qd),v(Q,A,Od),v(Q,z,Od),v(Q,B,Od)}function Td(){Sd(),nc(function(a){if(a[u]==Q)return!1;zc.test(a.data)?Ld(a):Ac.test(a.data)&&Md(a)}),ns_.ar.each(R.cookie.replace(" ","").split(";"),function(a){if(a.indexOf("viz=")==0)throw vc=!vc,0})}function Ud(a,b){var f={},g,h="",i;a=ec(a)?R.getElementById(a):a;var k=hd(a),l=uc(k[0],k[1]);l[e][d]&&l[e][d]!=R[d]&&(b[N+"rf"]=l[e][d]);var m=!1;for(var n=0,p=Cc[c];n<p;n++)Cc[n].n===a&&(m=!0,Cc[n].R(b));if(m)return j;b[Xc]&&(Jc=Math.ceil(Math.random()*1e8)+""+Ic%1e8);if(a[o]===q||a[o]===r){i=new Bd(a,b,!1,Cc[c]),rc(Cc,i),Cc[c]==1&&(dc&&Rd(),Id()),g=new yd(i,f);if(ld(i.n)>Dc){i.w=!0;if(!i.t&&Fd(i)){var s=g.labels[P];g.labels[P]="show";var t=(new wd(i,g.labels,Fd(i))).process(!0);i.zi=t,g.labels[P]=s}}g.labels[N+"ec"]=++i.c;for(var n in g.labels)h+=n+"="+g.labels[n]+"&";Bc.test(b.__p.src)&&(h=h.substring(0,h[c]-1)+b.__p.src.match(Bc).join("")),Yc=+(new Date);var u=[Nc,"uid=",a.id,"&",h].join("");return qc(u,b.__n),i.zr=[u,b.__n],i}}function Vd(a){var b={},d="";a[Xc]&&(Jc=Math.ceil(Math.random()*1e8)+""+Ic%1e8),b=zd(a),b["ns_"+n]="hidden",b[P]="miss",b[N+"pid"]=Ic,b[O+"mid"]=Jc,b[N+"vw"]=hd().join(j),b[N+"po"]=bd(a.__n).join(j),b[N+"sc"]=gd().join(j),b[N+"sv"]=Oc,b[N+"tn"]=a.__n.nodeName;for(var e in b)d+=e+"="+b[e]+"&";Bc.test(a.__p.src)&&(d=d.substring(0,d[c]-1)+a.__p.src.match(Bc).join("")),Yc=+(new Date);var f=[Nc,d].join("");qc(f,a.__n)}function Wd(a){ns_.ar.each(Cc,function(b){if(!a||b.n.id==a)b.l[O+"bl"]="0",b.l[O+"blt"]=+(new Date)-Yc})}function Xd(a,b){var c=tc();ns_.ar.each(Cc,function(d){if(!a||d.n.id==a){Jd(),d.m&&U(d.m),Qc&&U(Qc),Uc&&U(Uc);var e=new wd(d,kb(zd(b),{ax_blt:+(new Date)-Yc}),d.px.substring(0,d.px.indexOf(".com/")+5)+"p?c1=3&");e.labels.c3="_e2_"+e.labels.c3;var f=e.process(!0,!0);d.V(f);var g=new wd(d,kb(zd(b),{ax_blt:+(new Date)-Yc}),Mc);f=g.process(!0,!0),d.V(f),rc(c,d)}}),Gd(c)}var a="toUpperCase",b="parent",c="length",d="referrer",e="document",f="undefined",g="string",h="number",i="all",j="x",k="cS",l="node",m=l+"Name",n="type",o=l+"Type",p=3,q=1,r=9,s="nextSibling",t="parentNode",u="source",v=ns_.dom.addEvent,w=ns_.dom.removeEvent,x="getElementsByTagName",y="mouse",z=y+"over",A=y+"move",B=y+"out",C="click",D="focus",E="blur",F="scroll",G="resize",H="message",I="load",J="un"+I,K="before"+J,L="postMessage",M="ns_",N=M+"ad_",O="ax_",P=N+"event",Q=window,R=document,S=R.body,T=R.documentMode,U=clearTimeout,V=setTimeout,W=R.documentElement,X=Q.encodeURIComponent||escape,Y=void 0,Z="screenX",$="screenY",_="clientX",ab="clientY",bb="left",cb="top",db="width",eb="height",fb="visible",gb=fb+"Box",hb=Math.min,ib=Math.max,jb=Math.round,kb=ns_.extend,lb="moz",mb="Hidden",nb="VisibilityState",ob="webkit",pb="browserMargin",qb="avail",rb="innerWidth",sb="innerHeight",tb="outerWidth",ub="outerHeight",vb="screenLeft",wb="screenTop",xb="getBoundingClientRect",yb="translated",zb="orientation",Ab="mozPaintCount",Bb=1,Cb=2,Db=4,Eb=8,Fb=16,Gb=32,Hb=64,Ib=128,Jb=256,Kb=512,Lb=1024,Mb=2048,Nb=navigator.userAgent.toLowerCase(),Ob=/mac\sos\sx[;\s]/.test(Nb),Pb=!!pc(Q,"execScript",0),Qb=!Pb&&hc(Q.opera),Rb=/ applewebkit\//.test(Nb),Sb=Rb&&/chrome\//.test(Nb),Tb=Rb&&!Sb&&/safari\//.test(Nb),Ub=Tb&&/version\/3\./.test(Nb),Vb=Rb&&/ip(?:ad|od|hone)/.test(Nb),Wb=/ firefox\//.test(Nb),Xb=Wb&&gc(Q[Ab]),Yb=Wb&&(/firefox\/3/.test(Nb)||Xb),Zb=Wb&&gc(Q.mozInnerScreenX)&&!Xb,$b=Wb&&hc(Q.localStorage)&&!Zb,_b=Pb&&T>=8,ac=Pb&&T>=9,bc=navigator.platform=="Win32",cc=Pb&&R.hasFocus,dc=cc&&lc(Q),vc=!1,wc=500,xc=[1,5,60],yc=xc[c],zc=/^focus&(.*)/,Ac=/^blur&(.*)/,Bc=/&c[7,8,9]=[^&]+/g,Cc=tc(),Dc=.5,Ec=1e3,Fc=300,Gc=500,Hc=500,Ic=+(new Date),Jc="",Kc=".scorecardresearch.com",Lc="http"+(document.URL.charAt(4)=="s"?"s://sa":"://a"),Mc=Lc+Kc+"/e.flow?",Nc=Lc+Kc+"/rpc.flow?",Oc="2.1206.01",Pc=0,Qc=0,Rc=!0,Sc=!1,Tc=null,Uc=null,Vc=tc(),Wc=tc(),Xc=M+"_p",Yc=null,Zc=1,$c=!1,_c=0,ad=!0;return ud.prototype.process=function(a,b){function k(a,b){rc(d,[a,"=",b].join(""))}var c=this,d=tc(),e=tc(),f=c.a,g=c.labels,h=c.p,i=jb(Zc*100),j;g[N+"ec"]=b?f.c:++f.c;for(var l in g)ic(e[l])&&(k(l,g[l]),e[l]=!0);ns_.ax[pb+"Top"]&&k(N+"tb",ns_.ax[pb+"Top"]),i!=100&&k(N+"zm",i);var m=g[P],n=+(new Date)-f.s;return m!="show"&&f.s&&k(O+"vt",n),a||(f.s=+(new Date)),f.e&&(!a&&f.p&&(f.z=+(new Date)-f.p),f.x+=f.z,f.g+=f.d,k(O+"gt",f.z),k(O+"gd",f.d),k(N+"gg",f.x),k(N+"gc",f.g),a?(f.x-=f.z,f.g-=f.d):(f.d=f.z=0,f.p&&(f.p=+(new Date)))),f.k&&k(N+"ck",1),h.lastIndexOf("&")<h.length-1&&(h+="&"),j=h+d.join("&")+(ns_.ax_raw||vc?Vc.join("&"):""),adViz(j),j},Td(),{T:Ud,M:Vd,A:Wd,K:Xd,P:mc,L:nc,e:v,s:hd,v:ld,o:bd}}(),function(){function t(){for(var a=0,b=e.pm[g];a<b;a++)if(!e.pm[a][1])return e.pm[a][1]=!0,e.pm[a];return!1}var a=null,b=undefined,c=document,d=window,e=ns_.ax,f=function(){var a=[];for(var b in a)delete a[b];return a},g="length",h="SCRIPT",i="ax_cid",j=ns_.ad_m||(ns_.ad_m=f()),k="ns__t",l=/^\/(.*)\/([gim]*)$/,m=/^(\d+)[^\d]+(\d+)$/,n="=\\W?(\\d+[\\w%]*)\\W?",o=new RegExp(" width"+n,"i"),p=new RegExp(" height"+n,"i"),q=ns_.dom.getElementsByTagName,r=0,s=[".imrworldwide.com",".msads.net",".scorecardresearch.com",".vizu.com","adscale.nuggad.net","btr.sharethis.com","d.agkn.com","data.cmcore.com","dp.specificclick.net","int-t.pictela.net","log.go.com","pixel.adsafeprotected.com","rpt.anchorfree.net","s7.addthis.com","segment-pixel.invitemedia.com","srv.clickfuse.com","t.clickpayz.com","t.mookie1.com",/tag\.admeld\.com\/match/,"trk.tidaltv.com",/(transp?(arent)?|spacer?|empty|blank|dot|pixel|1x1|\/1)\.(gif|jpe?g|png)/,/ads\.motomedia\.nl\/w\/1\.0/,/ads\.rediff\.com.*blank\.gif/,/beacon/,/fw\.adsafeprotected\.com\/rfw\/st/,/sitemeter\.com\/meter\.asp/,/\.doubleclick\.net.*(([^\d]+1x1[^\d]+)|%2Factivity|%2Fimp|%2Fpixel)/,/\.serving-sys\.com.*Res\/Empty_Movie\.swf/,/^((https?:)?\/\/)?[oa]x-d?/];e.pm=e.pm||f(),e.pm[e.pm[g]]=[{i:ns_[i],c:ns_.ax_c3,v:ns_.ax_i,g:ns_.ax_g},!1];if(j._xpose)return!1;j._xpose=function(b){var d=f(),j,n=t()[0];b[i]=b[i]||n.i,b.ax_i=b.ax_i||n.v,b.ax_g=b.ax_g||n.g;var u=!0;ns_.ar.each(n.c.split(","),function(a){if(l.test(a)){var c=a.match(l),d=new RegExp(c[1],c[2]);if(d.test(b.c3))throw u=!1,0}else if(b.c3==a)throw u=!1,0});if(!b[i]||u)return;var v=b.__n;b.size&&(b.size=unescape(b.size));var w=b.__p.src,x=w.indexOf(k);x!=-1&&(x=w.substring(x+k[g]+1),b.ns__p=x.substring(0,x.indexOf("&")));if(ns_.axbk&&ns_.axbk[g]>0)ns_.ar.each(ns_.axbk,function(a){e.T(a,b)}),ns_.axbk=f();else if(b.size&&m.test(b.size)&&ns_.axph&&ns_.axph[g]>0)ns_.ar.each(ns_.axph,function(a){var d=b.size.match(m),f=c.getElementById(a),g=e.o(f),h={scrollWidth:d[1],scrollHeight:d[2],offsetTop:Math.ceil(g[1])-d[2],offsetLeft:Math.ceil(g[0]),nodeName:"DIV",nodeType:1,id:a,clientWidth:d[1],clientHeight:d[2],ph:f};e.T(h,b)}),ns_.axph=f();else if(b.ax_nb&&Number(b.ax_nb)!=NaN){var y=0,z=Number(b.ax_nb);try{while(v!=a&&y<=z)y<z&&(v=v.previousSibling),v.nodeType==1&&y++}catch(A){v=a}v!=a&&(v.nodeName=="A"&&ns_.ar.each(v.childNodes,function(a){if(a.nodeType==1)throw v=a,0}),e.T(v,b))}else if(b.ax_n&&(j=c.getElementById(b.ax_n)))e.T(j,b);else{var B=function(a){var b=c.createElement("a");b.href=a;for(var d=0,e=s[g];d<e;d++)if(typeof s[d]=="string"){if(b.hostname.substr(b.hostname[g]-s[d][g])==s[d])return!0}else if(s[d].test(a))return!0;return!1},C=function(c,d){var f=0,i=ns_.ax_distance||2,j=0;r++;try{while(c!=a&&(r>1||f<=i)){if(c&&c.nodeType==1&&c.nodeName!="NO"+h)if(c.nodeName==h)j++;else{f++;var k=ns_.ar.create(),l=!0;/(object|embed|img|video|iframe)/i.test(c.nodeName)&&(k[k[g]]=[c]),k[k[g]]=q("object",c),k[k[g]]=q("embed",c),k[k[g]]=q("iframe",c),k[k[g]]=q("img",c),k[k[g]]=q("video",c);for(var m=k[g],n=0;n<m;n++){var s=k[n];for(var t=s[g],u=0;u<t;u++){var v=s.item?s.item(u):s[u],w=v.outerHTML?v.outerHTML:(new XMLSerializer).serializeToString(v);if(o.test(w)){var x=Number(w.match(o)[1]);x==NaN||x>5?l=!0:l=!1}if(p.test(w)){var y=Number(w.match(p)[1]);y==NaN||y>5?l=!0:l=!1}if(l&&(!v.src||!B(v.src)))return v.id||(v.id="ns_ad"+b.ns__p),e.T(v,b);f--}}!l&&c=="IMG"&&f--}if(r>1||f<=i)c=d?c.nextSibling:c.previousSibling}}catch(z){}return j},D=C.call(this,v);isNaN(D)||setTimeout(function(a,c){return function(){isNaN(C.call(a,c))||isNaN(C.call(a,c,!0))||e.M(b)}}(this,v),1e3)}},j[j[g]]=j._xpose}();(function(){ns_=self.ns_||{};var a=document,b="length",c=ns_.bsl=ns_.bsl||{},d=c.cS=c.cS||{},e=c.cR=c.cR||[],f=",",g=/^\/(.*)\/$/,h=/^\/.*[^\/]$/,i=/^[^\/].*\/$/,j=function(){var a=[];for(var b in a)delete a[b];return a},k=ns_.ad_m||(ns_.ad_m=j()),l=function(b,c){var d=a.createElement("SCRIPT");d.type="text/javascript",d.src=b,d.async=!0,c.parentNode.insertBefore(d,c)},m=function(a){var c=[],d=!1;a=a.split(f);for(var e=0,j=a[b];e<j;e++){var k=a[e].replace(/\/[igm]*$/,"/");i.test(k)&&h.test(d)?(c[c[b]]=new RegExp((d+f+k).match(g)[1]),d=null):h.test(k)?d=k:h.test(d)?d=d+f+k:g.test(k)?c[c[b]]=new RegExp(k.match(g)[1]):(c[c[b]]=k,d=null)}return c},n=function(a){if(d[a])return d[a][0];for(var c=0,f=e[b];c<f;c++)if(e[c][0].test(a))return e[c][1][0]};try{if(ns_.bsl_lf&&ns_.bsl_lf!=c.l){var o=(c.l=ns_.bsl_lf).split(";");for(var p=0,q=o[b];p<q;p++){var r=o[p].split(":"),s=[r[0]],t=m(r[1]);for(var u=0,v=t[b];u<v;u++){cpg=t[u];if(typeof cpg=="string"&&cpg)d[cpg]=s;else if(!!cpg.exec){var w=!1;for(var x=0,y=e[b];x<y;x++)e[x]+""==cpg+""&&(e[x]=w=[cpg,s]);w||(e[e[b]]=[cpg,s])}}}}}catch(z){}if(k._bsl_lf)return;k._bsl_lf=function(a){var b=n(a.c3);if(3==Number(a.c1)&&a.c12||b){b&&(a.c12=b);var c="";for(var d in a)"__p__nax_iax_gax_a".indexOf(d)==-1&&(c=c+d+"="+a[d]+"&");setTimeout(function(a,b,c){return function(){b&&c("//ar.voicefive.com/bmx3/broker.pli?"+a,b)}}(c,a.__n,l),1e3)}},k[k[b]]=k._bsl_lf})();
function adViz(a){var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i));if(c.images)return m=new Image,m.onload=function(){},m.src=a,m;c.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">")}(function(){ns_=self.ns_||{};var a=document,b=a.location,c=function(){var a=[];for(var b in a)delete a[b];return a},d=self.encodeURIComponent?encodeURIComponent:escape,e=d(b&&b.href?b.href:a.URL),f=".scorecardresearch.com",g="http"+(e.charAt(4)=="s"?"s://sb":"://b")+f+"/p?",h=window,i=!1,j=!0,k="length",l="script",m="c2",n=ns_.ad_m||(ns_.ad_m=c());ns_.ad=ns_.ad||function(){var b=function(b,c){var d,c=c&&document.getElementById?document.getElementById(c):a;return c.getElementsByTagName?d=c.getElementsByTagName(b):b.toLowerCase()==l&&document.scripts?d=document.scripts:c.all&&c.all.tags&&(d=c.all.tags(b)),d||[]},c=function(a){if(a.indexOf("#")!=-1){var b={},c=a.substring(a.indexOf("#")+1).replace(/&amp;/gi,"&").split("&");for(var d=0,e=c[k];d<e;d++){var f=c[d].split("=");f[k]==2?b[f[0]]=f[1]:f[k]==1&&(b[f[0]]="")}return b.c1="3",b}return i},o=function(a){var b=a.substring(0,a.indexOf("#")),c=b.indexOf("/c2/");return c!=-1?(c=b.substring(c+4),c.substring(0,c.indexOf("/"))):i},p=function(a,b){for(var c in a)if(c!=m&&b[c]!=a[c])return i;return j},q=[],r=function(a){if(h!=h.top)try{h.top.location.href?a.ax_iframe=1:a.ax_iframe=2}catch(b){a.ax_iframe=2}var c=g;for(var d in a)"__nax_iax_gax_a".indexOf(d)==-1&&(c+="&"+d+"="+a[d]);ns_.ad_G&&(c+="&ns__m="+ns_.ad_G),c+="&ns_ce_sv=2.1206.01";var e="",f=[];for(var i in n)isNaN(i)&&f[i]==undefined&&(e+=i.substr(i.charAt(0)=="_"?1:0)+",");e&&(c+="&ns_ce_mod="+e.substr(0,e[k]-1)),a.__p=adViz(c);if(!ns_.ad_G){var j=a.__p.src,l=j.indexOf("ns__t");l!=-1&&(l=j.substring(l+6),ns_.ad_G=l.substring(0,l.indexOf("&")))}for(var m=0,o=n[k];m<o;m++)n[m](a)},s=function(a){if(!a)return i;var b=i;for(var c=0,d=q[k];c<d;c++)p(q[c],a)&&(b=j);if(!b)return q[q[k]]=a,r(a),j},t=function(a){if(!a||!a.src||a.src.indexOf("#")==-1)return i;var b=c(a.src);if((b.c2=o(a.src))&&b.c3)return b.__n=a,b},u=function(a,b){var c=0;for(var d=0,e=b[k],f=b[0];d<e;++d&&(f=b[d]))p(a,f)&&c++;return c},v=0,x=function(){if(!document.layers){var c=b(l),g=[];if(c[k]<=v)return i;v=c[k];for(var h=0,m=c[k];h<m;h++){var n=t(c[h]);n&&(g[g[k]]=n)}for(var h=0,m=g[k],n=g[0];h<m;++h&&(n=g[h])){var o=u(n,q),p=u(n,g);if(p>o&&s(n))return j}}else a.write(["<","p","><","img",' src="http',e.charAt(4)=="s"?"s://sb":"://b",f,"/b?c1=3&c2=ad_fallback&c7=",e,"&c8=",d(a.title),"&c9=",d(a.referrer),'" alt="*"',"><","/p",">"].join(""))};return{tag:s,fire:x}}(),ns_.ad.fire()})();