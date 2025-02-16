import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './Preview/PersonalDetailPreview';
import SummeryPreview from './Preview/SummeryPreview';
import ExperiencePreview from './Preview/ExperiencePreview';
import EducationPreview from './Preview/EducationPreview';
import SkillPreview from './Preview/SkillPreview';

const ResumePreview = () => {
  const{resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumeInfo?.themeColor}}>
       <PersonalDetailPreview resumeInfo={resumeInfo}/>
       <SummeryPreview resumeInfo={resumeInfo}/>
       <ExperiencePreview resumeInfo={resumeInfo}/>
       <EducationPreview resumeInfo={resumeInfo}/>
       <SkillPreview resumeInfo={resumeInfo}/>
    </div>
  ) 
}

export default ResumePreview