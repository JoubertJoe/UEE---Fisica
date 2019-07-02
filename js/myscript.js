function linha() {
    // F = K * (|Q1| * |Q2|) / Distancia^2
    var d;
    var µ = Math.pow(10, -6);
    var n = Math.pow(10, -9);

    var d1 = parseFloat($("#posicao01").text().trim());
    var d2 = parseFloat($("#posicao02").text().trim());
    d = d1 - d2;
    if (d < 0) {
        d = d * (-1);
    }

    var f;
    var k;
    var q1 = parseFloat($("#carga01").text().trim());
    var q2 = parseFloat($("#carga02").text().trim());


    if ($('#micro1').is(':checked')) {
        q1 = q1 * µ;
    }
    if ($('#nano1').is(':checked')) {
        q1 = q1 * n;
    }

    if ($('#micro2').is(':checked')) {
        q2 = q2 * µ;
    }
    if ($('#nano2').is(':checked')) {
        q2 = q2 * n;
    }

    if ($('#micro3').is(':checked')) {
        q3 = q3 * µ;
    }
    if ($('#nano3').is(':checked')) {
        q3 = q3 * n;
    }



    if (q1 < 0) {
        q1 = q1 * (-1);
    }

    if (q2 < 0) {
        q2 = q2 * (-1);
    }

    k = 9 * Math.pow(10, 9);
    var d;

    f = k * (q1 * q2) / Math.pow(d, 2);
    console.log("Força: " + f);
    console.log("carga1: " + q1);
    console.log("carga2: " + q2);
    console.log("distancia: " + d);
    console.log("Distancia01: " + d1);
    console.log("Distancia02: " + d2);
    console.log("Constante: " + k);
    $('#forca').html("F = " + f);
    
    if (f = Infinity){
        $('#forca').html("F = <i class='fas fa-infinity'></i>");
    }

    

}