function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minNum = arr[i];
        let minNumIndex = i;
        for (let searchIndex = i + 1; searchIndex < arr.length; searchIndex++) {
            const num = arr[searchIndex];
            if (num < minNum) {
                minNum = num;
                minNumIndex = searchIndex;
            }
        }
        const temp = arr[i];
        arr[i] = minNum;
        arr[minNumIndex] = temp;
    }
    return arr
}