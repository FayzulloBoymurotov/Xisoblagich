// HOMEWORK

var form = document.querySelector(".js-form")

var input = document.querySelector(".js-input");

var button = document.querySelector(".js-button");

var text = document.querySelector(".js-text")

var run = document.querySelector(".js-time")

var bicycle = document.querySelector(".b12")

var car = document.querySelector(".b13")

var plane = document.querySelector(".b14")


form.addEventListener("submit", function (event) {
    event.preventDefault()


    // RUNNIG

    run.textContent = `${Math.floor(input.value / 3.6)} soat

    ${Math.floor(
        (input.value / 3.6) * 60 - Math.floor(input.value / 3.6) * 60
    )} min

    ${Math.floor(
        ((input.value / 3.6) * 60 - Math.floor(input.value / 3.6) * 60) * 60 -
        Math.floor(
            (input.value / 3.6) * 60 - Math.floor(input.value / 3.6) * 60
        ) *
        60
    )} secund `;


    // BICYCLE

    bicycle.textContent = `${Math.floor(input.value / 70)} soat

    ${Math.floor(
        (input.value / 70) * 60 - Math.floor(input.value / 20.1) * 60
    )} min

    ${Math.floor(
        ((input.value / 20.1) * 60 - Math.floor(input.value / 20.1) * 60) * 60 -
        Math.floor(
            (input.value / 20.1) * 60 - Math.floor(input.value / 20.1) * 60
        ) *
        60
    )} secund `;


    // CAR

    car.textContent = `${Math.floor(input.value / 70)} soat

    ${Math.floor(
        (input.value / 70) * 60 - Math.floor(input.value / 70) * 60
    )} min

    ${Math.floor(
        ((input.value / 70) * 60 - Math.floor(input.value / 70) * 60) * 60 -
        Math.floor(
            (input.value / 70) * 60 - Math.floor(input.value / 70) * 60
        ) *
        60
    )} secund `;


    // PLANE

    plane.textContent = `${Math.floor(input.value / 800)} soat

    ${Math.floor(
        (input.value / 800) * 60 - Math.floor(input.value / 800) * 60
    )} min

    ${Math.floor(
        ((input.value / 800) * 60 - Math.floor(input.value / 800) * 60) * 60 -
        Math.floor(
            (input.value / 800) * 60 - Math.floor(input.value / 800) * 60
        ) *
        60
    )} secund `;

})

