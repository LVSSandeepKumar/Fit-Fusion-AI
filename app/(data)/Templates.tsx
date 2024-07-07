export const WorkoutTemplates = [
    // General Workouts
    {
      name: 'HIIT Workout',
      desc: 'A high-intensity interval training workout to boost cardiovascular fitness and burn calories.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/11091/11091985.png',
      slug: 'hiit-workout',
      aiPrompt: 'Generate a HIIT workout plan based on given intensity in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Strength Training',
      desc: 'A strength training routine to build muscle mass and increase overall strength.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/8091/8091641.png',
      slug: 'strength-training',
      aiPrompt: 'Generate a strength training plan based on given muscle group in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select muscle group (e.g., upper body, lower body, full body)',
          field: 'input',
          name: 'muscleGroup',
          required: true
        }
      ]
    },
    {
      name: 'Yoga Routine',
      desc: 'A calming yoga routine to improve flexibility, balance, and mental clarity.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2906/2906496.png',
      slug: 'yoga-routine',
      aiPrompt: 'Generate a yoga routine based on given focus area in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select focus area (e.g., relaxation, flexibility, strength)',
          field: 'input',
          name: 'focusArea',
          required: true
        }
      ]
    },
    {
      name: 'Cardio Workout',
      desc: 'A cardio workout to improve cardiovascular health and endurance.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/11981/11981586.png',
      slug: 'cardio-workout',
      aiPrompt: 'Generate a cardio workout plan based on given desired workout duration in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Enter desired workout duration (in minutes)',
          field: 'input',
          name: 'duration',
          required: true
        }
      ]
    },
    {
      name: 'Flexibility Training',
      desc: 'A flexibility training routine to enhance range of motion and prevent injuries.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/12155/12155870.png',
      slug: 'flexibility-training',
      aiPrompt: 'Generate a flexibility training plan based on given target area in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select target area (e.g., legs, back, full body)',
          field: 'input',
          name: 'targetArea',
          required: true
        }
      ]
    },
    {
      name: 'Leg Workout',
      desc: 'A leg workout routine to build strength and muscle in the lower body.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/6063/6063198.png',
      slug: 'leg-workout',
      aiPrompt: 'Generate a leg workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Chest Workout',
      desc: 'A chest workout routine to build strength and muscle in the upper body.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/4760/4760544.png',
      slug: 'chest-workout',
      aiPrompt: 'Generate a chest workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Back Workout',
      desc: 'A back workout routine to build strength and muscle in the upper and lower back.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/7922/7922309.png',
      slug: 'back-workout',
      aiPrompt: 'Generate a back workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Arm Workout',
      desc: 'An arm workout routine to build strength and muscle in the biceps and triceps.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3795/3795434.png',
      slug: 'arm-workout',
      aiPrompt: 'Generate an arm workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Core Workout',
      desc: 'A core workout routine to strengthen and tone the abdominal muscles.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2376/2376374.png',
      slug: 'core-workout',
      aiPrompt: 'Generate a core workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Full Body Workout',
      desc: 'A full-body workout routine to build strength and endurance across all major muscle groups.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/11438/11438139.png',
      slug: 'full-body-workout',
      aiPrompt: 'Generate a full-body workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Glute Workout',
      desc: 'A glute workout routine to build strength and muscle in the glutes and lower body.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/14228/14228740.png',
      slug: 'glute-workout',
      aiPrompt: 'Generate a glute workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Shoulder Workout',
      desc: 'A shoulder workout routine to build strength and muscle in the shoulders.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2324/2324567.png',
      slug: 'shoulder-workout',
      aiPrompt: 'Generate a shoulder workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Cardio Dance Workout',
      desc: 'A fun and energetic cardio dance workout to improve cardiovascular health and burn calories.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3043/3043165.png',
      slug: 'cardio-dance-workout',
      aiPrompt: 'Generate a cardio dance workout plan based on the selected music genre and fitness level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select music genre (e.g., hip hop, salsa, pop)',
          field: 'input',
          name: 'genre',
          required: true
        },
        {
          label: 'Enter your fitness level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'fitnessLevel',
          required: true
        }
      ]
    },
    {
      name: 'Pilates Routine',
      desc: 'A Pilates routine to improve core strength, flexibility, and overall body awareness.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/10474/10474201.png',
      slug: 'pilates-routine',
      aiPrompt: 'Generate a Pilates routine based on the given focus area, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select focus area (e.g., core strength, flexibility, balance)',
          field: 'input',
          name: 'focusArea',
          required: true
        }
      ]
    },
    {
      name: 'Balance Training',
      desc: 'A balance training routine to improve stability and coordination.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/14290/14290684.png',
      slug: 'balance-training',
      aiPrompt: 'Generate a balance training plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Endurance Training',
      desc: 'An endurance training routine to improve stamina and cardiovascular health.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/15532/15532395.png',
      slug: 'endurance-training',
      aiPrompt: 'Generate an endurance training plan based on given workout duration, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select desired workout duration (in minutes)',
          field: 'input',
          name: 'duration',
          required: true
        }
      ]
    },
    {
      name: 'Mobility Training',
      desc: 'A mobility training routine to enhance joint function and prevent injuries.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/7757/7757744.png',
      slug: 'mobility-training',
      aiPrompt: 'Generate a mobility training plan based on given target area, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select target area (e.g., hips, shoulders, full body)',
          field: 'input',
          name: 'targetArea',
          required: true
        }
      ]
    },
    {
      name: 'Plyometric Workout',
      desc: 'A plyometric workout routine to improve power and explosiveness.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/157/157776.png',
      slug: 'plyometric-workout',
      aiPrompt: 'Generate a plyometric workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Speed Training',
      desc: 'A speed training routine to improve agility and quickness.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/55/55240.png',
      slug: 'speed-training',
      aiPrompt: 'Generate a speed training plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Circuit Training',
      desc: 'A circuit training routine combining strength and cardio exercises for a full-body workout.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/10655/10655649.png',
      slug: 'circuit-training',
      aiPrompt: 'Generate a circuit training plan based on given workout duration, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select workout duration (e.g., 30 minutes, 45 minutes, 60 minutes)',
          field: 'input',
          name: 'duration',
          required: true
        }
      ]
    },
    {
      name: 'Tabata Workout',
      desc: 'A Tabata workout routine with high-intensity intervals for maximum calorie burn.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3043/3043175.png',
      slug: 'tabata-workout',
      aiPrompt: 'Generate a Tabata workout plan based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Athletic Training',
      desc: 'An athletic training routine to enhance performance and overall fitness.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2262/2262790.png',
      slug: 'athletic-training',
      aiPrompt: 'Generate an athletic training plan based on given sport or activity, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select sport or activity (e.g., soccer, basketball, running)',
          field: 'input',
          name: 'sport',
          required: true
        }
      ]
    },
  
    // No Equipment Workouts
    {
      name: 'Legs Workout - No Equipment',
      desc: 'A legs workout routine that requires no equipment to build strength and muscle in the lower body.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/6063/6063198.png',
      slug: 'legs-workout-no-equipment',
      aiPrompt: 'Generate a legs workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Chest Workout - No Equipment',
      desc: 'A chest workout routine that requires no equipment to build strength and muscle in the upper body.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/4760/4760544.png',
      slug: 'chest-workout-no-equipment',
      aiPrompt: 'Generate a chest workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Back Workout - No Equipment',
      desc: 'A back workout routine that requires no equipment to build strength and muscle in the upper and lower back.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/7922/7922309.png',
      slug: 'back-workout-no-equipment',
      aiPrompt: 'Generate a back workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Arm Workout - No Equipment',
      desc: 'An arm workout routine that requires no equipment to build strength and muscle in the biceps and triceps.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/6619/6619275.png',
      slug: 'arm-workout-no-equipment',
      aiPrompt: 'Generate an arm workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Core Workout - No Equipment',
      desc: 'A core workout routine that requires no equipment to strengthen and tone the abdominal muscles.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2376/2376374.png',
      slug: 'core-workout-no-equipment',
      aiPrompt: 'Generate a core workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Full Body Workout - No Equipment',
      desc: 'A full-body workout routine that requires no equipment to build strength and endurance across all major muscle groups.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/15029/15029311.png',
      slug: 'full-body-workout-no-equipment',
      aiPrompt: 'Generate a full-body workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Glute Workout - No Equipment',
      desc: 'A glute workout routine that requires no equipment to build strength and muscle in the glutes and lower body.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/14228/14228740.png',
      slug: 'glute-workout-no-equipment',
      aiPrompt: 'Generate a glute workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Shoulder Workout - No Equipment',
      desc: 'A shoulder workout routine that requires no equipment to build strength and muscle in the shoulders.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2324/2324567.png',
      slug: 'shoulder-workout-no-equipment',
      aiPrompt: 'Generate a shoulder workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Cardio Workout - No Equipment',
      desc: 'A cardio workout routine that requires no equipment to improve cardiovascular health and endurance.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/11981/11981586.png',
      slug: 'cardio-workout-no-equipment',
      aiPrompt: 'Generate a cardio workout plan that requires no equipment based on given workout duration, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Enter desired workout duration (in minutes)',
          field: 'input',
          name: 'duration',
          required: true
        }
      ]
    },
    {
      name: 'HIIT Workout - No Equipment',
      desc: 'A high-intensity interval training workout that requires no equipment to boost cardiovascular fitness and burn calories.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/11091/11091972.png',
      slug: 'hiit-workout-no-equipment',
      aiPrompt: 'Generate a HIIT workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Pilates Routine - No Equipment',
      desc: 'A Pilates routine that requires no equipment to improve core strength, flexibility, and overall body awareness.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/10474/10474201.png',
      slug: 'pilates-routine-no-equipment',
      aiPrompt: 'Generate a Pilates routine that requires no equipment based on given focus area, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select focus area (e.g., core strength, flexibility, balance)',
          field: 'input',
          name: 'focusArea',
          required: true
        }
      ]
    },
    {
      name: 'Tabata Workout - No Equipment',
      desc: 'A Tabata workout routine that requires no equipment with high-intensity intervals for maximum calorie burn.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3043/3043175.png',
      slug: 'tabata-workout-no-equipment',
      aiPrompt: 'Generate a Tabata workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Mobility Training - No Equipment',
      desc: 'A mobility training routine that requires no equipment to enhance joint function and prevent injuries.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/7757/7757744.png',
      slug: 'mobility-training-no-equipment',
      aiPrompt: 'Generate a mobility training plan that requires no equipment based on given target area, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select target area (e.g., hips, shoulders, full body)',
          field: 'input',
          name: 'targetArea',
          required: true
        }
      ]
    },
    {
      name: 'Plyometric Workout - No Equipment',
      desc: 'A plyometric workout routine that requires no equipment to improve power and explosiveness.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/157/157776.png',
      slug: 'plyometric-workout-no-equipment',
      aiPrompt: 'Generate a plyometric workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Balance Training - No Equipment',
      desc: 'A balance training routine that requires no equipment to improve stability and coordination.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/14290/14290684.png',
      slug: 'balance-training-no-equipment',
      aiPrompt: 'Generate a balance training plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Speed Training - No Equipment',
      desc: 'A speed training routine that requires no equipment to improve agility and quickness.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/55/55240.png',
      slug: 'speed-training-no-equipment',
      aiPrompt: 'Generate a speed training plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Flexibility Training - No Equipment',
      desc: 'A flexibility training routine that requires no equipment to enhance range of motion and prevent injuries.',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/12155/12155870.png',
      slug: 'flexibility-training-no-equipment',
      aiPrompt: 'Generate a flexibility training plan that requires no equipment based on given target area, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select target area (e.g., legs, back, full body)',
          field: 'input',
          name: 'targetArea',
          required: true
        }
      ]
    },
    {
      name: 'Endurance Training - No Equipment',
      desc: 'An endurance training routine that requires no equipment to improve stamina and cardiovascular health.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/15532/15532395.png',
      slug: 'endurance-training-no-equipment',
      aiPrompt: 'Generate an endurance training plan that requires no equipment based on given workout duration, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select desired workout duration (in minutes)',
          field: 'input',
          name: 'duration',
          required: true
        }
      ]
    },
    {
      name: 'Athletic Training - No Equipment',
      desc: 'An athletic training routine that requires no equipment to enhance performance and overall fitness.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2262/2262790.png',
      slug: 'athletic-training-no-equipment',
      aiPrompt: 'Generate an athletic training plan that requires no equipment based on given activity, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select sport or activity (e.g., soccer, basketball, running)',
          field: 'input',
          name: 'sport',
          required: true
        }
      ]
    },
    {
      name: 'HIIT Cardio Workout - No Equipment',
      desc: 'A high-intensity interval training cardio workout that requires no equipment to boost cardiovascular fitness and burn calories.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/9571/9571320.png',
      slug: 'hiit-cardio-workout-no-equipment',
      aiPrompt: 'Generate a HIIT cardio workout plan that requires no equipment based on a given intensity level, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select intensity level (beginner, intermediate, advanced)',
          field: 'input',
          name: 'intensity',
          required: true
        }
      ]
    },
    {
      name: 'Circuit Training - No Equipment',
      desc: 'A circuit training routine that requires no equipment, combining strength and cardio exercises for a full-body workout.',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/10655/10655649.png',
      slug: 'circuit-training-no-equipment',
      aiPrompt: 'Generate a circuit training plan that requires no equipment based on given workout duration, in a bullet-wise format in Rich Text Editor Format.',
      form: [
        {
          label: 'Select workout duration (e.g., 30 minutes, 45 minutes, 60 minutes)',
          field: 'input',
          name: 'duration',
          required: true
        }
      ]
    }
]

