"use client";
import Image from "next/image"
import { TEMPLATE } from "./TemplateListSection"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedDietPlanTemplate? : TEMPLATE,
  userFormInput : any,
  loading: boolean
}

const DietPlanFormSection = ({selectedDietPlanTemplate, userFormInput, loading} : PROPS) => {

  const [formData, setFormData] = useState<any>();

  const handleInputChange = (event : any) => {
    const {name, value} = event.target;
    setFormData({...formData, [name] : value}) 
  }

  const onSubmit = (e:any) => {
    e.preventDefault();
    userFormInput(formData);
  }

  return (
    <div className="p-5 border shadow-md rounded-lg col-span-2">
      {/* @ts-ignore */}
      <Image
        {/* @ts-ignore */...Image}
        src={selectedDietPlanTemplate?.icon}
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl my-2">
        {selectedDietPlanTemplate?.name}
      </h2>
      <p className="text-sm">{selectedDietPlanTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}> 
        {selectedDietPlanTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7" key={index}>
            <label className="font-bold text-primary">{item.label}</label>
            {item.field == "input" ? (
              <Input name={item.name} required={item.required} onChange={handleInputChange}/>
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} required={item.required} onChange={handleInputChange}/>
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full my-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Diet Plan</Button>
      </form>
    </div>
  )
}

export default DietPlanFormSection