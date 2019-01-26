function Node(val, next=null) {
  this.val = val;
  this.next = next;
}




function LinkedList(values) {
 this.values = values;

  var _createLinkedList = function(values) {
    var head = new Node(values[0]);
    var currentNode = head;

    for (var i = 1; i < values.length; i++) {
      currentNode.next = new Node(values[i]);
      currentNode = currentNode.next;
    }


    return head;

  }
 this.head = _createLinkedList(values)

}

LinkedList.prototype.iterate = function(head, cb){
 var current = head;

 while (current) {
   cb(current);
   current = current.next;
 }
  return;
}

LinkedList.prototype.showList = function() {
 this.iterate(this.head, function(val){console.log(val)});
}

LinkedList.prototype.isEqualTo = function(head) {
  var values = [];
  var currentSelfNode = this.head;
  var decision = true;

  this.iterate(head, function(node){

     if (!currentSelfNode && node) {
      decision = false;
    } else if (node.val !== currentSelfNode.val) {
      decision = false;
    } else {

      console.log(node.val, currentSelfNode.val)
    }

    if (currentSelfNode) {
      currentSelfNode = currentSelfNode.next;
    }

  });

  if (currentSelfNode) {
    decision = false;
  }

  return decision;

}

LinkedList.prototype.reverse = function() {
  var head = this.head;
  var prev = head;
  var current = head.next;
  var next = current.next;

  head.next = null;

  while (current) {
   current.next = prev;
   prev = current;
   current = next;
    if (current) {
      next = current.next;
    }
  }

  return prev;

}




function reverseLinkedList(head) {
  // set prev = head
  // set current = head.next
  // set next = current.next
  // first: set head.next = null
  // while current,
  //   set current.next = prev
  //   set prev = current
  //   set current = next
  //   set next = current.next


  var prev = head;
  var current = head.next;
  var next = current.next;

  head.next = null;

  while (current) {
   current.next = prev;
   prev = current;
   current = next;
    if (current) {
      next = current.next;
    }
  }

  return prev;
}




var list = new LinkedList([1,2,3,4,5])
