function fibs(n) {
    let a = 0;
    let b = 1;
    let c;
    let arr = [0, 1];

    if (n == 1 || n == 0) {
        return [0];
    }

    else if (n == 2) {
        return arr;
    }

    else {
        for (i=3; i<=n; i++) {
            c = a + b;
            a = b;
            b = c;
            arr.push(c);
        }
        return arr;
    }
}

function fibRec(n) {
    if (n <= 1) {
        return n;
    }

    else {
        return (fibRec(n-1) + fibRec(n-2));
    }
}

function fibRecArr(n) {
    let arr = [0];
    for (let i = 1; i < n; i++) {
        arr.push(fibRec(i));
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
        let mid = Math.floor(arr.length/2);
        let first = mergeSort(arr.slice(0, mid));
        let second = mergeSort(arr.slice(mid));
        return merge(first, second);
}

function merge(arrA, arrB) {
    let i = 0;
    let j = 0;
    let arrC = [];
    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            arrC.push(arrA[i]);
            i++;
        }
        else {
            arrC.push(arrB[j]);
            j++;
        }
    }
    for (; i < arrA.length; i++) {
        arrC.push(arrA[i]);
    }
    for (; j < arrB.length; j++) {
        arrC.push(arrB[j]);
    }
    return arrC;
}
