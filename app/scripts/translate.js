events.on("ready",function(){var i=navigate.currentScreen.model.language;function t(s,r,l){$(`[${r}]`).each(function(a,t){var e=$(t).attr(""+r);if("pt-br"!=i)try{var n=s[0][i][e];$(t).attr(l,n[l]),$(t).attr("alt",n.alt),$(t).attr("aria-label",n.alt),$(t).addClass(n.class)}catch(a){}})}function e(s,r,l){$(`[${r}]`).each(function(a,t){var e=$(t).attr(""+r);try{var n=s[0][i][e];$(t).attr(l,n[l]),$(t).attr("alt",n.alt),$(t).attr("aria-label",n.alt),$(t).addClass(n.class)}catch(a){}})}$("body").addClass(i),console.log("language: "+i),bridge.text_translate?($("[data-language]").each(function(a){var t=$(this).attr("data-language");$(this).html(bridge.text_translate[0][i][t])}),console.log("entrou no carregamento main :"+i)):($.ajax({type:"GET",dataType:"json",url:"../../data/texts.json",success:function(e){bridge.text_translate=e,$("[data-language]").each(function(a){var t=$(this).attr("data-language");$(this).html(e[0][i][t])})}}),console.log("entrou no carregamento :"+i)),bridge.img_translate?t(bridge.img_translate,"image-translate","src"):$.ajax({type:"GET",dataType:"json",url:"../../data/languages-images.json",success:function(a){t(bridge.img_translate=a,"image-translate","src")}}),bridge.videos_translate?t(bridge.videos_translate,"video-translate","src"):$.ajax({type:"GET",dataType:"json",url:"../../data/languages-videos.json",success:function(a){t(bridge.videos_translate=a,"video-translate","src")}}),bridge.links_translate?e(bridge.links_translate,"link-translate","href"):$.ajax({type:"GET",dataType:"json",url:"../../data/languages-links.json",success:function(a){e(bridge.links_translate=a,"link-translate","href")}})});
//# sourceMappingURL=translate.js.map
