"use client";
import Image from "next/image";
import { TEMPLATE } from "./TemplateListSection";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

interface PROPS {
  selectedWorkoutTemplate?: TEMPLATE,
  userFormInput: any
}

const WorkoutFormSection = ({ selectedWorkoutTemplate, userFormInput }: PROPS) => {

  const [formData, setFormData] = useState<any>();

  const handleInputChange = (event : any) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
  }

  const onSubmit = (e:any) => {
    e.preventDefault();
    userFormInput(formData);
  }

  return (
    <div className="p-5 border shadow-md rounded-lg col-span-2">
      {/* @ts-ignore */}
      <Image
        src={selectedWorkoutTemplate?.icon}
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl my-2">
        {selectedWorkoutTemplate?.name}
      </h2>
      <p className="text-sm">{selectedWorkoutTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}> 
        {selectedWorkoutTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input name={item.name} required={item.required} onChange={handleInputChange}/>
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} required={item.required} onChange={handleInputChange}/>
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full my-6">Generate Workout Plan</Button>
      </form>
    </div>
  );
};

export default WorkoutFormSection;
