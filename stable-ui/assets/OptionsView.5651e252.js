import{e as d,aH as u,aG as i,o as m,j as V,a4 as s,m as t,k as e,aJ as f,K as b,bO as k,aK as w,aL as _,aI as g,P as y,aM as n,bP as v}from"./index.8cb243cd.js";const x=b("h1",null,"Options",-1),c=d({__name:"OptionsView",setup(K){const o=u(),r=i(),p=[{value:"dark",label:"Dark"},{value:"light",label:"Light"},{value:"auto",label:"Auto"}];return(P,l)=>(m(),V("div",null,[x,s(e(f),{"label-position":"left","label-width":"160px",model:e(o).options,style:{"max-width":"600px"}},{default:t(()=>[s(k,{label:"Images Per Page",prop:"pageSize",modelValue:e(o).pageSize,"onUpdate:modelValue":l[0]||(l[0]=a=>e(o).pageSize=a),min:10,max:50,step:5},null,8,["modelValue"]),s(e(w),{label:"API Key",prop:"apiKey"},{default:t(()=>[s(e(_),{modelValue:e(o).apiKey,"onUpdate:modelValue":l[1]||(l[1]=a=>e(o).apiKey=a),type:"password",placeholder:"Enter API Key Here",autocomplete:"off",class:"apikey","show-password":""},null,8,["modelValue"]),s(e(g),{class:"anon",onClick:l[2]||(l[2]=a=>e(o).useAnon())},{default:t(()=>[y("Anon?")]),_:1})]),_:1}),s(n,{label:"Color Scheme",prop:"colorScheme",modelValue:e(o).options.colorMode,"onUpdate:modelValue":l[3]||(l[3]=a=>e(o).options.colorMode=a),options:p},null,8,["modelValue"]),s(n,{label:"Use Specific Worker",prop:"worker",modelValue:e(o).useWorker,"onUpdate:modelValue":l[4]||(l[4]=a=>e(o).useWorker=a),options:["None",...e(r).workers.map(a=>({label:a.name,value:a.id}))]},null,8,["modelValue","options"]),s(v,{label:"Larger Values",prop:"allowLargerParams",modelValue:e(o).allowLargerParams,"onUpdate:modelValue":l[5]||(l[5]=a=>e(o).allowLargerParams=a),options:["Enabled","Disabled"],info:"Allows use of larger step values and dimension sizes if you have the kudos on hand.",disabled:e(o).apiKey==="0000000000"||e(o).apiKey===""},null,8,["modelValue","disabled"])]),_:1},8,["model"])]))}});export{c as default};
