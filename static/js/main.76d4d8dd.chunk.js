(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),s=n.n(r),i=n(2),h=n(3),u=n(5),l=n(4),c=n(6),d=n(1),p=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",null,this.props.quote),a.a.createElement("p",null,this.props.author),a.a.createElement("button",{className:"btn btn-default",onClick:this.props.update},"Change"),a.a.createElement("button",{className:"btn btn-default",onClick:this.props.share},a.a.createElement("i",{className:"fa fa-twitter"})," Tweet"))}}]),t}(o.Component)),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).updatequote=n.updatequote.bind(Object(d.a)(Object(d.a)(n))),n.share=n.share.bind(Object(d.a)(Object(d.a)(n))),n.state={quotes:["When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us.","The only impossible journey is the one you never begin.","If you want to live a happy life, tie it to a goal, not to people or things.","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking","Life would be tragic if it weren\u2019t funny","And now that you don't have to be perfect, you can be good.","Anyone who has never made a mistake has never tried anything new.","It hurt because it mattered.","Great works are performed not by strength but by perseverance.","The only way to do great work is to love what you do.","Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.","All our dreams can come true if we have the courage to pursue them.","As we look ahead into the next century, leaders will be those who empower others."],author:["Alexander Graham Bell","Anthony Robbins","Albert Einstein","Steve Jobs","Stephen Hawking","John Steinbeck","Albert Einstein","John Green","Samuel Johnson","Steve Jobs","Albert Einstein","Walt Disney","Bill Gates"],rende:{content:"It hurt because it mattered.",author:"John Green"}},n}return Object(c.a)(t,e),Object(h.a)(t,[{key:"share",value:function(){var e=this.state.rende.content;window.open("https://twitter.com/intent/tweet?text="+e+'"')}},{key:"updatequote",value:function(){var e=Math.floor(Math.random()*this.state.quotes.length);this.setState({rende:{content:this.state.quotes[e],author:this.state.author[e]}})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p,{author:this.state.rende.author,quote:this.state.rende.content,update:this.updatequote,share:this.share}))}}]),t}(o.Component);s.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.76d4d8dd.chunk.js.map