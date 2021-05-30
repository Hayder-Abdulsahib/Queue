class Node {
    constructor(groupSize, next = null) {
        this.groupSize = groupSize;
        this.next = next;

    }
}

class Queue {
    constructor(limit, front = null, back = null) {
        this.front = front;
        this.back = back;
        this.limit = limit;
        this.size = 0;
        this.waitingTime = 0;
    }

    isEmpty = () => this.size === 0;

    isFull = () => this.size === this.limit;

    addNode = (groupSize) => {
        const newNode = new Node(groupSize)
        if (this.isEmpty())
            this.front = newNode
        else
            this.back.next = newNode

        this.back = newNode
        this.size += 1
        this.waitingTime += groupSize * 0.5
    }

    enqueue = () => {
        if (this.isFull())
            console.log("Queue is full")
        else {
            let numberOfPeople = groupSize;
            while (numberOfPeople > 12) {
                this.addNode(12)
                numberOfPeople -= 12
            }
            this.addNode(numberOfPeople)
        }
    }

    dequeue = () => {
        if (this.isEmpty())
            console.log("No one is waiting")

        else if (this.size === 1) {
            let removeNode = this.front
            this.front = null
            this.back = null
            this.waitingTime = 0
            this.size = 0
            return removeNode.groupSize
        }


        else {
            let removeNode = this.front

            //update the new front
            this.front = removeNode.next

            //update size, waiting time
            this.size--
            this.waitingTime -= removeNode.groupSize * 0.5
            return removeNode.groupSize
        }
    }

}

const ride = new Queue()
console.log(ride.waitingTime)
ride.enqueue(4)
ride.enqueue(6)
ride.enqueue(17)
ride.enqueue(3)
console.log(ride.waitingTime)
console.log(ride.dequeue())
console.log(ride.waitingTime)