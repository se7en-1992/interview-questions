function add(target) {
    target.age = '18',
    target.getAge = function() {
        return target.age
    }
}

@add
class Student {
    
}