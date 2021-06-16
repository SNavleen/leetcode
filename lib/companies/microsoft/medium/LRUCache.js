// https://leetcode.com/explore/interview/card/microsoft/51/design/161/
// https://leetcode.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxSize = capacity;
  this.len = 0;
  this.lru = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.len === 0 || !this.lru.has(key)) return -1;
  const val = this.lru.get(key);
  this.lru.delete(key);
  this.lru.set(key, val);
  return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.lru.has(key)) {
    this.lru.delete(key);
    this.len--;
  }

  if (this.len === this.maxSize) {
    const keyToDel = this.lru.keys().next().value;
    this.lru.delete(keyToDel);
    this.len--;
  }
  this.lru.set(key, value);
  this.len++;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */