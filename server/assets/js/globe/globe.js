var globe,
    globeCount = 0;

function createGlobe() {

    var newData = [];
    globeCount++;

    $("#globe canvas").remove();
    newData = []// data.slice();

    var width = $("#hwy-comm-globe").width();
    let height = $("#hwy-comm-globe").height();

    globe = new ENCOM.Globe(width - 50, height - 50, {
        //font: "22px arial, sans-serif;",
        data: newData, // copy the data array
        tiles: grid.tiles,
       // baseColor: "#ed0b0b",
      //  markerColor: "blue",
      //  pinColor: "#c43838",
      //  satelliteColor: "blue",
     //   waveColor: "red",
     //   introLinesColor: "red",
        // scale: 10,
        // dayLength: 1000 * 1,
        // introLinesDuration: 100,
        // maxPins: 10,
        // maxMarkers: 1,
        // viewAngle: 100
    });

    $("#globe").append(globe.domElement);
    globe.init(start);

    // window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    globe.camera.aspect = window.innerWidth / window.innerHeight;
    globe.camera.updateProjectionMatrix();
    globe.renderer.setSize(window.innerWidth, window.innerHeight);

}


function animate() {

    if (globe) {
        globe.tick();
    }

    lastTickTime = Date.now();
    requestAnimationFrame(animate);
}

function start() {

    if (globeCount == 1) {

        animate();

        /* add pins at random locations */
        // setInterval(function () {
        //     if (!globe) {
        //         return;
        //     }

        //     var lat = Math.random() * 180 - 90,
        //         lon = Math.random() * 360 - 180,
        //         name = "Test " + Math.floor(Math.random() * 100);

        //     globe.addPin(lat, lon, name);

        // }, 5000);
    }
}

function addPinToGlobe(data) {

    if (!globe) {
        return;
    }
    
    globe.addPin(data.lat, data.long, data.signature);
}

