let title = document.querySelector('.title');
let turu = 'x';
let squares = [];

function end(num1, mum2, mun3) {
    title.innerHTML = '${squares[num1]} winner';
    document.getElementById('item' + 1).style.background = '#000';
    document.getElementById('item' + 2).style.background = '#000';
    document.getElementById('item' + 3).style.background = '#000';
    setInterval(function() { title.innerHTML += '.' }, 1000);
    setTimeout(function() { location.reload() }, 4000);
}

function winnner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i);
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        end(1, 2, 3);

    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        end(4, 5, 6)
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        end(7, 8, 9)
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '') {
        end(1, 4, 7)
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        end(2, 5, 8)
    } else if (squares[3] == squares[6] && squares[9] == squares[9] && squares[6] != '') {
        end(3, 6, 9)
    } else if (squares[3] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        end(3, 5, 8)
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        end(3, 5, 7)
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn == 'x' && element.innerHTML == '')

    {
        element.innerHTML = 'X';
        turu = 'o';
        title.innerHTML = 'O';


    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turu = 'x';
        title.innerHTML = 'X';

    }

    function winnner()










}
