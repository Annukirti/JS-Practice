/**
 * Sets in JavaScript are collections of unique values, meaning no duplicates
 *  are allowed. They provide efficient ways to store and manage distinct elements.
 * Sets support operations like adding, deleting, and checking the presence of items,
 * enhancing performance for tasks requiring uniqueness.
 */

var MyHashSet = function () {
  this.hash = new Set([]);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) {
    this.hash.add(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.contains(key)) this.hash.delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hash.has(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// Input
// ["MyHashSet","add","add","contains","contains","add","contains","remove","contains"]
// [[],[1],[2],[1],[3],[2],[2],[2],[2]]

// Output
// [null,null,null,true,false,null,true,null,false]
