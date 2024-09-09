class Solution {
public:
    string addBinary(string a, string b) {
        string res = "";  // Результирующая строка
        int carry = 0;    // Переменная для переноса
        int i = a.length() - 1, j = b.length() - 1;  // Индексы для строк a и b

        // Цикл продолжается, пока есть хотя бы один бит для сложения или перенос
        while (i >= 0 || j >= 0 || carry) {
            int firstDigit = (i >= 0) ? a[i] - '0' : 0; // Получаем текущий бит из строки a
            int secondDigit = (j >= 0) ? b[j] - '0' : 0; // Получаем текущий бит из строки b

            int sum = firstDigit + secondDigit + carry; // Складываем два бита и перенос

            carry = sum / 2; // Если сумма >= 2, переносим единицу
            res = char(sum % 2 + '0') + res; // Остаток деления добавляем в начало строки

            i--; // Уменьшаем индекс для строки a
            j--; // Уменьшаем индекс для строки b
        }

        return res; // Возвращаем результат
    }
};
