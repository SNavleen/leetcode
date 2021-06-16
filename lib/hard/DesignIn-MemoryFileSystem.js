// https://leetcode.com/problems/design-in-memory-file-system/
class Tries {
  constructor() {
    this.folders = {};
    this.files = [];
  }
}
var FileSystem = function () {
  this.fs = new Tries();
  this.fileContentMap = new Map();
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
  let fs = this.fs;
  fs = fs.folders['/'] || fs;
  if (path === '/') {
    let res = [
      ...Object.keys(fs.folders || []),
      ...fs.files || []
    ];
    return res.sort();
  }

  const f = path.split('/');
  for (let i = 1; i < f.length - 1; i++) {
    if (!fs.folders[f[i]])
      return [];
    fs = fs.folders[f[i]];
  }
  if (fs.folders[f[f.length - 1]]) {
    fs = fs.folders[f[f.length - 1]];
    let res = [
      ...Object.keys(fs.folders || []),
      ...fs.files || []
    ];
    return res.sort();
  }
  if (fs.files.includes(f[f.length - 1])) {
    return [f[f.length - 1]];
  }
  return [];

};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
  const folders = path.split('/');
  let fs = this.fs;
  for (let f of folders) {
    if (f === '') f = '/';
    if (!fs.folders[f])
      fs.folders[f] = new Tries();
    fs = fs.folders[f];
  }
  return fs;
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
  let filePathList = filePath.split('/');
  let file = filePathList.pop();
  if (this.fileContentMap.has(filePath)) {
    let val = this.fileContentMap.get(filePath);
    val += content;
    this.fileContentMap.set(filePath, val);
    return val;
  }
  let fs = this.mkdir(filePathList.join('/'));
  fs.files.push(file);
  this.fileContentMap.set(filePath, content);
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
  if (this.fileContentMap.has(filePath)) {
    return this.fileContentMap.get(filePath);
  }
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */