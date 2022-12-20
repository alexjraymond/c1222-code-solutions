var $contactForm = document.querySelector('#contact-form');

function submitFunc(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.email.value;
  var message = $contactForm.elements.message.value;
  var formObj = {
    name,
    email,
    message
  };
  console.log('form object', formObj);
  $contactForm.reset();

}

$contactForm.addEventListener('submit', submitFunc);
