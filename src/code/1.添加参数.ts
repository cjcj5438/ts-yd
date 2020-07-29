// ① 函数参数 (理论上少于等于2个)
// function createMenu(title, body, buttonText, cancellable) {

// }
// ② 超过2个参数 使用对象统一传递
interface IMenuConfig {
    title?: string;
    body?: string;
    buttonText?: string;
    cancellable?: boolean;
}
const menuConfig: IMenuConfig = {
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true,
};

function createMenu(menuConfig: IMenuConfig) { 
    console.log(menuConfig)
}
createMenu({title:'你好'})

/*  */

function add(...rest: number[]): number;
function add(...rest: string[]): string;
function add(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
console.log(add(1, 2))
console.log(add('a', 'b', 'c'));
//不过如上代码我们可以更加简洁的完成它
interface ConfigFn {
  <T>(value: T): void;
}
var getData2: ConfigFn = function <T>(value: T): T {
  return value;
};
getData2<string>('老袁');