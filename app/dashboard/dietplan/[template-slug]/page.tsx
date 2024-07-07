"use client";
import { DietPlanTemplates } from "@/app/(data)/Templates"
import DietPlanFormSection from "@/components/DietPlanFormSection"
import DietPlanOutputSection from "@/components/DietPlanOutputSection"
import { TEMPLATE } from "@/components/TemplateListSection"

interface PROPS {
  params : {
    'template-slug' : string
  }
}

const CreateNewDietPlan = (props:PROPS) => {

  const selectedDietPlanTemplate : TEMPLATE | undefined = DietPlanTemplates?.find((item) => item.slug == props.params["template-slug"]);
  const GenerateAIDietPlan = (formData:any) => {

  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5">
      <DietPlanFormSection 
        selectedDietPlanTemplate={selectedDietPlanTemplate}
        userFormInput={(v:any) => GenerateAIDietPlan(v)}
      />
      <DietPlanOutputSection />
    </div>
  )
}

export default CreateNewDietPlan;