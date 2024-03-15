// Usando Namespaces
// namespace Geometria {
//     export namespace Area {
        
//         const PI = 3.14
        
//         export function Circunferencia(raio: number): number  {
//             return PI * Math.pow(raio, 2)
//         }
        
//         export function Retangulo(base: number, altura: number): number {
//             return base * altura
//         }
//     }
// }

// const PI = 2.99
// console.log(PI)

console.log(Geometria.Area.Circunferencia(10))
console.log(Geometria.Area.Retangulo(12,20))


// Referencia
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>


