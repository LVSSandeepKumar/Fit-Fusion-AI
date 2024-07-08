"use client";
import { DietPlanTemplates } from "@/app/(data)/Templates"
import DietPlanFormSection from "@/components/DietPlanFormSection"
import DietPlanOutputSection from "@/components/DietPlanOutputSection"
import { TEMPLATE } from "@/components/TemplateListSection"
import { chatSession } from "@/utils/AiModel";
import { useState } from "react";

interface PROPS {
  params : {
    'template-slug' : string
  }
}

const CreateNewDietPlan = (props:PROPS) => {
  const [loading, setLoading] = useState(false);
  const [AiOutput, setAiOutput] = useState<string>('')

  const selectedDietPlanTemplate : TEMPLATE | undefined = DietPlanTemplates?.find((item) => item.slug == props.params["template-slug"]);
  const GenerateAIDietPlan = async (formData:any) => {
    setLoading(true);
    const selectedPrompt = selectedDietPlanTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(formData) + "," + selectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response.text());
    setLoading(false);
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5">
      <DietPlanFormSection 
        selectedDietPlanTemplate={selectedDietPlanTemplate}
        userFormInput={(v:any) => GenerateAIDietPlan(v)}
        loading={loading}
      />
      <DietPlanOutputSection 
      AiOutput={AiOutput}
      />
    </div>
  )
}

export default CreateNewDietPlan;