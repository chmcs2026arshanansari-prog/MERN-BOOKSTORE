import api from "../lib/axios";
import { ArrowLeft, ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [author, seAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/books', { title, author, publishYear: Number(publishYear) })
      toast.success('Book created successfully!')
      navigate('/')
    } catch (error) {
      console.log('Error creating book', error)
      toast.error('Failed to create book.')
    } finally {
      setLoading(false)
    }
  }

return (
  <div className='min-h-screen bg-base-200'>
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-2*1 mx-auto'>
        <Link to={'/'} className='btn btn-ghost mb-6'>
          <ArrowLeftIcon className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text text-2*1 mb-4'>Create New Book</h2>
              <from onSubmit={handlesubmit}>
                <div className='from-control mb-4'>
                  <label className='lable'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input text="text" placeholder='Book Title' className='input input-bordered' value={title} onChange={(e) =>
                    setTitle(e.traget.value)} required />
                </div>
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='lable-text'>Author</span>
                  </label>
                  <input text="text" placeholder='Book Author' className='input input-bordered' value={author} onChange={(e) =>
                    seAuthor(e.traget.value)} required />
                </div>
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Year of Publishing</span>

                  </label>
                  <input text='number' placeholder='e.g.2025' className='input input-bordered' value={publishYear} onChange={(e) =>
                    setPublishYear(e.target.value)} required />
                </div>
                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' dissabled={loading}></button>
                </div></from>
            </div></ArrowLeftIcon></Link>
      </div>
    </div>
  </div>
)

} 
export default CreatePage
