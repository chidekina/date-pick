const monthsName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']



for (let i = 2024; i >= 1924; i--){
    year.innerHTML += `<option>${i}</option>`;
}

for(let i = 0; i < monthsName.length; i++){
    month.innerHTML += `<option value="${i + 1}">${monthsName[i]}</option>`;
}

for(let i = 1; i <= 31; i++){
    day.innerHTML += `<option>${i}</option>`;
}

month.onchange = () => {
    let monthSelected = month.value;
    let yearSelected = year.value;
    let daysqt = 0;

    if(monthSelected == 1 || monthSelected == 3 || monthSelected == 5 || monthSelected == 7 || monthSelected == 8 || monthSelected == 10 || monthSelected == 12) daysqt = 31;
    else if (monthSelected == 4 || monthSelected == 6 || monthSelected == 9 || monthSelected == 11) daysqt = 30;
    else{
        if(yearSelected % 400 == 0 || yearSelected % 4 == 0 && yearSelected % 100 != 0) daysqt = 29;
        else daysqt = 28;
    } 
    
    day.innerHTML = '';

    for(let i = 1; i <= daysqt; i++){
        day.innerHTML += `<option>${i}</option>`;
    }
}

year.onchange = () => {
    let monthSelected = Number(month.value);
    let yearSelected = year.value;

    if (monthSelected == 2){
        if(yearSelected % 400 == 0 || yearSelected % 4 == 0 && yearSelected % 100 != 0) daysqt = 29;
        else daysqt = 28;
    }

    for(let i = 1; i <= daysqt; i++){
        day.innerHTML += `<option>${i}</option>`;
    }
}

