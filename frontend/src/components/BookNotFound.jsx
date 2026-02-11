import { NotebookIcon } from "lucide-react";
import {Link} from 'react-router'
const BookNotFound = () => {
    return (
        <div className='flex flex-col items-center justify-ceter py-16 space-y-6 max-w-md-auto text-center'>
            <div className="bg-primay/10 rounded-full p-8">
            <NotebookIcon className="SIZE-10 TEXT-RIMARY" />
            </div>
            <h3 className="text2x1 font-bold"> no books yet</h3>
            <p className="text-base-content/70">
            ready to add books? and first book to the bookstore.
            </p>
            <Link to='/create' className="btn btn-primary">
            add first book to the bookstore.
            </Link>
        </div>
    )} 
    export default BookNotFound