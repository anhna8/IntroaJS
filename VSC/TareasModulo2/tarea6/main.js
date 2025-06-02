document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = commentInput.value;

        //*tuve que buscar como poner la hora y la fecha u.u
        
        const currentDate = new Date();
        const dateTimeString = currentDate.toLocaleString();

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p>${commentText}</p>
            <button class="deleteButton">Eliminar</button>
            <small>${dateTimeString}</small>
        `;

        commentElement.querySelector('.deleteButton').addEventListener('click', () => {
            commentsContainer.removeChild(commentElement);
        });

        commentsContainer.appendChild(commentElement);
        commentInput.value = '';
    });
});

