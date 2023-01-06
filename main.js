let confirmbtn = document.querySelector(".confirm");
let name_in = document.querySelector(".name-in");
let card_num_in = document.querySelector(".card-n");
let input_month = document.querySelector(".month");
let input_year = document.querySelector(".year");
let input_cvc = document.querySelector(".cvc");
//show on it
let card_cvc = document.querySelector(".card-cvc");
let card_num = document.querySelector(".card-num");
let card_name = document.querySelector(".card-name");
let c_month = document.querySelector("#mon");
let c_year = document.querySelector("#theyear");
//errors
let name_error = document.querySelector(".error-n");
let num_error = document.querySelector(".error-N");
let montherror = document.querySelector(".b-2");
let yearerror = document.querySelector(".b-3");
let cvcerror = document.querySelector(".b-4");
//pages
let fill_form = document.querySelector(".fill-form");
let thankyou = document.querySelector(".thankyou");
confirmbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let one = false;
    let two = false;
    let three = false;
    let four = false;
    let five = false;
    if (name_in.value == "") {
        name_in.classList.add("get-error");
        name_error.style.display = "block";
    }
    else {
        card_name.innerHTML = name_in.value;
        one = true;

        if (name_error.style.display === "block") {
            name_error.style.display = "none";
            name_in.classList.remove("get-error");
        }
    }
    if (card_num_in.value != "") {
        let c_val = card_num_in.value;
        // console.log(isNaN(c_val.split(" ").join("")));
        if (!isNaN(c_val.split(" ").join(""))) {
            card_num.innerHTML = card_num_in.value;
            two = true;
            if (num_error.style.display === "block") {
                num_error.style.display = "none";
                card_num_in.classList.toggle("get-error");
            }
        }
        else {
            card_num_in.classList.add("get-error");
            num_error.style.display = "block";
        }
    }
    else {
        card_num_in.classList.add("get-error");
        num_error.style.display = "block";
    }
    if (input_month.value == "") {
        input_month.classList.add("get-error");
        montherror.style.display = "block";

    }
    else {
        c_month.innerHTML = input_month.value;
        three = true;
        if (montherror.style.display === "block") {
            input_month.classList.toggle("get-error");
            montherror.style.display = "none";
        }
    }
    if (input_year.value == "") {
        input_year.classList.add("get-error");
        yearerror.style.display = "block";
    }
    else {
        c_year.innerHTML = input_year.value;
        four = true;
        if (yearerror.style.display === "block") {
            console.log("red");
            input_year.classList.toggle("get-error");
            yearerror.style.display = "none";

        }
    }
    if (input_cvc.value == "") {
        input_cvc.classList.add("get-error");
        cvcerror.style.display = "block";
    }
    else {
        card_cvc.innerHTML = input_cvc.value;
        five = true;
        if (cvcerror.style.display === "block") {
            input_cvc.classList.toggle("get-error");
            cvcerror.style.display = "none";
        }
    }

    if (one === true && two === true && three === true && four === true && five === true) {
        fill_form.style.display = "none";
        thankyou.style.display = "block";
    }


})