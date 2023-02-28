let scrollingWidth = 0;
let currItem = 0;
const handleScroll = (isNext) => {
  const container = document.getElementById("carousel-flip");
  const allImageDiv = document.getElementsByClassName("image-div");

  if (isNext) {
    if (currItem < allImageDiv?.length - 1) {
      currItem++;
    } else currItem = 0;
  } else {
    if (currItem > 0) {
      currItem--;
    } else currItem = allImageDiv.length - 1;
  }
  scrollingWidth = allImageDiv[currItem].offsetLeft;

  container.scrollTo(scrollingWidth, 0);
};

setInterval(() => {
  handleScroll(true);
}, 3000);
