// https://leetcode.com/problems/lfu-cache/
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.size = capacity;
  this.len = 0;
  this.lfuVal = new Map(); // key, [value, freq]
  this.lfuFreq = new Map(); // freq, Set(keys)
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  let v = this.lfuVal;
  let f = this.lfuFreq;
  let l = this.len;
  let s = this.size;
  if (this.size === 0 || !this.lfuVal.has(key)) return -1;
  let [value, freq] = this.lfuVal.get(key);

  this.lfuVal.delete(key);
  this.lfuVal.set(key, [value, freq + 1]);

  let freqSet = this.lfuFreq.get(freq);
  freqSet.delete(key);
  if (freqSet.size === 0)
    this.lfuFreq.delete(freq);

  if (this.lfuFreq.has(freq + 1)) {
    freqSet = this.lfuFreq.get(freq + 1);
  } else {
    freqSet = new Set();
  }
  freqSet.add(key);
  this.lfuFreq.set(freq + 1, freqSet);

  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  let v = this.lfuVal;
  let f = this.lfuFreq;
  let l = this.len;
  let s = this.size;
  if (this.size === 0) return;
  if (this.lfuVal.has(key)) {
    let [val, freq] = this.lfuVal.get(key);
    this.lfuVal.set(key, [value, freq]);
    this.get(key);
    return;
  }
  if (this.len >= this.size) {
    let freq = Array.from(this.lfuFreq.keys()).sort();
    let setOfKeys = this.lfuFreq.get(freq[0]);
    let keyToDel = Array.from(setOfKeys).shift();
    setOfKeys.delete(keyToDel);
    if (setOfKeys.size === 0)
      this.lfuFreq.delete(freq[0]);

    this.lfuVal.delete(keyToDel);
    this.len -= 1;
  }

  this.lfuVal.set(key, [value, 0]);
  let freqSet;
  if (!this.lfuFreq.has(0)) {
    freqSet = new Set();
  } else {
    freqSet = this.lfuFreq.get(0);
  }

  freqSet.add(key);
  this.lfuFreq.set(0, freqSet);
  this.len++;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */