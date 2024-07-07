import { DietPlanTemplates, WorkoutTemplates } from "@/app/(data)/Templates";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateListSection = ({userSearchInput} : any) => {

  const [workoutTemplateList, setWorkoutTemplateList] = useState(WorkoutTemplates);
  const [dietPlanTemplateList, setDietPlanTemplateList] = useState(DietPlanTemplates);

  useEffect(() => {
    if(userSearchInput) {
      const filteredWorkouts = WorkoutTemplates.filter(item => 
        item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
      const filteredDietPlans = DietPlanTemplates.filter(item => 
        item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
      
      setWorkoutTemplateList(filteredWorkouts);
      setDietPlanTemplateList(filteredDietPlans);
    } else {
      setWorkoutTemplateList(WorkoutTemplates);
      setDietPlanTemplateList(DietPlanTemplates);
    }
  }, [userSearchInput])

  return (
    <div>
      <Tabs defaultValue="workouts" className="w-full p-2 h-screen m-2 ">
        <TabsList className="w-full sm:gap-4 sm:px-4">
          <TabsTrigger
            value="workouts"
            className="bg-white text-primary w-full"
          >
            Workouts
          </TabsTrigger>
          <TabsTrigger
            value="diet-plans"
            className="bg-white text-primary w-full"
          >
            Diet-Plans
          </TabsTrigger>
        </TabsList>
        <TabsContent value="workouts">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
            {workoutTemplateList.map((item: TEMPLATE, index: number) => (
              <TemplateCard {...item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="diet-plans">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
            {dietPlanTemplateList.map((item: TEMPLATE, index: number) => (
              <TemplateCard {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TemplateListSection;
