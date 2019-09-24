/**
 * This function returns a boolean true or false if a number is lucky or not.
 * @param {number} number Any number.
 */
function isLucky(number) {
    var remainder = number % 7;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * This function returns the largest number in an array.
 * @param {number[]} numList An array filled with numbers, of which the highest wil be returned.
 */
function findLargest(numList) {
    var highNum = 0;
    for (num in numList) {
        var currNum = numList[num];
        if (highNum <= currNum) {
            highNum = currNum;
        }
    }
    return highNum;
}
/**
 * This array returns a monogram of the first letters of the first, last, and middle names in that order. If no middle name is defined, an initial will not be displayed for it.
 * @param {string} first The first name.
 * @param {string} last The last name.
 * @param {string=} middle The middle name. (optional)
 */
function monogram(first, last, middle) {
    var initials = first[0] + last[0];
    if (middle) {
        initials = initials + middle[0];
    }
    return initials;
}