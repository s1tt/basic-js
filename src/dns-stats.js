const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split('.').reverse();
    let currentDns = '';

    for (let j = 0; j < domainParts.length; j++) {
      currentDns += `.${domainParts[j]}`;

      if (!dnsStats[currentDns]) {
        dnsStats[currentDns] = 1;
      } else {
        dnsStats[currentDns]++;
      }
    }
  }

  return dnsStats;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
