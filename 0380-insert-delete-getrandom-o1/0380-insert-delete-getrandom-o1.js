
var RandomizedSet = function() {
    this.hashMap = {}
    this.list = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.hashMap.hasOwnProperty(val)) return false
    this.hashMap[val] = this.list.length
    this.list.push(val)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.hashMap.hasOwnProperty(val)) return false;

    const index = this.hashMap[val]; // индекс удаляемого элемента
    const lastElement = this.list[this.list.length - 1]; // последний элемент массива

    // Заменяем удаляемый элемент последним элементом массива
    this.list[index] = lastElement;
    this.hashMap[lastElement] = index;

    // Удаляем последний элемент из массива и соответствующий ключ из hashMap
    this.list.pop();
    delete this.hashMap[val];

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const random = Math.floor(Math.random() * this.list.length)
    return this.list[random]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */