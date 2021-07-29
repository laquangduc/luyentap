import Book from '../model/book'

export const create = (req, res) => {
    const book = new Book(req.body);
    console.log(book);
    book.save((err, data) => {
        if (err) {
            res.status(400).json({
                err: "Add failed"
            })
        }
        console.log(data)

        res.json(data)
    })
}
export const lish = (req, res) => {
    Book.find((err, book) => {
        if (err) {
            return res.status(400).json({
                err: "Khong co san pham nao"
            })
        }
        res.json(book)
    })
}

export const productId = (req, res, next, id) => {
    Book.findById(id).exec((err, book) => {
        // console.log(book,id)
        if (err || !book) {
            res.status(400).json({
                err: "khong tim duoc san pham"
            })
        }
        req.book = book;
        next();
    })
}

export const read = (req, res) => {
    return res.json(req.book)
}

