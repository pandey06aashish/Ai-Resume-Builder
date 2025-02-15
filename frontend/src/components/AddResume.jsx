import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"

  
const AddResume = () => {
    const [openDialog,setOpenDialog]=useState(false)
  return (
    <div className=''>
        <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'onClick={()=>setOpenDialog(true)}>
            <PlusSquare/>
        </div>
        <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
         <p>Add A Title for your New Resume</p>
         <Input className="my-2" placeholder="Example Full Stack Resume"/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button  variant="ghost" onClick={()=>{setOpenDialog(false)}}>Cancel</Button>
        <Button>Create</Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>

  )
}

export default AddResume