const income = document.getElementById('income');


const food = document.getElementById('food');
const rent = document.getElementById('rent');
const dress = document.getElementById('dress');


document.getElementById('calculate').addEventListener('click', function(){
    if(income.value <= 0){
        alert("You don't have Income")
    }
    else{
        const totalExpenses = parseInt(food.value) + parseInt(rent.value) + parseInt(dress.value)
        document.getElementById('toalExpenses').innerText = totalExpenses;
    
        //balance section edite
        const balance = income.value - totalExpenses;
        document.getElementById('balance').innerText = balance;}
})

//save function added 
const save = document.getElementById('save');
document.getElementById('saveBtn').addEventListener('click', function(){
    const savingAmmount = (income.value / 100) * save.value;
    console.log(savingAmmount)
    document.getElementById('savingAmmount').innerText = savingAmmount;
    const preBalance = document.getElementById('balance');
    document.getElementById('RemainBalance').innerText = parseInt(preBalance.innerText) - savingAmmount;
    income.value ='';
    save.value = '';

})