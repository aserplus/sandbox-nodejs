const merge = (array, start, mid, end) => {
    const copyArray = array;

    // 1) Create sub arrays for lower half
    const lowerLength = (mid - start) + 1; // REMINDER: Add the one

    // NOTE: Can do without the need of new Array, but wanted to be consistent with other languages
    const lowerArray = new Array(lowerLength);

    for (let i = 0; i < lowerLength; i++) {
        // NOTE: Can do the same with a push, but wanted to be consistent with other languages
        lowerArray[i] = copyArray[start + i];
    }

    // 2) Create sub arrays for lower half
    const upperLength = (end - mid); // REMINDER: No need to add the one as the mid is missing a 1
    const upperArray = new Array(upperLength);
    for (let i = 0; i < upperLength; i++) {
        upperArray[i] = copyArray[(mid + 1) + i]; // REMINDER: Add the 1 to copy array index
    }

    // 3) Set lower, upper and merge indexes
    let lowerIndex = 0;
    let upperIndex = 0;
    let mergeIndex = start; // REMIND: set to start


    // 4) Repeatedly compare the lowest untaken element in
    //    lower sub array with the lowest untaken element in upper sub array
    //    and copy the lower of the two back into array
    while (lowerIndex < lowerArray.length && upperIndex < upperArray.length) {
        if (lowerArray[lowerIndex] < upperArray[upperIndex]) {
            copyArray[mergeIndex++] = lowerArray[lowerIndex++];
        } else {
            copyArray[mergeIndex++] = upperArray[upperIndex++];
        }
    }

    // 5) Once one of lower sub array and upper sub array has been fully copied
    //    back into array, copy the remaining elements from the
    //    other temporary array back into the array
    while (lowerIndex < lowerArray.length) {
        copyArray[mergeIndex++] = lowerArray[lowerIndex++];
    }


    while (upperIndex < upperArray.length) {
        copyArray[mergeIndex++] = upperArray[upperIndex++];
    }
};

const mergeSort = (array, start, end) => {
    if (!array || array.length < 2) {
        return;
    }

    const copyStart = start === undefined ? 0 : start;
    const copyEnd = end === undefined ? array.length - 1 : end;

    if (copyStart < copyEnd) {
        // 1) Determine mid point
        const mid = Math.floor((copyStart + copyEnd) / 2);

        // 2) Sort lower sub array
        mergeSort(array, copyStart, mid);

        // 3) Sort upper sub array
        mergeSort(array, mid + 1, copyEnd);

        // 4) Merge lower and upper sub arrays
        merge(array, copyStart, mid, copyEnd);
    }
};

module.exports = {
    mergeSort,
};