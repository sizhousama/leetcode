// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。



// 快排思维
var getLeastNumbers = function(arr, k) {
  let len = arr.length;
  if (!len || !k) return [];
  let start = 0;
  let end = len - 1;
  let idx = quicksort(arr, start, end);
  while (idx !== k - 1) {
    if (idx > k - 1) {
      end = idx - 1;
      idx = quicksort(arr, start, end);
    } else {
      start = idx + 1;
      idx = quicksort(arr, start, end);
    }
  }
  return arr.slice(0, idx + 1);
};

var quicksort = function(arr, l, r) {
  let p = arr[l];
  while (l < r) {
    while (l < r && arr[r] >= p) r--;
    arr[l] = arr[r];
    while (l < r && arr[l] <= p) l++;
    arr[r] = arr[l];
  }
  arr[l] = p;
  return l;
};
