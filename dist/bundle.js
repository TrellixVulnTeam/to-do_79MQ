/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,n={},r={},i="en",u={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["AM","PM"]},o={YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.res.MMMM[e.getMonth()]},MMM:function(e){return this.res.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.res.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.res.dddd[e.getDay()]},ddd:function(e){return this.res.ddd[e.getDay()]},dd:function(e){return this.res.dd[e.getDay()]},Z:function(e){var t=e.getTimezoneOffset()/.6|0;return(t>0?"-":"+")+("000"+Math.abs(t-(t%100*.4|0))).slice(-4)},ZZ:function(e){var t=e.getTimezoneOffset(),n=Math.abs(t);return(t>0?"-":"+")+("0"+(n/60|0)).slice(-2)+":"+("0"+n%60).slice(-2)},post:function(e){return e},res:u},s={YYYY:function(e){return this.exec(/^\d{4}/,e)},Y:function(e){return this.exec(/^\d{1,4}/,e)},MMMM:function(e){var t=this.find(this.res.MMMM,e);return t.value++,t},MMM:function(e){var t=this.find(this.res.MMM,e);return t.value++,t},MM:function(e){return this.exec(/^\d\d/,e)},M:function(e){return this.exec(/^\d\d?/,e)},DD:function(e){return this.exec(/^\d\d/,e)},D:function(e){return this.exec(/^\d\d?/,e)},HH:function(e){return this.exec(/^\d\d/,e)},H:function(e){return this.exec(/^\d\d?/,e)},A:function(e){return this.find(this.res.A,e)},hh:function(e){return this.exec(/^\d\d/,e)},h:function(e){return this.exec(/^\d\d?/,e)},mm:function(e){return this.exec(/^\d\d/,e)},m:function(e){return this.exec(/^\d\d?/,e)},ss:function(e){return this.exec(/^\d\d/,e)},s:function(e){return this.exec(/^\d\d?/,e)},SSS:function(e){return this.exec(/^\d{1,3}/,e)},SS:function(e){var t=this.exec(/^\d\d?/,e);return t.value*=10,t},S:function(e){var t=this.exec(/^\d/,e);return t.value*=100,t},Z:function(e){var t=this.exec(/^[\+-]\d{2}[0-5]\d/,e);return t.value=-60*(t.value/100|0)-t.value%100,t},ZZ:function(e){var t=/^([\+-])(\d{2}):([0-5]\d)/.exec(e)||["","","",""];return{value:0-(60*(t[1]+t[2]|0)+(t[1]+t[3]|0)),length:t[0].length}},h12:function(e,t){return(12===e?0:e)+12*t},exec:function(e,t){var n=(e.exec(t)||[""])[0];return{value:0|n,length:n.length}},find:function(e,t){for(var n,r=-1,i=0,u=0,o=e.length;u<o;u++)n=e[u],!t.indexOf(n)&&n.length>i&&(r=u,i=n.length);return{value:r,length:i}},pre:function(e){return e},res:u},c=function(e,t,n,r){var i,u={};for(i in e)u[i]=e[i];for(i in t||{})!!n^!!u[i]||(u[i]=t[i]);return r&&(u.res=r),u},a={_formatter:o,_parser:s,compile:function(e){for(var t,n=/\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g,r=[e];t=n.exec(e);)r[r.length]=t[0];return r},format:function(e,n,r){var i=this||t,u="string"==typeof n?i.compile(n):n,o=e.getTimezoneOffset(),s=i.addMinutes(e,r?o:0),c=i._formatter,a="";s.getTimezoneOffset=function(){return r?0:o};for(var d,f=1,h=u.length;f<h;f++)a+=c[d=u[f]]?c.post(c[d](s,u[0])):d.replace(/\[(.*)]/,"$1");return a},preparse:function(e,n){var r=this||t,i="string"==typeof n?r.compile(n):n,u={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},o=/\[(.*)]/,s=r._parser,c=0;e=s.pre(e);for(var a,d,f=1,h=i.length;f<h;f++)if(s[a=i[f]]){if(!(d=s[a](e.slice(c),i[0])).length)break;c+=d.length,u[d.token||a.charAt(0)]=d.value,u._match++}else if(a===e.charAt(c)||" "===a)c++;else{if(!o.test(a)||e.slice(c).indexOf(o.exec(a)[1])){if("..."===a){c=e.length;break}break}c+=a.length-2}return u.H=u.H||s.h12(u.h,u.A),u._index=c,u._length=e.length,u},parse:function(e,n,r){var i=this||t,u="string"==typeof n?i.compile(n):n,o=i.preparse(e,u);return i.isValid(o)?(o.M-=o.Y<100?22801:1,r||~i._parser.find(u,"ZZ").value?new Date(Date.UTC(o.Y,o.M,o.D,o.H,o.m+o.Z,o.s,o.S)):new Date(o.Y,o.M,o.D,o.H,o.m,o.s,o.S)):new Date(NaN)},isValid:function(e,n){var r=this||t,i="string"==typeof e?r.preparse(e,n):e,u=[31,28+r.isLeapYear(i.Y)|0,31,30,31,30,31,31,30,31,30,31][i.M-1];return!(i._index<1||i._length<1||i._index-i._length||i._match<1||i.Y<1||i.Y>9999||i.M<1||i.M>12||i.D<1||i.D>u||i.H<0||i.H>23||i.m<0||i.m>59||i.s<0||i.s>59||i.S<0||i.S>999||i.Z<-840||i.Z>720)},transform:function(e,n,r,i){const u=this||t;return u.format(u.parse(e,n),r,i)},addYears:function(e,n){return(this||t).addMonths(e,12*n)},addMonths:function(e,t){var n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n},addDays:function(e,t){var n=new Date(e.getTime());return n.setDate(n.getDate()+t),n},addHours:function(e,n){return(this||t).addMinutes(e,60*n)},addMinutes:function(e,n){return(this||t).addSeconds(e,60*n)},addSeconds:function(e,n){return(this||t).addMilliseconds(e,1e3*n)},addMilliseconds:function(e,t){return new Date(e.getTime()+t)},subtract:function(e,t){var n=e.getTime()-t.getTime();return{toMilliseconds:function(){return n},toSeconds:function(){return n/1e3},toMinutes:function(){return n/6e4},toHours:function(){return n/36e5},toDays:function(){return n/864e5}}},isLeapYear:function(e){return!((e%4||!(e%100))&&e%400)},isSameDay:function(e,t){return e.toDateString()===t.toDateString()},locale:function(e,t){n[e]||(n[e]=t)},plugin:function(e,t){r[e]||(r[e]=t)}};e=c(a),(t=c(a)).locale=function(d){var f="function"==typeof d?d:t.locale[d];if(!f)return i;i=f(a);var h=n[i]||{},l=c(u,h.res,!0),M=c(o,h.formatter,!0,l),g=c(s,h.parser,!0,l);for(var m in t._formatter=e._formatter=M,t._parser=e._parser=g,r)t.extend(r[m]);return i},t.extend=function(e){var n=c(t._parser.res,e.res),r=e.extender||{};for(var i in t._formatter=c(t._formatter,e.formatter,!1,n),t._parser=c(t._parser,e.parser,!1,n),r)t[i]||(t[i]=r[i])},t.plugin=function(n){var i="function"==typeof n?n:t.plugin[n];i&&t.extend(r[i(a,e)]||{})};var d=t;const f=(()=>{let e,t=[];return e=0,{choresArray:t,addChore:function(n,r,i){let u=((t,n,r)=>{e++;let i=new Date;d.format(i,"YYYY/MM/DD HH:mm:ss");const u=d.compile("ddd, MMM DD YYYY");return console.log(t,n,r),{id:e,action:t,esTime:n,priority:r,creation:d.format(i,u),status:"incomplete"}})(n,r,i);t.push(u)},removeChore:function(e){for(let n=0;n<t.length;n++)e==t[n].id&&t.splice(n,1)}}})();f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.addChore("test","0sec","1"),f.removeChore(3),f.removeChore(10),console.log(f.choresArray)})();