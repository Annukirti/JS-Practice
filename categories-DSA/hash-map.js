// The JavaScript Map object holds key-value pairs and preserves
// the original insertion order. It supports any value, including objects
// and primitives, as keys or values.

/**
 * Methods of JavaScript Map
 * set(key, value): Adds or updates an element with a specified key and value.
 * get(key): Returns the value associated with the specified key.
 * has(key): Returns a boolean indicating whether an element with the specified key exists.
 * delete(key): Removes the element with the specified key.
 * clear(): Removes all elements from the Map.
 * size: Returns the number of key-value pairs in the Map.
 */

let map1 = new Map();

map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1
  .set("website", "geeksforgeeks")
  .set("friend 1", "gourav")
  .set("friend 2", "sourav");

console.log(map1);

console.log("map1 has website ? " + map1.has("website"));

console.log("map1 has friend 3 ? " + map1.has("friend 3"));

console.log("get value for key website " + map1.get("website"));

console.log("get value for key friend 3 " + map1.get("friend 3"));
console.log("delete element with key website " + map1.delete("website"));

console.log("map1 has website ? " + map1.has("website"));

console.log("delete element with key website " + map1.delete("friend 3"));

map1.clear();

console.log(map1);

// ==========================================================================================================================

//706. Design HashMap

var MyHashMap = function () {
  this.map = new Map([]);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map.set(key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.map.get(key) !== undefined ? this.map.get(key) : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  this.map.delete(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// Input
// ["MyHashMap","put","put","get","get","put","get","remove","get"]
// [[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]

// Output
// [null,null,null,1,-1,null,1,null,-1]
