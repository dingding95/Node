/**
 * Created by dllo on 17/4/20.
 */
var assert = require('assert');



// 1.assert(value[, message])
// 当value值为真时进行测试，等同于assert.equal(true, !!value, message)。
// assert(1 !== 100,'1绝对不等于100');//不输出错误

// assert.ok(value[, message])
// assert()是assert.ok()的简写方式，两者用法一样。
// assert.ok(1 === 100,'1绝对不等于100');





// 2.assert.equal(actual, expected[, message])
// 相当于 ==
// 浅层测试，强制使用相等比较操作符进行比较。
// assert.equal(2,'2',"不相等==");//结果：



// assert.notEqual(actual, expected[, message])
// 相当于 ！=
// 浅层测试, 强制使用不等比较操作符进行比较 。对比结果为false时抛出异常。
// assert.notEqual(2,'2','相等');//结果：相等
// assert.notEqual(2,2,'相等');//结果：相等


// 3.assert.strictEqual(actual, expected, [message])
// 相当于 ===
// assert.strictEqual(2,'2','不完全相等');//结果：不完全相等
// assert.strictEqual(2,2,'不完全相等');//结果：


// assert.notStrictEqual(actual, expected[, message])
// 相当于！==
// assert.notStrictEqual(2,2,'完全相等');//结果：完全相等
// assert.notStrictEqual(2,'2','完全相等'); //结果：



// 4.assert.fail(actual, expected, message, operator)
// 判断message是否是错误的(false)，如果是错误的(false)则抛出错误信息：实际值操作operator 期望值。　
// 如果message为正确的(true)，那么抛出信息为message的错误信息。
// var a = 0;
// assert.fail(a,1,'a！=1','<'); // 结果: a！=1
// assert.fail(a,2,'','<');　// 结果: 0 < 2





// 5.assert.deepEqual(actual, expected[, message])
// 是否深度匹配
// false抛出异常
// .assert.notDeepEqual(actual, expected[, message])

// var buf1 = new Buffer('abc');
// var buf2 = new Buffer('abc');

// assert.strictEqual(buf1, buf2, 'buf1和buf2不一样');  //结果: buf1和buf2不一样
// assert.notDeepEqual(buf1, buf2, 'buf1和buf2一样');  //结果: buf1和buf2一样



// 6.assert.throws(block, [error], [message])
// 声明一个block用于抛出错误，'error'可以是构造函数，验证函数或者正则表达式

// assert.doesNotThrow(block, [message])
//声明模块不抛出错误
// assert.throws(
//     function() {
//         throw new Error("Wrong value");
//     },
//     Error
// );
//
// assert.doesNotThrow(function () {
//     throw new TypeError('错误');
// },
//     TypeError,'抛出错误'
// );// 抛出错误



// 7.assert.ifError(value)
// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
// assert.ifError(false);//不抛出
// assert.ifError(true);//抛出true assert.ifError = function(err) { if (err) throw err; };


