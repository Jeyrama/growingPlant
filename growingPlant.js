/*
Each day a plant is growing by upSpeed meters. 
Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. 
Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. 
We want to know when the height of the plant will reach a certain level.

Examples:
  For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.
  For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.

Input/Output:
    [input] integer upSpeed
    A positive integer representing the daily growth.
    Constraints: 5 ≤ upSpeed ≤ 100.

    [input] integer downSpeed
    A positive integer representing the nightly decline.
    Constraints: 2 ≤ downSpeed < upSpeed.

    [input] integer desiredHeight
    A positive integer representing the threshold.
    Constraints: 4 ≤ desiredHeight ≤ 1000.

    [output] an integer
    The number of days that it will take for the plant to 
    reach/pass desiredHeight (including the last day in the total count).
*/