

var splide = new Splide( '.splide' );
splide.mount();

//function for მეტი button to load more information after click  

document.addEventListener('DOMContentLoaded', function() {
    var aboutBtn = document.querySelector('.about-btn');
    var carouselInfo = document.querySelector('.div-text');
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
    printContainer.innerHTML = ''; 
  
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= prints.length) {
        break; 
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
  let endIndex = 6;
  
  loadMoreButton.addEventListener('click', function() {
    endIndex += 3; 
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

  // fetch image and info from MET MUSEUM API
  fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/437436')
  .then(response => response.json())
  .then(data => {
    var imageUrl = data.primaryImage;
    var artistName = data.artistDisplayName;
    var artDate=data.objectDate;
    var artTitle=data.title;

    
    var image = document.createElement('img');
    image.src = imageUrl;
    image.classList.add('image-size');

    var name = document.createElement('p');
    name.innerText = artistName;
    name.classList.add('artist-name');

    var date =document.createElement('p');
    date.innerText=artDate;
    date.classList.add('art-date');

    var title=document.createElement('p');
    title.innerText=artTitle;
    title.classList.add('art-title');

   
    var container = document.getElementById('image-container'); 
    container.appendChild(image);
    var artDesc=document.getElementById('art-description-container');
    artDesc.appendChild(name);
    artDesc.appendChild(title);
    artDesc.appendChild(date);
  })
  .catch(error => {
    console.error(error);
  });


  // //contact form validation function
  // var form = document.getElementById('request-form');
  // var nameInput = document.getElementById('name');
  // var emailInput = document.getElementById('email');
  // var phoneInput = document.getElementById('phone');
  // var messageInput = document.getElementById('message');

  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();

  //   var isFormValid = true;

  //   if (!validateField(nameInput, /^[ა-ჰ\s]+$/)) {
  //     isFormValid = false;
  //   }
  //   if (!validateField(emailInput, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
  //     isFormValid = false;
  //   }
  //   if (!validateField(phoneInput, /^\d{9}$/)) {
  //     isFormValid = false;
  //   }
  //   if (!validateField(messageInput)) {
  //     isFormValid = false;
  //   }

  //   if (isFormValid) {
      // Form is valid, perform desired actions
      // For example, you can use AJAX to send the form data to the server
      // or display a success message

      // Example: Send form data using AJAX
  //     var formData = {
  //       name: nameInput.value.trim(),
  //       email: emailInput.value.trim(),
  //       phone: phoneInput.value.trim(),
  //       message: messageInput.value.trim()
  //     };

  //     // Perform AJAX request here to send formData to the server
  //     // ...

  //     // Display a success message or perform other actions
  //     alert('Form submitted successfully');
  //   } else {
  //     // Show error message or perform other actions
  //     alert('Please fill in all required fields correctly.');
  //   }
  // });

  // function validateField(field, regex) {
  //   var value = field.value.trim();
  //   if (value === '' || (regex && !regex.test(value))) {
  //     field.classList.add('error');
  //     return false;
  //   } else {
  //     field.classList.remove('error');
  //     return true;
  //   }
  // }
  
  // //subscribe form validation
  
  // var form = document.getElementById('subscription-form');
  // var emailInput = document.getElementById('email-input');

  
  // form.addEventListener('submit', function(event) {
    
  //   event.preventDefault();

  //   var email = emailInput.value.trim();
  //   if (validateEmail(email)) {
  //     form.submit();
  //   } else {
  //     alert('გთხოვთ შეიყვანოთ სწორი საფოსტო მისამართი');
  //   }
  // });
  // //contact form validation function
  // // Email validation function
  // function validateEmail(email) {
  //   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // }
  

//burger function 
let burgerbtn = document.querySelector(".burger-logo");
let burgerMenu = document.querySelector(".nav-wrapper");
let icon1 = document.querySelector(".burger-logo .bar:nth-child(1)");
let icon2 = document.querySelector(".burger-logo .bar:nth-child(2)");
let icon3 = document.querySelector(".burger-logo .bar:nth-child(3)");

function toggleMenu() {
  burgerMenu.classList.toggle("li-active");
  icon1.classList.toggle("close-icon1");
  icon2.classList.toggle("close-icon2");
  icon3.classList.toggle("close-icon3");
  burgerbtn.classList.toggle("logo-active");
}

burgerbtn.addEventListener("click", toggleMenu);







