import calcularCadena from "./calculadoraCadena";

describe("Calculadora Cadena 2", () => {
  it("Tomando en cuenta una cadena vacia debe retornar 0", () => {       
    expect(calcularCadena("")).toEqual(0);
  }); 
  it("Tomando en cuenta una cadena 2 debe retornar 2", () => {       
    expect(calcularCadena("2")).toEqual(2);
  });
  it("Tomando en cuenta una cadena 1,2 debe retornar 3", () => {       
    expect(calcularCadena("1,2")).toEqual(3);
  });
  it("Tomando en cuenta una cadena 1,2,3 debe retornar 6", () => {       
    expect(calcularCadena("1,2,3")).toEqual(6);
  });
  it("Tomando en cuenta una cadena 1,2,4,8 debe retornar 15", () => {       
    expect(calcularCadena("1,2,4,8")).toEqual(15);
  });
});
