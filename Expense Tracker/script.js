// "use strict";

// const errorMesgEl = document.querySelector('.error_message');
// const budgeInputEl = document.querySelector('.budget_input');
// const expenseDesEl = document.querySelector('.expensess_input');
// const expenseAmountEl = document.querySelector('.expensess_amount');
// const tblRecordEl = document.querySelector(".tbl_data");
// const cardsContainer = document.querySelector(".cards");

// // cards content
// const budgetCardEl = document.querySelector(".budget_card");
// const expenseCardEl = document.querySelector(".expenses_card");
// const balanceCardEl = document.querySelector(".balance_card");

// let itemList=[];
// let itemId=0;

// // ***********button events*********************//
// function btnEvents(){
//     const btnBudgetCal = document.querySelector('#btn_budget')
//     const btnExpensesCal = document.querySelector('#btn_expenses')

//     //****************Budget Events*************** */
//     btnBudgetCal.addEventListener('click',(e)=>{
//         e.preventDefault();
//         budgetFun();
//     });

//     //****************Budget Events*************** */
//     btnExpensesCal.addEventListener('click',(e)=>{
//         e.preventDefault();
//         expensesFun();
//     });
// }

// //********************************calling btns events */
// document.addEventListener("DOMContentLoaded", btnEvents);

// // ***************************************expenses function
// function expensesFun(){
//     let expensesDescValue = expenseDesEl.value;
//     let expensesAmountValue = expenseAmountEl.value;
//     // console.log(typeof expensesDescValue);

//     if(expensesDescValue == "" || expensesAmountValue == "" || budgeInputEl < 0){
//         errorMessageg("please enter expenses desc or expenses amount!")
//     }else{
//         let amount = parseInt(expensesAmountValue);
//         expenseAmountEl.value = "";
//         expensesDesE1.value = "";

//         let expenses={
//             id:itemId,
//             title:expensesDescValue,
//             amount:amount;
//         };
//         itemId++;
//         itemList.push(expenses)
//         // console.log(itemList);

//         //add expenses inside the html pg
//         addExpenses(expenses);
//         showBalance();
//     }

// }
// // ************add expenses
// function addExpenses(expensesPara){
//     const html =<ul class="tbl_tr_content">
//                     <li data-id=${expensesPara.id}>${expensesPara.id}</li>
//                     <li>${expensesPara.title}</li>
//                     <li><span>$</span>${expensesPara.id}</li>
//                     <li>
//                         <button type="button" class="btn_edit">Edit</button>
//                         <button type="button" class="btn_delete">Delete</button>
//                     </li>
//                 </ul>;
//     tblRecordEl.insertAdjacentHTML("beforeend",html)
//     //****************************edit */
    
//     const btnEdit = document.querySelectorAll('.btn_edit');
//     const btnDel = document.querySelectorAll('.btn_delete')
//     const content_id = document.querySelectorAll('.tbl_tr_content')

//     // **********************btn edit event
//     btnEdit.forEach((btnedit) => {
//         btnedit.addEventListener('click', (el)=>{
//             let id;
//             content_id.forEach((ids)=>{
//                 id=ids.firstElementChild.dataset.id;
//             })
//             let element= el.target.parentElement.parentElement;
//             // console.log(element)
//             element.remove()

//             let expenses = itemList.filter(function(item){
//                 return item.id == id;
//             })
//             expenseDesEl.value=expenses[0].title;
//             expenseAmountEl.value=expenses[0].amount;

//             let temp_list=itemList.filter(function(item){
//                 return item.id! !=id;
//             })
//             itemList=temp_list;
//             // console.log(expenses)
//         }
//     )
//     })


//     // *****************************btn delete

//     btnEdit.forEach((btndel) => {
//         btndel.addEventListener('click', (el)=>{
//             let id;
//             content_id.forEach((ids)=>{
//                 id=ids.firstElementChild.dataset.id;
//             })
//             let element= el.target.parentElement.parentElement;
//             // console.log(element)
//             element.remove()

            

//             let temp_list=itemList.filter(function(item){
//                 return item.id! !=id;
//             })
//             itemList=temp_list;
//             showBalance();
//             // console.log(expenses)
//         }
//     )
//     })


// }
// //***********************************Budget function */
// function budgetFun(){
//     const budgetValue= budgetInputEl.value;
    
//     if(budgetValue == "" || budgetValue <0){ 
//         errorMessageg("Please Enter Budget or More Than 0")
//     }else{
//         budgetCardEl.textContent = budgetValue;
//         budgetInputEl.value = "";
//         showBalance();
//     }
// }

