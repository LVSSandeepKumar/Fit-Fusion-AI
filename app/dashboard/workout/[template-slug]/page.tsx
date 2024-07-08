"use client";
import { WorkoutTemplates } from "@/app/(data)/Templates";
import { TEMPLATE } from "@/components/TemplateListSection";
import WorkoutFormSection from "@/components/WorkoutFormSection";
import WorkoutOutputSection from "@/components/WorkoutOutputSection";
import { chatSession } from "@/utils/AiModel";
import { useState } from "react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewWorkout = (props: PROPS) => {

  const [loading, setLoading] = useState(false);
  const [AiOutput, setAiOutput] = useState<string>('')

  const selectedWorkoutTemplate : TEMPLATE | undefined = WorkoutTemplates?.find((item) => item.slug == props.params["template-slug"]);
  
  const GenerateAIWorkout = async (formData : any) => {
    setLoading(true);
    const selectedPrompt = selectedWorkoutTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(formData) + "," + selectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response.text());
    setLoading(false);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5">
      <WorkoutFormSection
        selectedWorkoutTemplate = {selectedWorkoutTemplate}
        userFormInput={(v:any) => GenerateAIWorkout(v)}
        loading={loading}
      />
      <WorkoutOutputSection 
        AiOutput={AiOutput}
      />
    </div>
  );
};

export default CreateNewWorkout;
