
import Book from "../models/bookModel.js"
export async function getAllBooks(_, res) {
    // console.log("getAllBooks")
    // res.status(200).json("getAllBooks")
    try {
        const books = await Book.fimd().sort({createAt: -1})
        res.status(200).json(books)
    
    } catch (error) {
        console.error("Error in getAllBooks cotroller", error)
        res.status(500).json({ message: "Internal server error"})
    }

}
export async function getBooksByID(req, res) {
//     
try{ const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({mesae: " ook not found"})
        res.status(200).json(book)
} catch (error) {
     console.error("Error in getBookyID cotroller", error)
        res.status(500).json({ message: "Internal server error"})

}
}
export async function Createbook(req, res) {
    // console.log("Createbook")
    // res.status(200).json("CreateBook") 
    try{
        const { title, author, publishYear} = req.body 
        if(!title || !author || !publishYear)
            return res.status(404).json({ message: 'All fields are required'})
            const book = new Book({ title, author, publishYear})
            const savedBook = await book.save()
            res.status(201).json({ savedBook})
        } catch (error) {
            console.error("Error in createBook conroller", error)
            res.status(500).json({message: "Internal server error"})
        }
    }

export async function updateBook(req, res) {
    // 
    try{
        const {title, autor, publishYear } = req.body
        const updateBook = await
    book.findByIdAndUpdate(req.params.id, { title, author,publishYear }, {new: true})
    if (!updateBook) returnes.status(404).json({ message: "Book no found"})
        res.status(200).json(updateBook)
    } catch (error) {
            console.error("Error in createBook conroller", error)
            res.status(500).json({message: "Internal server error"})
        }

    } 


export async function deleteBook(req, res) {
    // console.log("deleteBook")
    // res.status(200).json("deleteBook") 
   try{
        const {title, autor, publishYear } = req.body
        const deleteBook = await
    book.findByIdAndDelete(req.params.id, { title, author,publishYear }, {new: true})
    if (!deleteBook) returnes.status(404).json({ message: "Book no found"}) 
    res.status(200).json({message: "book delete successfully"})
    } catch (error) {
            console.error("Error in createBook conroller", error)
            res.status(500).json({message: "Internal server error"})
        }
}