/*3 * Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.

Получилось колхозно, т.к. много if и прописанных inline-стилей, пришлось  использовать костыли. Уже когда делал, понял, что проще было бы сделать таблицей, но поскольку начал делать в таком виде - решил оставить.
Если есть какие-то замечания, то только рад буду выслушать)
*/

function chessBoard() {
    let mainBlock = document.querySelector('.mainBlockTask3')
    let block;
    let flag = true
    figure_black = {
        1: ['', 'Л', 'Кн', 'С', 'Кл', 'Ф', 'С', 'Кн', 'Л'],
        2: ['', 'П', 'П', 'П', 'П', 'П', 'П', 'П', 'П']
    }
    figure_white = {
        7: ['', 'П', 'П', 'П', 'П', 'П', 'П', 'П', 'П'],
        8: ['', 'Л', 'Кн', 'С', 'Кл', 'Ф', 'С', 'Кн', 'Л']
    }

    for (let y = 0; y < 10; y++) {
        flag = !flag
        for (let x = 0; x < 10; x++) {
            block = document.createElement('div')

            if (flag) block.className = 'block black'
            else block.className = 'block white'
            if (figure_black[y] !== undefined && figure_black[y][x] !== undefined) {
                content = figure_black[y][x]
                block.innerHTML = content
                block.style.fontSize = '30px'
                block.style.color = 'black'
                block.style.textShadow = '1px 1px 1px white'
                block.style.textAlign = 'center'
            }
            else if (figure_white[y] !== undefined && figure_white[y][x] !== undefined) {
                content = figure_white[y][x]
                block.innerHTML = content
                block.style.fontSize = '30px'
                block.style.color = 'white'
                block.style.textShadow = '1px 1px 1px black'
                block.style.textAlign = 'center'
            }
            if (y == 0 || y == 9) {
                let letters = ''
                letters = x > 0 && x < 9 ? 'ABCDEFGH'.charAt(x - 1) : null;
                block.innerHTML = letters
                block.className = 'block lettersAndNumbers'
            }
            else if (x == 0 || x == 9) {
                let numbers = 9 - y
                block.innerHTML = numbers
                block.className = 'block lettersAndNumbers'
                block.style.color = 'black'
                block.style.textShadow = ''
            }
            mainBlock.appendChild(block)
            flag = !flag
        }
    }
}
chessBoard()