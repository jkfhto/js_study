// 类中的mixnin

//混合某个功能 AOP
let Mixin = (superClass) => class extends superClass {
    beforeCreate() {
        console.log('before create2');
        super.beforeCreate();
    }
}
class A {
    beforeCreate() {
        console.log('before create3');
    }
}
class B extends Mixin(A) {
    beforeCreate() {
        console.log('before create1');
        super.beforeCreate();
    }
}
new B().beforeCreate();
//before create1
//before create2
//before create3