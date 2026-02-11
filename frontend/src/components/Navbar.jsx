import React from 'react'
import {Link} from 'react-router'
import{PlusIcon}from"lucide-react"
const Navbar = () => {
  return (
    <header ClassName='bg-amber-300 order-b border-base-content/10'>
    <div ClassName='ms-auto max-w-6*1 p-4'>
        <div ClassName='flex item-center justify-beteen'>
            <h1 ClassName='text-3*l font-bold text-promary font-mono tracking-tight'>BOOKSTORE</h1>
            <div ClassName='flex items-center gap-4'>
            <Link to={"/create"} ClassName="btn btn-Primary">
            <PlusIcon ClassName='size-5' /><span>New Book</span>
            </Link>
       </div>
       </div>
     </div> 
     </header>

  )
}

export default Navbar