const ContactForm = function() {
    const form = document.createElement("form");
    const labelName = document.createElement("label");
    const labelEmail = document.createElement("label");
    const labelPhone = document.createElement("label");
    const labelMessage = document.createElement("label");
    const inputName = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputPhone = document.createElement("input");
    const inputMessage = document.createElement("textarea");
    const buttonSubmit = document.createElement("button");

    form.classList.add("contact-form");
    buttonSubmit.classList.add("btn-submit");
    labelName.setAttribute("for", "iname");
    labelEmail.setAttribute("for", "iemail");
    labelPhone.setAttribute("for", "iphone");
    labelMessage.setAttribute("for", "imessage");
    inputName.setAttribute("id", "iname");
    inputEmail.setAttribute("id", "iemail");
    inputPhone.setAttribute("id", "iphone");
    inputMessage.setAttribute("id", "imessage");
    inputName.setAttribute("type", "text");
    inputEmail.setAttribute("type", "email");
    inputPhone.setAttribute("type", "tel");
    inputMessage.setAttribute("type", "text");
    buttonSubmit.setAttribute("type", "submit");
    form.setAttribute("action", "#");

    labelName.textContent = "Name: ";
    labelEmail.textContent = "Email: ";
    labelPhone.textContent = "Phone: ";
    labelMessage.textContent = "Message: ";
    buttonSubmit.textContent = "Submit";

    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelPhone);
    form.appendChild(inputPhone);
    form.appendChild(labelMessage);
    form.appendChild(inputMessage);
    form.appendChild(buttonSubmit);

    return form;
}

const ContactTab = function () {
  const contactTab = document.createElement("div");
  const titleTab = document.createElement("h1");
  const message = document.createElement("p");
  const emailText = document.createElement("p");
  const emailLink = document.createElement("a");
  const phoneText = document.createElement("p");
  const phoneLink = document.createElement("a");

  contactTab.classList.add("contact-tab");
  titleTab.classList.add("title");
  message.classList.add("message");
  emailText.classList.add("email");
  phoneText.classList.add("phone");

  emailLink.setAttribute("href", "mailto:contact@vietnoodle.com");
  phoneLink.setAttribute("href", "tel:123-456-7890");

  titleTab.textContent = "Contact Us";
  message.textContent = `If you have any questions, feel free to reach out to us via email or phone, or use the contact form below.`;
  emailText.textContent = "Email: ";
  phoneText.textContent = "Phone: ";
  emailLink.textContent = "contact@vietnoodle.com";
  phoneLink.textContent = "(123)456-7890";

  emailText.appendChild(emailLink);
  phoneText.appendChild(phoneLink);
  contactTab.appendChild(titleTab);
  contactTab.appendChild(message);
  contactTab.appendChild(emailText);
  contactTab.appendChild(phoneText);
  contactTab.appendChild(ContactForm());

  return contactTab;
};

export default ContactTab;
