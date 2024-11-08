const calculatorInput = document.getElementById('calculatorInput');
const prevAction = document.getElementById('prevAction');

function calculate(expression) {
  if (!expression) {
    prevAction.value = '';
    return expression;
  }

  const numbers = expression.match(/(\d+[,.]?\d*)/g);
  const operators = expression.match(/[+\-*/]/g);

  // Если нет операторов, возвращаем 0
  if (!operators || !numbers) {
    return expression;
  }

  prevAction.value = expression;

  // Сначала обрабатываем умножение и деление
  const intermediateResults = processMultiplicationAndDivision(
    numbers,
    operators
  );

  // Затем обрабатываем сложение и вычитание
  const finalResult = processAdditionAndSubtraction(intermediateResults);

  // Обрезаем результат до 5 знаков после запятой только если дробный
  if (finalResult % 1 !== 0) {
    // Проверяем, дробное ли число
    return parseFloat(finalResult.toFixed(5));
  } else {
    return finalResult; // Если не дробное, возвращаем как есть
  }
}

// Обработка нажатия Enter

// Обработка операций умножения и деления
const processMultiplicationAndDivision = (numArr, ops) => {
  const result = [];
  let num = numArr.map((num) => {
    // Заменяем запятую на точку для преобразования в число
    return parseFloat(num.replace(',', '.'));
  });

  let current = num[0];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '*') {
      current *= num[i + 1];
    } else if (ops[i] === '/') {
      current /= num[i + 1];
    } else {
      result.push(current);
      result.push(ops[i]);
      current = num[i + 1];
    }
  }

  result.push(current); // Добавляем последнее число
  return result;
};

// Обработка операций сложения и вычитания
const processAdditionAndSubtraction = (val) => {
  let total = val[0];

  for (let i = 1; i < val.length; i += 2) {
    const operator = val[i];
    const value = val[i + 1];

    if (operator === '+') {
      total += value;
    } else if (operator === '-') {
      total -= value;
    }
  }

  return total;
};

calculatorInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const result = calculate(calculatorInput.value);
    calculatorInput.value = result; // Обновляем поле ввода с результатом
    event.preventDefault(); // Предотвращаем стандартное поведение
  }
});
