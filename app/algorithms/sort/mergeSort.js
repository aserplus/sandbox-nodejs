const createSubArray = (array, start, end) => {
    const subArray = [];

    for (let i = start; i <= end; i += 1) {
        subArray.push(array[i]);
    }

    return subArray;
};

const copyRemainingItems = (array, index, subArray, subArrayIndex) => {
    const copyArray = array;
    let copyIndex = index;
    let copySubArrayIndex = subArrayIndex;

    while (copySubArrayIndex < subArray.length) {
        copyArray[copyIndex] = subArray[copySubArrayIndex];
        copyIndex += 1;
        copySubArrayIndex += 1;
    }
};

const merge = (array, start, mid, end) => {
    const copyArray = array;
    // Create sub arrays for lower and upper half of array
    const lowerArray = createSubArray(copyArray, start, mid);
    const upperArray = createSubArray(copyArray, mid + 1, end);

    let lowerIndex = 0;
    let upperIndex = 0;
    let mergeIndex = start;

    // Repeatedly compare the lowest untaken element in
    //  lower sub array with the lowest untaken element in upper sub array
    //  and copy the lower of the two back into array
    while (lowerIndex < lowerArray.length && upperIndex < upperArray.length) {
        if (lowerArray[lowerIndex] < upperArray[upperIndex]) {
            copyArray[mergeIndex] = lowerArray[lowerIndex];
            lowerIndex += 1;
        } else {
            copyArray[mergeIndex] = upperArray[upperIndex];
            upperIndex += 1;
        }

        mergeIndex += 1;
    }

    // Once one of lower sub array and upper sub array has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    copyRemainingItems(copyArray, mergeIndex, lowerArray, lowerIndex);
    copyRemainingItems(copyArray, mergeIndex, upperArray, upperIndex);
};

const mergeSort = (array, start, end) => {
    if (!array || array.length < 2) {
        return;
    }

    const copyStart = start === undefined ? 0 : start;
    const copyEnd = end === undefined ? array.length - 1 : end;

    if (copyStart < copyEnd) {
        const mid = Math.floor((copyStart + copyEnd) / 2);
        
        // sort lower sub array
        mergeSort(array, copyStart, mid);

        // sort upper sub array
        mergeSort(array, mid + 1, copyEnd);

        // merge lower and upper sub arrays
        merge(array, copyStart, mid, copyEnd);
    }
};

module.exports = {
    mergeSort,
};