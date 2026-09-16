**Casser exprès**

const NOM = 'CODEA';  ==>  const NOM = 'CODE';


-- npm run verify --  ==>   ✖ failing tests:

                            test at tests/identite.test.js:17:3
                            ✖ critère 1 — getName() retourne CODEA (4.447663ms)
                              AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  
                              'CODE' !== 'CODEA'