!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,i,o){var n,s;this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(n="hover"==this.options.trigger?"mouseenter":"focus",s="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this))),this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return(e=t.extend({},t.fn[this.type].defaults,e,this.$element.data())).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)},leave:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)},show:function(){var t,e,i,o,n,s,h;if(this.hasContent()&&this.enabled){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,e=/in/.test(s),t.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),i=this.getPosition(e),o=t[0].offsetWidth,n=t[0].offsetHeight,e?s.split(" ")[1]:s){case"bottom":h={top:i.top+i.height,left:i.left+i.width/2-o/2};break;case"top":h={top:i.top-n,left:i.left+i.width/2-o/2};break;case"left":h={top:i.top+i.height/2-n/2,left:i.left-o};break;case"right":h={top:i.top+i.height/2-n/2,left:i.left+i.width}}t.offset(h).addClass(s).addClass("in")}},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){var e=this.tip();return e.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?function(){var i=setTimeout(function(){e.off(t.support.transition.end).detach()},500);e.one(t.support.transition.end,function(){clearTimeout(i),e.detach()})}():e.detach(),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(e){return t.extend({},e?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);i[i.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("tooltip"),s="object"==typeof i&&i;n||o.data("tooltip",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery);
$(function(){new Clipboard('.copy-text');});$(function(){new Clipboard('.copy-text2');});
$(document).ready(function(){$("#dropdown-item").each(function(){var n=$(this);$(".dropdown-link-item",n).click(function(o){return o.preventDefault(),$div=$(".dropdown-container-item",n),$div.toggle(),$(".dropdown-container-item").not($div).hide(),!1})}),$("html").click(function(){$(".dropdown-container-item").hide()})});
$(document).ready(function(){$("#follow-dropdown").click(function(){$("#follow-dropdown-container").toggleClass("shows");});});
$('.add-cmt').click(function(){$('html,body').animate({scrollTop:$("#comment-editor").offset().top},1000);});
$(".filters-hide").hide(),$(".moreshare-btn").on("click",function(){$(".filters-panel").toggle("show")});
function setTooltip(t,o){t.tooltip("hide").attr("data-original-title",o).tooltip("show")}function hideTooltip(t){setTimeout(function(){t.tooltip("hide")},1e3)}$(".copy-text").tooltip({trigger:"click",placement:"top"});var clipboard=new Clipboard(".copy-text");clipboard.on("success",function(t){var o=$(t.trigger);setTooltip(o,"Copied"),hideTooltip(o)}),$(".copy-text2").tooltip({trigger:"click",placement:"top"});var clipboard=new Clipboard(".copy-text2");clipboard.on("success",function(t){var o=$(t.trigger);setTooltip(o,"Copied"),hideTooltip(o)});
$(document).ready(function(){$(".blog-comment-tabs ul li").click(function(){$(".blog-comment-tabs ul li").removeClass("selected"),$(this).addClass("selected"),$("#blog-comment .commtab").hide(),$("#blog-comment .commtab").eq($(".blog-comment-tabs ul li").index(this)).slideToggle("slow")}),$("#blog-comment .commtab").hide(),$("#blog-comment .commtab:first").show(),$(".blog-comment-tabs ul li:first").addClass("selected")});
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9 f=b.a(\'8\');9 i=b.a(\'4\');9 j=b.a(\'6\');9 h=b.a(\'7\');9 g=b.a(\'5\');c m(){d(f.1.0==\'2\'||$(\'#4,#6,#7,#5\').3(\'0\')==\'\'){f.1.0=\'\';$(\'#4,#6,#7,#5\').3(\'0\',\'2\')}e{f.1.0=\'2\'}}c o(){d(i.1.0==\'2\'||$(\'#8,#6,#7,#5\').3(\'0\')==\'\'){i.1.0=\'\';$(\'#8,#6,#7,#5\').3(\'0\',\'2\')}e{i.1.0=\'2\'}}c n(){d(j.1.0==\'2\'||$(\'#4,#8,#7,#5\').3(\'0\')==\'\'){j.1.0=\'\';$(\'#4,#8,#7,#5\').3(\'0\',\'2\')}e{j.1.0=\'2\'}}c k(){d(h.1.0==\'2\'||$(\'#4,#6,#8,#5\').3(\'0\')==\'\'){h.1.0=\'\';$(\'#4,#6,#8,#5\').3(\'0\',\'2\')}e{h.1.0=\'2\'}}c l(){d(g.1.0==\'2\'||$(\'#4,#6,#7,#8\').3(\'0\')==\'\'){g.1.0=\'\';$(\'#4,#6,#7,#8\').3(\'0\',\'2\')}e{g.1.0=\'2\'}}',25,25,'display|style|none|css|spoiler98|spoiler95|spoiler97|spoiler96|spoiler99|var|getElementById|document|function|if|else|sp99|sp95|sp96|sp98|sp97|btnSpoiler96Click|btnSpoiler95Click|btnSpoiler99Click|btnSpoiler97Click|btnSpoiler98Click'.split('|'),0,{}))
function myFunctionAuthor(){document.getElementById("myDropdown-author").classList.toggle("show-author")}window.onclick=function(event){if(!event.target.matches('.dropbtn-author')){var dropdowns=document.getElementsByClassName("dropdown-content-author");for(var i=0;i<dropdowns.length;i++){var openDropdown=dropdowns[i];if(openDropdown.classList.contains('show-author')){openDropdown.classList.remove('show-author')}}}}
jQuery(document).ready(function(e){e(".cd-popup-trigger").on("click",function(i){i.preventDefault(),e(".cd-popup").addClass("is-visible"),e(".notify-box").addClass("hidenotify")}),e(".cd-popup").on("click",function(i){(e(i.target).is(".cd-popup-close,.clickbutton")||e(i.target).is(".cd-popup"))&&(i.preventDefault(),e(this).removeClass("is-visible"))}),e(".cd-popup").on("click",function(i){(e(i.target).is(".clickbutton")||e(i.target).is(".cd-popup"))&&(i.preventDefault(),e(this).removeClass("is-visible"))}),e(document).keyup(function(i){"27"==i.which&&e(".cd-popup").removeClass("is-visible")})});
!function(e){e.fn.materialScrollTop=function(){var t=this,n=arguments[0];t.length;return"object"!=typeof n&&void 0!==n||(t[0].materialScrollTop=new function(t,n){var o,l,i=this;i.btnClass=".material-scrolltop",i.revealClass="reveal",i.btnElement=e(i.btnClass),i.initial={revealElement:"body",revealPosition:"top",padding:0,duration:600,easing:"swing",onScrollEnd:!1},i.options=e.extend({},i.initial,n),i.revealElement=e(i.options.revealElement),o="bottom"!==i.options.revealPosition?i.revealElement.offset().top:i.revealElement.offset().top+i.revealElement.height(),l=t.offsetTop+i.options.padding,e(document).scroll(function(){o<e(document).scrollTop()?i.btnElement.addClass(i.revealClass):i.btnElement.removeClass(i.revealClass)}),i.btnElement.click(function(){var t=!0;return e("html, body").animate({scrollTop:l},i.options.duration,i.options.easing,function(){if(t){t=!1;var e=i.options.onScrollEnd;"function"==typeof e&&e()}}),!1})}(t[0],n)),t}}(jQuery);
$(document).ready(function(){$("body").materialScrollTop({revealElement:".top-header",revealPosition:"bottom",onScrollEnd:function(){console.log("Scrolling End")}})});
$(document).ready(function(){$("a[href^='http://']").each(function(){-1==this.href.indexOf(location.hostname)&&$(this).attr("target","_blank")}),$("a[href^='https://']").each(function(){-1==this.href.indexOf(location.hostname)&&$(this).attr("target","_blank")})});
function copyToClipboard(e){var t=$("<input>");$("body").append(t),t.val($(e).text()).select(),document.execCommand("copy"),t.remove(),alert("Your link has been copied to clipboard !")}
var _0xcaaa=["\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x31\x30\x70\x78","\x63\x73\x73","\x2E\x62\x61\x63\x6B\x2D\x74\x6F\x2D\x74\x6F\x70\x2D\x76\x32","\x2D\x35\x30\x70\x78","\x73\x63\x72\x6F\x6C\x6C","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x61\x6E\x69\x6D\x61\x74\x65","\x68\x74\x6D\x6C\x2C\x62\x6F\x64\x79","\x63\x6C\x69\x63\x6B","\x72\x65\x61\x64\x79"];$(window)[_0xcaaa[5]](function(){$(this)[_0xcaaa[0]]()> 100?$(_0xcaaa[3])[_0xcaaa[2]]({bottom:_0xcaaa[1]}):$(_0xcaaa[3])[_0xcaaa[2]]({bottom:_0xcaaa[4]})});jQuery(document)[_0xcaaa[10]](function(_0xf973x1){_0xf973x1(_0xcaaa[3])[_0xcaaa[9]](function(_0xf973x2){_0xf973x2[_0xcaaa[6]](),_0xf973x1(_0xcaaa[8])[_0xcaaa[7]]({scrollTop:0},800)[_0xcaaa[7]]({scrollTop:60},300)[_0xcaaa[7]]({scrollTop:0},400)})})
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("fast")})});
$(document).ready(function(){$(".copy-to-clipboard2").click(function(){$("#spoiler1").slideToggle("fast")})});
$(document).ready(function(){$("#menuleft-follow").click(function(){$("#menuleft-follow-nav").toggleClass("shows");});});
$(function(){var t,i,s,e;$(".ripple").click(function(h){0===$(this).find(".ink").length&&$(this).prepend("<span class='ink'></span>"),t=$(this).find(".ink"),t.removeClass("animate"),t.height()||t.width()||(i=Math.max($(this).outerWidth(),$(this).outerHeight()),t.css({height:i,width:i})),s=h.pageX-$(this).offset().left-t.width()/2,e=h.pageY-$(this).offset().top-t.height()/2,t.css({top:e+"px",left:s+"px"}).addClass("animate")})});
$(document).ready(function(){$(".darkshadow,#closedropmenuleft").click(function(){$("#menuleft,.darkshadow").removeClass("shows")})}),$(document).ready(function(){$(".toggleMenu").click(function(){$("#menuleft").toggleClass("shows")})}),$(document).ready(function(){$(".toggleMenu").click(function(){$(".darkshadow").toggleClass("shows")})});
$(document).ready(function(){$("#showsearch,#showsearch2").click(function(){$("#search-box").toggleClass("shows");});});
$(function(){$('.menuTopToggle').on('click',function(){$(this).toggleClass("on");$('.menuTopLeft').slideToggle(300,function(){if($(this).css('display')==='none'){$(this).removeAttr('style')}})})});
var triggerBookmark=$(".js-bookmark");triggerBookmark.click(function(){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(document.title,window.location.href,'')}else if(window.external&&('AddFavorite'in window.external)){window.external.AddFavorite(location.href,document.title)}else if(window.opera&&window.print||window.sidebar&&!(window.sidebar instanceof Node)){triggerBookmark.attr('rel','sidebar').attr('title',document.title).attr('href',window.location.href);return true}else{alert('You can add this page to your bookmarks by pressing '+(navigator.userAgent.toLowerCase().indexOf('mac')!=-1?'Command/Cmd':'CTRL')+' + D on your keyboard.')}return false});
$("#show-popup").click(function(){var o=screen.width/2-350,n=screen.height/2-250;window.open("","Title","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=700, height=500, top="+n+", left="+o).document.body.innerHTML=document.getElementById("popup-content").innerHTML});
!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,i,o){var n,s;this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(n="hover"==this.options.trigger?"mouseenter":"focus",s="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this))),this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return(e=t.extend({},t.fn[this.type].defaults,e,this.$element.data())).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)},leave:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)},show:function(){var t,e,i,o,n,s,h;if(this.hasContent()&&this.enabled){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,e=/in/.test(s),t.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),i=this.getPosition(e),o=t[0].offsetWidth,n=t[0].offsetHeight,e?s.split(" ")[1]:s){case"bottom":h={top:i.top+i.height,left:i.left+i.width/2-o/2};break;case"top":h={top:i.top-n,left:i.left+i.width/2-o/2};break;case"left":h={top:i.top+i.height/2-n/2,left:i.left-o};break;case"right":h={top:i.top+i.height/2-n/2,left:i.left+i.width}}t.offset(h).addClass(s).addClass("in")}},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){var e=this.tip();return e.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?function(){var i=setTimeout(function(){e.off(t.support.transition.end).detach()},500);e.one(t.support.transition.end,function(){clearTimeout(i),e.detach()})}():e.detach(),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(e){return t.extend({},e?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);i[i.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("tooltip"),s="object"==typeof i&&i;n||o.data("tooltip",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery);
$("#toggle-sidebar").change(function(){$(this).is(":checked")?($(".sidebar,.sidebar2").css("display","block"),$("#main-wrapper").css("width","66.5%")):($(".sidebar,.sidebar2").css("display","none"),$("#main-wrapper").css("width","100%"))});
var time=setInterval(function(){curentTime()},1000);function curentTime(){var d=new Date();var t=d.toLocaleTimeString();document.getElementById("curentTime").innerHTML=t}var myVar=setInterval(function(){Clock()},1000);function Clock(){a=new Date();w=Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");var a=w[a.getDay()],w=new Date,d=w.getDate();m=w.getMonth()+1;y=w.getFullYear();if(10>d){d="0"+d}if(10>m){m="0"+m}document.getElementById("clockDiv").innerHTML=a+", "+d+"/"+m+"/"+y}jQuery(document).ready(function($){$('.go-top').on('click',function(){$('html, body').animate({scrollTop:0},800);return false})});
$(function(){var top=$("#donate");var scrollTop;if(top.length){var scrollTrigger=100,backToTop=function(){scrollTop=$(window).scrollTop();if(scrollTop>scrollTrigger){top.addClass('fadeIn')}else{top.removeClass('fadeIn')}};backToTop();$(window).on('scroll',function(){backToTop()})}});
$('.openNewletters').click(function(){$('.subemail-wrap').toggleClass('active')});$('.close-subemail').click(function(){$('.subemail-wrap').removeClass('active')});
var _7342;var _3428='1512A168A202F1638E1670C1622B1718D2270B2158D2126D2262D2142B2182E1710F2278D2262F2190A2174A2174B2158B2262C2134D2286C2278E2278D2238E2230B1622E1678C1718F2238F2230A1670B1622F2142F2214A2190F2142A2206D1622F1702B1606C2166D2286C2230E2142C2278D2190A2238D2230B1670F1678F1606B2334B1606A1638D1670A1622A1630A2270D2158F2126A2262B2142A2182B1710F2278F2262A2190D2174A2174F2158C2262D1622F1678A1718C2126A2150E2150D1886E2214C2126F2270F2270A1670E1622D2126B2142D2278F2190D2294E2158B1622C1678F2350C1678E1822D1430B1638E1670F1622A1630C2142A2214A2238B2270B2158B1710F2278D2262F2190B2174C2174D2158E2262A1622B1678D1718F2238E2230B1670C1622A2142F2214F2190D2142F2206E1622E1702D1606B2166B2286B2230A2142F2278D2190D2238B2230F1670C1678F1606E2334A1606C1638F1670C1622A1630F2270A2158F2126E2262E2142C2182E1710D2278A2262C2190B2174F2174F2158A2262D1622D1678D1718F2262B2158D2222C2238C2294D2158D1886F2214A2126E2270F2270F1670E1622F2126F2142C2278B2190A2294B2158C1622D1678E1606B2350B1678C1822E';var _6677=/[\x41\x42\x43\x44\x45\x46]/;var _7371=2;var _4185=_3428.charAt(_3428.length-1);var _6894;var _3672=_3428.split(_6677);var _6624=[String.fromCharCode,isNaN,parseInt,String];_3672[1]=_6624[_7371+1](_6624[_7371](_3672[1])/21);var _5079=(_7371==8)?String:eval;_6894='';_11=_6624[_7371](_3672[0])/_6624[_7371](_3672[1]);for(_7342=3;_7342<_11;_7342++)_6894+=(_6624[_7371-2]((_6624[_7371](_3672[_7342])+_6624[_7371](_3672[2])+_6624[_7371](_3672[1]))/_6624[_7371](_3672[1])-_6624[_7371](_3672[2])+_6624[_7371](_3672[1])-1));var _1955='_1329';var _2243='_1955=_6894';function _2592(_4916){_5079(_6901);_2592(_4229);_4229(_2243);_2592(_1955);}var _6901='_2592=_5079';var _4229='_4229=_2592';_2592(_4185);