"use strict";

const animal = {
    name: 'Animal',
    age: 5,
    hasTail: true
}

class  Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('hello')
    }
}

const animal2 = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

animal2.voice();
console.log(Animal.type);

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
         super(options);
        this.color = options.color
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 1,
    hasTail: true,
    color: 'black'
})

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color

    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})