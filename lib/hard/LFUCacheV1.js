// https://leetcode.com/problems/lfu-cache/
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.freqCache = new Map();
  this.lfuCache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.capacity === 0) {
    return -1;
  }

  const freq = this.freqCache.get(key);

  if (freq === undefined) {
    return -1;
  }

  const lfuCachePrev = this.lfuCache.get(freq);
  const value = lfuCachePrev.get(key);
  lfuCachePrev.delete(key);
  this.freqCache.delete(key)

  const nextFreq = freq + 1;

  const lfuCacheNext = this.lfuCache.get(nextFreq);
  this.freqCache.set(key, nextFreq);
  if (lfuCacheNext === undefined) {
    this.lfuCache.set(nextFreq, new Map([[key, value]]));
  } else {
    lfuCacheNext.set(key, value);
  }

  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) {
    return;
  }

  const freq = this.freqCache.get(key);
  const nextFreq = (freq || 0) + 1;

  if (freq) {
    const lfuCachePrev = this.lfuCache.get(freq);
    lfuCachePrev.delete(key);

    const lfuCacheNext = this.lfuCache.get(nextFreq);
    this.freqCache.set(key, nextFreq);

    if (lfuCacheNext === undefined) {
      this.lfuCache.set(nextFreq, new Map([[key, value]]));
    } else {
      lfuCacheNext.set(key, value);
    }

  } else {
    this.size++;

    if (this.size > this.capacity) {
      let LRUCacheForRemove = null;

      for (let [curFreq, freqMap] of this.lfuCache) {
        if (freqMap.size) {
          LRUCacheForRemove = freqMap
          break;
        }
      }

      const keyForRemoval = LRUCacheForRemove.keys().next().value;
      LRUCacheForRemove.delete(keyForRemoval);
      this.freqCache.delete(keyForRemoval);
      this.size--;
    }

    this.freqCache.set(key, 1);
    const lfuCachePrev = this.lfuCache.get(nextFreq);
    if (lfuCachePrev !== undefined) {
      lfuCachePrev.set(key, value);
    } else {
      this.lfuCache.set(nextFreq, new Map([[key, value]]));
    }
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
