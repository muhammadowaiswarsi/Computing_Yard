const toggleNavbar = () =>
  document.getElementById("navbar-toggle-button").click();

const whyChooseClassToggle = (index) => {
  const elements = document.querySelectorAll(".why-choose-us");
  elements.forEach((element, i) => {
    const hello = element.classList.value.includes("active");
    if (i !== index || (i === index && hello)) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
};

// let scrollingWidth = 0;

// let reviews = [
//   {
//     key: 1,
//     name: "Wasu Trivedi",
//     designation: "CTO",
//     company: "Computing Yard",
//     message:
//       "Adarniya sabhapati mahodaya Atithi vishesh, Shikshan mantri shri R D tripati [tripathi] ji Maanyaniya shikshagan aur mere piyaaare sahpatiyo [sahapathiyon] Aaj agar I.C.E aasmaan ki bulaaandiyo [bulandiyon] ko chhu raahaa [raha] hai...",
//     image: "assets/images/clients/client1.jpg",
//   },
//   {
//     key: 2,
//     name: "Elon Musk",
//     designation: "Founder",
//     company: "TESLA",
//     message:
//       "Lorem Elon consectetur ullam ipsum dolor sit amet consectetur adipisicin omnis impedit  mollitia milique, ratione totam. Sed repellendus assumenda provident. Obcaecati, commodi dolore  eaque voluptates, nobis illo sequi odio sed consequatur vero!",
//     image: "assets/images/clients/client2.jpg",
//   },
//   {
//     key: 3,
//     name: "Client 3",
//     designation: "CEO",
//     company: "Somewhere",
//     message:
//       "Lorem Client3 consectetur eaque voluptates, nobis illo sequtia milique, ratione totam. ipsum dolor sit amet consectetur adipisicin omnis impedit Sed repellendus assumenda provident. Obcaecati, commodi dolorei odio sed consequatur vero ullam molli!",
//     image: "assets/images/clients/client3.jpg",
//   },
//   {
//     key: 4,
//     name: "Client 4",
//     designation: "CEO",
//     company: "Hello World",
//     message:
//       "Lorem Client4 consectetur eaque voluptates, nobis illo sequtia milique, ratione totam. ipsum dolor sit amet consectetur adipisicin omnis impedit Sed repellendus assumenda provident. Obcaecati, commodi dolorei odio sed consequatur vero ullam molli!",
//     image: "assets/images/clients/client4.jpg",
//   },
//   {
//     key: 5,
//     name: "Client 5",
//     designation: "Manager",
//     company: "World Hello",
//     message:
//       "Lorem Client5 consectetur eaque voluptates, nobis illo sequtia milique, ratione totam. ipsum dolor sit amet consectetur adipisicin omnis impedit Sed repellendus assumenda provident. Obcaecati, commodi dolorei odio sed consequatur vero ullam molli!",
//     image: "assets/images/clients/client5.jpg",
//   },
// ];

// const fadeFunction = (element, opacity, time) => {
//   setTimeout(() => {
//     element.style.opacity = opacity;
//   }, time);
// };

// const handleReviewScroll = (isNext) => {
//   const reviewMain = document.getElementById("review-main");
//   const reviewImage = document.getElementById("reviewer-img");
//   const reviewMessage = document.getElementById("review-message");
//   const reviewName = document.getElementById("reviewer-name");
//   const reviewDesignation = document.getElementById("reviewer-designation");
//   const reviewCompany = document.getElementById("reviewer-company");
//   const getKey = isNext
//     ? Number(reviewMain?.accessKey) + 1
//     : Number(reviewMain?.accessKey) - 1;

//   const review = !getKey
//     ? reviews[reviews?.length - 1]
//     : reviews?.find((item) => item?.key === Number(getKey)) || reviews[0];

//   const changeDataTime = 90;

//   reviewMain.style.opacity = 0.75;
//   fadeFunction(reviewMain, 0.5, 30);
//   fadeFunction(reviewMain, 0.25, 60);
//   fadeFunction(reviewMain, 0, changeDataTime);
//   fadeFunction(reviewMain, 0.25, 120);
//   fadeFunction(reviewMain, 0.5, 150);
//   fadeFunction(reviewMain, 0.75, 180);
//   fadeFunction(reviewMain, 1, 210);

//   setTimeout(() => {
//     reviewMain.accessKey = review.key;
//     reviewImage.setAttribute("src", review.image);
//     reviewMessage.innerText = review.message;
//     reviewName.innerText = review.name;
//     reviewDesignation.innerText = review.designation;
//     reviewCompany.innerText = review.company;
//   }, changeDataTime);
// };

// setInterval(() => {
//   handleReviewScroll(true);
// }, 4000);
