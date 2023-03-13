let index = 0;

const getElements = () => {
  const tabs = document.querySelectorAll(".services");
  const tabsData = document.querySelectorAll(".service-tabs-data");
  return {
    tabs,
    tabsData,
  };
};

const servicesToggle = () => {
  const { tabs, tabsData } = getElements();

  let totalIndex = tabs?.length - 1;
  if (index === totalIndex && !(index < totalIndex)) {
    index = 0;
  } else {
    ++index;
  }

  let preIndex = index === 0 ? totalIndex : index - 1;

  const previous = tabs[preIndex];
  const current = tabs[index];

  previous.classList.remove("active");
  current.classList.add("active");

  previous.getElementsByTagName("a")[0].classList.remove("active");
  current.getElementsByTagName("a")[0].classList.add("active");

  tabsData[preIndex].classList.remove("active");
  tabsData[index].classList.add("active");
};
const serviceInterval = setInterval(() => servicesToggle(), 5000);

const revokeServiceToggle = (tabInd) => {
  clearInterval(serviceInterval);
  const { tabs, tabsData } = getElements();
  tabs.forEach((item, index) => {
    if (index === tabInd) {
      item.classList.add("active");
      item.getElementsByTagName("a")[0].classList.add("active");
      tabsData[index].classList.add("active");
    } else {
      item.classList.remove("active");
      item.getElementsByTagName("a")[0].classList.remove("active");
      tabsData[index].classList.remove("active");
    }
  });
};
