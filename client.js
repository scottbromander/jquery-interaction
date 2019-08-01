let numOfEmployees = 0;

$(document).ready(init);

function init() {
    $('.js-btn-welcome').on('click', welcome);
    $('.js-container').on('click', '.js-btn-promote', promoteEmployee);
    $('.js-container').on('click', '.js-btn-delete', deleteEmployee);

    const people = ['Scott', 'Myron', 'Rachael','Shanice', 'James', 'Ellen', 'Luke', 'Macy'];

    for (let person of people) {
        numOfEmployees++;
        $('.js-container').append(`
            <div class="box green">
                <p>${person}</p>
                <button class="js-btn-promote">Promote!</button>
                <button class="js-btn-delete">Remove</button>
            </div>
        `);
    }

    console.log(numOfEmployees);
    $('.js-employee-num').text(numOfEmployees + ' employees work here!');
}

function promoteEmployee() {
    // 'this' is the element that was clicked!
    // $(this).parent().children().first().text();
    
    // $(this).parent().removeClass('green');
    $(this).parent().toggleClass('yellow');
    $(this).parent().toggleClass('green');
}

function deleteEmployee() {
    numOfEmployees--;
    $(this).parent().remove();
    $('.js-employee-num').text(numOfEmployees + ' employees work here!');
}

function welcome() {
    console.log(this);
    $('.js-container').append(`Hello!`);
}