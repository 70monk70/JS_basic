/*Репозиторий с исходным кодом змейки в материалах к уроку.
1.Добавить выход из игры: когда змейка врезается сама в себя, когда пользователь нажимает на кнопку "Сдаться".(строчки: 100-107, 356-361)
2.Добавить паузу(строчки: 81-95)
3.Добавить подсчет очков, при съеденном яблоке.(строчки: 157)
4.(*) Научить змейку двигаться самой в заданном направлении (например, через функцию setInterval, setTimeout), как в классической игре.(строчки: 53-66, 110-129, 137, 474)
5.(**) Оптимизировать (переписать) некрасивые и неэффективные куски кода (строчки: 184, 286-290, 319, 377-383, 444-447)
По заданию 5 исправил все, что нашел, кроме 301-305.
*/


const GAME_STATUS_STARTED = 'game started';
const GAME_STATUS_PAUSED = 'game paused';
const GAME_STATUS_STOPPED = 'game stopped';

const SNAKE_DIRECTION_UP = 'up';
const SNAKE_DIRECTION_DOWN = 'down';
const SNAKE_DIRECTION_LEFT = 'left';
const SNAKE_DIRECTION_RIGHT = 'right';

/**
 * Объект с настройками конфигурации игры
 */
const config = {
    /**
     * Размер поля.
     */
    size: 20,
    score: 0, //добавляем значение очков для дальнейшего подсчета 
    speed: 100,
    direction: SNAKE_DIRECTION_RIGHT,/*выносим значение переменной направления, чтобы можно было работать с ней из люблой точки программы; эту переменную переаем в функцию move, которая отвечает за движение змейки;  переопределяем значение переменной с помощью функции changeMove*/
    flag: true /* добавляем переменную, с помощью которой будем запускать или останавливать движение змейки*/
};

/**
 * Основной объект игры.
 */
