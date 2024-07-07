"use client";
import { WorkoutTemplates } from "@/app/(data)/Templates";
import { TEMPLATE } from "@/components/TemplateListSection";
import WorkoutFormSection from "@/components/WorkoutFormSection";
import WorkoutOutputSection from "@/components/WorkoutOutputSection";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewWorkout = (props: PROPS) => {

  const selectedWorkoutTemplate : TEMPLATE | undefined = WorkoutTemplates?.find((item) => item.slug == props.params["template-slug"]);
  const GenerateAIWorkout = (formData : any) => {

  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-5">
      <WorkoutFormSection
        selectedWorkoutTemplate = {selectedWorkoutTemplate}
        userFormInput={(v:any) => GenerateAIWorkout(v)}
      />
      <WorkoutOutputSection />
    </div>
  );
};

export default CreateNewWorkout;
