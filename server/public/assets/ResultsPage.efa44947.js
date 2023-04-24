import{aq as z,r as p,w as f,o as D,f as S,h as T,ar as j,_ as F,u as P,F as q,G as i,z as w,as as A,x as B,J as G,y as E,I as O}from"./index.0ddcc1a2.js";const y="https://www.gstatic.com/charts/loader.js";let h=null;const m=new Map;function V(){return window.google!==void 0?Promise.resolve(window.google.charts):(h===null&&(h=new Promise(e=>{const t=document.querySelector('script[src="'.concat(y,'"]')),n=t||document.createElement("script");t||(n.src=y,n.type="text/javascript",document.head.append(n)),n.onload=()=>{window.google!==void 0&&e(window.google.charts)}})),h)}async function k(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"current",{packages:t=["corechart","controls"],language:n="en",mapsApiKey:o}=arguments.length>1?arguments[1]:void 0;const l=await V(),a="".concat(e,"_").concat(t.join("_"),"_").concat(n);if(m.has(a))return m.get(a);const r=new Promise(s=>{l.load(e,{packages:t,language:n,mapsApiKey:o}),l.setOnLoadCallback(()=>s(window.google))});return m.set(a,r),r}function R(e,t,n){return e!==null&&t instanceof e.visualization.DataTable||e!==null&&t instanceof e.visualization.DataView?t:e!==null&&Array.isArray(t)?e.visualization.arrayToDataTable(t,n):e!==null&&t!==null&&typeof t=="object"?new e.visualization.DataTable(t):null}function C(e,t,n,o,l,a){const r=(c,d,v)=>{if(v===void 0)throw new Error("please, provide chart type property");return new d.visualization[v](c)};if(e===null)throw new Error("please, provide charts lib property");if(n===null)throw new Error("please, provide chart element property");return t=(a||r)(n,e,o),I(e,t,l),t}function I(e,t,n){if(n!==null)for(const[o,l]of Object.entries(n))e!==null&&t!==null&&e.visualization.events.addListener(t,o,l)}function _(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:50,n;function o(){return t}return function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];const c=this,d=function(){n=void 0,e.apply(c,r)};n!==void 0&&clearTimeout(n),n=setTimeout(d,o())}}let u=null;const b=z({name:"GChart",props:{type:{type:String,required:!0},data:{type:[Array,Object,null],default:()=>[]},isFirstRowLabels:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},version:{type:String,default:"current"},settings:{type:Object,default:()=>({packages:["corechart","table"]})},events:{type:Object,default:null},createChart:{type:Function,default:void 0},resizeDebounce:{type:Number,default:200}},setup(e,t){let{emit:n}=t;const o=p(null),l=p(null);function a(){if(u===null||o.value===null)return;const r=R(u,e.data,e.isFirstRowLabels);if(r!==null){var s;(s=o.value)===null||s===void 0||s.draw(r,e.options)}}return f(()=>e.data,()=>a(),{deep:!0}),f(()=>e.options,()=>a(),{deep:!0}),f(()=>e.type,()=>{o.value=C(u,o.value,l.value,e.type,e.events,e.createChart),a()}),D(()=>{k(e.version,e.settings).then(r=>{r!==void 0&&(u=r,o.value=C(u,o.value,l.value,e.type,e.events,e.createChart),n("ready",o.value,r),a())}),e.resizeDebounce>0&&window.addEventListener("resize",_(a,e.resizeDebounce))}),S(()=>{o.value!==null&&typeof o.value.clearChart=="function"&&o.value.clearChart(),e.resizeDebounce>0&&window.removeEventListener("resize",_(a,e.resizeDebounce))}),()=>T("div",{ref:l},[])}}),x=j({});function N(){x.component("GChart",b)}const J={version:"1.1.0",install:N};let g=null;typeof window!="undefined"&&(g=window.Vue);g!=null&&x.use(J);const M={components:{GChart:b},data(){return{error:!1,chartOptions:{backgroundColor:"transparent",legend:{position:"none"},hAxis:{format:"0"}},chartStyle:"height: calc(70vh)",chartData:[]}},mounted(){fetch("http://localhost:3000/api/results").then(e=>e.json()).then(e=>{let t=[];t.push(["Job Title","Students",{role:"style"}]);for(const n of e)t.push([n.JobTitle,parseInt(n.studentCount),"#0000FF"]);this.chartData=t})}},H={class:"row"},K={class:"col-8 bg-grey-1",style:{margin:"auto",border:"1px solid #dddddd"}},U=i("h3",{class:"gt-sm text-center q-mt-md q-mb-none"},"Poll Results",-1),Q=i("h4",{class:"lt-md text-center text-bold q-mt-md q-mb-none"},"Poll Results",-1),$=i("h5",{class:"text-center q-ma-none"},"for Bronx Academy for Software Engineering",-1),L={style:{width:"100%","text-align":"right"}};function W(e,t,n,o,l,a){const r=E("GChart");return P(),q("div",null,[i("div",H,[i("div",K,[U,Q,$,w(r,{type:"BarChart",data:l.chartData,options:l.chartOptions,style:A(l.chartStyle)},null,8,["data","options","style"]),i("div",L,[w(G,{color:"secondary",to:{name:"Home"}},{default:B(()=>[O("Home")]),_:1})])])])])}var Y=F(M,[["render",W]]);export{Y as default};
