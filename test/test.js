const expect = require ('chai').expect
const platzom = require ('..').default // .. indica que el módulo irá a buscarlo al padre de la carpeta test, que es PLATZOM y al no indicar ningún archivo buscará en el package.json el archivo de entrada, es este ejemplo es dist/src/platzom.js


describe('#platzom', function() {
    it ('Si la palabra termina en ar, se quitan estas dos letras.', function() {
        const translation = platzom('Programar');
        expect(translation).to.equal('Program');
    });
    it ('Si la palabra empieza por z, se añade pe', function() {
        const translation = platzom('Zamora');
        expect(translation).to.equal('Zamorape');
        const traducir = platzom('Zampar');
        expect(traducir).to.equal('Zamppe');
    });
    it ('Si tiene 10 o más letras, se debe partir por la mitad colocando un guión separador en el centro', function() {
        const translation = platzom('administrador');
        expect(translation).to.equal('adminis-trador')
    });
    it ('Si la palabra original es un palíndromo, no se tienen en cuenta las reglas anteriores y se deben alternar las letras mayúsculas y minúsculas', function() {
        const translation = platzom('sometemos');
        expect(translation).to.equal('SoMeTeMoS');
    });
})