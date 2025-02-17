import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../../../../service/GlobalApi';
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'

const Summery = ({enableNext}) => {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [summery,setSummery]=useState();
    const [loading,setLoading]=useState();
    const params=useParams()

    useEffect(()=>{
      summery&&setResumeInfo({
        ...resumeInfo,
        summery:summery
      })
    },[summery])

    const onSave = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      try {
        const payload = { data: { summery } }; // Ensure correct structure
        console.log("Sending payload:", payload);
    
        await GlobalApi.UpdateResumeDetail(params?.resumeId, payload);
    
        enableNext(true);
        toast.success("Details Updated");
      } catch (error) {
        console.error("Error updating resume:", error.response?.data || error);
        toast.error("Failed to update details");
      } finally {
        setLoading(false);
      }
    };
    
     return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Summery</h2>
    <p>Add Summery for your job title</p>
    <form className='mt-7' onSubmit={onSave}>
        <div className='flex justify-between items-end'>
        <label>Add Summery</label>
        <Button variant="outline" size="sm" className="border-primary text-primary">Generate from AI</Button>
        </div>
        <Textarea className="mt-5" required onChange={(e)=>setSummery(e.target.value)}/>
            <div className='mt-2 flex justify-end'> 
                <Button type="submit" disabled={loading}>{loading?<LoaderCircle className='animate-spin'/>:"Save"}</Button>
            </div>
    </form>
    </div>
  )
}

export default Summery