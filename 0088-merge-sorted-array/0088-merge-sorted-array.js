var merge = function(nums1, m, nums2, n) {
    // Start from the end of both arrays
    let i = m - 1; // Last element in nums1 (excluding the extra zeros)
    let j = n - 1; // Last element in nums2
    let k = m + n - 1; // Last position in nums1

    // Compare elements from the back of both arrays and place them in nums1
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 still has elements left, place them in nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};