const game = {

    /**
     * Функция ищет HTML элемент контейнера игры на странице.
     *
     * @returns {HTMLElement} Возвращает HTML элемент.
     */
    getElement(arg) {
        return document.getElementById(arg);
    },

    /**
     * Функция выполняет старт игры.
     */

    /*функция отвечает за самостоятельное движение змейки в выбранном направлении. Переменная set определена в глобальной области видимости, чтоюы с ней можно было работать внутри функции. В качестве аргумента функции передаем config.flag, который изменяет свое значение на true(если gameStatus = Старт), false(gameStatus = Пауза), null(если gameStatus = Остановлена)*/
    startMove(flag) {
        switch (flag) {
            case true:
                set = setInterval(game.move, config.speed);
                break;
            case false:
                clearInterval(set);
                break;
            case null:
                clearInterval(set);
                break;
            default:
                return;
        }
    },

    start() {
        this.setGameStatus(GAME_STATUS_STARTED);

        board.render();
        snake.render();
        food.render();
        this.startMove(config.flag)
    },

    /**
     * Функция выполняет паузу игры.
     */
    pause() {
        /* добавить сюда код */
        /*при каждом нажатии на кнопку Пауза переменная config.flag меняет свое значение на противоположное (true либо false)*/
        if (config.flag === true) {
            this.setGameStatus(GAME_STATUS_PAUSED);
            alert('Вы поставили игру на паузу, для продолжения нажмите на кнопку "Пауза" еще раз!');
            config.flag = false;
            this.startMove(config.flag);
        }
        else if (config.flag === false) {
            this.setGameStatus(GAME_STATUS_STARTED);
            config.flag = true;
            this.startMove(config.flag);
        }
    },

    /**
     * Функция останавливает игру.
     */
    stop() {
        /* добавить сюда код */
        /* функция ставит значение переменной config.flag = null и дальнейшее движение змейкой невозможно. Кстати, тут вопрос: нужно ли удалять обработчик событий с события 'keydown'? По сути, перемещение змейки невозмонжно, но события все равно обрабатываются...*/

        this.setGameStatus(GAME_STATUS_STOPPED);
        config.flag = null
        this.startMove(config.flag)
        alert(`Вы проиграли и набрали ${config.score} очков`);
    },

    changeMove(event) {
        /* смотрим на код клавишы и
        * устанавливаем соответсвующее направление движения */
        switch (event.keyCode) {
            case 38:
                config.direction = SNAKE_DIRECTION_UP;
                break;
            case 40:
                config.direction = SNAKE_DIRECTION_DOWN;
                break;
            case 37:
                config.direction = SNAKE_DIRECTION_LEFT;
                break;
            case 39:
                config.direction = SNAKE_DIRECTION_RIGHT;
                break;
            default:
                return;
        }
    },

    /**
    * Функция выполняет передвижение змейки по полю.
    *
    * @param event {KeyboardEvent} Событие нажатия на клавишу.
    */
    move() {
        direction = config.direction

        /* устанавливаем позицию для змейки
         * и запрашиваем координаты следующей позиции */
        snake.setDirection(direction);
        const nextPosition = snake.getNextPosition();

        /* проверяем совпадает ли следующая позиция с какой-нибудь едой */
        const foundFood = food.foundPosition(nextPosition);

        /* если найден индекс еды (то есть позиция совпадает) */
        if (foundFood !== -1) {
            /* устанавливаем следующую позицию змейки с вторым параметром "не удалять хвост змейки",
             * змейка съев еду вырастает на одну клетку */
            snake.setPosition(nextPosition, false);

            /* удаляем еду с поля */
            food.removeItem(foundFood);

            /* увеличиваем значение очков на 1 и вставляем значение в элемент "score-value"*/
            (game.getElement('score-value')).innerText = ++config.score;

            /* генерируем новую еду на поле */
            food.generateItem();

            /* перерендериваем еду */
            food.render();
        } else {
            /* если индекс не найден, то просто устанавливаем новую координату для змейки */
            snake.setPosition(nextPosition);
        }

        /* перерендериваем змейку */
        snake.render();
    },

    /**
     * Функция устанавливает текущий статус игры,
     * раскрашивая контейнер игры в нужный цвет.
     *
     * @param status {GAME_STATUS_STARTED | GAME_STATUS_PAUSED | GAME_STATUS_STOPPED} Строка представляющая статус.
     */
    setGameStatus(status) {
        const element = game.getElement('game');

        // обратить внимание, как сделать красивее
        /*значение переменных GAME_STATUS_STARTED, GAME_STATUS_PAUSED, GAME_STATUS_STOPPED изменил (добавил game), чтобы класс соответствовал заданному в css*/
        element.setAttribute('class', status)
        //element.classList.remove(GAME_STATUS_STARTED, GAME_STATUS_PAUSED, GAME_STATUS_STOPPED);
        //element.classList.add(status);
    }
};

let set = null; //объявляем переменную, с помощью которой задаем самостоятельное движение змейки

/**
 * Объект, представляющий поле, где ползает змейка.
 */
const board = {

    // cells: [
    //     { top: 0, left: 0, className: '' }
    // ],

    /**
     * Функция ищет HTML элемент поля на странице.
     *
     * @returns {HTMLElement} Возвращает HTML элемент.
     */
    getElement() {
        return document.getElementById('board');
    },

    /**
     * Функция отрисовывает поле с клетками для игры.
     */
    render() {
        const board = this.getElement();

        /* рисуем на странице 20*20 клеток */
        for (let i = 0; i < config.size ** 2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            /* высчитываем и записываем в data атрибуты
             * координаты от верхней и левой границы */
            cell.dataset.top = Math.trunc(i / config.size);
            cell.dataset.left = i % config.size;

            board.appendChild(cell);
        }
    }
};

/**
 * Объект, представляющий клетку на поле.
 */
