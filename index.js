function calculateMonteCarlo() {
    var simulationsInput = document.getElementById("simulations");
    var errorMessage = document.getElementById("error-message");

    var simulations = parseInt(simulationsInput.value);

    if (simulations < 1 || isNaN(simulations)) {
        errorMessage.textContent = "Ingrese un número válido mayor o igual a 1.";
        return;
    }

    errorMessage.textContent = "";

    var integralResult = calculateIntegral(simulations);
    var monteCarloResult = monteCarlo(simulations);
    var errorPercentage = calculateError(integralResult, monteCarloResult);

    var output = document.getElementById("output");
    output.innerHTML = "✅Resultado Matemático de la Integral: " + integralResult.toFixed(4) + "<br>" +
                       "✅Resultado Aproximado de la Integral por el Método de Monte Carlo: " + monteCarloResult.toFixed(4) + "<br>" +
                       "✅Porcentaje de Error: " + errorPercentage.toFixed(2) + "%";
}

function calculateIntegral(simulations) {
    var a = 2; // Límite inferior
    var b = 3; // Límite superior

    // Función a integrar: f(x) = 3x^2 + 2x
    var integralResult = (b**3 - a**3) * 3/3 + (b**2 - a**2) * 2/2;

    return integralResult;
}

function monteCarlo(simulations) {
    var a = 2; // Límite inferior
    var b = 3; // Límite superior
    var sum = 0;

    for (var i = 0; i < simulations; i++) {
        var randomX = Math.random() * (b - a) + a;
        var fx = 3 * randomX**2 + 2 * randomX;
        sum += fx;
    }

    var average = sum / simulations;
    var monteCarloResult = (b - a) * average;

    return monteCarloResult;
}

function calculateError(realValue, approxValue) {
    var error = Math.abs(realValue - approxValue);
    var errorPercentage = (error / realValue) * 100;

    if (errorPercentage > 24) {
        return -errorPercentage;
    } else {
        return errorPercentage;
    }
}
