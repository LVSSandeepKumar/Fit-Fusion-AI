"use client";
import { DietPlanTemplates } from "@/app/(data)/Templates";
import DietPlanFormSection from "@/components/DietPlanFormSection";
import DietPlanOutputSection from "@/components/DietPlanOutputSection";
import { TEMPLATE } from "@/components/TemplateListSection";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useState } from "react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewDietPlan = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [AiOutput, setAiOutput] = useState<string>("");
  const {user} = useUser();

  const selectedDietPlanTemplate: TEMPLATE | undefined =
    DietPlanTemplates?.find(
      (item) => item.slug == props.params["template-slug"]
    );
  
  const GenerateAIDietPlan = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedDietPlanTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(formData) + "," + selectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);
    setAiOutput(result?.response.text());
    await SaveInDb(JSON.stringify(formData), selectedDietPlanTemplate?.slug, result?.response.text());
    setLoading(false);
  };

  const SaveInDb = async(formData:any, slug:any, AiResp:string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: AiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("Do MMMM YYYY, h:mm a")
    });

    console.log(result);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5">
      <DietPlanFormSection
        selectedDietPlanTemplate={selectedDietPlanTemplate}
        userFormInput={(v: any) => GenerateAIDietPlan(v)}
        loading={loading}
      />
      <DietPlanOutputSection AiOutput={AiOutput} />
    </div>
  );
};

export default CreateNewDietPlan;
