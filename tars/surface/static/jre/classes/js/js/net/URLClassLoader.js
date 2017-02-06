Class.forName({name:"class js.net.URLClassLoader extends js.lang.ClassLoader","@Setter @Getter loadedScripts":{},"@Setter @Getter waitingList":{},"@Setter @Getter path":[],"@Setter @Getter root":"","@Setter @Getter version":null,"@Setter @Getter debug":!1,URLClassLoader:function(t){this.parent=t;for(var e=[window.location.origin],a=null,s=!1,r=document.getElementsByTagName("script"),n=0,o=r.length;n<o;n++){var i=r[n],l=i.getAttribute("jsvm"),c=i.getAttribute("servletpath"),u=i.hasAttribute("debug"),d=i.getAttribute("debug"),f=i.getAttribute("version");if(l&&"true"===l){c&&e.push(c),u&&"false"!==d.toLowerCase()&&(s=!0),a=f;break}}this.debug=s,this.version=a,this.root=e.join("/")},findClass:function(t,e){var a=Object.isString(t);a&&(t=[t]);var s={},r=this.path,n=[];if(!Object.isArray(t))return s;for(var o=0;o<t.length;o++){for(var i=t[o],l=i,c=0;c<r.length;c++)if(r[c]&&r[c].name&&r[c].url&&0===i.indexOf(r[c].name)){i=r[c].url+i.substring(r[c].name.length);break}i=i.replace(/[.]/g,"/")+".js",this.version&&n.push("v="+this.version),e&&n.push("t="+(new Date).getTime()),n.length>0&&(i+="?"+n.join("&")),s[l]=this.root+i}return s},loadClass:function(t,e,a,s,r,n){var o=Object.isString(t);if(o&&(t=[t]),!Object.isArray(t))return!1;var i=t.length;if(r||(r=this),0===i)return doCallback(!0),!0;for(var l=0;l<i;l++){var c=t[l];this.loadClassInternal(c,e,a,s,r,n)}},"protected loadClassInternal":function(t,e,a,s,r,n){var o=Object.isString(t);if(!o)return!1;var i=this.loadedScripts,l=this.waitingList,c=[],u=[],d=this;n&&document.setStyle("cursor","wait"),r||(r=this);for(var f=function(t){if(s&&(o?s.call(r,t):s.call(r,c,u)),u.length>0)throw new js.lang.ClassNotFoundException("Can't find Class named ("+u.join(",")+")")},g=function(t,e){(e?c:u).push(t),n&&document.getDocumentElement().removeStyle("cursor"),f(e)},h=function(t,o){if(o){if(i[t]=1,l[t]){var c=l[t];delete l[t];for(var u=0;u<c.length;u++)c[u](t,o)}}else d.parent.loadClassInternal(t,e,a,s,r,n)},p=(function(t,e){var a=document.createElement("script");a.type="text/javascript",a.src=e,a&&("addEventListener"in a?a.onload=function(){h(t,!0)}:"readyState"in a?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,h(t,!0))}:(a.onload=function(){setTimeout(function(){h(t,!0)},0)},a.onerror=function(){h(t,!1)}),(document.head||document.getElementsByTagName("head")[0]).appendChild(a))}),C=function(t,e){var a,s,r=!1,n=/msie/.test(navigator.userAgent.toLowerCase()),o=n?"":"\n//# sourceURL="+e;a="undefined"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");try{a.open("GET",e,!1),a.send(null)}catch(i){r=!0}s=1223===a.status?204:0!==a.status||"file:"!==(self.location||{}).protocol&&"ionp:"!==(self.location||{}).protocol?a.status:200,r=r||0===s,r?h(t,!1):s>=200&&s<300||304===s?(new Function(a.responseText+o)(),h(t,!0)):h(t,!1),a=null},m=t,v=m.split("."),L=window,b=0,S=v.length;b<S&&L;b++)L=L[v[b]];if(!L||L.equals(window)){if(i[m])return void g(m,!0);var j=l[m]||(l[m]=[]);if(j.push(g),!(j.length>1)){var w=this.findClass(m,a);e?p(m,w[m]):C(m,w[m])}}}}),window.$import=function(t,e,a,s){if(Object.isNull(e))e=js.lang.ClassLoader.getSystemClassLoader();else if(!Object.isInstanceof(e,js.lang.ClassLoader))switch(e){case"BootstrapClassLoader":e=atom.misc.Launcher.BootstrapClassLoader.getBootstrapClassLoader();break;case"ExtClassLoader":e=atom.misc.Launcher.ExtClassLoader.getExtClassLoader();break;case"CSSClassLoader":e=atom.misc.Launcher.CSSClassLoader.getCSSClassLoader();break;default:e=js.lang.ClassLoader.getSystemClassLoader()}return e.loadClass(t,a,!1,s)};