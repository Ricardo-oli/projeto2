function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    tot = qtd * 0.99;
    document.getElementById('cTot').value = tot;