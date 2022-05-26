"use strict";

let btn = document.querySelectorAll('button'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    aaa = document.querySelectorAll('.хs-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    inc = document.getElementsByClassName('choose-item'),
    neobRasx = document.getElementsByClassName('optionalexpenses-item'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent');
let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    neobRasx: {},
    income: {},
    savings: false
};

btn[0].addEventListener('click', function () {

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');


    // while (time != (YYYY-MM-DD)) {
    //     time = prompt('Введите дату в формате YYYY-MM-DD', '');
    // }

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    };
    aaa[0].textContent = money.toFixed(2) + ' р.';
    appData.timeData = time;
    appData.budget = +money;
    appData.bud = appData.budget;
    aaa[4].textContent = appData.bud.toFixed(2) + ' р';
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    ddd();    
});

function ddd() {
    

    btn[1].addEventListener('click', function () {
        btn[1].insertAdjacentHTML("beforebegin", `<input class="choose-item" type="text" placeholder="Наименование">
       <input class="choose-item" type="text" placeholder="Цена">`);
    });

    btn[2].addEventListener('click', function () {
        let summ = 0;
        for (let i = 0; i < inc.length; i++) {
            let a = inc[i].value,
                b = inc[++i].value;

            if ((typeof (a)) === 'string' && (typeof (b)) !== null && (typeof (a)) !== null &&
                a != '' && b != '' && a.length < 50) {
                appData.income[a] = b;
                summ += +b;
                appData.sumD = +summ;
                appData.bud = appData.budget + appData.sumD;
                aaa[1].textContent = summ + ' р.';
                aaa[4].textContent = appData.bud.toFixed(2) + ' р';

            } else {
                i--;
            }
        }
    });

    checkSavings.addEventListener('input', function () {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function () {
        if (appData.savings == true) {
            let save = +sumValue.value,
                procent = +percentValue.value;
            appData.monthIncom = save / 12 / 100 * procent;
            appData.yearIncom = save / 100 * procent;
            appData.bud = appData.budget + appData.sumD + appData.monthIncom;
            aaa[2].textContent = appData.monthIncom.toFixed(2) + ' р';
            aaa[3].textContent = appData.yearIncom.toFixed(2) + ' р';
            aaa[4].textContent = appData.bud.toFixed(2) + ' р';
        }

    });

    percentValue.addEventListener('input', function () {
        if (appData.savings == true) {
            let save = +sumValue.value,
                procent = +percentValue.value;
            appData.monthIncom = save / 12 / 100 * procent;
            appData.yearIncom = save / 100 * procent;
            appData.bud = appData.budget + appData.sumD + appData.monthIncom;
            aaa[2].textContent = appData.monthIncom.toFixed(2) + ' р';
            aaa[3].textContent = appData.yearIncom.toFixed(2) + ' р';
            aaa[4].textContent = appData.bud.toFixed(2) + ' р';
        }

    });

    btn[3].addEventListener('click', function () {
        btn[3].insertAdjacentHTML("beforebegin", `<input class="expenses-item" type="text" placeholder="Наименование">
       <input class="expenses-item" type="text" placeholder="Цена">`);
    });

    btn[4].addEventListener('click', function () {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if ((typeof (a)) === 'string' && (typeof (b)) !== null && (typeof (a)) !== null &&
                a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
                appData.sumR = sum;
                appData.r = appData.sumR;
                aaa[5].textContent = sum + ' р.';
                aaa[7].textContent = appData.r.toFixed(2) + ' р';
            } else {
                i--;
            }
        }

    });

    btn[5].addEventListener('click', function () {
        btn[5].insertAdjacentHTML("beforebegin", `<input class="optionalexpenses-item" type="text" placeholder="Наименование">
       <input class="optionalexpenses-item" type="text" placeholder="Цена">`);
    });

    btn[6].addEventListener('click', function () {
        let sum = 0;
        for (let i = 0; i < neobRasx.length; i++) {
            let a = neobRasx[i].value,
                b = neobRasx[++i].value;

            if ((typeof (a)) === 'string' && (typeof (b)) !== null && (typeof (a)) !== null &&
                a != '' && b != '' && a.length < 50) {
                appData.neobRasx[a] = b;
                sum += +b;
                appData.sumNeob = +sum;
                appData.r = appData.sumR + appData.sumNeob;
                aaa[6].textContent = sum + ' р.';
                aaa[7].textContent = appData.r.toFixed(2) + ' р';

            } else {
                i--;
            }
        }

    });

    btn[7].addEventListener('click', function () {
        if (appData.budget != undefined) {
            appData.budgetDey = +((appData.bud - appData.r) / 30).toFixed(2);
            aaa[9].textContent = appData.budgetDey + ' р';
            aaa[8].textContent = (appData.bud - appData.r).toFixed(2) + ' р';
            if (appData.budgetDey < 500) {
                aaa[10].textContent = 'Ежедневный бюджет мал';
                aaa[8].style.color = '#ec1111';
                aaa[9].style.color = '#ec1111';
                aaa[10].style.color = '#ec1111';
            } else if (appData.budgetDey > 500 && appData.budgetDey < 2000) {
                aaa[10].textContent = 'Ежедневный бюджет средний';

            } else if (appData.budgetDey > 2000) {
                aaa[10].textContent = 'Ежедневный бюджет большой';
                aaa[8].style.color = '#175f21';
                aaa[9].style.color = '#175f21';
                aaa[10].style.color = '#175f21';
            } else {
                aaa[10].textContent = 'хрень какая-то!';
                aaa[8].style.color = '#ec1111';
                aaa[9].style.color = '#ec1111';
                aaa[10].style.color = '#ec1111';
                aaa[8].textContent = ' хрень какая-то!';
                aaa[9].textContent = ' фигня!';
                aaa[10].textContent = ' какой смысл?'
            }
        } else {
            aaa[8].textContent = ' хрень какая-то!';
            aaa[9].textContent = ' фигня!';
            aaa[10].textContent = ' какой смысл?';
            aaa[8].style.color = '#ec1111';
            aaa[9].style.color = '#ec1111';
            aaa[10].style.color = '#ec1111';
        }
    });
};