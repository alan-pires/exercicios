function verificaTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("equilatero")
    } else if (  (lado1 == lado2 && lado2 != lado3) || (lado1 != lado2 && lado1 == lado3) || (lado2 == lado3 && lado1 != lado3)   ) {
        console.log("isóceles")
    } else if (lado1 != lado2 && lado2 != lado3) {
        console.log("escaleno")
    }

}
verificaTriangulo(3, 3, 1)

//l1 = l2  e   l2 != l3
//l1 = l3  e   l1 !=l2
//l2 = l3  e   l1 !=l3
