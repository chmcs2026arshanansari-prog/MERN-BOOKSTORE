import express from "express"
import { Createbook, deleteBook, getAllBooks, getBooksByID, updateBook } from "../controllers/bookController.js"


const router = expess.Router()
router.get("/", getAllBooks)
router.get(":id", getBooksByID)
router.post("/", Createbook)
router.put("/:id", updateBook)
router.delete("/", deleteBook)

export default router