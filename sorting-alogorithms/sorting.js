// Nested for loop solution I always start with. Time complexity of n^2.

const nestedLoop = (sequence) => {
	for (var i = 1; i < sequence.length; i++){
		for (var j = 0; j < i; j++){
			if (sequence[i] < sequence[j]){
				let temp = sequence[i];
				sequence[i] = sequence[j];
				sequence[j] = temp;
			}
		}
	}
	return sequence;
}

console.log(nestedLoop([1,5,7,3,8,9,2]));

// Quick Sort

const quickSort = (sequence) => {
	let pivot;
	if (sequence.length <= 1){
		return sequence;
	}else {
		pivot = sequence.pop();
	}
	
	let less = [];
	let greater = [];
	for (let i = 0; i < sequence.length; i++){
		if (sequence[i] < pivot){
			less.push(sequence[i]);
		} else {
			greater.push(sequence[i]);
		}
	}
	return ([...quickSort(less) , ...[pivot] , ...quickSort(greater)]);
}

console.log(quickSort([1,5,7,3,8,9,2]));


// Merge sort algorithm with overall time complexity on nlogn
// Space complexity of n

// Merging algorithm of 2 sorted arrays
const merge = (leftArr, rightArr) => {
	let res = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < leftArr.length && rightIndex < rightArr.length){
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			res.push(leftArr[leftIndex]);
			leftIndex++;
		}else {
			res.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}
	return ([...res,...leftArr.slice(leftIndex),...rightArr.slice(rightIndex)]);

};

//console.log(merge([1,2],[3,7]));

// Recursive Algorithm mergesort

const mergeSort = (sequence) => {
	if (sequence.length <= 1){
		return sequence;
	}
	let middleIndex = Math.floor(sequence.length/2);
	// now we need to get the two arrays
	let leftArray = sequence.slice(0,middleIndex);
	let rightArray = sequence.slice(middleIndex, sequence.length);
	
	return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([1,6,2,78,2,65,3,0,55,4]));






