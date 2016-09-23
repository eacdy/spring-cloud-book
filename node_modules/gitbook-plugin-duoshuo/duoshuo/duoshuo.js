require(["gitbook", "jQuery"], function(gitbook, $) {

    var root = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);

    var loadDuoshuoDynamic = function() {
        var stylesheetURL = getStylesheetURL();
        injectStylesheet(stylesheetURL);

        var threadId = location.pathname.replace(/\//g,'-');
        if (threadId.charAt(threadId.length - 1) == '-') {
            threadId = threadId + 'index.html';
        }
        var duoshuoDiv = document.createElement('div');
        duoshuoDiv.setAttribute('data-thread-key', threadId);
        duoshuoDiv.setAttribute('data-url', location.href);
        DUOSHUO.EmbedThread(duoshuoDiv);
        $(".book-body .page-inner").append('<div id="comment-box"></div>');
        $("#comment-box").append(duoshuoDiv);
        DUOSHUO.ThreadCount(duoshuoDiv ,{"type": "EmbedThread"});
    };

    var getStylesheetURL = function() {
        if (duoshuoQuery.stylesheet) {
            return duoshuoQuery.stylesheet;
        }
        var theme = duoshuoQuery.theme || DUOSHUO.theme || DUOSHUO.site.data.theme || "default";
        if (theme === 'none') {
            return;
        }
        var staticPath = document.location.protocol + "//static.duoshuo.com";
        var themeCode = {
            "default": "d6149e1c",
            "dark": "c11b5925",
            "bluebox": "dbc0a9af"
        };
        return staticPath + "/styles/embed" + (theme ? "." + theme + ".css?" + themeCode[theme] : "." + duoshuoQuery.short_name) + ".css";
    };

    var injectStylesheet = function(url) {
        var styleNode = document.createElement("link");
        styleNode.type = "text/css";
        styleNode.rel = "stylesheet";
        styleNode.href = url;
        root.appendChild(styleNode);
    };

    var loadDuoshuoScript = function() {
        var ds = document.createElement('script');
        ds.onload = loadDuoshuoDynamic;
        ds.type = 'text/javascript';
        ds.async = true;
        ds.charset = 'UTF-8';
        ds.src = document.location.protocol + '//static.duoshuo.com/embed.js';
        root.appendChild(ds);
    };

    gitbook.events.bind("start", function(e, config){
        window.duoshuoQuery = config.duoshuo || {};
        (document.location.protocol == 'https:') ? 'https:' : 'http:';
    });

    gitbook.events.bind("page.change", function(e){
        loadDuoshuoScript();
    });

});
