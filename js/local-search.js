var searchFunc=function(t,e,i){"use strict";var n=document.getElementById(e),a=document.getElementById(i);a.innerHTML="<div class='m-auto text-center'><div class='spinner-border' role='status'><span class='sr-only'>Loading...</span></div><br/>Loading...</div>",$.ajax({url:t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();a.innerHTML="",n.addEventListener("input",function(){var h="",p=this.value.trim().toLowerCase().split(/[\s\-]+/);if(a.innerHTML="",!(this.value.trim().length<=0)){if(e.forEach(function(t){var i=!0;t.title&&""!==t.title.trim()||(t.title="Untitled");var e=t.title.trim(),n=e.toLowerCase(),a=t.content.trim().replace(/<[^>]+>/g,""),l=a.toLowerCase(),s=t.url,r=-1,c=-1,o=-1;if(""!==l?p.forEach(function(t,e){r=n.indexOf(t),c=l.indexOf(t),r<0&&c<0?i=!1:(c<0&&(c=0),0===e&&(o=c))}):i=!1,i){h+="<a href='"+s+"' class='list-group-item list-group-item-action font-weight-bolder search-list-title'>"+e+"</a>";if(0<=o){var u=o-20,d=o+80;u<0&&(u=0),0===u&&(d=100),d>a.length&&(d=a.length);var v=a.substring(u,d);p.forEach(function(t){var e=new RegExp(t,"gi");v=v.replace(e,"<span class='pink-text'>"+t+"</span>")}),h+="<p class='search-list-content'>"+v+"...</p>"}}}),-1===h.indexOf("list-group-item"))return $("#local-search-input").addClass("invalid").removeClass("valid");$("#local-search-input").addClass("valid").removeClass("invalid"),a.innerHTML=h}})}}),$(document).on("click","#local-search-close",function(){$("#local-search-input").val("").removeClass("invalid").removeClass("valid"),$("#local-search-result").html("")})},getSearchFile=function(t){searchFunc(t,"local-search-input","local-search-result")};