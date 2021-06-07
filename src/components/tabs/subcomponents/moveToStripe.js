import { TweenMax, Power2 } from "gsap";

const moveToStripe = (stripeName) => {
  const getTopOffset = (element) => element.getBoundingClientRect().top;
  const getTopOffsetGoal = (element) =>
    (window.innerHeight - element.clientHeight) / 2;

  const stripeContainer = document.querySelector(".stripe-container");
  const stripeItems = stripeContainer.childNodes;

  const topOffsetObjective = getTopOffsetGoal(stripeItems[0]);
  const wantedPicture = [...stripeItems].find((pic) => pic.id === stripeName);
  const presentOffset = getTopOffset(stripeContainer);
  const wantedPictureOffset = getTopOffset(wantedPicture);
  const distanceToGo = presentOffset - wantedPictureOffset + topOffsetObjective;

  TweenMax.to(stripeContainer, 0.7, {
    transform: `translateY(${distanceToGo - 100}px)`,
    ease: Power2.easeInOut,
  });
};

export default moveToStripe;
