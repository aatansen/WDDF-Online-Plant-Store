document.addEventListener("DOMContentLoaded", function () {

    
    // DATE & TIME
    

    const dateTime = document.getElementById("dateTime");

    function updateDateTime() {
        if (!dateTime) return;

        const now = new Date();

        dateTime.textContent =
            now.toLocaleDateString() + " | " +
            now.toLocaleTimeString();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);


    
    // PLANT MATCHMAKER QUIZ
    

    const quiz = document.getElementById("plantQuiz");
    const quizResult = document.getElementById("quizResult");

    if (quiz) {
        quiz.addEventListener("submit", function (event) {
            event.preventDefault();

            const sunlight = document.getElementById("sunlight").value;
            const care = document.getElementById("careLevel").value;
            const pets = document.getElementById("petFriendly").value;

            let plant = "Snake Plant";
            let reason = "It is forgiving and handles lower light well.";

            if (pets === "yes") {
                if (sunlight === "bright") {
                    plant = "Spider Plant";
                    reason = "It is a pet-friendlier choice for bright spaces.";
                } else {
                    plant = "Calathea";
                    reason = "It is a pet-friendlier choice and enjoys indirect light.";
                }
            } else if (sunlight === "bright" && care === "high") {
                plant = "Monstera Deliciosa";
                reason = "You have bright light and enjoy giving your plants extra attention.";
            } else if (sunlight === "medium") {
                plant = "Golden Pothos";
                reason = "It adapts well to indoor conditions and is beginner friendly.";
            } else if (sunlight === "low") {
                plant = "ZZ Plant";
                reason = "It tolerates lower-light indoor spaces and needs little maintenance.";
            }

            quizResult.innerHTML =
                "<strong>Your match: " + plant + "!</strong><br>" +
                reason +
                "<br><a href='products.html' class='btn btn-sm btn-success mt-2'>View Plants</a>";

            quizResult.classList.remove("d-none");
        });
    }


    
    // MEMBERSHIP COLLAPSIBLE SECTION
    

    const membershipToggle = document.getElementById("membershipToggle");
    const membershipContent = document.getElementById("membershipContent");

    if (membershipToggle) {
        membershipToggle.addEventListener("click", function () {

            membershipContent.classList.toggle("d-none");

            if (membershipContent.classList.contains("d-none")) {
                membershipToggle.textContent = "Show Benefits";
            } else {
                membershipToggle.textContent = "Hide Benefits";
            }
        });
    }


    
    // ADD TO CART
    

    const addToCart = document.getElementById("addToCart");
    const cartMessage = document.getElementById("cartMessage");

    if (addToCart) {
        addToCart.addEventListener("click", function () {

            const size = document.getElementById("plantSize").value;
            const addon = document.getElementById("potAddon");
            const addonText = addon.options[addon.selectedIndex].text;

            cartMessage.textContent =
                "Monstera (" + size + ") added to your cart with " +
                addonText + ".";

            cartMessage.classList.remove("d-none");
        });
    }


    
    // PLANT PARENT TIP
    

    const tipForm = document.getElementById("tipForm");
    const tipResult = document.getElementById("tipResult");

    if (tipForm) {
        tipForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("tipName").value;
            const text = document.getElementById("tipText").value;

            tipResult.innerHTML =
                "<div class='alert alert-success'>" +
                "<strong>" + name + ":</strong> " + text +
                "</div>";

            tipForm.reset();
        });
    }


    
    // CONTACT FORM CONFIRMATION POPUP
    

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.classList.add("was-validated");
                return;
            }

            const confirmed = confirm(
                "Thank you for contacting Blooming Oasis! " +
                "Are you sure you want to submit this message?"
            );

            if (confirmed) {
                alert("Your message has been submitted successfully!");
                contactForm.reset();
                contactForm.classList.remove("was-validated");
            }
        });
    }


    
    // DEMO LIVE CHAT
    

    const chatButton = document.getElementById("chatButton");
    const chatBox = document.getElementById("chatBox");
    const sendChat = document.getElementById("sendChat");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    if (chatButton) {
        chatButton.addEventListener("click", function () {
            chatBox.classList.toggle("d-none");

            chatButton.textContent =
                chatBox.classList.contains("d-none")
                ? "Start Live Chat"
                : "Close Live Chat";
        });
    }

    function sendChatMessage() {
        if (!chatInput || chatInput.value.trim() === "") return;

        const userMessage = chatInput.value.trim();

        chatMessages.innerHTML +=
            "<p><strong>You:</strong> " +
            userMessage +
            "</p>";

        chatMessages.innerHTML +=
            "<p><strong>Plant Specialist:</strong> " +
            "For best results, check your plant's light, soil moisture and drainage. " +
            "If you tell me the plant name, I can suggest a basic care routine.</p>";

        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    if (sendChat) {
        sendChat.addEventListener("click", sendChatMessage);
    }

    if (chatInput) {
        chatInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                sendChatMessage();
            }
        });
    }

});
