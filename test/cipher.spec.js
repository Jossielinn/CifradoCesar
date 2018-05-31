describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33');
    assert.isObject(typeof cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"Debe mostrar de resultado HIJKLMNOPQRSTUVWXYZABCDEFG");
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmopqrstuvwxyz" con offest 33');
    assert.isObject(typeof cipher.encode(33,"abcdefghijklmopqrstuvwxyz"),"Debe mostrar de resultado hijklmnopqrstuvwxyzabcdefg");
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33');
    assert.equal(typeof cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"Debe mostrar de resultado ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "abcdefghijklmopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33');
    assert.equal(typeof cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"Debe mostrar de resultado abcdefghijklmopqrstuvwxyz");
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });

});
