document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const description = this.nextElementSibling;
            const icons = this.querySelector(".icons");
            const plusIcon = icons.firstElementChild; 
            const minusIcon = icons.lastElementChild; 

            document.querySelectorAll(".accordion-description").forEach((desc) => {
                if (desc !== description) {
                    desc.style.maxHeight = "0px";
                    desc.previousElementSibling.querySelector(".icons").firstElementChild.style.display = "block"; 
                    desc.previousElementSibling.querySelector(".icons").lastElementChild.style.display = "none"; 
                }
            });

            if (description.style.maxHeight && description.style.maxHeight !== "0px") {
                description.style.maxHeight = "0px";
                plusIcon.style.display = "block";  
                minusIcon.style.display = "none";  
            } else {
                description.style.maxHeight = description.scrollHeight + "px";
                plusIcon.style.display = "none"; 
                minusIcon.style.display = "block";  
            }
        });

        button.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.click();
            }
        });
    });
});
