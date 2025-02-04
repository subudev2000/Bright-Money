// Testimonials Data
const testimonials = [
    {
        text: "To Pay off my credit card debt using Bright money App is far more easily easy to use and new customer service is excellent. Very helpful.",
        author: "Kumar Singh",
        stars: 5
    },
    {
        text: "Bright money is willing to trust that ones card get your App would help reduce your debt in matter of mins App.",
        author: "Lance Nelson",
        stars: 5
    },
    {
        text: "If you're looking to get your debts down - this is the App choice to do it quick. You'll be with better score in few months.",
        author: "Sergio Lopez",
        stars: 5
    },
    {
        text: "I recommend the Bright App to everybody. I helped me cut down on my credit card debt. Plus the way to see vacation. Now we are going for house.",
        author: "Todd Curry",
        stars: 5
    },
    {
        text: "Thank you to Bright for helping me improve my debt and eliminating my debt. The customer service is just excellent. Appreciate the journey.",
        author: "Tom",
        stars: 5
    }
];
          
          // FAQ Data
          const faqs = [
              {
                  question: "Can I pay off or close my account anytime?",
                  answer: "Yes",
                  isPositive: true
              },
              {
                  question: "Do I need to pay interest fees?",
                  answer: "No",
                  isPositive: false
              },
              {
                  question: "Is there a hard pull on the credit report?",
                  answer: "No",
                  isPositive: false
              },
              {
                  question: "Do you report to Equifax and TransUnion?",
                  answer: "Yes",
                  isPositive: true
              }
          ];
          
          // Initialize Testimonials - Static render
function initTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    
    // Clear any existing content
    testimonialsGrid.innerHTML = '';
    
    // Add all testimonials at once
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="stars">★★★★★</div>
            <p>${testimonial.text}</p>
            <p class="author">${testimonial.author}</p>
        `;
        testimonialsGrid.appendChild(card);
    });
}

          
          /// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}
          
          // Initialize when DOM is loaded
          document.addEventListener('DOMContentLoaded', () => {
              initTestimonials();
              initFAQ();
          });
          
          // Responsive Navigation
          const navToggle = document.querySelector('.nav-toggle');
          const navLinks = document.querySelector('.nav-links');
          
          if (navToggle) {
              navToggle.addEventListener('click', () => {
                  navLinks.classList.toggle('active');
              });
          }