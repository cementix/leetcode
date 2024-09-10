class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $numMap = [];

        foreach ($nums as $i => $num) {
            $complement = $target - $num;
            if (isset($numMap[$complement])) {
                return [$numMap[$complement], $i];
            }
            $numMap[$num] = $i;
        }

        return [];
    }
}
