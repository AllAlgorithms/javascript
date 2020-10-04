/**
 *
 * @param {Array} arr
 * @param {Number} x
 */
function jumpSearch(arr, x) {
    let len = arr.length;
    let step = Math.sqrt(len);

    let prev = 0;
    while (arr[parseInt(Math.min(step, len) - 1)] < x) {
        prev = step;
        step += Math.sqrt(len);
        if (prev >= len) return -1;
    }

    while (arr[parseInt(prev)] < x) {
        prev += 1;

        if (prev === Math.min(step, len)) return -1;
    }
    if (arr[parseInt(prev)] === x) return prev;

    return -1;
}

let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

console.log(jumpSearch(arr, 610));
