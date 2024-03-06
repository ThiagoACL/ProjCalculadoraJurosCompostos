document.getElementById('calcular').addEventListener('click', function(){
    let txtvalor = document.getElementById('ivalinicial').value;
    let valor = parseFloat(txtvalor);
    let txtjuros = document.querySelector('input#itxjuros').value;
    let juros = parseFloat(txtjuros)/100;
    let txtempo = document.querySelector('input#itemprend').value;
    let tempo = parseFloat(txtempo)
    const calc = valor * (1 + juros)**tempo;
    document.getElementById('result').innerHTML = ("R$" + calc.toFixed(2));

});