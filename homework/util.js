/**
 * Created by dllo on 17/4/21.
 */



const EventEmitter = require('events');
const util = require('util');
class MyEmitter extends EventEmitter{

}

const em = new MyEmitter();

em.on('foo',function () {
    console.log('出去');
});


// util.debuglog(section)
// section <String> 一个字符串，指定要为应用的哪些部分创建 debuglog 函数。 debuglog 函数要为哪些应用创建。
// 返回: <Function> 日志函数
const debuglog = util.debuglog('foo');
console.log(debuglog('hello from foo [%d]', 123));




// util.deprecate() 方法会包装给定的 function 或类，并标记为废弃的
exports.puts = util.deprecate(function() {
    for (var i = 0, len = arguments.length; i < len; ++i) {
        process.stdout.write(arguments[i] + '\n');
    }
}, 'util.puts: 使用 console.log 代替');




// util.format(format[, ...args])
// format <String> 一个类似 printf 的格式字符串。
// util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。

// 第一个参数是一个字符串，包含零个或多个占位符。 每个占位符会被对应参数转换后的值所替换。 支持的占位符有：
/**
 *  %s - 字符串。
 *  %d - 数值（包括整数和浮点数）。
 *  %j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
 *  %% - 单个百分号（'%'）。不消耗参数。
 */
// 如果占位符没有对应的参数，则占位符不被替换。
// 如果传入 util.format() 方法的参数比占位符的数量多，则多出的参数会被强制转换为字符串（对于对象和符号，使用 util.inspect()），然后拼接到返回的字符串，参数之间用一个空格分隔。
//如果第一个参数不是一个格式字符串，则 util.format() 返回一个所有参数用空格分隔并连在一起的字符串。 每个参数都使用 util.inspect() 转换为一个字符串。
console.log(util.format('%s:%s', 'foo'));
// 返回: 'foo:%s'
console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));
// 'foo:bar baz'
console.log(util.format(1, 2, 3));
// '1 2 3'



// util.inherits(constructor, superConstructor)
// 注意，不建议使用 util.inherits()。 请使用 ES6 的 class 和 extends 关键词获得语言层面的继承支持。 注意，这两种方式是语义上不兼容的。constructor <Function>  superConstructor <Function>
// 从一个构造函数中继承原型方法到另一个。 constructor 的原型会被设置到一个从 superConstructor 创建的新对象上。
// superConstructor 可通过 constructor.super_ 属性访问。

function MyStream() {
    EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
    this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
    console.log(`接收的数据："${data}"`);
});
stream.write('运作良好！'); // 接收的数据："运作良好！"




//util.inspect(object[, options])
//参数一：任何 JavaScript 原始值或对象。
//参数二：
/***
 * showHidden <boolean> 如果为 true，则 object 的不可枚举的符号与属性也会被包括在格式化后的结果中。 默认为 false。
 * depth <number> 指定格式化 object 时递归的次数。 这对查看大型复杂对象很有用。 默认为 2。 若要无限地递归则传入 null。
 * colors <boolean> 如果为 true，则输出样式使用 ANSI 颜色代码。 默认为 false。 颜色可自定义，详见自定义 util.inspect 颜色。
 * customInspect <boolean> 如果为 false，则 object 上自定义的 inspect(depth, opts) 函数不会被调用。 默认为 true。
 * showProxy <boolean> 如果为 true，则 Proxy 对象的对象和函数会展示它们的 target 和 handler 对象。 默认为 false。
 * maxArrayLength <number> 指定格式化时数组和 TypedArray 元素能包含的最大数量。 默认为 100。 设为 null 则显式全部数组元素。 设为 0 或负数则不显式数组元素。
 * breakLength <number> 一个对象的键被拆分成多行的长度。 设为 Infinity 则格式化一个对象为单行。 默认为 60。
 util.inspect() 方法返回 object 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面。
 *
 *
 */

// util.inspect() 方法返回 object 的字符串表示，主要用于调试
console.log(util.inspect(util, { showHidden: true, depth: null }));

em.emit('foo');


//util.inspect.defaultOptions
//defaultOptions 值允许对被 util.inspect 使用的默认选项进行自定义。 这对 console.log 或 util.format 等显式调用 util.inspect 的函数很有用。 它需被设为一个对象，包含一个或多个有效的 util.inspect() 选项。 也支持直接设置选项的属性。
const arr = Array(101);

console.log(arr); // 打印截断的数组
util.inspect.defaultOptions.maxArrayLength = null;
console.log(arr); // 打印完整的数组
