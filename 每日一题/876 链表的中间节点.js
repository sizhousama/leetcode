// 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。
// 示例 1：
// 输入：[1,2,3,4,5]
// 输出：此列表中的结点 3 (序列化形式：[3,4,5])
// 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
// 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

// 快慢指针
var middlenode = function(head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// 数组
var middlenode = function(head) {
  let res = [],
    newhead = head,
    len = 0;
  while (newhead) {
    res[len++] = newhead;
    newhead = newhead.next;
  }
  return res[len >> 1];
};
