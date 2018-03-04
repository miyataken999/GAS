function random() {
    // 引数で指定した文字列文だけランダム文字列生成
    Logger.log(underscoreGS._randomString(10))
}

// 配列の中から条件にあった最初の値を取り出す
function find() {
    var find = underscoreGS._find([1, 2, 3, 4, 5, 6], function(num) {
        return num % 2 == 0;
    })

    // 2
    Logger.log(find);
}

// 配列の中から条件にあった全ての値を取り出す
function filter() {
    var filter = underscoreGS._filter([1, 2, 3, 4, 5, 6], function(num) {
        return num % 2 == 0;
    })

    // 2, 4, 6
    Logger.log(filter)
}

// 配列に指定した値が入っているか調べる。返り値はtrue/false
function contains() {
    var contains = underscoreGS._contains([1, 2, 3], 3);

    // true
    Logger.log(contains)
}

// 配列を総なめしてします。引数にはインデックスと配列の中身が渡されます
function each() {
    underscoreGS._each([100, 200, 300], function(value, key) {
        // 0,1,2
        Logger.log(key);

        // 100,200,300
        Logger.log(value);
    })
}

// 配列に対して特定の処理を行う
function map() {
    var result = underscoreGS._map([1, 2, 3], function(num) {
        return num * 10;
    });

    // 10,20,30
    Logger.log(result);
}

// リストの要素がすべて真値テスト(iterator)を通過した場合、trueを返す
function all() {
    var all = underscoreGS._all([2, 4], function(num) {
        return num % 2 == 0;
    });

    // false
    Logger.log(all);
}

// リストの要素の一部が真値テスト(iterator)を通過した場合、trueを返す
function any() {
    var any = underscoreGS._any([2, 5], function(num) {
        return num % 2 == 0;
    });

    // true
    Logger.log(any);
}

// 第二引数で指定したｎの数だけ、先頭からn番目までの要素を配列で返す
function first() {
    var first = underscoreGS._first([1, 2, 3, 4, 5], 3)

    // [1.0, 2.0, 3.0]
    Logger.log(first);
}

// function groupBy() {
//     var groupBy = underscoreGS._groupBy(["1-3", "2-1", "2-4"], function(num) {
//         return num.substring(0, 1)
//     });
//
//     Logger.log(groupBy);
// }

// オブジェクトが特定のキーを持っているか判定
function has() {
    var obj = {
        first: 1,
        second: 2,
        third: 3
    };
    var has = underscoreGS._has(obj, "third")

    // true
    Logger.log(has);
}

// 引数をそのまま返す
function identity() {
    var obj = {
        name: "sasaki"
    };
    var identity = underscoreGS._identity(obj)

    // {name=sasaki}
    Logger.log(identity);
}

// 配列に第二引数で指定した値が含まれていた場合、指定した値が一番最初に現れた位置を返す。含まれていなかった場合は-1を返す
function indexOf() {
    var indexOf = underscoreGS._indexOf([1, 2, 3], 3)

    // 2
    Logger.log(indexOf);
}

// 最後からn個分以外の要素を返します。nは第二引数です
function indexOf() {
    var indexOf = underscoreGS._initial([1, 2, 3, 4, 5], 1)

    // [1,2,3,4]
    Logger.log(indexOf);
}

// 引数の型が配列だった時にtrueを返す
function isArray() {
    array = [1, 2, 3]
    var isArray = underscoreGS._isArray(array)
    // true
    Logger.log(isArray);

    array2 = 1
    var isArray2 = underscoreGS._isArray(array2)
    // false
    Logger.log(isArray2);
}

// 引数がBoolean型か判定する
function isArray() {
    var isBoolean = underscoreGS._isBoolean(false)
    // true
    Logger.log(isBoolean);

    var isBoolean2 = underscoreGS._isBoolean(1)
    // false
    Logger.log(isBoolean2);
}

// 引数がBoolean型か判定する
function isDate() {
    var isDate = underscoreGS._isDate(new Date())
    // true
    Logger.log(isDate);

    var isDate2 = underscoreGS._isDate("日付")
    // false
    Logger.log(isDate2);
}

// 分からない。。。
// function isElement() {
//     var isElement = underscoreGS._isElement(obj)
//     //
//     Logger.log(isDate);
// }

// 引数がBoolean型か判定する
function isDate() {
    var isDate = underscoreGS._isDate(new Date())
    // true
    Logger.log(isDate);

    var isDate2 = underscoreGS._isDate("日付")
    // false
    Logger.log(isDate2);
}

// 空かどうか判定する。空ならture
function isEmpty() {
    var obj = {}
    var isEmpty = underscoreGS._isEmpty(obj)
    // true
    Logger.log(isEmpty);
}