Difference between / and % ?

Suppose you have a total of 85 apples, and you want to organize them into boxes, with each box containing 12 apples. You want to know how many complete boxes you can make and how many apples are left over ?.


const totalApples = 85;
const applesPerBox = 12;

// Calculate total complete boxes
const completeBoxes = Math.floor(totalApples / applesPerBox);

// Calculate remaining apples after removing complete boxes
const remainingApples = totalApples % applesPerBox;

console.log(`Complete Boxes: ${completeBoxes}`);
console.log(`Remaining Apples: ${remainingApples}`);
Total Complete Boxes (totalApples / applesPerBox):

85 / 12 equals 7 with a remainder of 1. This means you can make 7 complete boxes of apples.
Remaining Apples After Removing Complete Boxes (totalApples % applesPerBox):

The modulo operation 85 % 12 equals 1. This means there is 1 apple left over after organizing 85 apples into complete boxes.
So, in this example:

## Complete Boxes: 7 boxes.
## Remaining Apples After Removing Complete Boxes: 1 apple.


>> So in case of time calculation

64000 millisecond is 00:01:04

The remaining 4 sec is calculated using
    const seconds = Math.floor((time % MINUTE)/SECOND);

one minute is calculated using
    const minutes = Math.floor((time % HOUR)/MINUTE);