export const DietPlanTemplates = [
  {
    name: 'Weight Loss Diet Plan - Veg',
    desc: 'A highly dedicated vegetarian diet plan to optimize your weight loss journey.',
    category: 'Weight Loss',
    icon: 'https://cdn-icons-png.flaticon.com/128/1593/1593745.png',
    slug: 'weight-loss-diet-plan-veg',
    aiPrompt: 'Generate a Weight loss diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like paneer, tofu, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Weight Loss Diet Plan - Non Veg',
    desc: 'A dedicated non-vegetarian diet plan to support your weight loss goals.',
    category: 'Weight Loss',
    icon: 'https://cdn-icons-png.flaticon.com/128/1593/1593694.png',
    slug: 'weight-loss-diet-plan-non-veg',
    aiPrompt: 'Generate a Weight loss diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like chicken, fish, eggs, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Weight Gain Diet Plan - Veg',
    desc: 'A vegetarian diet plan designed to help you gain weight healthily.',
    category: 'Weight Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/4053/4053936.png',
    slug: 'weight-gain-diet-plan-veg',
    aiPrompt: 'Generate a Weight gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like nuts, dairy, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Weight Gain Diet Plan - Non Veg',
    desc: 'A non-vegetarian diet plan to support healthy weight gain.',
    category: 'Weight Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/4053/4053925.png',
    slug: 'weight-gain-diet-plan-non-veg',
    aiPrompt: 'Generate a Weight gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like red meat, eggs, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Muscle Gain Diet Plan - Veg',
    desc: 'A vegetarian diet plan to help you build muscle mass effectively.',
    category: 'Muscle Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/5522/5522626.png',
    slug: 'muscle-gain-diet-plan-veg',
    aiPrompt: 'Generate a Muscle gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like lentils, quinoa, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Muscle Gain Diet Plan - Non Veg',
    desc: 'A non-vegetarian diet plan to support muscle growth and strength.',
    category: 'Muscle Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/5522/5522626.png',
    slug: 'muscle-gain-diet-plan-non-veg',
    aiPrompt: 'Generate a Muscle gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like chicken, fish, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Diabetes Diet Plan - Veg',
    desc: 'A vegetarian diet plan tailored for managing diabetes effectively.',
    category: 'Health',
    icon: 'https://cdn-icons-png.flaticon.com/128/3209/3209082.png',
    slug: 'diabetes-diet-plan-veg',
    aiPrompt: 'Generate a Diabetes management diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like whole grains, vegetables, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Diabetes Diet Plan - Non Veg',
    desc: 'A non-vegetarian diet plan for effective diabetes management.',
    category: 'Health',
    icon: 'https://cdn-icons-png.flaticon.com/128/3209/3209082.png',
    slug: 'diabetes-diet-plan-non-veg',
    aiPrompt: 'Generate a Diabetes management diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like fish, lean meats, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Keto Diet Plan - Veg',
    desc: 'A vegetarian keto diet plan to help you achieve ketosis and burn fat.',
    category: 'Keto',
    icon: 'https://cdn-icons-png.flaticon.com/128/2829/2829592.png',
    slug: 'keto-diet-plan-veg',
    aiPrompt: 'Generate a Keto diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like avocado, nuts, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Keto Diet Plan - Non Veg',
    desc: 'A non-vegetarian keto diet plan to help you achieve ketosis and burn fat.',
    category: 'Keto',
    icon: 'https://cdn-icons-png.flaticon.com/128/2829/2829592.png',
    slug: 'keto-diet-plan-non-veg',
    aiPrompt: 'Generate a Keto diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like fatty fish, meat, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Vegan Diet Plan - Weight Loss',
    desc: 'A vegan diet plan tailored for weight loss and healthy living.',
    category: 'Weight Loss',
    icon: 'https://cdn-icons-png.flaticon.com/128/1593/1593745.png',
    slug: 'vegan-diet-plan-weight-loss',
    aiPrompt: 'Generate a Vegan weight loss diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like legumes, soy products, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Vegan Diet Plan - Muscle Gain',
    desc: 'A vegan diet plan designed to support muscle growth and strength.',
    category: 'Muscle Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/5203/5203986.png',
    slug: 'vegan-diet-plan-muscle-gain',
    aiPrompt: 'Generate a Vegan muscle gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like chickpeas, quinoa, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Gluten-Free Diet Plan - Weight Loss',
    desc: 'A gluten-free diet plan to help you lose weight and maintain a healthy lifestyle.',
    category: 'Weight Loss',
    icon: 'https://cdn-icons-png.flaticon.com/128/1593/1593694.png',
    slug: 'gluten-free-diet-plan-weight-loss',
    aiPrompt: 'Generate a Gluten-free weight loss diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like gluten-free grains, vegetables, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Gluten-Free Diet Plan - Muscle Gain',
    desc: 'A gluten-free diet plan to help you gain muscle mass and strength.',
    category: 'Muscle Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/5203/5203986.png',
    slug: 'gluten-free-diet-plan-muscle-gain',
    aiPrompt: 'Generate a Gluten-free muscle gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like lean meats, beans, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Paleo Diet Plan - Weight Loss',
    desc: 'A paleo diet plan designed to help you lose weight and stay healthy.',
    category: 'Weight Loss',
    icon: 'https://cdn-icons-png.flaticon.com/128/1593/1593745.png',
    slug: 'paleo-diet-plan-weight-loss',
    aiPrompt: 'Generate a Paleo weight loss diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like lean meats, vegetables, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Paleo Diet Plan - Muscle Gain',
    desc: 'A paleo diet plan to support muscle growth and overall fitness.',
    category: 'Muscle Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/3485/3485358.png',
    slug: 'paleo-diet-plan-muscle-gain',
    aiPrompt: 'Generate a Paleo muscle gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like nuts, seeds, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Mediterranean Diet Plan - Weight Loss',
    desc: 'A Mediterranean diet plan to help you lose weight and improve your health.',
    category: 'Weight Loss',
    icon: 'https://cdn-icons-png.flaticon.com/128/1593/1593694.png',
    slug: 'mediterranean-diet-plan-weight-loss',
    aiPrompt: 'Generate a Mediterranean weight loss diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like olive oil, fish, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Mediterranean Diet Plan - Muscle Gain',
    desc: 'A Mediterranean diet plan to support muscle growth and overall fitness.',
    category: 'Muscle Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/3485/3485358.png',
    slug: 'mediterranean-diet-plan-muscle-gain',
    aiPrompt: 'Generate a Mediterranean muscle gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like whole grains, lean proteins, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Intermittent Fasting Diet Plan - Weight Loss',
    desc: 'An intermittent fasting diet plan designed to help you lose weight effectively.',
    category: 'Weight Loss',
    icon: 'https://cdn-icons-png.flaticon.com/128/1593/1593694.png',
    slug: 'intermittent-fasting-diet-plan-weight-loss',
    aiPrompt: 'Generate an Intermittent fasting weight loss diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like healthy fats, lean proteins, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  },
  {
    name: 'Intermittent Fasting Diet Plan - Muscle Gain',
    desc: 'An intermittent fasting diet plan to help you gain muscle and strength.',
    category: 'Muscle Gain',
    icon: 'https://cdn-icons-png.flaticon.com/128/3485/3485358.png',
    slug: 'intermittent-fasting-diet-plan-muscle-gain',
    aiPrompt: 'Generate an Intermittent fasting muscle gain diet plan of given number of meals for given gender person with given weight based on priority foods and duration containing precise nutrient quantity if given in a bullet-wise format in Rich Text Editor Format.',
    form: [
      {
        label: 'Select Priority foods (like nuts, seeds, lean proteins, etc.)',
        field: 'input',
        name: 'priority-foods',
        required: true
      },
      {
        label: 'Select the number of days for your plan (optional)',
        field: 'input',
        name: 'duration',
        required: false
      },
      {
        label: 'Select the weight of the person',
        field: 'input',
        name: 'weight',
        required: true
      },
      {
        label: 'Select the gender',
        field: 'input',
        name: 'gender',
        required: true
      },
      {
        label: 'Select the number of meals per day',
        field: 'input',
        name: 'meals',
        required: true
      },
      {
        label: 'Enter Nutrient Requirements if you have any (optional)',
        field: 'textarea',
        name: 'nutrients',
        required: false
      }
    ]
  }
]
