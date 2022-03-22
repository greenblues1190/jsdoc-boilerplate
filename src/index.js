/**
 * Represents a vending machine have americano hot and iced
 * @constructor
 * @param {number} hotAmericanoCount - The initial count of hot americano vending machine will have.
 * @param {number} icedAmericanoCount - The initial count of iced americano vending machine will have.
 */
function VendingMachine(hotAmericanoCount, icedAmericanoCount) {}

/**
 * User can buy item. Depending on money, decrease the count of item that vending machine have.
 * @param {number} money - Money over 1000 buy iced Americano, under 1000 buy hot Americano.
 * @return {string} return template is `=== {product name} ({purchased amount}/{total amount}개)를 {purchased money}원에 구매했습니다. ===`
 */
VendingMachine.prototype.getItem = function (money) {};
