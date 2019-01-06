var tmp = "1200";

function myFunction() {

    var x = 1;
    alert("The race is going to start");
    var racers = [document.getElementById("horse1"), document.getElementById("horse2"), document.getElementById("horse3"),
        document.getElementById("horse4"), document.getElementById("horse5")
    ];
    var interval = setInterval(race, 50);

    function race() {

        if (parseInt(document.getElementById("horse1").style.left, 10) == tmp && parseInt(document.getElementById("horse2")
                .style.left, 10) == tmp && parseInt(document.getElementById("horse3").style.left, 10) == tmp && parseInt(
                document.getElementById("horse4").style.left, 10) == tmp && parseInt(document.getElementById("horse5").style.left,
                10) == tmp) {
            clearInterval(interval);
            racers[0].style.left = "20px";
            racers[1].style.left = "20px";
            racers[2].style.left = "20px";
            racers[3].style.left = "20px";
            racers[4].style.left = "20px";
        }

        var racer = racers[Math.floor(Math.random() * racers.length)];
        var newPos = parseInt(racer.style.left || 0) + (Math.floor(Math.random() * 40));


        if (newPos + racer.clientWidth >= tmp) {
            newPos = tmp;

        }

        racer.style.left = newPos + "px";

        if ((newPos + racer.clientWidth) >= tmp) {


            var r1 = parseInt(document.getElementById("horse1").style.left, 10);
            var r2 = parseInt(document.getElementById("horse2").style.left, 10);
            var r3 = parseInt(document.getElementById("horse3").style.left, 10);
            var r4 = parseInt(document.getElementById("horse4").style.left, 10);
            var r5 = parseInt(document.getElementById("horse5").style.left, 10);
            var list = [{
                    ky: document.getElementById('horse1').name,
                    vl: r1
                },
                {
                    ky: document.getElementById('horse2').name,
                    vl: r2
                },
                {
                    ky: document.getElementById('horse3').name,
                    vl: r3
                },
                {
                    ky: document.getElementById('horse4').name,
                    vl: r4
                },
                {
                    ky: document.getElementById('horse5').name,
                    vl: r5
                }
            ];

            list.sort(function (a, b) {
                return a.vl - b.vl
            });


            var dv = "The winner is : " + list[4].ky + "<br>Second  : " + list[3].ky + "<br>Third : " + list[2].ky +
                "<br>Fourth : " + list[1].ky + "<br>Fifth : " + list[0].ky;

            if (x == 1) {
                document.getElementById("winner").innerHTML = dv;
                x++;
            }

        }

    }
}