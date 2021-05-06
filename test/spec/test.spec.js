require('../../index');

describe('/convert to int', () => {

    it('should convert empty string', (done) => {
        expect("".toInt()).toEqual(jasmine.any(Number));
        done();
    });

    it('should convert number string', (done) => {
        expect("123".toInt()).toEqual(jasmine.any(Number));
        done();
    });

    it('should convert non utf-8 string', (done) => {
        expect("ḞԍНǏ𝙅ƘԸⲘ".toInt()).toEqual(jasmine.any(Number));
        done();
    });

    it('should different number for different strings', (done) => {
        expect("foo".toInt()).not.toEqual("bar".toInt());
        done();
    });

    it('should convert multiline string', (done) => {
        expect(`
              first line
              second line
            `.toInt()).toEqual(jasmine.any(Number));
        done();
    });

    it('should convert object String', (done) => {
        expect((new String("test")).toInt()).toEqual(jasmine.any(Number));
        done();
    });

});

describe('/convert to set', () => {

    it('should convert string to one of array', (done) => {
        let array = [1, 2, 3];
        expect(array).toContain("test".to([1, 2, 3]));
        done();
    });

    it('should convert string to one of array with duplicates', (done) => {
        let array = [1, 2, 3];
        expect(array).toContain("test".to([1,1,1]));
        expect("test".to([1,1,1])).toEqual(1);
        done();
    });

    it('should work with non integer values in array', (done) => {
        let array = ["foo", "bar"];
        expect(array).toContain("test".to(array));
        done();
    });

    it('should work with big array', (done) => {
        let array = new Array(500000);
        expect(array).toContain("test".to(array));
        done();
    });

    it('should return original string if map is empty', (done) => {
        expect("test".to()).toEqual("test");
        done();
    });

});


