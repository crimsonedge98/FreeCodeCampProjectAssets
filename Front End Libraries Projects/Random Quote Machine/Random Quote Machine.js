let allquoteData = [
  ["To say that nothing is true, is to realize that the foundations of society are fragile, and that we must be the shepherds of our own civilization.", "Ezio Auditore de Firenze", "Assassin's Creed"],
  ["We protect those who cannot protect themselves.", "Allison Argent", "Teen Wolf"],
  ["Be your own anchor.", "Melissa McCall", "Teen Wolf"],
  ["Many that live deserve death. Some that die deserve life. Can you give it to them? Do not be so quick to deal out death in judgment.", "Gandalf", "Lord of the Rings"],
  ["The problem is not the problem. The problem is your attitude ABOUT the problem.", "Captain Jack Sparrow", "Pirates of the Caribbean"],
  ["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", "Sirius Black", "Harry Potter and the Goblet of Fire"],
  ["Oh yes, the past can hurt, but the way I see it, you can either run from it or learn from it.", "Rafiki", "The Lion King"],
  ["It does not do well to dwell on dreams and forget to live.", "Albus Dumbledore", "Harry Potter and the Sorcerer's Stone"],
  ["It is important to draw wisdom from different places. If you take it from only one place, it becomes rigid and stale. Understanding others, the other elements and the other nations, will help you become whole.", "Uncle Iroh", "Avatar: The Last Airbender"],
  ["Luck favors the prepared, darling.", "Edna Mode", "The Incredibles"],
  ["Evil is evil...lesser, greater, middling. Makes no difference. If I'm to choose between one evil or another, I'd rather not choose at all.", "Geralt of Rivia", "The Witcher"],
  ["You didn’t think you were doing this without me, did you?", "Stiles Stilinski", "Teen Wolf"],
  ["I can't control their fear. Only my own.", "Wanda Maximoff", "Captain America: Civil War"]
];

let allRainbowColors = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee"
];

let currentQuote = "";
let currentAuthor = "";
let currentSeries = "";
let currentColor = "";

getRandomQuote = () => {
  return allquoteData[Math.floor(Math.random() * allquoteData.length)];
};

getRandomColor = () => {
  return allRainbowColors[Math.floor(Math.random() * allRainbowColors.length)];
};

placeQuoteAuthorAndSeries = () => {
  let quoteAuthorSeries = getRandomQuote();
  currentQuote = quoteAuthorSeries[0];
  currentAuthor = quoteAuthorSeries[1];
  currentSeries = quoteAuthorSeries[2];
  currentColor = getRandomColor();
  
  $("body").animate(
    {
      backgroundColor: currentColor
    },
    1000
  );
  
  $("#left-quotation").animate({opacity: 0}, 1000, function() {
    $(this).animate({opacity: 1});
  });
  
  $("#right-quotation").animate({opacity: 0}, 1000, function() {
    $(this).animate({opacity: 1});
  });
  
  $("#text").animate({opacity: 0}, 1000, function() {
    $(this).animate({opacity: 1}, 1000);
    $("#text").text(currentQuote);
  });
  
  $("#author").animate({opacity: 0}, 1000, function() {
    $(this).animate({opacity: 1}, 1000);
    $("#author").text(`- ${currentAuthor},`);
  });
  
  $("#series").animate({opacity: 0}, 1000, function() {
    $(this).animate({opacity: 1}, 1000);
    $("#series").text(currentSeries).css("font-style", "italic");
  });
  
  $("button").animate({backgroundColor: currentColor});
  
  $("#tweet-quote").animate({color: currentColor});
  
  $("#tweet-quote").attr("href", `https://twitter.com/intent/tweet?text="${currentQuote}" -${currentAuthor}, ${currentSeries} &hashtags=quotes`);
};

$(document).ready(function () {
  placeQuoteAuthorAndSeries();
  
  $("#new-quote").on("click", placeQuoteAuthorAndSeries);
});