function valorComDuasCasaDec(valor){
     console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}

valorComDuasCasaDec(0.3000000000040)