const cells = {
    /**
     * Функция ищет HTML элементы клеток на странице.
     *
     * @returns { HTMLCollectionOf.<Element>} Возвращает набор HTML элементов.
     */
    getElements() {
        return document.getElementsByClassName('cell');
    },

    /**
     * Функция задает класс для клетки по заданным координатам.
     *
     * @param coordinates {Array.<{top: number, left: number}>} Массив координат клеток для изменения.
     * @param className {string} Название класса.
     */
    renderItems(coordinates, className) {
        const cells = this.getElements();

        /* для всех клеток на странице удаляем переданный класс */
        for (let cell of cells) {
            cell.classList.remove(className);
        }

        /* для заданных координат ищем клетку и добавляем класс */
        for (let coordinate of coordinates) {
            const cell = document.querySelector(`.cell[data-top="${coordinate.top}"][data-left="${coordinate.left}"]`);
            cell.classList.add(className);
        }
    }
};

/**
 * Объект, представляющий змейку.
 */
const snake = {

    /**
     * Текущее направление движение змейки.
     * По умолчанию: направо, потому змейка при старте занимает первые три клетки.
     */
    direction: SNAKE_DIRECTION_RIGHT,

    /**
     * Содержит массив объектов с координатами частей тела змейки.
     * По умолчанию: первые три клетки.
     *
     * NOTE: обратить внимание, как сделать красивее.
     * Поменять порядок координат, сейчас первый элемент массива означает хвост.
     * 
     * Порядок координат изменил, первый элемент означает голову. В функции getNextPorsition в переменную  position передается первый элемент массива parts, в функции setPosition изменил методы: вместо shift - pop, pust - unshift 
     */
    parts: [
        { top: 0, left: 2 },
        { top: 0, left: 1 },
        { top: 0, left: 0 },
    ],

    /**
     * Функция устанавливает направление движения.
     *
     * @param direction {'up' | 'down' | 'left' | 'right'} Направление движения змейки.
     */
    setDirection(direction) {
        /* проверка не пытается ли пользователь пойти в противоположном направлении,
         * например, змейка ползет вправо, а пользователь нажал стрелку влево */
        /* обратить внимание, как сделать красивее и сократить условие */
        if (this.direction === SNAKE_DIRECTION_UP && direction === SNAKE_DIRECTION_DOWN
            || this.direction === SNAKE_DIRECTION_DOWN && direction === SNAKE_DIRECTION_UP
            || this.direction === SNAKE_DIRECTION_LEFT && direction === SNAKE_DIRECTION_RIGHT
            || this.direction === SNAKE_DIRECTION_RIGHT && direction === SNAKE_DIRECTION_LEFT) {
            return;
        }

        this.direction = direction;
    },

    /**
     * Функция считает следующую позицию головы змейки,
     * в зависимости от текущего направления.
     *
     * @returns {{top: number, left: number}} Возвращает объект с координатами.
     */
    getNextPosition() {
        /* получаем позицию головы змейки */
        const position = { ...this.parts[0] };

        /* в зависимости от текущего положения
         * высчитываем значение от верхней и левой границы */
        switch (this.direction) {
            case SNAKE_DIRECTION_UP:
                position.top -= 1;
                break;
            case SNAKE_DIRECTION_DOWN:
                position.top += 1;
                break;
            case SNAKE_DIRECTION_LEFT:
                position.left -= 1;
                break;
            case SNAKE_DIRECTION_RIGHT:
                position.left += 1;
                break;
        }

        /* если змейка выходит за верхний или нижний край поля,
         * то изменяем координаты на противоположную сторону,
         * чтобы змейка выходя за границы возвращалась обратно на поле */
        if (position.top === -1) {
            position.top = config.size - 1;
        } else if (position.top > config.size - 1) {
            position.top = 0;
        }

        /* если змейка выходит за левый или правый край поля,
         * то изменяем координаты на противоположную сторону,
         * чтобы змейка выходя за границы возвращалась обратно на поле */
        if (position.left === -1) {
            position.left = config.size - 1;
        } else if (position.left > config.size - 1) {
            position.left = 0;
        }

        /* каждый элемент массива с координатами тела змейки (snake.parts) сравниваем со значениями следующей позиции змейки (position), если они равны - останавливаем игру*/
        (snake.parts).forEach(element => {
            if (element.top == position.top && element.left == position.left) {
                game.stop()
            }
        })
        return position;
    },

    /**
     * Функция устанавливает позицию для змейки.
     *
     * @param position {{top: number, left: number}} Координаты новой позиции.
     * @param shift Флаг, указывающий, нужно ли отрезать хвост для змейки.
     */
    setPosition(position, shift = true) {
        /* проверяем флаг, указывающий, нужно ли отрезать хвост для змейки,
         * если флаг положительный, то отрезаем хвост змейки (первый элемент в массиве),
         * чтобы длина змейки не изменилась,
         * если флаг будет отрицательным, то при установки позиции, мы не отрезаем хвост,
         * а значит увеличиваем змейку на одну клетку, это будет означать, что она съела еду */
        if (shift) {
            this.parts.pop();
        }

        /* добавляем новые координаты в конец массива (голова змейки) */
        this.parts.unshift(position);
    },

    /**
     * Функция отрисовывает змейку на поле.
     */
    render() {
        cells.renderItems(this.parts, 'snake');
    }
};

