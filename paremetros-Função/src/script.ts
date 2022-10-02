function firstLetterUpperCase(name:string) {
    let firstLetter= name.charAt(0).toUpperCase();
    return console.log(firstLetter+name.substring(1));
}

firstLetterUpperCase('vithor');