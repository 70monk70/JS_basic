/*1 Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

function chessBoard() {
    let mainBlock = document.querySelector('.mainBlockTask1')
    let block;
    let flag = true

    for (let y = 0; y < 10; y++) {
        flag = !flag
        for (let x = 0; x < 10; x++) {
            block = document.createElement('div')

            if (flag) block.className = 'block black'
            else block.className = 'block white'

            mainBlock.appendChild(block)
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
            }
            flag = !flag

        }
    }
}
chessBoard()
