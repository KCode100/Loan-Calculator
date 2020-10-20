const loanAmount = document.getElementById('loanAmount');
const aunnualInterest = document.getElementById('annualInterest');
const repaymentYears = document.getElementById('repaymentYears');
const calculateButton = document.querySelector('.calculate');
calculateButton.addEventListener('click', loader);
const outputMonthlyPayment = document.querySelector('.monthlyPayment');
const outputTotalPayment = document.querySelector('.totalPayment');
const outputTotalInterest = document.querySelector('.totalInterest');

function loader(){
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.results').style.display = 'none';
    setTimeout(calculate, 2000);
}

function calculate(){
    // parse inputs
    const amount = parseFloat(loanAmount.value);
    const i = parseFloat(annualInterest.value);
    const y = parseFloat(repaymentYears.value);
    
    // calculate annual interest
    const totalInterest = (i/100) * amount;

    // calculate interest + loan
    const totalPayment = totalInterest + amount;

    // calculate years to month
    const months = y * 12;
    // calculate monthly payment
    const monthlyPayment = totalPayment / months;

    // Show error if any fields are empty
    if (annualInterest.value === '' || loanAmount.value === '' || repaymentYears.value === ''){
        document.querySelector('.loader').style.display = 'none';
        error();
    }else{
        console.log(`Your total payment is: ${totalPayment}Your total interest is: ${totalInterest}Your monthly payment is ${monthlyPayment}`);
        outputMonthlyPayment.value = monthlyPayment.toLocaleString('en-US', {maximumFractionDigits:2});
        outputTotalPayment.value = totalPayment.toLocaleString('en-US', {maximumFractionDigits:2});
        outputTotalInterest.value = totalInterest.toLocaleString('en-US', {maximumFractionDigits:2});
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.results').style.display = 'block';
    }
}

function error(){
    setTimeout(clearError, 3000);
    const errorDiv = document.createElement('div');
        errorDiv.innerHTML = 'ALL FIELDS ARE REQUIRED!!!!';
        errorDiv.className = 'alert  alert-danger text-center';
        const heading = document.querySelector('h3');
        document.querySelector('.loan_box').insertBefore(errorDiv, heading);
}

function clearError(){
    document.querySelector('.alert').remove();
}