const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
// class BinarySearchTree {

  constructor(){
    this.rootNode = null;
  }
  
  root() {
    console.log('????', this.rootNode)
    return this.rootNode;
  }

  add(data) {
    const node = {data: data, left:null, right:null};
    if (this.rootNode === null){
      this.rootNode = node;
      return
    }
    let curNode = this.rootNode;
    
    while (curNode !== null){
      if (data < curNode.data) {
        if (curNode.left == null) {
          console.log('left')
          curNode.left = node;
          return
        }
        curNode = curNode.left;
      } else if (data > curNode.data){
        if (curNode.right == null) {
          console.log('right')
          curNode.right = node;
          return
        }
        curNode = curNode.right;
      } 
    }
  }

  has(data) {
    let curNode = this.rootNode;
    while (curNode !== null){
      if (data < curNode.data) {
        curNode = curNode.left;
      } else if (data > curNode.data){
        curNode = curNode.right;
      } else {
        return true;
      } 
    }
    return false
  }

  find(data) {
    let curNode = this.rootNode;
    while (curNode !== null){
      if (data < curNode.data) {
        curNode = curNode.left;
      } else if (data > curNode.data){
        curNode = curNode.right;
      } else {
        return curNode
      } 
    }
    return null
  }

  remove(data) {
    // let curNode = this.rootNode;
    // while (curNode !== null){
    //   if (data < curNode.data) {
    //     curNode = curNode.left;
    //   } else if (data > curNode.data){
    //     curNode = curNode.right;
    //   } else {
    //     return curNode
    //   } 
    // }
    // return null
  }

  min() {
    let curNode = this.rootNode;
    let minVal = curNode.data;
    while (curNode !== null){
      minVal = curNode.data;  
      curNode = curNode.left;
    }
    return minVal
  }

  max() {
    let curNode = this.root;
    let maxVal = curNode.data;
    while (curNode !== null){
      maxVal = curNode.data;  
      curNode = curNode.right;
    }
    return maxVal
  }

}

// const tree = new BinarySearchTree();
//       tree.add(2);
//       tree.add(3);
//       tree.add(4);
// console.log(tree,tree.root())