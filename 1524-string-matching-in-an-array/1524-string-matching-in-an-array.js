/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const res = [];

    // Функція для побудови префікс-функції (LPS масиву)
    const buildLPS = (pattern) => {
        const lps = Array(pattern.length).fill(0);
        let length = 0; // довжина попереднього префікса
        let i = 1;

        while (i < pattern.length) {
            if (pattern[i] === pattern[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length !== 0) {
                    length = lps[length - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    };

    // Функція для перевірки, чи є підрядок у рядку за допомогою KMP
    const kmpSearch = (text, pattern) => {
        const lps = buildLPS(pattern);
        let i = 0; // індекс тексту
        let j = 0; // індекс патерну

        while (i < text.length) {
            if (text[i] === pattern[j]) {
                i++;
                j++;
            }

            if (j === pattern.length) {
                return true; // знайдено
            } else if (i < text.length && text[i] !== pattern[j]) {
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }

        return false; // не знайдено
    };

    // Основна логіка
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && kmpSearch(words[j], words[i]) && !res.includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
    }

    return res;
};
