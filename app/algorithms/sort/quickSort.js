const swapArrayItems = (array, index1, index2) => {
    const copyArray = array;
    const temp = copyArray[index1];

    copyArray[index1] = copyArray[index2];
    copyArray[index2] = temp;
};

const partition = (array, start, end) => {
    const copyArray = array;

    // 1) Set pivot value. Always pick last element as pivot value
    const pivotValue = copyArray[end];

    // 2) Initially set lower index to start
    let partitionIndex = start;

    // 3) Loop over array items from specified start and end. If array element
    //    less than pivotValue then swap array element with array element at partitionIndex
    for (let i = start; i < end; i++) {
        if (copyArray[i] < pivotValue) {
            swapArrayItems(copyArray, partitionIndex, i);

            partitionIndex++;
        }
    }

    // 4) Finally swap element at partitionIndex with pivotValue element
    swapArrayItems(copyArray, partitionIndex, end);

    return partitionIndex;
};

const quickSort = (array, start, end) => {
    if (!array || array.length < 2) {
        return;
    }

    const copyStart = start === undefined ? 0 : start;
    const copyEnd = end === undefined ? array.length - 1 : end;

    if (copyStart < copyEnd) {
        // 1) Determine mid point
        const partitionIndex = partition(array, copyStart, copyEnd);

        // 2) Sort lower sub array
        quickSort(array, copyStart, partitionIndex - 1); // REMINDER: Subtract 1 from partition index

        // 3) Sort upper sub array
        quickSort(array, partitionIndex + 1, copyEnd); // REMINDER: Add 1 from partition index
    }
};

module.exports = {
    quickSort,
};