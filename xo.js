let title = document.querySelector('.title');
let turn = 'x';
let squares = [];

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;


    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && [1] != '') {
        console.log('done')
    }

    function game(id)

    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'o';



    }
}
.winner() {

}