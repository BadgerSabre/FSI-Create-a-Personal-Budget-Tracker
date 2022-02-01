let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for(let i = 0; i < weeklyExpensesQuestions.length; i++) {
    let answer = parceFloat(window.prompt(weeklyExpenseQuestions[0]))
    weeklyExpenses = weeklyExpenses + answer
}
for(let i = 0; i < monthlyExpensesQuestions.length; i++) {
    let answer = parceFloat(window.prompt(monthlyExpenseQuestions[0]))
    monthlyExpenses = monthlyExpenses + answer
}
for(let i = 0; i < annualExpensesQuestions.length; i++) {
    let answer = parceFloat(window.prompt(annualExpenseQuestions[0]))
    annualExpenses = annualExpenses + answer
}