/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}

/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * @see {@link foo} for further information.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}

/**
 * Generic dairy product.
 * @constructor
 */
function DairyProduct() {}

/**
 * Check whether the dairy product is solid at room temperature.
 * @abstract
 * @return {boolean}
 */
DairyProduct.prototype.isSolid = function () {
  throw new Error('must be implemented by subclass!');
};

/**
 * Cool, refreshing milk.
 * @constructor
 * @augments DairyProduct
 */
function Milk() {}

/**
 * Check whether milk is solid at room temperature.
 * @return {boolean} Always returns false.
 */
Milk.prototype.isSolid = function () {
  return false;
};

// vendingMachine.getItem(1000)

// // === 아이스 아메리카노(1/10개)를 1000원에 구매했습니다. ===

// vendingMachine.getItem(900)

// // === 따뜻한 아메리카노 (1/5개)를 900원에 구매했습니다. ===

// TODO: VendingMachine 클래스?

/**
 * VendingMachine 설명
 * @constructor
 * @param {number} hotAmericanoCount
 * @param {number} icedAmericanoCount
 */
function VendingMachine(hotAmericanoCount, icedAmericanoCount) {}

/**
 * VendingMachine.prototype.getItem 설명
 * @param {number} money
 */
DairyProduct.prototype.getItem = function (money) {
  throw new Error('must be implemented by subclass!');
};
