// LinkedList and Node function Constructor
function LinkedList() {
  this.head = null;
  this.tail = null;
};

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
};

// Add to head

LinkedList.prototype.addHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

var LL = new LinkedList();
LL.addHead(100);
LL.addHead(200);
LL.addHead(300);
LL.addHead(200);
console.log(LL);

// Add to tail
LinkedList.prototype.addTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if(this.tail) {
    this.tail.next = newNode;
  }else {
    this.head = newNode;
  }
  this.tail = newNode;
};

LL.addTail(100);
LL.addTail(200);
LL.addTail(300);
console.log(LL);
console.log(ll.head.value);

// Remove from head
LinkedList.prototype.removeHead = function(){
  if(this.head == null) {
    return null;
  }
  else {
    var val = this.head.value;
    this.head = this.head.next;
  }
  if(!this.head) this.tail = null;
  return val;
};

var ll = new LinkedList();
console.log(LL.removeHead());
console.log(LL);

// Remove from tail
LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

console.log(LL.removeTail());
console.log(LL.removeTail());
console.log(LL.removeTail());
console.log(LL);

// search in LinkedList
LinkedList.prototype.search = function(searchValue) {
  if(!this.head) return null;
  var currentNode = this.head;
  while(currentNode){
    if(currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

console.log(LL.search(100));

// find indexOf element in LinkedList
LinkedList.prototype.indexOf = function(value) {
  if(!this.head) return null;
  var currentNode = this.head;
  var counter =  0;
  var indexArr = new Array;
  while(currentNode){
    if(currentNode.value === value){
      indexArr.push(counter);
    }
    counter++;
    currentNode = currentNode.next;
  }
  return indexArr;
}

console.log(LL.indexOf(200));

