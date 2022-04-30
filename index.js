function checkInputs(form) {

    if (form.answer1.value.toLowerCase() === 'characters' &&
        form.answer2.value.toLowerCase() === "lit" &&
        form.answer3.value.toLowerCase() === "aaron") {
        document.getElementById("reward").style.visibility = 'visible';
    }
}
