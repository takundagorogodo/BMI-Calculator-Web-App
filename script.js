const btnEl = document.getElementById("submit-btn");
const showBMIEl = document.getElementById("showBMI");
const resultEl = document.getElementById("result");

function calculateBMI() {

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("Please enter valid height and weight");
        return;
    }

    const BMI = weight / Math.pow((height/ 100),2);

    let BMIClass = "";

    if (BMI < 18.5) {
        BMIClass = "Under Weight";
        resultEl.style.color = "red";
    } 
    else if (BMI >= 18.5 && BMI < 25) {
        BMIClass = "Normal Weight";
        resultEl.style.color = "green";
    }
    else if (BMI >= 25 && BMI < 30) {
        BMIClass = "Over Weight";
        resultEl.style.color = "red";
    } 
    else {
        BMIClass = "Obese";
        resultEl.style.color = "orangered";
       
    }

    showBMIEl.value = BMI.toFixed(2);
    resultEl.innerHTML = `Weight Condition : ${BMIClass}`;

    //document.getElementById("height").value = "";
    //document.getElementById("weight").value = "";
}

btnEl.addEventListener("click", calculateBMI);