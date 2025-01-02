// JavaScript for interactivity with improved functionality

// Toggle Mobile Navigation Menu
const navToggle = document.createElement('button');
navToggle.innerHTML = '<i class="ri-menu-line"></i>';
navToggle.classList.add('nav-toggle-btn');
document.querySelector('nav').appendChild(navToggle);

const navMenu = document.querySelector('.nav__links');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
});

// Explore Section Navigation
const exploreLeft = document.querySelector('.explore__nav span:first-child');
const exploreRight = document.querySelector('.explore__nav span:last-child');
const exploreCards = document.querySelectorAll('.explore__card');
let currentExplore = 0;

const updateExploreDisplay = () => {
  exploreCards.forEach((card, index) => {
    card.style.display = index === currentExplore ? 'block' : 'none';
  });
};

exploreLeft.addEventListener('click', () => {
  currentExplore = (currentExplore === 0) ? exploreCards.length - 1 : currentExplore - 1;
  updateExploreDisplay();
});

exploreRight.addEventListener('click', () => {
  currentExplore = (currentExplore === exploreCards.length - 1) ? 0 : currentExplore + 1;
  updateExploreDisplay();
});

updateExploreDisplay();

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic Review Navigation
const reviewLeft = document.querySelector('.review__nav span:first-child');
const reviewRight = document.querySelector('.review__nav span:last-child');
const reviews = document.querySelectorAll('.review__content');
let activeReview = 0;

const setActiveReview = () => {
  reviews.forEach((review, index) => {
    review.style.display = index === activeReview ? 'block' : 'none';
  });
};

reviewLeft.addEventListener('click', () => {
  activeReview = (activeReview === 0) ? reviews.length - 1 : activeReview - 1;
  setActiveReview();
});

reviewRight.addEventListener('click', () => {
  activeReview = (activeReview === reviews.length - 1) ? 0 : activeReview + 1;
  setActiveReview();
});

setActiveReview();
