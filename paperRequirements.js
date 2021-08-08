function paperRequirements(firstbook, secondbook, thirdbook) {
    pagesForFirst = firstbook * 100;
    pagesForSecond = secondbook * 200;
    pagesForThird = thirdbook * 300;
    totalPages = pagesForFirst + pagesForSecond + pagesForThird;
    console.log(totalPages);
}

paperRequirements(2, 3, 4);
