(function(){/*

SPF
(c) 2012-2017 Google Inc.
https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
function l(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function aa(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function n(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var p=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ba(){};function q(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function ca(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function da(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function ea(a,b){if(a.filter)return a.filter(b,void 0);var c=[];q(a,function(a,e,f){b.call(void 0,a,e,f)&&c.push(a)});return c}function fa(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;q(a,function(a,e,f){c[e]=b.call(void 0,a,e,f)});return c}function r(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function t(a,b){return v[a]=b}var v=window._spf_state||{};window._spf_state=v;function w(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function ha(a){return"[object String]"==Object.prototype.toString.call(a)}var ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function x(a,b){a=a.split(b);var c=1==a.length;return[a[0],c?"":b,c?"":a.slice(1).join(b)]}function ja(){return"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()};function ka(a){a.data&&ha(a.data)&&0==a.data.lastIndexOf("spf:",0)&&la(a.data.substring(4))}function la(a){var b=y[a];b&&(delete y[a],b())}function ma(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}function na(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}
var oa=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;ma(a);window.postMessage("","*");na(a);return b}(),y={};"async-defers"in v||t("async-defers",y);y=v["async-defers"];oa&&("async-listener"in v&&na(v["async-listener"]),ma(ka),t("async-listener",ka));var pa={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},z={};"config"in v||t("config",z);z=v.config;function qa(a){var b=A();a in b&&delete b[a]}function ra(){var a=A();for(b in a)sa(a[b])||delete a[b];a=A();var b=parseInt(z["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e;for(e in a)if(a[e].count<d){var f=e;d=a[e].count}delete a[f]}}function sa(a){if(!(a&&"data"in a))return!1;var b=a.life;b=isNaN(b)?Infinity:b;a=a.time;return p()-a<b}function ta(a){var b=parseInt(v["cache-counter"],10)||0;b++;t("cache-counter",b);a.count=b}
function A(a){return!a&&"cache-storage"in v?v["cache-storage"]:t("cache-storage",a||{})};function ua(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function va(a,b){if(b){if(a.classList)return a.classList.contains(b);a=ua(a);return da(a,function(a){return a==b})}return!1}function B(a,b){b&&(a.classList?a.classList.add(b):va(a,b)||(a.className+=" "+b))}function C(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=ua(a);c=ea(c,function(a){return a!=b});a.className=c.join(" ")}};function wa(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+ja(),a)};function xa(a,b){b=b||document;return b.querySelectorAll?b.querySelectorAll(a):[]}function ya(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function za(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=l(c,null,d));b.body.appendChild(d);return d};function Aa(a,b,c){var d=null,e=window.history.state;if(e){d={};for(var f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];Ba(!0,a,d,c)}function Ba(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=p();t("history-timestamp",e);c["spf-timestamp"]=e;if(a)Ca(c,b);else if(a=Da().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");t("history-url",b);d&&(d=v["history-callback"])&&d(b,c)}}
function Ea(a){var b=window.location.href;if(v["history-ignore-pop"])t("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==v["history-url"]?(t("history-timestamp",c),Ca(a,b)):(a["spf-back"]=c<parseInt(v["history-timestamp"],10),a["spf-current"]=v["history-url"],t("history-timestamp",c),t("history-url",b),(c=v["history-callback"])&&c(b,a))}}
function Ca(a,b){var c=Da().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function Da(){var a=document.getElementById("history-iframe");a||(a=za("history-iframe"));return a};function Fa(a,b){a&&b&&(a in E||(E[a]=[]),E[a].push(b))}function Ha(a,b){a in E&&b&&ca(E[a],function(a,d,e){return a==b?(e[d]=null,!1):!0})}function Ia(a){a in E&&q(E[a],function(a,c,d){d[c]=null;a&&a()})}var E={};"ps-s"in v||t("ps-s",E);E=v["ps-s"];function F(a,b,c){var d=G[a];return a&&b?(d||(d=G[a]={items:[],o:0,m:0,A:1}),d.items.push({C:b,delay:c||0})):d&&d.items.length||0}function H(a,b){var c=G[a];if(c){var d=!!c.o||!!c.m;0<c.A&&(b||!d)&&Ja(a,b)}}function I(a){(a=G[a])&&a.A--}function J(a,b){var c=G[a];c&&(c.A++,H(a,b))}function Ka(a){var b=G[a];b&&(La(b),delete G[a])}
function Ja(a,b){var c=G[a];if(c&&(La(c),0<c.A&&c.items.length)){var d=c.items[0];d&&(a=l(function(a,b){b();a()},null,l(Ja,null,a,b)),b?(c.items.shift(),a(d.C)):Ma(c,d,a))}}function Ma(a,b,c){b.delay?(c=l(c,null,ba),a.m=setTimeout(c,b.delay),b.delay=0):(a.items.shift(),c=l(c,null,b.C),(b=(b=z["advanced-task-scheduler"])&&b.addTask)?a.o=b(c):a.m=setTimeout(c,0))}function La(a){if(a.o){var b=z["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.o);a.o=0}a.m&&(clearTimeout(a.m),a.m=0)}var G={};function K(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,username:b.username,password:b.password};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function L(a,b){a=K(a);return b?a.href:x(a.href,"#")[0]}
function Na(a,b){var c=x(a,"#");a=c[0];q(b,function(b){a=a.replace(new RegExp("([?&])"+b+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(a,b){return"?"==b?b:""})});w(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function Oa(a){var b=z["advanced-persistent-parameters"]||"",c=x(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};function Pa(a,b,c,d){var e="js"==a;b=M(a,b);var f=c||"^"+b,g=N(a,f),k;c&&(k=O[N(a,c)])&&b!=k&&(n(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:k}),e=k,delete O[N(a,c)],e&&delete P[N(a,e)],delete E[N(a,c)],Fa(g,l(Qa,null,a,c,k)));if((e=P[N(a,b)])&&f!=e){delete O[N(a,e)];delete P[N(a,b)];var h=N(a,e);h&&g&&h in E&&(E[g]=(E[g]||[]).concat(E[h]),delete E[h])}P[N(a,b)]=f;O[N(a,f)]=b;Fa(g,d);d=l(Ra,null,a);Q[N(a,b,void 0)]?(e&&f!=e&&(a=Sa(a,b))&&a.setAttribute("name",c||""),d()):(a=Ta(a,b,d,void 0,
void 0,k))&&c&&a.setAttribute("name",c)}function Ua(a,b){var c=O[N(a,b)];delete O[N(a,b)];c&&delete P[N(a,c)];delete E[N(a,b)];Qa(a,b,c)}function Qa(a,b,c){c&&(n("js"==a?"spfjsunload":"spfcssunload",{name:b,url:c}),Va(a,c))}function Ra(a){var b=N(a,""),c;for(c in E)0==c.indexOf(b)&&ca(c.substring(b.length).split("|"),l(Wa,null,a))&&Ia(c)}
function Ta(a,b,c,d,e,f){function g(){Q[N(a,b,e)]&&(Q[N(a,b,e)]=2);k&&m&&m.parentNode&&h==document&&m.parentNode.removeChild(m);c&&setTimeout(c,0);return null}var k="js"==a;b=M(a,b);Q[N(a,b,e)]=1;var h=d||document,m=h.createElement(k?"script":"link");if(!b)return g();d=R(b);m.className=N(a,d);"onload"in m?m.onerror=m.onload=g:m.onreadystatechange=function(){/^c|loade/.test(m.readyState)&&g()};d=h.getElementsByTagName("head")[0]||h.body;k?(m.async=!0,m.src=b,d.insertBefore(m,d.firstChild)):(m.rel=
"stylesheet",m.href=b,(f=f?Sa(a,f,d):null)?d.insertBefore(m,f):d.appendChild(m));return m}function Va(a,b){b=M(a,b);var c=Sa(a,b,void 0);c&&c.parentNode&&c.parentNode.removeChild(c);delete Q[N(a,b)]}function Sa(a,b,c){b=R(b);return xa("."+N(a,b),c)[0]}
function Xa(a){var b="js"==a,c=[];q(xa(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href;e=M(a,e);if(!Q[N(a,e,void 0)]){Q[N(a,e,void 0)]=2;var f=R(e);B(d,N(a,f));if(f=d.getAttribute("name"))P[N(a,e)]=f,O[N(a,f)]=e;c.push(d)}})}
function Ya(a,b,c){if(b&&(b=M(a,b),c||!Q[N(a,b,void 0)]))if(c&&"img"==a)Za(b);else{var d=R(b),e=N(a,d),f=N(a,"prefetch");d=document.getElementById(f);if(!d)d=za(f,null,function(a){a.title=f;H(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=l($a,null,d,a,b,e,f);d.title?a():F(f,a)}}
function $a(a,b,c,d,e){var f="js"==b,g="css"==b;a=a.contentWindow.document;var k=a.getElementById(d);k&&k.parentNode.removeChild(k);f?(k=a.createElement("object"),ab?a.createElement("script").src=c:k.data=c,k.id=d,a.body.appendChild(k)):g?(k=Ta(b,c,null,a,e),k.id=d):(k=a.createElement("img"),ab&&(c=c+"#"+p()),k.src=c,k.id=d,a.body.appendChild(k))}function Za(a){var b=new Image;ab&&(a=a+"#"+p());b.src=a}
function bb(a,b,c){var d="js"==a,e=O[N(a,c)],f=b.replace(/\s/g,"");f=f||"";for(var g=0,k=0,h=f.length;k<h;++k)g=31*g+f.charCodeAt(k),g%=4294967296;f="hash-"+g;O[N(a,c)]=f;!cb(a,f)&&(b=db(a,b))&&(Q[N(a,f,void 0)]=2,b&&!d&&(d=R(f),b.className=N(a,d),b.setAttribute("name",c)),(e=e&&e[0])&&Va(a,e))}
function db(a,b){b=ia(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body;"js"==a?(a=document.createElement("script"),a.text=b,c.appendChild(a),c.removeChild(a)):(a=document.createElement("style"),c.appendChild(a),"styleSheet"in a?a.styleSheet.cssText=b:a.appendChild(document.createTextNode(b)));return a}
function M(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=v[c]||"";if(ha(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);"img"!=a&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=L(b)}else 0==d&&(b=L(b))}return b}function N(a,b,c){return a+"-"+b+(c?"-"+c:"")}function R(a){return a?String(a).replace(/[^\w]/g,""):""}function cb(a,b){a=Q[N(a,b,void 0)];return""==b||2==a}function Wa(a,b){b=O[N(a,b)];return void 0!=b&&cb(a,b)}var Q={},P={},O={},ab=-1!=navigator.userAgent.indexOf(" Trident/");
"rsrc-s"in v||t("rsrc-s",Q);Q=v["rsrc-s"];"rsrc-n"in v||t("rsrc-n",P);P=v["rsrc-n"];"rsrc-u"in v||t("rsrc-u",O);O=v["rsrc-u"];function eb(a){a=r(a);q(a,function(a){Ya("img",a,!0)})};function fb(a,b,c){Pa("js",a,b,c)}function gb(a){Ua("js",a)}function hb(a,b){Ta("js",a,b)}function ib(a){a=r(a);q(a,function(a){Ya("js",a)})}function jb(a,b,c){a=r(a);a=ea(a,function(a){return!!a});var d=[];q(a,function(a){void 0==O[N("js",a)]&&d.push(a)});var e=!d.length;if(b){var f=ca(a,l(Wa,null,"js"));e&&f?b():(a=N("js",a.sort().join("|")),Fa(a,b))}c&&!e&&c(d)}function kb(a,b){a=r(a);q(a,function(a){if(a){var b=S[a]||a;b=M("js",b);var c=O[N("js",a)];c&&b!=c&&lb(a)}});jb(a,b,mb)}
function mb(a){q(a,function(a){function b(){fb(e,a)}var d=T[a],e=S[a]||a;d?kb(d,b):b()})}function lb(a){a=r(a);q(a,function(a){var b=[],d;for(d in T){var e=T[d];e=r(e);q(e,function(c){c==a&&b.push(d)})}q(b,function(a){lb(a)});gb(a)})}function nb(a,b){bb("js",a,b)}function ob(a){db("js",a)}var T={};"js-d"in v||t("js-d",T);T=v["js-d"];var S={};"js-u"in v||t("js-u",S);S=v["js-u"];function pb(a,b,c){Pa("css",a,b,c)}function qb(a,b){Ta("css",a,b)}function rb(a){a=r(a);q(a,function(a){Ya("css",a)})};function sb(a,b,c){if(b){b=[];var d=0;c&&(a+="\r\n");var e=a.indexOf("[\r\n",d);for(-1<e&&(d=e+3);-1<(e=a.indexOf(",\r\n",d));){var f=ia(a.substring(d,e));d=e+3;f&&b.push(JSON.parse(f))}e=a.indexOf("]\r\n",d);-1<e&&(f=ia(a.substring(d,e)),d=e+3,f&&b.push(JSON.parse(f)));f="";a.length>d&&(f=a.substring(d),c&&w(f,"\r\n")&&(f=f.substring(0,f.length-2)));b=tb(b);return{w:b,g:f}}a=JSON.parse(a);b=tb(r(a));return{w:b,g:""}}
function U(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,g=c&&!!c.position,k=c&&c.j,h=b.name||"",m="process "+L(a),D=!z["experimental-process-async"];var u=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&L(b.url)!=L(window.location.href)&&Aa(b.url+window.location.hash);b.head&&(u=l(function(a,b){a=V(a);ub(a);vb(a);I(m);wb(a,function(){b.spfProcessHead=p();J(m,D)})},null,b.head,b.timing),u=F(m,u));b.attr&&(u=l(function(a,b){for(var c in a){var d=document.getElementById(c);
if(d){var e=void 0,f=a[c];for(e in f){var g=f[e];"class"==e?d.className=g:"style"==e?d.style.cssText=g:(d.setAttribute(e,g),"value"==e&&(d[e]=g))}}}b.spfProcessAttr=p()},null,b.attr,b.timing),u=F(m,u));var Z=b.body||{},wc=u,Ga;for(Ga in Z)u=l(function(a,b){if(a=document.getElementById(a)){!e||g||k||(t("nav-scroll-position",null),t("nav-scroll-url",null),window.scroll(0,0),k=!0,c&&(c.j=!0));var d=V(b);vb(d);var u=function(){I(m);wb(d,function(){J(m,D)})};b=z["animation-class"];xb&&va(a,b)?(a=new yb(a,
d.html,b,h,!!f),I(m),H(a.key,!0),F(a.key,l(zb,null,a),0),F(a.key,l(Ab,null,a),17),F(a.key,l(Bb,null,a),a.duration),F(a.key,l(function(){u();J(m,D)},null),0),H(a.key)):(b=z["experimental-html-handler"])?(I(m),b(d.html,a,function(){u();J(m,D)})):(a.innerHTML=d.html,u())}},null,Ga,Z[Ga],b.timing),u=F(m,u);Z=u-wc;b.foot?(u=l(function(a,b,c){c&&(b.spfProcessBody=p());a=V(a);vb(a);I(m);wb(a,function(){b.spfProcessFoot=p();J(m,D)})},null,b.foot,b.timing,Z),u=F(m,u)):Z&&(u=l(function(a){a.spfProcessBody=
p()},null,b.timing),u=F(m,u));d&&(u=F(m,l(d,null,a,b)));H(m,D)}function Cb(a,b,c,d){c="preprocess "+L(a);if(b.head){var e=l(function(a){a=V(a);ub(a);Db(a);Eb(a)},null,b.head);F(c,e)}var f=b.body||{},g;for(g in f)f[g]&&(e=l(function(a,b){a=V(b);Db(a);Eb(a)},null,g,f[g]),F(c,e));b.foot&&(e=l(function(a){a=V(a);Db(a);Eb(a)},null,b.foot),F(c,e));d&&F(c,l(d,null,a,b));H(c)}
function zb(a){B(a.a,a.s);B(a.a,a.G);B(a.a,a.J);B(a.a,a.H);B(a.a,a.I);a.l=document.createElement("div");a.l.className=a.R;var b=a.a,c=a.l;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.f=document.createElement("div");a.f.className=a.P;a.f.innerHTML=a.O;a.reverse?(b=a.l,b.parentNode.insertBefore(a.f,b)):(b=a.l,b.parentNode.insertBefore(a.f,b.nextSibling))}function Ab(a){C(a.a,a.H);C(a.a,a.I);B(a.a,a.D);B(a.a,a.F)}
function Bb(a){a.a.removeChild(a.l);var b=a.f,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}C(a.a,a.D);C(a.a,a.F);C(a.a,a.G);C(a.a,a.J);C(a.a,a.s)}function tb(a){q(r(a),function(a){if(a){a.head&&(a.head=V(a.head));if(a.body)for(var b in a.body)a.body[b]=V(a.body[b]);a.foot&&(a.foot=V(a.foot))}});return a}
function V(a){var b=new Fb;if(!a)return b;if(!ha(a))return a.scripts&&q(a.scripts,function(a){b.scripts.push({url:a.url||"",text:a.text||"",name:a.name||"",async:a.async||!1})}),a.styles&&q(a.styles,function(a){b.styles.push({url:a.url||"",text:a.text||"",name:a.name||""})}),a.links&&q(a.links,function(a){"spf-preconnect"==a.rel&&b.links.push({url:a.url||"",rel:a.rel||""})}),b.html=a.html||"",b;a=a.replace(Gb,function(a,d,e,f){if("script"==d){d=(d=e.match(Hb))?d[1]:"";var c=e.match(Ib);c=c?c[1]:"";
var k=Jb.test(e);e=Kb.exec(e);return(e=!e||-1!=e[1].indexOf("/javascript")||-1!=e[1].indexOf("/x-javascript")||-1!=e[1].indexOf("/ecmascript"))?(b.scripts.push({url:c,text:f,name:d,async:k}),""):a}return"style"==d&&(d=(d=e.match(Hb))?d[1]:"",e=Kb.exec(e),e=!e||-1!=e[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:d}),""):a});a=a.replace(Lb,function(a,d){var c=d.match(Mb);c=c?c[1]:"";return"stylesheet"==c?(c=(c=d.match(Hb))?c[1]:"",d=(d=d.match(Nb))?d[1]:"",b.styles.push({url:d,text:"",
name:c}),""):"spf-preconnect"==c?(d=(d=d.match(Nb))?d[1]:"",b.links.push({url:d,rel:c}),""):a});b.html=a;return b}function wb(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?l(fb,null,e.url,e.name):l(hb,null,e.url):e.text&&(f=e.name?l(nb,null,e.text,e.name):l(ob,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}
function Eb(a){0>=a.scripts.length||(a=fa(a.scripts,function(a){return a.url}),ib(a))}function vb(a){0>=a.styles.length||q(a.styles,function(a){a.url?a.name?pb(a.url,a.name):qb(a.url):a.text&&(a.name?bb("css",a.text,a.name):db("css",a.text))})}function Db(a){0>=a.styles.length||(a=fa(a.styles,function(a){return a.url}),rb(a))}function ub(a){0>=a.links.length||(a=fa(a.links,function(a){return"spf-preconnect"==a.rel?a.url:""}),eb(a))}
function yb(a,b,c,d,e){var f=parseInt(z["animation-duration"],10);this.a=a;this.O=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+ja()))||"";f=parseInt(v.uid,10)||0;f++;this.key=a["spf-key"]||(a["spf-key"]=""+t("uid",f));this.G=b&&c+"-from-"+b;this.J=d&&c+"-to-"+d;this.l=null;this.R=c+"-old";this.f=null;this.P=c+"-new";this.s=c+(e?"-reverse":"-forward");this.H=c+"-start";this.I=this.s+"-start";this.D=c+"-end";this.F=this.s+"-end"}
function Fb(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var xb=function(){var a=document.createElement("div");return"transition"in a.style?!0:da(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),Lb=/\x3clink([\s\S]*?)\x3e/ig,Gb=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,Jb=/(?:\s|^)async(?:\s|=|$)/i,Nb=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,Hb=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,Mb=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,Ib=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,Kb=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i;function Ob(a,b,c,d){var e=d||{},f=!1,g=0,k,h=new XMLHttpRequest;h.open(a,b,!0);h.timing={};var m=h.abort;h.abort=function(){clearTimeout(k);h.onreadystatechange=null;m.call(h)};h.onreadystatechange=function(){var a=h.timing;if(2==h.readyState){a.responseStart=a.responseStart||p();if("json"==h.responseType)f=!1;else if(-1<(h.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{a=h.getResponseHeader("X-Firefox-Spdy");var c=window.chrome&&chrome.loadTimes&&chrome.loadTimes();
c=c&&c.wasFetchedViaSpdy;f=!(!a&&!c)}e.L&&e.L(h)}else 3==h.readyState?f&&e.u&&(a=h.responseText.substring(g),g=h.responseText.length,e.u(h,a)):4==h.readyState&&(a.responseEnd=a.responseEnd||p(),window.performance&&window.performance.getEntriesByName&&(h.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.u&&h.responseText.length>g&&(a=h.responseText.substring(g),g=h.responseText.length,e.u(h,a)),clearTimeout(k),e.K&&e.K(h))};"responseType"in h&&"json"==e.responseType&&(h.responseType=
"json");e.withCredentials&&(h.withCredentials=e.withCredentials);d="FormData"in window&&c instanceof FormData;a="POST"==a&&!d;if(e.headers)for(var D in e.headers)h.setRequestHeader(D,e.headers[D]),"content-type"==D.toLowerCase()&&(a=!1);a&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.N&&(k=setTimeout(function(){h.abort();e.M&&e.M(h)},e.N));h.timing.fetchStart=p();h.send(c);return h};function Pb(a,b){b=b||{};b.method=((b.method||"GET")+"").toUpperCase();b.type=b.type||"request";var c=a,d=z["url-identifier"]||"";if(d){d=d.replace("__type__",b.type||"");var e=x(c,"#"),f=x(e[0],"?");c=f[0];var g=f[1];f=f[2];var k=e[1];e=e[2];if(0==d.lastIndexOf("?",0))g&&(d=d.replace("?","&")),f+=d;else{if(0==d.lastIndexOf(".",0))if(w(c,"/"))d="index"+d;else{var h=c.lastIndexOf(".");-1<h&&(c=c.substring(0,h))}else w(c,"/")&&0==d.lastIndexOf("/",0)&&(d=d.substring(1));c+=d}c=c+g+f+k+e}d=L(c);c={};
c.spfUrl=d;c.startTime=p();c.fetchStart=c.startTime;g=Qb(a,b.current,null,b.type,!1);g=Rb(g,b.current);c.spfPrefetched=!!g&&"prefetch"==g.type;c.spfCached=!!g;if(g){a=l(Sb,null,a,b,c,g.key,g.response);b=window._spf_state=window._spf_state||{};var m=parseInt(b.uid,10)||0;m++;b=b.uid=m;y[b]=a;oa?window.postMessage("spf:"+b,"*"):window.setTimeout(l(la,null,b),0);return null}g={};if(f=z["request-headers"])for(m in f)k=f[m],g[m]=null==k?"":String(k);if(b.headers)for(m in b.headers)k=b.headers[m],g[m]=
null==k?"":String(k);null!=b.c&&(g["X-SPF-Referer"]=b.c);null!=b.current&&(g["X-SPF-Previous"]=b.current);if(m=z["advanced-header-identifier"])g["X-SPF-Request"]=m.replace("__type__",b.type),g.Accept="application/json";m=new Tb;f=l(Ub,null,a,b,c,m);a={headers:g,N:z["request-timeout"],L:l(Vb,null,a,m),u:l(Wb,null,a,b,c,m),K:f,M:f};b.withCredentials&&(a.withCredentials=b.withCredentials);z["advanced-response-type-json"]&&(a.responseType="json");return"POST"==b.method?Ob("POST",d,b.B,a):Ob("GET",d,null,
a)}function Sb(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=p();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,z["cache-unified"]||(qa(d),f=!0));b.i&&"multipart"==e.type&&q(e.parts,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,d)});Xb(a,b,c,e,f)}function Vb(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.f=-1!=a.toLowerCase().indexOf("multipart")}
function Wb(a,b,c,d,e,f,g){if(d.f){f=d.g+f;try{var k=sb(f,!0,g)}catch(h){e.abort();b.h&&b.h(a,h,e);return}b.i&&q(k.w,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,d)});d.a=d.a.concat(k.w);d.g=k.g}}
function Ub(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var g in e.resourceTiming)c[g]=e.resourceTiming[g];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var k in e.resourceTiming)g=e.resourceTiming[k],void 0!==g&&(w(k,"Start")||w(k,"End")||"startTime"==k)&&(c[k]=f+Math.round(g));"load"!=b.type&&(c.navigationStart=c.startTime);d.a.length&&
(d.g=ia(d.g),d.g&&Wb(a,b,c,d,e,"",!0));if("json"==e.responseType){if(!e.response){b.h&&b.h(a,Error("JSON response parsing failed"),e);return}var h=tb(r(e.response))}else try{h=sb(e.responseText).w}catch(D){b.h&&b.h(a,D,e);return}if(b.i&&1<h.length)for(d=d.a.length;d<h.length;d++)e=h[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.i(a,e);if(1<h.length){var m;q(h,function(a){a.cacheType&&(m=a.cacheType)});h={parts:h,type:"multipart"};m&&(h.cacheType=
m)}else h=1==h.length?h[0]:{};Xb(a,b,c,h,!0)}function Xb(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=Qb(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},g=parseInt(z["cache-lifetime"],10),k=parseInt(z["cache-max"],10);0>=g||0>=k||(k=A(),f={data:f,life:g,time:p(),count:0},ta(f),k[e]=f,setTimeout(ra,1E3))}d.timing=c;b.v&&b.v(a,d)}
function Qb(a,b,c,d,e){a=L(a);var f;z["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+K(b).pathname);return f||""}
function Rb(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+K(b).pathname));c.push(a);var d=null;da(c,function(a){a:{var b=A();if(a in b){b=b[a];if(sa(b)){ta(b);b=b.data;break a}qa(a)}b=void 0}b&&(d={key:a,response:b.response,type:b.type});return!!b});return d}function Tb(){this.f=!1;this.g="";this.a=[]};function Yb(a){return ya(a,function(a){return va(a,z["link-class"])})}function Zb(a){return ya(a,function(a){return va(a,z["nolink-class"])})}function $b(a,b){return ya(a,function(a){return a.href&&"img"!=a.tagName.toLowerCase()},b)}function ac(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=Yb(a.target);return!b||z["nolink-class"]&&Zb(a.target)?null:(a=$b(a.target,b))?a.href:null}function bc(a){return K(a).origin!=K(window.location.href).origin?!1:!0}
function cc(){if(!v["nav-init"])return!1;var a=parseInt(v["nav-counter"],10)||0;a++;var b=parseInt(z["navigate-limit"],10);b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(v["nav-init-time"],10);a--;a=p()-a;b=parseInt(z["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function dc(a,b){b=b||window.location.href;return-1!=a.indexOf("#")&&(a=L(a),b=L(b),a==b)?!1:!0}
function ec(a){if(!a.defaultPrevented){var b=ac(a);b&&(b=Oa(b),bc(b)&&cc()&&n("spfclick",{url:b,target:a.target})&&(fc(b,{},new gc),a.preventDefault()))}}function hc(a){var b=ac(a);b&&setTimeout(function(){ic(b)},0)}function jc(){var a=v["nav-scroll-position"]||null;var b=v["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;kc();a&&window.scroll.apply(null,a)}
function lc(a,b){b=new gc({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],c:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])});var c=z["reload-identifier"];c&&(a=Na(a,[c]));bc(a)?cc()?n("spfhistory",{url:a,referer:b.c,previous:b.current})&&(b.position&&(t("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),t("nav-scroll-url",window.location.href)),fc(a,{},b)):W(a,"1"):W(a,"9")}
function fc(a,b,c){mc();if(dc(a,c.current))if(nc(a,c.c,c.current,b)){t("nav-counter",(parseInt(v["nav-counter"],10)||0)+1);oc(a);var d=L(a),e="preprocess "+L(d);for(f in G)e!=f&&0==f.lastIndexOf("preprocess",0)&&Ka(f);d=pc()[d];t("nav-request",d);t("nav-promote",null);t("nav-promote-time",null);if(d&&4!=d.readyState)d="preprocess "+L(a),e="promote "+L(a),t("nav-promote",a),t("nav-promote-time",p()),Ka(d),H(e,!0),c.history||qc(a,c.c,l(X,null,b));else{d=l(X,null,b);e=l(rc,null,b,c);var f=l(sc,null,
b,c);z["advanced-navigate-persist-timing"]||tc();c.type="navigate";c.history&&(c.type+=c.reverse?"-back":"-forward");b=Pb(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,B:b.postData,type:c.type,current:c.current,c:c.c});t("nav-request",b);c.history||qc(a,c.c,d)}}else W(a,"2");else c.history||qc(a,c.c,l(X,null,b)),uc(a,c)}
function uc(a,b){if(b.position)kc(),window.scroll.apply(null,b.position),b.j=!0;else if(a=x(a,"#"),a[2]){if(a=document.getElementById(a[2]))kc(),a.scrollIntoView(),b.j=!0}else b.j||(kc(),window.scroll(0,0),b.j=!0)}function qc(a,b,c){try{Aa(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),L(a,!0)!=window.location.href&&Ba(!1,a,{"spf-referer":b},void 0)}catch(d){mc(),c(a,d)}}function X(a,b,c,d){t("nav-request",null);vc(b,c,a,void 0,d)&&W(b,"10",c)}
function rc(a,b,c,d){if(xc(c,d,a))if(d.reload)W(c,"5");else if(d.redirect)yc(a,d.redirect);else try{U(c,d,b,function(){zc(c,d,a)})}catch(e){X(a,c,e)}else W(c,"3")}
function sc(a,b,c,d){t("nav-request",null);if(v["nav-promote"]==b.b){var e=d.timing||{};e.navigationStart=v["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!Ac(c,d,a)){W(c,"4");return}if(d.reload){W(c,"5");return}if(d.redirect){yc(a,d.redirect);return}}try{U(c,f?{}:d,b,function(){var e=d.name||"";f&&q(d.parts,function(a){e=a.name||e});wa(e);uc(c,b);Bc(c,d,a)})}catch(g){X(a,c,g)}}function yc(a,b){try{b+=window.location.hash,Aa(b,null,!0)}catch(c){mc(),X(a,b,c)}}
function mc(){var a=v["nav-request"];a&&(a.abort(),t("nav-request",null))}function Y(a,b){if(a){var c=Array.prototype.slice.call(arguments);c[0]=a;c=aa.apply(null,c)}return!1!==c}
function W(a,b,c){c=c?c.message:"";mc();oc();var d=b;c&&(d+=" Message: "+c);n("spfreload",{url:a,reason:d});var e=window.location.href;z["experimental-remove-history"]&&e==a&&(t("history-ignore-pop",!0),window.history.back());setTimeout(function(){var c=z["reload-identifier"];if(c){var d={};d[c]=encodeURIComponent(b);c=a;var k=x(c,"#");c=k[0];var h=-1!=c.indexOf("?")?"&":"?",m;for(m in d)c+=h+m,d[m]&&(c+="="+d[m]),h="&";a=c+k[1]+k[2]}window.location.href=a;dc(a,e)||window.location.reload()},0)}
function Cc(a,b,c){c.b=c.b||a;if(nc(a,void 0,void 0,b,!0)){var d=l(Dc,null,!1,b,c),e=l(Ec,null,!1,b,c),f=l(Fc,null,!1,b,c);c.type="load";Pb(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,B:b.postData,type:c.type,withCredentials:b.withCredentials})}}function ic(a,b){a=Oa(a);Gc(a,b||{},new gc)}
function Gc(a,b,c){c.b=c.b||a;if(nc(a,void 0,void 0,b,!0)){var d=l(Dc,null,!0,b,c),e=l(Ec,null,!0,b,c),f=l(Fc,null,!0,b,c);c.type="prefetch";b=Pb(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,B:b.postData,type:c.type,current:c.current});a=L(a);pc()[a]=b}}function Dc(a,b,c,d,e){a&&Hc(d);a&&v["nav-promote"]==c.b?X(b,d,e):vc(d,e,b,!0)}
function Ec(a,b,c,d,e){if(xc(d,e,b,!0)){if(e.reload){if(!a)return;if(v["nav-promote"]==c.b){W(d,"5");return}}if(e.redirect)Ic(a,b,c,e.redirect);else{if(a){var f=l(rc,null,b,c,d,e),g="promote "+L(c.b);F(g,f);if(v["nav-promote"]==c.b){H(g,!0);return}}(a?Cb:U)(d,e,c,function(){zc(d,e,b,!0)})}}}
function Fc(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!Ac(d,e,b,!0)){W(d,"4");return}if(e.reload){if(!a)return;if(v["nav-promote"]==c.b){W(d,"5");return}}if(e.redirect){Ic(a,b,c,e.redirect);return}}var g="promote "+L(c.b);if(a){Hc(d);if(v["nav-promote"]==c.b){F(g,l(sc,null,b,c,d,e));H(g,!0);return}Ka(g)}g=a?Cb:U;try{g(d,f?{}:e,c,function(){Bc(d,e,b,!0)})}catch(k){Dc(a,b,c,d,k)}}
function Ic(a,b,c,d){a=a?Gc:Cc;var e={};q("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "),function(a){e[a]=b[a]});a(d,e,c)}function vc(a,b,c,d,e){a={url:a,err:b,xhr:e};(c=Y((c||{}).onError,a))&&!d&&(c=n("spferror",a));return c}function nc(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Y((d||{}).onRequest,a))&&!e&&(d=n("spfrequest",a));return d}function xc(a,b,c,d){a={url:a,part:b};(c=Y((c||{}).onPartProcess,a))&&!d&&(c=n("spfpartprocess",a));return c}
function zc(a,b,c,d){a={url:a,part:b};(c=Y((c||{}).onPartDone,a))&&!d&&n("spfpartdone",a)}function Ac(a,b,c,d){a={url:a,response:b};(c=Y((c||{}).onProcess,a))&&!d&&(c=n("spfprocess",a));return c}function Bc(a,b,c,d){a={url:a,response:b};(c=Y((c||{}).onDone,a))&&!d&&n("spfdone",a)}function Hc(a){a=L(a);var b=pc(),c=b[a];c&&c.abort();delete b[a]}function oc(a){var b=pc();a=a&&L(a);for(var c in b)a!=c&&Hc(c)}
var tc,Jc=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);tc=Jc?l(Jc,window.performance):ba;function pc(){return"nav-prefetches"in v?v["nav-prefetches"]:t("nav-prefetches",{})}function kc(){t("nav-scroll-position",null);t("nav-scroll-url",null)}
function gc(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.b=a.b||"";this.position=a.position||null;this.c=void 0!=a.c?a.c:window.location.href;this.reverse=!!a.reverse;this.j=!!a.j;this.type=a.type||""};function Kc(){Xa("js");Xa("css");"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",Kc,!1):document.detachEvent&&document.detachEvent("onreadystatechange",Kc))}document.addEventListener?document.addEventListener("DOMContentLoaded",Kc,!1):document.attachEvent&&document.attachEvent("onreadystatechange",Kc);Kc();
var Lc={init:function(a){var b=!("function"!=typeof window.history.pushState&&!Da().contentWindow.history.pushState);a=a||{};for(var c in pa)z[c]=c in a?a[c]:pa[c];for(c in a)c in pa||(z[c]=a[c]);if(b){c=vc;if(!v["history-init"]&&window.addEventListener){a=window.location.href;window.addEventListener("popstate",Ea,!1);t("history-init",!0);t("history-callback",lc);t("history-error-callback",c);t("history-listener",Ea);t("history-url",a);t("history-timestamp",p());var d={"spf-referer":document.referrer};
try{Aa(a,d)}catch(e){c&&c(a,e)}}!v["nav-init"]&&document.addEventListener&&(t("nav-init",!0),t("nav-init-time",p()),t("nav-counter",0),document.addEventListener("click",ec,!1),t("nav-listener",ec),!z["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",hc,!1),t("nav-mousedown-listener",hc)),document.addEventListener("scroll",jc,!1),t("nav-scroll-listener",jc))}return b},dispose:function(){"undefined"!=
typeof History&&History.prototype.pushState&&(mc(),v["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",v["nav-listener"],!1),document.removeEventListener("mousedown",v["nav-mousedown-listener"],!1),document.removeEventListener("scroll",v["nav-scroll-listener"],!1)),t("nav-listener",null),t("nav-mousedown-listener",null),t("nav-scroll-listener",null),t("nav-scroll-position",null),t("nav-scroll-url",null),t("nav-init",!1),t("nav-init-time",null),t("nav-counter",null)),
v["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",v["history-listener"],!1),t("history-init",!1),t("history-callback",null),t("history-error-callback",null),t("history-listener",null),t("history-url",null),t("history-timestamp",0)));for(var a in z)delete z[a]},navigate:function(a,b){a&&(a=Oa(a),bc(a)?cc()?fc(a,b||{},new gc):W(a,"1"):W(a,"9"))},load:function(a,b){a=Oa(a);Cc(a,b||{},new gc)},prefetch:ic,process:function(a,b){function c(a,c,d,e){a==c&&b&&b(e)}var d=
window.location.href;if("multipart"==a.type){a=a.parts;var e=a.length-1;q(a,function(a,b){U(d,a,null,l(c,null,b,e))})}else U(d,a,null,l(c,null,0,0))}},Mc={cache:{remove:qa,clear:function(){A({})}},script:{load:fb,get:hb,ready:jb,done:function(a){O[N("js",a)]="";Ra("js")},require:kb,declare:function(a,b){if(a){for(var c in a)T[c]=a[c];if(b)for(c in b)S[c]=b[c]}},path:function(a){t("rsrc-p-js",a)},unload:gb,ignore:function(a,b){a=r(a);a=N("js",a.sort().join("|"));Ha(a,b)},unrequire:lb,prefetch:ib},
style:{load:pb,get:qb,unload:function(a){Ua("css",a)},path:function(a){t("rsrc-p-css",a)},prefetch:rb}},Nc=this.spf=this.spf||{},Oc;for(Oc in Lc)Nc[Oc]=Lc[Oc];for(var Pc in Mc)for(var Qc in Mc[Pc])Nc[Pc]=Nc[Pc]||{},Nc[Pc][Qc]=Mc[Pc][Qc];n("spfready");}).call(this);
