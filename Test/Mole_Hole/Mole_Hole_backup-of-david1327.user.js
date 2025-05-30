// ==UserScript==
// @name		Mole Hole - (backup of david1327)
// @version		2.1
// @author		David1327
// @namespace		GRMH
// @description		Expansion for the Grepolis game (Automatic change from Mole Hole to a david1327 backup -> if the site "grmh.pl" is inaccessible)
// @updateURL   https://dio-david1327.github.io/Test/Mole_Hole/Mole_Hole_backup-of-david1327.user.js
// @include		https://*.grepolis.*/game*
// @include		https://*.grepolis.*/start?action=select_new_world
// @icon		https://grepolis-david1327.e-monsite.com/medias/images/logo.gif
// @grant		none
// ==/UserScript==


(function(){
    var uw = window;
    var s=document.createElement('script');
    s.type='text/javascript';
    s.src='https://grmih.pl/MHscript/MH_script.js?_'+Math.round(new Date().getTime()/60000);
    document.body.appendChild(s);
    s.onload = function() {
        //HumanMessage.success("Mole Hole ON")
        var l=document.createElement('link');
        l.type='text/css';
        l.rel='stylesheet';
        l.href='https://grmh.pl/MHscript/MH_styles.css?_'+(new Date().getDay());
        document.body.appendChild(l);}
    s.onerror = function(){
        uw.HumanMessage.error("Mole Hole OFF (david1327)")
        var s=document.createElement('script');
        s.type='text/javascript';
        s.src='https://dio-david1327.github.io/Test/Mole_Hole/Mole_Hole.js?_'+Math.round(new Date().getTime()/60000);
        var l=document.createElement('link');
        l.type='text/css';
        l.rel='stylesheet';
        l.href='https://dio-david1327.github.io/Test/Mole_Hole/Mole_Hole.css?_'+(new Date().getDay());
        document.body.appendChild(s);
        console.log(s)
        document.body.appendChild(l);
        console.log(l)
    };
})();