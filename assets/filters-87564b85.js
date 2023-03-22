const o=e=>`${parseInt(e,10).toFixed(0).replace(/./g,(t,a,c)=>a&&t!=="."&&(c.length-a)%3===0?`, ${t}`.replace(/\s/g,""):t)}`,r=e=>new Date(e*1e3).toLocaleDateString();export{o as c,r as g};
