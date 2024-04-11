function ativ1(){
    const livrosNovoTestamento = [
        "Mateus",
        "Marcos",
        "Lucas",
        "João",
        "Atos dos Apóstolos",
        "Romanos",
        "1 Coríntios",
        "2 Coríntios",
        "Gálatas",
        "Efésios",
        "Filipenses",
        "Colossenses",
        "1 Tessalonicenses",
        "2 Tessalonicenses",
        "1 Timóteo",
        "2 Timóteo",
        "Tito",
        "Filemom",
        "Hebreus",
        "Tiago",
        "1 Pedro",
        "2 Pedro",
        "1 João",
        "2 João",
        "3 João",
        "Judas",
        "Apocalipse"
    ];

    for (i = 0; i < livrosNovoTestamento.length; i++){
        console.log(`Minha escolha ${i+1} é ${livrosNovoTestamento[i]}`)
    };
}

function ativ2(){
    const nums = [1,2,3,4,5];

    const aoQuadrado = nums.map(n => n **2);
    console.log(aoQuadrado);
}

function ativ3(){
    let num = 123;
    let valores = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanoNumero = [
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ]

    let romano = ""; 

    // Percorrendo a lista de valores
    for (i = 0; i < valores.length; i++){

        // Enquanto o numero for maior...
        while (num >= valores[i]){

            // Será concatenada o num romano que esta atribuido ao valor
            romano += romanoNumero[i];

            // O valor decimal sera subtraido de num
            num -= valores[i];
        }
    }

    // Print do numero romano
    console.log(romano)




}

ativ1();
ativ2();
ativ3();