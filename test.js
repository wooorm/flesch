import test from 'tape'
import {flesch} from './index.js'

test('flesch', function (t) {
  // @ts-ignore runtime
  t.ok(Number.isNaN(flesch()), 'NaN when an invalid value is given')
  t.equal(round(flesch({sentence: 1, word: 6, syllable: 6})), 116.145)
  t.equal(round(flesch({sentence: 1, word: 16, syllable: 22})), 74.27)
  t.equal(round(flesch({sentence: 1, word: 13, syllable: 26})), 24.44)
  t.end()
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
