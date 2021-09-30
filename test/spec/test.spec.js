require('../../index');

describe('/convert to set', () => {

    it('should convert string to one of array', (done) => {
        let array = [1, 2, 3];
        expect(array).toContain("test".toItem([1, 2, 3]));
        done();
    });

    it('should get item by number', (done) => {
        let array = [1, 2, 3];
        expect(array).toContain("1".toItem([1, 2, 3]));
        done();
    });

    it('should convert string to one of array with duplicates', (done) => {
        let array = [1, 2, 3];
        expect(array).toContain("test".toItem([1, 1, 1]));
        expect("test".toItem([1, 1, 1])).toEqual(1);
        done();
    });

    it('should work with non integer values in array', (done) => {
        let array = ["foo", "bar"];
        expect(array).toContain("test".toItem(array));
        done();
    });

    it('should work with big array', (done) => {
        let array = new Array(500000);
        expect(array).toContain("test".toItem(array));
        done();
    });

    it('should return original string if map is empty', (done) => {
        expect("test".toItem()).toEqual("test");
        done();
    });

    it('should convert any type of object', (done) => {
        let array = ["foo", "bar"];
        expect(array).toContain((new Date()).toItem(array));
        done();
    })

    it('should always return same result for same input', (done) => {
        let array = new Array(10);
        let value1 = "test".toItem(array);
        let value2 = "test".toItem(array);
        let value3 = "test".toItem(array);
        expect(value1).toBe(value2);
        expect(value1).toBe(value3);
        done();
    })

    it('should ignore orders in set', (done) => {
        let array = [234, 284, 22, 1, 40, 2876, 48, 234];
        let value1 = "test".toItem(array)
        let value2 = "test".toItem(array.reverse());
        let value3 = "test".toItem(array.sort());
        expect(value1).toBe(value2);
        expect(value1).toBe(value3);
        done();
    })

    it('should convert to any type of item', (done) => {
        let item1 = new Date();
        let item2 = new Array(5);
        let item3 = String("test");
        let array = [item1, item2, item3];
        expect([typeof item1, typeof item2, typeof item3]).toContain(typeof "someRandomText".toItem(array));
        done();
    })

    it('should work with empty set', (done) => {
        let array = [];
        expect("test".toItem(array)).toEqual(undefined);
        done();
    })

    it('should return original object if no parameter is given', (done) => {
        expect("test".toItem()).toEqual("test");
        expect(Array.isArray([1,2].toItem())).toEqual(true);
        done();
    })

    it('should return different values for different strings', (done) => {
        expect("foo".toItem(["a", "b"])).not.toEqual("bar".toItem(["a", "b"]));
        done();
    });

});

describe('/convert object with "toItem" method', () => {
    it('should preserve original "toItem" method', (done) => {
        let SomeObject = {
            toItem: function () {
                return 'it works';
            }
        }
        expect(SomeObject.toItem(["a", "b"])).toEqual("it works");
        done();
    })
});

describe('/should use with functions', () => {
    it('should call correct function', (done) => {
        let func1 = function (){
            return "func1";
        }
        let func2 = function (){
            return "func2";
        }
        expect(["func1", "func2"]).toContain(Math.random().toItem([func1, func2])());
        done();
    })
});

