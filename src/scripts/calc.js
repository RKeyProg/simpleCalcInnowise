const calculatorInput = document.getElementById('calculatorInput');
const prevAction = document.getElementById('prevAction');
const buttons = document.querySelectorAll('.buttons__button');

calculatorInput.addEventListener('input', (e) => {
  calculatorInput.value = formatInput(e.target.value);
  checkFontSize();
});

function checkFontSize() {
  if (calculatorInput.value.length >= 15) {
    calculatorInput.style.fontSize = '1.5rem';
    prevAction.style.fontSize = '1rem';
  } else if (calculatorInput.value.length >= 9) {
    calculatorInput.style.fontSize = '2rem';
    prevAction.style.fontSize = '1.5rem';
  } else {
    calculatorInput.style.fontSize = '3rem';
  }
}

// Обработка нажатия кнопок
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const event = new KeyboardEvent('keydown', {
      key: button.dataset.value,
    });
    switch (button.dataset.value) {
      case 'reset':
        calculatorInput.value = '';
        prevAction.value = '';
        checkFontSize();
        break;
      case 'changeSign':
        if (calculatorInput.value) {
          calculatorInput.value = formatInput(
            calculate(calculatorInput.value) * -1
          );
        }
        break;
      case '=':
        prevAction.value = calculatorInput.value;
        calculatorInput.value = formatInput(calculate(calculatorInput.value));
        checkFontSize();
        break;

      default:
        if (isCurrentKeyValid(event)) {
          calculatorInput.value = formatInput(
            calculatorInput.value + button.dataset.value
          );
          checkFontSize();
        }
        break;
    }
  });
});

calculatorInput.addEventListener('keydown', (e) => {
  if (!isCurrentKeyValid(e)) e.preventDefault();
});

function isCurrentKeyValid(event) {
  const allowedKeys = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
    'Enter',
  ];

  const isOperator = ['+', '-', '*', '/', ',', '%'].includes(event.key);

  // Запрет на ввод знака в начале
  if (isOperator && event.key !== '-' && calculatorInput.value.length === 0) {
    return false;
  }

  // Проверка на разрешенные символы
  if (
    !(event.key >= '0' && event.key <= '9') &&
    !isOperator &&
    allowedKeys.indexOf(event.key) === -1 &&
    !event.ctrlKey
  ) {
    return false;
  }

  let lastOperator = getLastOperator();

  if (lastOperator === '%' && event.key >= '0' && event.key <= '9') {
    return false;
  } else if (
    lastOperator === '%' &&
    (event.key === '-' ||
      event.key === '+' ||
      event.key === '*' ||
      event.key === '/')
  ) {
    return true;
  } else if (
    event.key === '-' &&
    (lastOperator === '%' ||
      lastOperator === '*' ||
      lastOperator === '/' ||
      lastOperator === '+')
  ) {
    return true;
  } else if (event.key === '-' && lastOperator === '-') {
    return false;
  }

  if (isOperator && lastOperator) {
    if (event.key === ',') return false;

    calculatorInput.value = calculatorInput.value.slice(0, -1) + event.key;
    return false;
  }

  // Запрет на ввод больше двух запятых в числе
  if (event.key === ',' && isNumberHasComma()) {
    return false;
  }

  return true;
}

function getLastOperator() {
  const lastChar = calculatorInput.value.charAt(
    calculatorInput.value.length - 1
  );

  if (['+', '-', '*', '/', ',', '%'].includes(lastChar)) return lastChar;

  return '';
}

function isNumberHasComma() {
  const lastNumberPart = calculatorInput.value
    .split(/[+\-*/%]/)
    .pop()
    .trim();
  if (lastNumberPart.includes(',')) {
    return true;
  }

  return false;
}

