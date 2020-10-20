import anime from 'animejs'

export var cubeAnime = () => {
    const timeline_plat = anime.timeline({
        loop: true
    });

    timeline_plat
        .add({
            targets: ["#platform-cont", ".title"],
            translateY: 40,
            easing: "easeInExpo",
            duration: 1980,
            delay: (el, i) => 10 + 10 * i
        })
        .add({
            duration: 1980,
            targets: ["#platform-cont", ".title"],
            translateY: 0,
            easing: "easeOutExpo",
            delay: (el, i) => 10 + 10 * i
        });

    // Wrap every letter in a span
    var textWrapper = document.querySelector(".title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span className='letter'>$&</span>"
    );

    const timeline = anime.timeline({
        loop: true
    });

    timeline
        .add({
            targets: ".title .letter",
            translateX: [0, -40],
            translateZ: 0,
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1320,
            delay: (el, i) => 360 + 20 * i,
            scale: [1, 0.2]
        })
        .add({
            targets: ".title .letter",
            translateX: [0, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1520,
            delay: (el, i) => 160 + 20 * i,
            scale: [0.2, 1]
        });

    const timeline_onPlat = anime.timeline({
        loop: true,
        easing: "easeInExpo"
    });

    const square = "307.13 56.82 517.99 184.77 307.06 305.94 96.2 178 307.13 56.82";
    const triangle =
        "307.13 56.82 517.99 184.77 195.2 238.07 195.2 238.07 307.13 56.82";
    const pause_right =
        "307.13 56.82 517.99 184.77 448.15 224.89 237.29 96.94 307.13 56.82";
    const pause_left =
        "165.77 138.03 376.63 265.98 307.06 305.94 96.2 178 165.77 138.03";
    const next_right =
        "307.13 56.82 517.99 184.77 227.65 216.51 227.65 216.51 307.13 56.82";
    const next_left =
        "131.12 157.93 341.98 285.88 307.06 305.94 96.2 178 131.12 157.93";

    timeline_onPlat
        .add({
            targets: "#Square",
            points: [
                { value: triangle },
                { value: pause_right },
                { value: next_right },
                { value: square }
            ],
            duration: 4000
        })
        .add(
            {
                targets: "#Line-left",
                points: [{ value: pause_left }, { value: next_left }, { value: square }],
                duration: 3000
            },
            "-=3000"
        );

}