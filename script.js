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
          
function initTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');

    testimonialsGrid.innerHTML = '';
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

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
}
          document.addEventListener('DOMContentLoaded', () => {
              initTestimonials();
              initFAQ();
          });

          const navToggle = document.querySelector('.nav-toggle');
          const navLinks = document.querySelector('.nav-links');
          
          if (navToggle) {
              navToggle.addEventListener('click', () => {
                  navLinks.classList.toggle('active');
              });
          }
