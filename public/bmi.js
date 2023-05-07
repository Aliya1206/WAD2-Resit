function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;
    let bmi = weight / (height * height);
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2);
}