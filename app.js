
var position_index;
var n_buttons;
var time_bucle;




function create_buttons() {


    var index = ' ';
    n_buttons = document.getElementById("content-box").children.length;
    for (i = 0; i < n_buttons; i++) {

        index += "<div class='b_index'><a href='#' onclick='select_screen(" + (i + 1) + ")'><i class='bi bi-octagon-fill'  id='ind_" + (i + 1) + "'></i></a></div> ";
        //console.log("<div class='b_index'><a href='#' onclick='select_screen(" + (i + 1) + ")'><i class='bi bi-octagon-fill'  id='ind_" + (i + 1) + "'></i></a></div> ")
    }

    document.getElementById("buttons").innerHTML += index;
    //document.getElementById("content-box").firstElementChild.innerHTML = index;

    for (i = 0; i < n_buttons; i++) {
        desactive_state("ind_" + (i + 1), "screen_" + (i + 1));
    }

    //Active Index
    active_state("ind_1", "screen_1");

    position_index = 1;

    time_bucle = setInterval(myTimer, 3000);
    //setTimeout(myTimer, 3000);

}

function select_screen(num_screen) {

    desactive_state("ind_" + position_index, "screen_" + position_index);

    position_index = num_screen;

    active_state("ind_" + position_index, "screen_" + position_index);

    clearInterval(time_bucle);
    time_bucle = setInterval(myTimer, 3000);

}


function up_button() {

    desactive_state("ind_" + position_index, "screen_" + position_index);
    position_index--;
    if (position_index < 1) {
        position_index = n_buttons;
    }
    console.log("ind" + position_index,);
    active_state("ind_" + position_index, "screen_" + position_index);

    clearInterval(time_bucle);
    time_bucle = setInterval(myTimer, 3000);

}

function down_button() {
    desactive_state("ind_" + position_index, "screen_" + position_index);
    position_index++;
    if (position_index > n_buttons) {
        position_index = 1;
    }
    console.log("ind" + position_index,);
    active_state("ind_" + position_index, "screen_" + position_index);

    clearInterval(time_bucle);
    time_bucle = setInterval(myTimer, 3000);
}



function myTimer() {



    var next_buttonactive;
    var next_screenactive;

    next_buttonactive = "ind_" + position_index;
    next_screenactive = "screen_" + position_index;

    desactive_state(next_buttonactive, next_screenactive);

    //console.log(position_index);

    position_index++;
    if (position_index > n_buttons) {
        position_index = 1;
    }


    next_buttonactive = "ind_" + position_index;
    next_screenactive = "screen_" + position_index;

    active_state(next_buttonactive, next_screenactive);
}

function active_state(button_id, screen_id) {

    var active_button = document.getElementById(button_id);
    var active_screen = document.getElementById(screen_id);


    // active_screen.style.opacity = "100%";
    active_button.style.color = "#353535";
    active_screen.style.display = "block";


}

function desactive_state(button_id, screen_id) {


    var desactive_button = document.getElementById(button_id);
    var desactive_screen = document.getElementById(screen_id);

    desactive_button.style.color = "#ffffff";

    //desactive_screen.style.opacity = "0%";
    //desactive_screen.style.transition = "opacity 2s";

    desactive_screen.style.display = "none";

}

