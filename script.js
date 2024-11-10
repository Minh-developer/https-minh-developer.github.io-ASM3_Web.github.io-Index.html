function handleSubmit() {
    const emailValue = document.getElementById('email').value.toLocaleLowerCase()
    const loai = document.getElementById('loai');
    const ktra =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const check = emailValue.match(ktra);

    const sec = document.querySelector('.p2 .f4');
    console.log('ktra sec', sec);

    const f5 = document.querySelector('.antt')
    if(check) {
        sec.style.display = 'block';
        f5.style.display = 'none'
        loai.innerHTML = ''
    } else{
        loai.innerHTML = 'Sai cấu trúc email rồi, nhập lại đi'
    }
}


function toggleText() {
    const moreText = document.getElementById("moreText");
    const button = document.querySelector(".view-more-btn i");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        button.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
    } else {
        moreText.style.display = "none";
        button.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
    }
}

function toggleText2() {
    const moreText = document.getElementById("moreText2");
    const button = document.querySelector(".view-more-btn i2");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        button.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
    } else {
        moreText.style.display = "none";
        button.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
    }
}

function toggleText3() {
    const moreText = document.getElementById("moreText3");
    const button = document.querySelector(".view-more-btn i2");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        button.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
    } else {
        moreText.style.display = "none";
        button.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
    }
}

function toggleText4() {
    const moreText = document.getElementById("moreText4");
    const button = document.querySelector(".view-more-btn i2");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        button.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
    } else {
        moreText.style.display = "none";
        button.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
    }
}