// https://leetcode.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.lruCache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.lruCache.has(key)) {
    return -1;
  }

  const value = this.lruCache.get(key);
  this.lruCache.delete(key);
  this.lruCache.set(key, value);
  return value;

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.lruCache.has(key)) {
    this.lruCache.delete(key);
    this.size--;
  }

  if (this.size === this.capacity) {
    const keyToDelete = this.lruCache.entries().next().value[0];
    this.lruCache.delete(keyToDelete);
    this.size--;
  }

  this.lruCache.set(key, value);
  this.size++;
};