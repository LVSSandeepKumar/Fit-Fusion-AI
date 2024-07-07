import Image from "next/image";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";

const WorkoutsTemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={'/dashboard/workout/'+item.slug}>
      <div className="p-5 shadow-md rounded-md border flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-primary line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
};

export default WorkoutsTemplateCard;
