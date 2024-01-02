

const convertidor = {
  convertirDolarAEuro: function (cantidad) {
    
    const factorConversion = 0.85;
    return cantidad * factorConversion;
  },



convertirEuroADolar: function (cantidad) {
    
    const factorConversion = 1.15;
    return cantidad * factorConversion;
  }
};


   function realizarConversion(){
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const moneda = document.getElementById('moneda').value;

    if (isNaN(cantidad)) {
      alert('Por favor, introduce una cantidad válida.');
      return;
    }
  
    let resultado;
  

   if (moneda === 'usd') {
     resultado = convertidor.convertirDolarAEuro(cantidad);
     console.log(`Convertir ${cantidad} dólares a euros.`);
   }
    else if (moneda === 'eur') {
     resultado = convertidor.convertirEuroADolar(cantidad);
     console.log(`Convertir ${cantidad} euros a dólares.`);
   }
   document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)}`;
   console.log(`Resultado: ${resultado.toFixed(2)}`);
  }
  
   