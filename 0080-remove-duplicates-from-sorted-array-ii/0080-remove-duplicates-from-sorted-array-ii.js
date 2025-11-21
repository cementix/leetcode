var removeDuplicates = function(nums) {
    let write = 0;

    for (let num of nums) {
        if (write < 2 || num > nums[write - 2]) {
            nums[write] = num;
            write++;
        }
    }

    return write;
};
