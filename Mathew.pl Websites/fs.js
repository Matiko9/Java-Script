document.getElementById('quadraticForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
  
    const result = document.getElementById('result');
    result.innerHTML = '';
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      result.innerText = 'Proszę wprowadzić poprawne wartości dla a, b i c.';
    } else {
      const delta = b * b - 4 * a * c;
  
      if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result.innerText = `Pierwiastki równania to: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
      } else if (delta === 0) {
        const x = -b / (2 * a);
        result.innerText = `Równanie ma jeden pierwiastek: x = ${x.toFixed(2)}`;
      } else {
        result.innerText = 'Brak pierwiastków równania dla podanych wartości a, b i c.';
      }
    }
  });
  