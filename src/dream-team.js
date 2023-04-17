const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members) || members.every(member => typeof member !== 'string')) return false;
  let result = [];
  result = members.filter(member => typeof member === 'string');
  result = result
    .map(member => member.split(' ').join(''))
    .map(member => member[0].toUpperCase())
    .sort()
    .join('');

  return result;
}

module.exports = {
  createDreamTeam
};
