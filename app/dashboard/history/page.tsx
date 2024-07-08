"use client";
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

const History = () => {

    const {user} = useUser();
    const [result, setResult] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchResult = async () => {
            const res = await db.select().from(AIOutput).execute();
            setResult(res);
        }
        fetchResult();
    }, [])
    

    const handleCopy = (aiResponse: any) => {
        navigator.clipboard.writeText(aiResponse);
    }
    
    const countWords = (text: any) => {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }
      
  return (
    <div className='flex flex-col items-start md:p-5 p-2 border rounded-lg m-2 shadow-md bg-white'>
        <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>History</h2>
            <p>Find all your search history here.</p>
        </div>
        <div className='grid grid-cols-7 mt-6 w-full'>
            <div className='bg-slate-100 col-span-2 md:pl-5 md:p-2 p-1 font-bold text-md'>
                <h2>TEMPLATE</h2> 
            </div>
            <div className='bg-slate-100 col-span-2 md:p-2 p-1 md:font-bold font-semibold md:text-md text-xs'>
                <h2>AI RESPONSE</h2>
            </div>
            <div className='bg-slate-100 md:p-2 p-1 md:font-bold font-semibold md:text-md text-sm'>
                <h2>DATE</h2>
            </div>
            <div className='bg-slate-100 md:p-2 p-1 md:font-bold font-semibold md:text-md text-sm'>
                <h2>WORDS</h2>
            </div>
            <div className='bg-slate-100 md:p-2 p-1 md:font-bold font-semibold md:text-md text-sm'>
                <h2>COPY</h2>
            </div>
        </div>
        {user && result.map((item, index) => (
                <div className="grid grid-cols-7 border gap-4 md:p-5 p-2 my-4 md:text-sm text-xs font-semibold hover:shadow-md hover:border-primary transition-all" key={index}>
                <p className="col-span-2 text-start p-2">{item.templateSlug}</p>
                <p className="col-span-2 line-clamp-3">{item.aiResponse}</p>
                <p>{item.createdAt}</p>
                <p>{countWords(item.aiResponse)}</p>
                <Copy className="md:w-8 md:h-8 h-6 w-6 cursor-pointer" onClick={() => handleCopy(item.aiResponse)}/>
                </div>
            ))}
    </div>
  )
}

export default History