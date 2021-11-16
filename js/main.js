'use strict';

const commentInput = document.querySelector(".button2");
const postBtn = document.querySelector(".button3");
const thisIsTextarea = document.querySelector(".please");
const parentForm = document.querySelector(".reply");


function uploadComment() {
    const commentValue = commentInput.value; //input의 value가 배열 값으로
    const createDiv = document.createElement("div");
    const createSpan0 = document.createElement("span");
    const createSpan1 = document.createElement("span");
    const createSpan2 = document.createElement("span");
    const createImg0 = document.createElement('i');
    // const createImg1 = document.createElement('i');
    const deleteBtn = document.createElement('button');
    const box = document.createElement("span");
    deleteBtn.setAttribute('class', 'deleteBtn');



    if (commentValue !== "") {
        createDiv.className = "text-0";
        createSpan1.className = "text1";
        createSpan2.className = "text2";
        createSpan1.innerHTML = "kimel_khr";
        createSpan2.innerHTML = commentValue;
        createImg0.className = "far fa-heart";
        createSpan0.className = "textGrop";
        createImg0.onclick = () => fillHeart(createImg0);
        box.className = "box";

        parentForm.appendChild(createDiv);
        createDiv.appendChild(createSpan0);
        createSpan0.appendChild(createSpan1);
        createSpan0.appendChild(createSpan2);
        createDiv.appendChild(box);
        box.appendChild(deleteBtn);
        box.appendChild(createImg0);
        deleteBtn.textContent =  "X";
        thisIsTextarea.value = "";
        commentInput.value = "";


        function deleteContent() {
            console.log(createDiv);
            createDiv.remove();
        }
        deleteBtn.addEventListener('click',deleteContent);

    }

}
// 하트구현
function fillHeart(element) {
    element.classList.toggle("fas");
}

// 게시 버튼 구현
function btnColor() {
    if (!commentInput.value.length) {
        postBtn.style.color = "#B8E2FD";
    } else if (commentInput.value.length) {
        postBtn.style.color = "#0095F6";

    }
}

// 게시버튼 색상 꺼짐
function clicke() {
    postBtn.disabled = false;
    postBtn.style.color = "#B8E2FD";

}

// 게시 버튼 엔터 치면 들어가지는 것

function enterCode(e) {
    if (e.keyCode === 13) {
        uploadComment();
        commentInput.value = "";
    }
}


// 댓글 생성 기능 
function pressBtn() {
    postBtn.addEventListener("click", uploadComment);
    commentInput.addEventListener("keydown", enterCode);
}

pressBtn();

const init = () => {
    commentInput.addEventListener('keyup', btnColor);
    postBtn.addEventListener('click', clicke);

};

init();
