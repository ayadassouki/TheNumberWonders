//test cases 1012ab22f
assert = chai.assert;

describe('Testing game() project', function () {

   
    it('Test 1: game() returns something', function () {

        
        assert.exists(answer, 'the return value is not null or undefined');
      });
    
      it('Test 2: the returned value is from type number', function () {
        assert.typeOf(answer, 'number');
      });
    
      it('Test 3: the returned values are in (1,100) range', function () {
        for (var i = 1; i < 100; i++) {
        
          assert(answer < 100 && answer >= 1);
        }
      });
     })
    

    