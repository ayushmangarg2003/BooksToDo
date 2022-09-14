const list = document.querySelector('#book-list ul')

// Delete List Elements
list.addEventListener('click' , function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})

const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    const li = document.createElement('li');
    const bookname = document.createElement('span');
    const deletebtn = document.createElement('span');


    deletebtn.textContent = 'delete';
    bookname.textContent = value;
    deletebtn.className = 'delete';
    bookname.classList.add('name');


    li.appendChild(bookname)
    li.appendChild(deletebtn)
    list.appendChild(li)


});

