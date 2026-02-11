import React,{useEffect,useState} from 'react';
import{Link,useNavigate,useParams}from "react-router";
import api from"../lib/axios";
import toast from"react-hot-toast";
import{LoaderIcon,Trash2Icon,ArrowLeftIcon}from"lucide-react";

const BookDetailsPage = () => {
  const[book,setBook]=useState(null);
  const[loading,setLoading]=useState(true);
  const[saving ,setSaving]=useState=(false);
  const navigate=useNavigate();
  const{id}=useParams();
  useEffect(()=>{
    const fetchBook=async()=>{
      try{
        const res=await api.get('/books/{id}');
        setBook(res.data);
      }catch(error){
        ("Error fetching book",error);
        toast.error("Failed to fetch the book");
      }finally{
        setLoading(false);
      }
    };
    fetchBook();
  },[id]);
  const handleDelete=async()=>{
    if(!window.confirm("Are you sure you want to delete this book?"))return;
    try{
      await api.delete('/book/${id}');
      toast.success("Book deleted succesfully");
      navigate("/");
    }catch(error){
      console.error("Error deleting book",error);
      toast.error("Failed to delete book");
    }
  };
  const handleSave = async()=> {
    if(!book.title.trim() || !book.author.trim()){
      toast.error("Please add title and author");
      return;
    }
    setSaving(true);
    try{
      await api.put('/book/${id}',{
        title:book.title,
        author:book.author,
        publishYear:Number(book.publishYear)

      });
      toast.success("Book updated successfully");
      navigate("/");
    }catch(error){
      console.error("Error updating book",error);
      toast.error("Failed to update book");
    }finally{
      setSaving(false);
    }
  };
  if (loading){
    return(
      <div className="min-h-screen bg-base-200 flex item-center justify-center">
        <LoadingIcon className="animate-spin size-10"/>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          {/*HEADER*/}
          <div className="flex items-center justify-between mb-6">
          <Link to="/"className="btn btn-ghost">
          <ArrowLeftIcon className="h-5 w-5"/>Back to /Books
          </Link>
          <button onClick={handleDelete}className="btn btn-error btn-outline">
            <Trash2Icon className="h-5 w-5"/>Delete Book
          </button>
          </div>
          {/*FORM CARD*/}
          <div className="from-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text"placeholder="Book title"className="input input-bordered"value={book.title}onChange={(e)=>
              setBook({...book,title:e.target.value})}/>
          </div>
          {/*AUTHOR*/}
          <div className="from-control mb-4">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input type="text"placeholder="Book title"className="input input-bordered"value={book.title}onChange={(e)=>
              setBook({...book,title:e.target.value})}/>
          
          </div>
          {/*PUBLISH YEAR*/}
          <div className="label-control mb-6">
            <label className="label">
            <span className="lable-text">Publish Year</span>
            </label>
             <input type="number"placeholder="year"className="input input-bordered"value={book.publishYear}onChange={(e)=>
              setBook({...book,publishYear:target.value})}/>

          </div>
          {/*ACTION*/}
          <div className="card-actions justify-end">
            <button className="btn btn-primary"disabled={saving}
            onClick={handleSave}>
              {saving ? "Saving...":"Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
