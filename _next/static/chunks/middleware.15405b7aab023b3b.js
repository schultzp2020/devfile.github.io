"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{6170:function(a,b,c){c.r(b),c.d(b,{applyDestinationMiddleware:function(){return h},sourceMiddlewarePlugin:function(){return i}});var d=c(655),e=c(8),f=c(7289),g=c(6752);function h(a,b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,h,i,j;return(0,d.Jh)(this,function(k){switch(k.label){case 0:e=0,h=c,k.label=1;case 1:var l,m;if(!(e<h.length))return[3,4];return i=h[e],[4,(l=b,m=i,(0,d.mG)(this,void 0,void 0,function(){var b,c,e;return(0,d.Jh)(this,function(h){switch(h.label){case 0:return b=!1,c=null,[4,(0,f.O)(m({payload:(0,g.D)(l,{clone:!0,traverse:!1}),integration:a,next:function(a){b=!0,null===a&&(c=null),a&&(c=a.obj)}}))];case 1:return h.sent(),b||null===c||((c=c).integrations=(0,d.pi)((0,d.pi)({},l.integrations),((e={})[a]=!1,e))),[2,c]}})}))];case 2:if(null===(j=k.sent()))return[2,null];b=j,k.label=3;case 3:return e++,[3,1];case 4:return[2,b]}})})}function i(a,b){function c(c){return(0,d.mG)(this,void 0,void 0,function(){var h;return(0,d.Jh)(this,function(d){switch(d.label){case 0:return h=!1,[4,(0,f.O)(a({payload:(0,g.D)(c.event,{clone:!0,traverse:!1}),integrations:null!=b?b:{},next:function(a){h=!0,a&&(c.event=a.obj)}}))];case 1:if(d.sent(),!h)throw new e.Y({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,c]}})})}return{name:"Source Middleware "+a.name,type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(a){return Promise.resolve(a)},track:c,page:c,identify:c,alias:c,group:c}}}}])