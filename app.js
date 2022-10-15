//const firstName = 'Maxim'
//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

//const age = 17
//const year = 2022
//const birth = 2005
//const isFullAge = year - birth >= age
//console.log(isFullAge)

//const PRstatus = 'inProgress'
//if (PRstatus === 'inProgress') {console.log('В разработке')} 
//else if (PRstatus === 'ready') {console.log('Все готово')}
//else {console.log('Все сломалось')}
//PRstatus === 'inProgress' ? console.log('В разработке') : 
//PRstatus === 'ready' ? console.log('Все готово') : console.log('Все сломалось')

//function calculateSch(lesson)
//{return 7 - lesson}

//function calculateAge(year)
//{return 2022 - year}


//function infoAbout(s, name, year, lesson) {
//    if (year < 0) {
//        year = 'еще не родился'
//    }
//    return `${s[0]}${name}${s[1]}${year}${s[2]}${lesson}${s[3]}`
//}
//const personeName = 'Максим'
//const personeAge = -10
//const schLessons = 1
//const output = infoAbout`Человеку по имени ${personeName} в возрасте ${personeAge} лет осталось учится ${schLessons} уроков!`
//console.log(output)
//{const age = calculateAge(year)
//const Sch = calculateSch(lesson)

//Sch === 1 ? 
//console.log('Человеку по имени ' + name + ' в возрасте ' + age + ' лет осталось учиться ' + Sch + ' урок') : 
//Sch === 0 ?
//console.log('Человек по имени ' + name + ' в возрасте ' + age + ' уже отучился') : 
//Sch >= 5 ? 
//console.log('Человеку по имени ' + name + ' в возрасте ' + age + ' лет осталось учиться ' + Sch + ' уроков') : 
//console.log('Человеку по имени ' + name + ' в возрасте ' + age + ' лет осталось учиться ' + Sch + ' урока')
//}

//infoAbout('maxim', 2005, 7)

//const gachas = ['GI', 'Tof', 'PGR', 'FateGO', 'BlueArchive']

//for (let gacha of gachas) {
//    console.log(gacha)
//}

//function GetRandomBetween(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}
//console.log(GetRandomBetween(1, 100))

//let counter = 0
//const interval = setInterval(function() {
//    if (counter === 100) {
//        clearInterval(interval)
//    } else {
//        console.log(counter++)    
//    }
//}, 1000)