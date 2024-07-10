"use client";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

const History = () => {
  const { user } = useUser();
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    const fetchResult = async () => {
      const res = await db.select().from(AIOutput)
      /* @ts-ignore */
      .where(eq(AIOutput.createdBy, 
      user?.primaryEmailAddress?.emailAddress));
      
      setResult(res);

      console.log(res);
    };
    fetchResult();
  }, [user]);

  const handleCopy = (aiResponse: any) => {
    navigator.clipboard.writeText(aiResponse);
  };

  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  return (
    <div className="flex flex-col items-start md:p-5 p-2 border rounded-lg m-2 shadow-md bg-white">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl">History</h2>
        <p>Find all your search history here.</p>
      </div>
      <div className="grid grid-cols-7 mt-6 w-full bg-slate-100 text-[12px] md:font-bold font-semibold">
        <div className=" col-span-2 md:pl-5 md:p-2 p-1">
          <h2>TEMPLATE</h2>
        </div>
        <div className=" col-span-2 md:p-2 max-sm:col-span-3 p-1">
          <h2>AI RESPONSE</h2>
        </div>
        <div className=" md:p-2 p-1">
          <h2>DATE</h2>
        </div>
        <div className=" md:p-2 p-1 text-sm max-sm:hidden">
          <h2>WORDS</h2>
        </div>
        <div className=" md:p-2 p-1">
          <h2>COPY</h2>
        </div>
      </div>
      {user &&
        result.map((item, index) => (
          <div
            className="grid grid-cols-7 border gap-4 md:p-5 p-2 my-4 md:text-sm text-xs font-semibold hover:shadow-md hover:border-primary transition-all"
            key={index}
          >
            <p className="col-span-2 text-start p-2">{item.templateSlug}</p>
            <p className="col-span-2 max-sm:col-span-3 line-clamp-3">{item.aiResponse}</p>
            <p>{item.createdAt}</p>
            <p className="max-sm:hidden">{countWords(item.aiResponse)}</p>
            <Copy
              className="md:w-8 md:h-8 h-6 w-6 cursor-pointer"
              onClick={() => handleCopy(item.aiResponse)}
            />
          </div>
        ))}
    </div>
  );
};

export default History;
