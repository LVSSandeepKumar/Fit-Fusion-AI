"use client";
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema";
import { Copy } from "lucide-react";
import { useEffect } from "react"

const History = async () => {
    
    const result = await db.select().from(AIOutput).execute();

    const handleCopy = (aiResponse: any) => {
        navigator.clipboard.writeText(aiResponse);
    }
    
  return (
    <div className='flex flex-col items-start p-5 border rounded-lg m-2 shadow-md bg-white'>
        <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>History</h2>
            <p>Find all your search history here.</p>
        </div>
        <div className='grid grid-cols-7 mt-6 w-full'>
            <div className='bg-slate-100 col-span-2 w-full pl-5 p-2 font-bold text-md'>
                <h2>TEMPLATE</h2> 
            </div>
            <div className='bg-slate-100 col-span-2 w-full p-2 font-bold text-md'>
                <h2>AI RESPONSE</h2>
            </div>
            <div className='bg-slate-100 w-full p-2 font-bold text-md'>
                <h2>DATE</h2>
            </div>
            <div className='bg-slate-100 w-full p-2 font-bold text-md'>
                <h2>WORDS</h2>
            </div>
            <div className='bg-slate-100 w-full p-2 font-bold text-md'>
                <h2>COPY</h2>
            </div>
        </div>
        {result.map((item, index) => (
                <div className="grid grid-cols-7 border gap-4 p-5 my-4 hover:shadow-md hover:border-primary transition-all" key={index}>
                <p className="col-span-2 text-start p-2">{item.templateSlug}</p>
                <p className="col-span-2 line-clamp-3">{item.aiResponse}</p>
                <p>{item.createdAt}</p>
                <p></p>
                <Copy className="w-8 h-8 cursor-pointer" onClick={() => handleCopy(item.aiResponse)}/>
                </div>
            ))}
    </div>
  )
}

export default History