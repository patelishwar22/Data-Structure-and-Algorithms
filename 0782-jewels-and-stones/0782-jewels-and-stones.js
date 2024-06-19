var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (char of stones) {
        for (j of jewels) {
            if (j === char) {
                count++;
            }
        }
    }
    return count;
};
    

