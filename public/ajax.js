document.querySelector('button').addEventListener('click', () => {
    if (document.getElementById('check').checked) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:5000');
        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.send(JSON.stringify(
            {
                lox: document.querySelector('input').value,
            },
        ));

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this, inputIn.value);
            }
        };
    } else {
        alert('Check please checkbox');
    }
});

const inputIn = document.querySelector('input');
