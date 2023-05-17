

var splide = new Splide( '.splide' );
splide.mount();

document.addEventListener('DOMContentLoaded', function() {
    var aboutBtn = document.querySelector('.about-btn');
    var carouselInfo = document.querySelector('.carousel-info');
  
    aboutBtn.addEventListener('click', function() {
      carouselInfo.classList.toggle('expanded');
      updateAboutBtnText();
    });
  
    function updateAboutBtnText() {
      var isExpanded = carouselInfo.classList.contains('expanded');
      aboutBtn.innerHTML = isExpanded ? "ნაკლები <i class='fa-solid fa-chevron-up'></i>" : "მეტი <i class='fa-solid fa-chevron-down'></i>";
    }
  });

const prints = [
    { title: 'Print 1', description: 'აგილ აბდულალიევი<br>აკვარელის სქელი ქაღალდი<br>21:15სმ', imageURL: "images/print1.png" },
    { title: 'Print 2', description: 'ემირ ბურჯანაძე<br>პრინტი ფურცელზე<br>29.7 x 42 სმ ', imageURL: "images/print2.png"  },
    { title: 'Print 3', description: 'შალვა ნიკვაშვილი<br>ბეჭდვა საარქივო ფოტო ქაღალდზე<br>46x62 სმ', imageURL: "images/print3.png" },
    { title: 'Print 4', description: 'თეკლა კიღურაძე<br>პრინტი ტილოზე<br>200x150 სმ', imageURL: "images/print4.png" },
    { title: 'Print 5', description: 'გიორგი ყოლბაია ფოტოები<br>საარქივო ფოტო ქაღალდი,<br>A4, ჩარჩოებით', imageURL: "images/print5.png" },
    { title: 'Print 6', description: 'ნიკა ქუთელია<br>პრინტი დიბონდზე<br>100x100სმ', imageURL: "images/print6.png" },
    { title: 'Print 7', description: 'თამარ ნადირაძე<br>ქაღალდი<br>A3', imageURL: "images/print7.png" },
    { title: 'Print 8', description: 'ხატია ჩიტორელიძე<br>პრინტი ტილოზე, ხის ჩარჩო<br>130x70სმ', imageURL: "images/print8.png" },
    { title: 'Print 9', description: 'ჰიტორი ნი<br>ფირის ფოტოგრაფია<br> A3', imageURL: "images/print9.png" }
  ];
  
  // Function to create HTML elements for a single print
  function createPrintElement(print) {
    const printElement = document.createElement('div');
    printElement.classList.add('print');
    printElement.innerHTML = `<img src="${print.imageURL}" alt="${print.title}" class="print-image"/>
      <p>${print.description}</p>
      <button class="cartBtn"><i class="fa-solid fa-cart-shopping"></i>კალათაში</button>
    `;
    return printElement;
  }
  function adjustSectionHeight() {
    const section = document.querySelector('.print-section');
    const printContainer = document.getElementById('print-container');
    const printsHeight = printContainer.offsetHeight;
    const printDiv=section.getElementsByClassName("print");
    const headerHeight = section.querySelector('h2').offsetHeight;
    const buttonHeight = section.querySelector('#load-more').offsetHeight;
    const sectionPadding = 30; 
    const sectionHeight = headerHeight + printsHeight +printDiv + buttonHeight + sectionPadding;
    section.style.height = `${sectionHeight}px`;
  }
  
  // Function to display prints
  function displayPrints(startIndex, endIndex) {
    const printContainer = document.getElementById('print-container');
    printContainer.innerHTML = ''; // Clear previous prints
  
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= prints.length) {
        break; // Exit loop if all prints have been displayed
      }
  
      const print = prints[i];
      const printElement = createPrintElement(print);
      printContainer.appendChild(printElement);
      adjustSectionHeight();
    }
  }

  
  // Load the first set of prints on page load
  document.addEventListener('DOMContentLoaded', function() {
    displayPrints(0, 6);
    adjustSectionHeight();
  });
  
  // Load more prints when the "Load More" button is clicked
  const loadMoreButton = document.getElementById('load-more');
  let endIndex = 6; // The end index of the currently displayed prints
  
  loadMoreButton.addEventListener('click', function() {
    endIndex += 3; // Increment the end index by 3
    displayPrints(0, endIndex);
    if (endIndex >= prints.length) {
        loadMoreButton.style.display = 'none'; 
    }
    adjustSectionHeight();
  });

document.addEventListener('DOMContentLoaded', function() {
    
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(anchorLink) {
      
      anchorLink.addEventListener('click', function(e) {
        e.preventDefault();
       
        var targetId = anchorLink.getAttribute('href').substring(1);
        
        var targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
