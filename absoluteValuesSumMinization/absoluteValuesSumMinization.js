export const absoluteValuesSumMinimization = (a) => {
    const isEven = a.length % 2 === 0;
    const middle = Math.floor(a.length / 2);

    console.log({isEven, middle});
    return isEven ? a[middle - 1] : a[middle];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));