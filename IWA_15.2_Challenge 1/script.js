const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { first = [0] } = data.lists.find(([name]) => name === 'first') || {};
const { second = [1] } = data.lists.find(([name]) => name === 'second') || {};
const { third = [2] } = data.lists.find(([name]) => name === 'third') || {};

const result = []

/*function looks at the last item in each of the three lists and selects the biggest one. 
It should remove the value from the current array under lists and move it to the results array.*/

const extractBiggest = () => {
	if (first[first.length - 1] > second[second.length - 1]) {
		return first;
	}

	if (third[third.length - 1] > second[second.length - 1]) {
		return third;
	}

	return second;
};

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
