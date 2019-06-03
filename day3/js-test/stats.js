exports.max = numbers => Math.max(...numbers);

exports.min = numbers => Math.min(...numbers);

exports.avg = numbers => {
    return numbers.reduce((acc, cur, index, { length }) => acc + cur / length, 0);
};

exports.sort = numbers => numbers.sort((a, b) => a - b);

exports.median = numbers => {
    const { length } = numbers; // array의 length. 비구조할당
    const middle = Math.floor(length / 2);
    return length % 2
        ? numbers[middle]
        : (numbers[middle-1] + numbers[middle]) / 2;
}

exports.mode = numbers => {
    // modern JS에 Map이라는 객체가 있다.
    // const counts = new Map();
    // numbers.map(number => {
    //     const count = counts.get(number) || 0;
    //     counts.set(number, count + 1);
    //     return number;
    // });

    const counts = numbers.reduce(
        (acc, current) => acc.set(current, acc.get(current)+1 || 1),
        new Map()
    );
    const maxCount = Math.max(...counts.values());
    const modes = [ ...counts.keys() ].filter(key => counts.get(key) === maxCount);

    if (modes.length === numbers.length) {
        return null;
    }
    if (modes.length > 1) {
        return modes;
    }
    return modes[0];

}