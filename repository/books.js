let books = [
    {
        id: 1,
        name: 'Harry Potter 1'
    },
    {
        id: 2,
        name: 'Harry Potter 2'
    },
    {
        id: 3,
        name: 'Harry Potter 3'
    }
]

const findById = (id) => {
    return books.find(book => book.id == id);
}

const getBooks = () => {
    return books;
}

const addBook = (book) => {
    if (findById(book.id)) {
        return false;
    }
    
    books.push(book);
    
    return books;
}

const deleteBook = (id) => {
    const index = books.findIndex(book => book.id == id);

    if (index != -1) {
        books.splice(index, 1);
        return true;
    }
    
    return false;
}

const updateBook = (book) => {
    const index = books.findIndex(bookEl => bookEl.id == book.id);

    if (index != -1) {
        books[index] = book;
    } else {
        books.push(book);
    }

    return true;
}

export { getBooks, findById, addBook, deleteBook, updateBook };