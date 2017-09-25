const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var i = 0,
            current = this._head;

        while (i < index) {
            current = current.next;
            i++;
        }
        return current.data;
    }

    insertAt(index, data) {
        var node = new Node(data),
            i = 0,
            current = this._head,
            beforeCurrent = null;

        if (this.length === 0) {
            this.append(data);
        } else {
            if (index === 0) {
                current.prev = node;
                this._head = node;
                node.next = current;
            } else {
                while (i < index) {
                    beforeCurrent = current;
                    current = current.next;
                    i++;
                }
                beforeCurrent.next = node;
                current.prev = node;
                node.prev = beforeCurrent;
                node.next = current;
            }
        }
        this.length++;
        return this;
    }

    isEmpty() {
        return (this.length === 0);
    }

    clear() {
        if (this.length > 0) {
            this._head.data = null;
            this._tail.data = null;
            this._head.next = null;
            this._tail.next = null;
            this._head.prev = null;
            this._tail.prev = null;
            this.length = 0;
        }
        return this;
    }

    deleteAt(index) {
        var i = 0,
            current = this._head,
            beforeNodeToDelete = null,
            nodeToDelete = null;

        if (index === 0) {
            this._head = current.next;
            current = null;
        } else {
            while (i < index) {
                beforeNodeToDelete = current;
                nodeToDelete = current.next;
                current = current.next;
                i++;
            }
            beforeNodeToDelete.next = nodeToDelete.next;
            nodeToDelete = null;
        }
        this.length--;
        return this;
    }

    reverse() {
        var current = this._head,
            tmp = this._tail;

        while (current) {
            var temp = current.next;
            current.next = current.prev;
            current = temp;
        }
        this._tail = this._head;
        this._head = tmp;
        return this;
    }

    indexOf(data) {
        var i = 0,
            current = this._head;

        while (i < this.length) {
            if (current.data === data) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
