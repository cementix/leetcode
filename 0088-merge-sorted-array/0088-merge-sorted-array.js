var merge = function(nums1, m, nums2, n) {
    
   let second = nums1.length - 1
   let first = m - 1
   n--
    
    while(n >= 0) {
        if (first >= 0 && nums1[first] > nums2[n]) {
            nums1[second] = nums1[first]
            first--
        } else {
            nums1[second] = nums2[n]
            n--
        }
        second--
    }
};
