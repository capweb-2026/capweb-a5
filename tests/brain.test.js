import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';


describe('validateMessage', () => {

    it('une chaîne vide est refusée', () => {
        assert.equal(validateMessage("").ok, false)
    });

    it('salut est lu correctement', () => {
        assert.equal(validateMessage("    salut    ").value, "salut")
    });

    it('une chaîne trop longue est refusée', () => {
        assert.equal(validateMessage('a'.repeat(281)).ok, false)
    });
});

describe('replyTo', () => {

    it('SALUT et salut', () => {
        assert.equal(replyTo('SALUT'), replyTo('salut'))
    });

    it('phrases differentes', () => {
        assert.notEqual(replyTo('aide'), replyTo('je comprends pas'))
    });

});