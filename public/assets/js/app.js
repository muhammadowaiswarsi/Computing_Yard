let scrollingWidth = 0;

const handleScroll = (isNext) => {
  const container = document.getElementById("carousel-flip");
  const scrollWidth = container.scrollWidth;
  console.log("scrollWidth", scrollWidth);
  console.log("scrollWidth", scrollWidth);
  scrollingWidth = isNext
    ? scrollingWidth >= scrollWidth
      ? 0
      : scrollingWidth + 328
    : scrollingWidth <= 0
    ? container.scrollWidth
    : scrollingWidth - 328;

  container.scrollTo(scrollingWidth, 0);
};

setInterval(() => {
  handleScroll(true);
}, 3000);
