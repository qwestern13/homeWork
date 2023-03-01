function stringTransform(inputString) {
    if (inputString.length === 0) {
        return "";
    } else {
        return inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();
    }
}

let result = stringTransform("hELLO");
console.log(result);

function stringCorrect(inputString) {
    return inputString
    .replace(/\s+/g, ' ')
    .replace(/ +([\.,!:;])/g, '$1')
    .replace(/([\.,!:;])\s*/g, '$1 ')
    .trim();
}

str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";

console.log(stringCorrect(str));

function wordsCount(str) {
    if (str.trim() === "") {
        return 0
    }
    else {
        return str.trim().split(/\s+/).length;
    }
}

console.log(wordsCount(" h "));


function countUniqueWords(str) {
    if (str.trim() === "") {
      return 0;
    }
    let uniqueWords = new Map();

    str.trim().replace(/([\.,:;!])\s*/g, " ").split(/\s+/).forEach(word => {
      let wordLowerCase = word.toLowerCase();
      if (uniqueWords.has(wordLowerCase) == true) {
        let count = uniqueWords.get(wordLowerCase);
        uniqueWords.set(wordLowerCase, (count + 1));
      }
      else {
        uniqueWords.set(wordLowerCase, 1);
      }
    });

    return uniqueWords;
  }

  console.log(countUniqueWords("Текст, в котором, слово, текст несколько раз встречается и слово тоже"));