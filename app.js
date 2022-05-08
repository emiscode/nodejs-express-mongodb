import express from 'express';
import { 
    getBooks, 
    findById, 
    addBook, 
    deleteBook, 
    updateBook 
} from './repository/books.js'

const port = 3000;
const app = express();

app.use(express.json());

app.get('/books', (req, res) => {
    res.status(200).send(getBooks());
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const result = findById(id);
    
    result ?
        res.status(200).send(result) :
        res.status(404).send(
            { message: `Book with id ${id} does not exist`}
        );
});

app.post('/books', (req, res) => {
    const book = req.body;

    addBook(book) ?
        res.status(200).send(getBooks()):
        res.status(409).send(
            { message: `Book with id ${book.id} already exists`}
        ); 
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const result = deleteBook(id);
    
    result ?
        res.status(202).send(
            { message: `Book with id ${id} has been deleted succesfully`}
        ) :
        res.status(404).send(
            { message: `Book with id ${id} does not exist`}
        );
});

app.put('/books', (req, res) => {
    const book = req.body;
    
    updateBook(book) ?
        res.status(200).send(findById(book.id)):
        res.status(409).send(
            { message: `Book with id ${book.id} does not exist`}
        ); 
    
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

