var jWorkflow=function(){return{order:function(k,l){var h=[],i,e=null,j=function(){var a=false;return{take:function(){a=true},pass:function(b){var c;a=false;if(i.length){c=i.shift();b=c.func.apply(c.context,[b,j]);a||j.pass(b)}else e.func&&e.func.apply(e.context,[b])}}}(),g={andThen:function(a,b){if(typeof a.andThen==="function"&&typeof a.start==="function"&&typeof a.chill==="function")h.push({func:function(c,d){d.take();a.start({callback:function(f){d.pass(f)},context:b,initialValue:c})},context:b});
else{if(typeof a!=="function")throw"expected function but was "+typeof a;h.push({func:a,context:b})}return g},chill:function(a){return g.andThen(function(b,c){c.take();setTimeout(function(){c.pass(b)},a)})},start:function(a,b){var c,d,f;if(a&&typeof a==="object"){c=a.callback;d=a.context;f=a.initialValue}else{c=a;d=b}e={func:c,context:d};i=h.slice();j.pass(f)}};return k?g.andThen(k,l):g}}}();if(typeof module==="object"&&typeof require==="function")module.exports=jWorkflow;