/**
 * Объект, представляющий еду для змейки.
 */
const food = {

    /**
     * Содержит массив объектов с координатами еды на поле.
     */
    items: [
        { top: 5, left: 5 },
        { top: 1, left: 2 },
        { top: 8, left: 6 }
    ],

    /**
     * Функция выполняет поиск переданных координат змейки в массиве с едой.
     *
     * @param snakePosition {{top: number, left: number}} Позиция головы змейки.
     *
     * @returns {number} Возвращает индекс найденного совпадения из массива с едой,
     * если ничего не найдено, то -1.
     */
    foundPosition(snakePosition) {
        /* здесь происходит вызов функции comparerFunction для каждого элемента в массиве,
         * если функция вернет true, то для этого элемента будет возвращен его индекс,
         * если функция ни разу не вернет true, то результатом будет -1 */
        return this.items.findIndex((item) =>
            item.top === snakePosition.top && item.left === snakePosition.left
        );
    },

    /**
     * Функция удаляет один элемент по индексу из массива с едой.
     *
     * @param foundPosition Индекс найденного элемента.
     */
    removeItem(foundPosition) {
        this.items.splice(foundPosition, 1);
    },

    /**
     * Функция генерирует объект с координатами новой еды.
     */
    generateItem() {
        const newItem = {
            top: getRandomNumber(0, config.size - 1),
            left: getRandomNumber(0, config.size - 1)
        };

        // добавить проверку нет ли у нас такого элемента
        /*Если массив items не содержит newItem, то доавляем элемент в массив, если содержит - вызывает функцию generateItem (на счет нового вызова функции не уверен, но все же оставлю)*/
        if (!this.items.includes(newItem)) {
            this.items.push(newItem);
        }
        else { this.generateItem() }
    },

    /**
     * Функция отрисовывает еду на поле.
     */
    render() {
        cells.renderItems(this.items, 'food');
    }
};

/**
 * Функция, которая выполняет инициализацию игры.
 */
function init() {
    /* получаем кнопки */
    const startButton = document.getElementById('button-start');
    const pauseButton = document.getElementById('button-pause');
    const stopButton = document.getElementById('button-stop');

    /* добавляем обработчики клика на кнопки */
    startButton.addEventListener('click', game.start.bind(game));
    pauseButton.addEventListener('click', game.pause.bind(game));
    stopButton.addEventListener('click', game.stop.bind(game));

    /* добавляем обработчик при нажатии на любую кнопку на клавиатуре,
     * далее в методе мы будем проверять нужную нам клавишу */
    window.addEventListener('keydown', game.changeMove);
}

/**
 * Функция, генерирующая случайные числа.
 *
 * @param min {number} Нижняя граница генерируемого числа.
 * @param max {number} Верхняя граница генерируемого числа.
 *
 * @returns {number} Возвращает случайное число.
 */
function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

window.addEventListener('load', init);