function updateRecentSignature() {

    setInterval(function () {

        var height = $("#hwy-recent-signatures .hwy-card").height();
        var width = $("#hwy-recent-signatures .hwy-card").height();

        $("#hwy-recent-signature-list").css({ "height": (height - 30) })
        $("#hwy-recent-signature-list").prepend("<li>"+ Math.random() +"<li>");

    }, 1000);
}

function UpdateRecentFileActivity() {

    setInterval(function () {

        var height = $("#hwy-recent-file-activity .hwy-card").height();
        var width = $("#hwy-recent-file-activity .hwy-card").height();
        
        $("#hwy-recent-file-activity-list").css({ "height": (height - 30) }).prepend("<li>"+ Math.random() +"<li>")

    }, 1000);
}

function updateRecentAppsVisit() {
    setInterval(function () {

        var height = $("#hwy-recent-applications .hwy-card").height();
        var width = $("#hwy-recent-applications .hwy-card").height();
        
        $("#hwy-recent-apps-list").css({ "height": (height - 30) }).prepend("<li>"+ Math.random() +"<li>")

    }, 1000);
}

UpdateRecentFileActivity();
updateRecentSignature();
updateRecentAppsVisit();