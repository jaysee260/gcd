// a = 210; b = 45;
// 210 = q * 45 + r;

/**
 * @name gcd
 * @param {Number} a
 * @param {Number} b
 */

module.exports = function gcd (a = 0, b = 0) {
  if (b == 0)
    return a;
  else
    return gcd(b, a % b);
}
