$(function () {
    var urlParams = getURLParams(window.location.search);
    var site = urlParams.site || "";
    var username = urlParams.username || "";
    if (username) {
        window.LPJsMethodName = function (callback) {
            callback(username);
        };
    }

    // if site and username are available in query param- apply lpTag
    if (site && username) {
        /* jshint ignore:start */
        window.lpTag = window.lpTag || {}, "undefined" == typeof window.lpTag._tagCount ? (window.lpTag = { site: site || "", section: lpTag.section || "", tagletSection: lpTag.tagletSection || null, autoStart: lpTag.autoStart !== !1, ovr: lpTag.ovr || { domain: 'lptag-dev.dev.lprnd.net', tagjs: 'lptag-dev.dev.lprnd.net' }, _v: "1.7.0", _tagCount: 1, protocol: "https:", events: { bind: function (t, e, i) { lpTag.defer(function () { lpTag.events.bind(t, e, i) }, 0) }, trigger: function (t, e, i) { lpTag.defer(function () { lpTag.events.trigger(t, e, i) }, 1) } }, defer: function (t, e) { 0 == e ? (this._defB = this._defB || [], this._defB.push(t)) : 1 == e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t)) }, load: function (t, e, i) { var n = this; setTimeout(function () { n._load(t, e, i) }, 0) }, _load: function (t, e, i) { var n = t; t || (n = this.protocol + "//" + (this.ovr && this.ovr.domain ? this.ovr.domain : "lptag.liveperson.net") + "/tag/tag.js?site=" + this.site); var a = document.createElement("script"); a.setAttribute("charset", e ? e : "UTF-8"), i && a.setAttribute("id", i), a.setAttribute("src", n), document.getElementsByTagName("head").item(0).appendChild(a) }, init: function () { this._timing = this._timing || {}, this._timing.start = (new Date).getTime(); var t = this; window.attachEvent ? window.attachEvent("onload", function () { t._domReady("domReady") }) : (window.addEventListener("DOMContentLoaded", function () { t._domReady("contReady") }, !1), window.addEventListener("load", function () { t._domReady("domReady") }, !1)), "undefined" == typeof window._lptStop && this.load() }, start: function () { this.autoStart = !0 }, _domReady: function (t) { this.isDom || (this.isDom = !0, this.events.trigger("LPT", "DOM_READY", { t: t })), this._timing[t] = (new Date).getTime() }, vars: lpTag.vars || [], dbs: lpTag.dbs || [], ctn: lpTag.ctn || [], sdes: lpTag.sdes || [], ev: lpTag.ev || [] }, lpTag.init()) : window.lpTag._tagCount += 1;
        /* jshint ignore:end */
        lpTag.sdes = lpTag.sdes || [];
        lpTag.sdes.push(
            { "type": "ctmrinfo", "info": {
                // customerId: "lpTest" + username
                customerId: username,
                userName: username
            }
        });
        document.getElementById('siteId').innerText = site;
    }

    //////////// UTIL FUNCTIONS ////////////

    /**
     * parses the query string and returns the query params
     * @param {String} search
     */
    function getURLParams(search) {
        var queryParams = {}, queryArray, singleQuery;
        queryArray = search.substr(1).split("&");
        for (var i = 0; i < queryArray.length; i++) {
            if (queryArray[i].indexOf("=") > -0) {
                singleQuery = queryArray[i].split("=");
                if (singleQuery.length == 2) {
                    queryParams[decodeURIComponent(singleQuery[0])] = decodeURIComponent(singleQuery[1]);
                }
            }
        }
        return queryParams;
    }

});