// // ************************show balance
// function showBalance(){
//     const expenses = totalExpenses();
//     const total = parseInt(budgetCardEl.textContent) - expenses;
//     balanceCardEl.textContent = total;
// }

// // ***********************total expenses
// function totalExpenses(){
//     let total = 0;

//     if(itemList.length > 0 ){
//         total = itemList.reduce(function(acc,curr){
//             acc += curr.amount;
//             return acc;
//         },0)
//     }
//     // console.log(total)
//     expenseCardEl.textContent = total
//     return total;
//     // console.log(total)
// }

// // *******************************error message function********/
// function errorMessageg(message){
//     errorMesgEl.innerHTML=<p>${message}</p>;
//     errorMesgEl.classList.add('error');
//     setTimeout(()=>{
//         errorMesgEl.classList.remove('error');
//     },2500)
// }







"use strict";

const errorMesgEl = document.querySelector('.error_message');
const budgetInputEl = document.querySelector('.budget_input');
const expenseDesEl = document.querySelector('.expenses_input');
const expenseAmountEl = document.querySelector('.expenses_amount');
const tblRecordEl = document.querySelector(".tbl_data");

const budgetCardEl = document.querySelector(".budget_card");
const expenseCardEl = document.querySelector(".expenses_card");
const balanceCardEl = document.querySelector(".balance_card");

let itemList = [];
let itemId = 0;

function btnEvents() {
    document.querySelector('#btn_budget').addEventListener('click', (e) => {
        e.preventDefault();
        budgetFun();
    });

    document.querySelector('#btn_expenses').addEventListener('click', (e) => {
        e.preventDefault();
        expensesFun();
    });
}

document.addEventListener("DOMContentLoaded", btnEvents);

function budgetFun() {
    const budgetValue = parseFloat(budgetInputEl.value);
    if (isNaN(budgetValue) || budgetValue <= 0) {
        showError("Please enter a valid budget greater than 0");
    } else {
        budgetCardEl.textContent = budgetValue;
        budgetInputEl.value = "";
        showBalance();
    }
}

function expensesFun() {
    const desc = expenseDesEl.value.trim();
    const amount = parseFloat(expenseAmountEl.value);

    if (desc === "" || isNaN(amount) || amount <= 0) {
        showError("Please enter a valid expense description and amount");
        return;
    }

    const expense = {
        id: itemId++,
        title: desc,
        amount: amount
    };

    itemList.push(expense);
    expenseDesEl.value = "";
    expenseAmountEl.value = "";

    addExpenseToTable(expense);
    showBalance();
}

function addExpenseToTable(expense) {
    const html = `
        <ul class="tbl_tr_content" data-id="${expense.id}">
            <li>${expense.id}</li>
            <li>${expense.title}</li>
            <li><span>$</span>${expense.amount}</li>
            <li>
                <button type="button" class="btn_edit">Edit</button>
                <button type="button" class="btn_delete">Delete</button>
            </li>
        </ul>
    `;
    tblRecordEl.insertAdjacentHTML("beforeend", html);

    const row = tblRecordEl.querySelector(`[data-id="${expense.id}"]`);
    row.querySelector(".btn_edit").addEventListener("click", () => editExpense(expense.id));
    row.querySelector(".btn_delete").addEventListener("click", () => deleteExpense(expense.id));
}

function editExpense(id) {
    const expense = itemList.find(item => item.id === id);
    if (!expense) return;

    expenseDesEl.value = expense.title;
    expenseAmountEl.value = expense.amount;

    itemList = itemList.filter(item => item.id !== id);
    document.querySelector(`[data-id="${id}"]`).remove();
    showBalance();
}

function deleteExpense(id) {
    itemList = itemList.filter(item => item.id !== id);
    document.querySelector(`[data-id="${id}"]`).remove();
    showBalance();
}

function totalExpenses() {
    const total = itemList.reduce((sum, item) => sum + item.amount, 0);
    expenseCardEl.textContent = total;
    return total;
}

function showBalance() {
    const total = parseFloat(budgetCardEl.textContent || 0) - totalExpenses();
    balanceCardEl.textContent = total;
}

function showError(message) {
    errorMesgEl.innerHTML = `<p>${message}</p>`;
    errorMesgEl.classList.add('error');
    setTimeout(() => {
        errorMesgEl.classList.remove('error');
    }, 2500);
}
