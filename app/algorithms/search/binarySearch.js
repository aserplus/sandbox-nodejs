module.exports = class BinarySearch {
    static performSearch(data, targetValue) {
        if (!targetValue || !data || data.length === 0) {
            return -1;
        }

        let left = 0;
        let right = data.length - 1;
        let mid;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (data[mid] === targetValue) {
                return mid;
            } else if (data[mid] < targetValue) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
};