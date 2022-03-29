import calcularCadena from "./calculadoraCadena";

describe("Calculadora Cadena 2", () => {
  it("Tomando en cuenta una cadena vacia debe retornar 0", () => {       
    expect(calcularCadena("")).toEqual(0);
  }); 

});
