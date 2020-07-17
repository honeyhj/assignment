/**START FOR- feet to mile measure*/
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(12);
console.log(result);
/**END FOR- feet to mile measure*/

//////////////////////////////////////

/**START FOR Wood calculation*/
function woodCalculator(chair, table, cot) {
    var countChair = 1;
    var countTable = 3;
    var countCot = 5;
    totalCountingChair = countChair * chair;
    totalCountingTable = countTable * table;
    totalCountingCot = countCot * cot;
    total = totalCountingChair + totalCountingTable + totalCountingCot;
    return total
}
var result = woodCalculator(1, 1, 1);
console.log(result);
/**End FOR FOR Wood calculation*/

///////////////////////////////////////

function brickCalculator(floor) {
    var brick = 15000;
    if (floor <= 10) {
        return brickFor10Floor = brick * floor
    } else if (floor > 10) {
        var brickFor11Floor = floor * brick - floor * 3000;
        return brickFor11Floor;
    }
}
var total = brickCalculator(10);
console.log(total);

/**END FOR Brick calculation */

////////////////////////////////

/**START FOR Checking smallest string in an array */
function tinyFriend(friends) {
    var name = friends[0];
    for (i = 0; i < friends.length; i++) {
        var currentName = friends[i];
        if (currentName.length < name.length) {
            name = currentName;
        }
    }
    return name;
}
var result = tinyFriend(['sumon', 'raj', 'foysal'])
console.log(result);
/**END FOR Checking smallest string in an array */