function formatInput(val) {
  let currentValue = val.toString().replace(/\s/g, '').replace(/\./g, ',');

  // Отделение дробной части, ее не надо разделять на разряды
  const parts = currentValue.split(',');
  if (parts[0]) {
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return parts.join(',');
}

// calculate

function calculate(expression) {
  // Убираем все пробелы
  expression = expression.replace(/\s+/g, '').replace(/,/g, '.');

  // Функция для вычисления двух чисел с оператором
  function operate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return b;
    }
  }

  // Функция для вычисления выражения с приоритетами
  function evaluate(numbers, operators) {
    const values = [];
    const ops = [];

    for (let i = 0; i < numbers.length; i++) {
      values.push(parseFloat(numbers[i])); // Преобразуем строку в число
      if (i < operators.length) {
        while (
          ops.length &&
          precedence(ops[ops.length - 1]) >= precedence(operators[i])
        ) {
          const b = values.pop();
          const a = values.pop();
          const op = ops.pop();
          values.push(operate(a, b, op));
        }
        ops.push(operators[i]);
      }
    }

    while (ops.length) {
      const b = values.pop();
      const a = values.pop();
      const op = ops.pop();
      values.push(operate(a, b, op));
    }

    return values[0];
  }

  // Определяем приоритет операторов
  function precedence(operator) {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
  }

  // Создаем массивы для чисел и операторов
  let numbers = [];
  let operators = [];
  let numberBuffer = '';

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char) || char === '.' || (char === '%' && numberBuffer)) {
      // Если это цифра, точка или % после числа, собираем число
      numberBuffer += char;
    } else {
      // Если текущий символ - знаком минус и это либо первый символ,
      // либо предшествующий символ - оператор, то это часть числа
      if (char === '-' && (i === 0 || '+-*/'.includes(expression[i - 1]))) {
        numberBuffer += char; // Добавляем знак минус к числу
      } else {
        if (numberBuffer) {
          numbers.push(numberBuffer); // Добавляем собранное число с % если есть
          numberBuffer = ''; // Сбрасываем буфер
        }
        if ('+-*/'.includes(char)) {
          operators.push(char); // Добавляем оператор
        }
      }
    }
  }

  if (numberBuffer) {
    numbers.push(numberBuffer); // Добавляем последнее число
  }
  [numbers, operators] = preprocessExpression(numbers, operators);

  // Вычисляем итоговое значение
  return evaluate(numbers, operators);
}

// Предобработка выражения для замены процентов
function preprocessExpression(numbers, operators) {
  // Выбираем индексы с символом %
  const percentIndex = numbers
    .map((item, index) => {
      if (item.includes('%')) return index;
    })
    .filter((item) => item !== undefined);

  numbers = numbers.map((item) => {
    if (item.includes('%')) return parseFloat(item.slice(0, -1));
    return parseFloat(item);
  });

  // Если таких нет - возвращаем исходные массивы
  if (percentIndex.length === 0) return [numbers, operators];

  // перебор всех индексов где нужно искать процент
  percentIndex.forEach((currentIndex) => {
    let newExpression = '';
    for (let i = 0; i < currentIndex; i++) {
      newExpression += numbers[i] + operators[i];
    }

    if (
      operators[currentIndex - 1] === '*' ||
      operators[currentIndex - 1] === '/' ||
      currentIndex === 0
    ) {
      numbers[currentIndex] = numbers[currentIndex] / 100;
    } else if (operators[currentIndex - 1] === '+') {
      newExpression = newExpression.slice(0, -1);

      // Вызов функции чтобы корректно взять процент от предыдущего результата
      numbers[currentIndex] =
        calculate(newExpression) * (numbers[currentIndex] / 100);
    } else if (operators[currentIndex - 1] === '-') {
      newExpression = newExpression.slice(0, -1);

      // Вызов функции чтобы корректно взять процент от предыдущего результата
      numbers[currentIndex] =
        calculate(newExpression) * (numbers[currentIndex] / 100);
    }
  });

  return [numbers, operators];
}

calculatorInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    prevAction.value = calculatorInput.value;
    const result = formatInput(calculate(calculatorInput.value));
    calculatorInput.value = result;
    checkFontSize();
    event.preventDefault();
  }
});
