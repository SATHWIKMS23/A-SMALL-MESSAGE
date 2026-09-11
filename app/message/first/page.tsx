'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Message  ()  {

    const router = useRouter();

  const navigation = () => {
    router.push('/message/second')
  }


    return <div className="flex flex-col w-full min-h-screen items-center h-full bg-red-200 p-[5vw] gap-[5vw]" id="font">

        <div className=" flex items-center text-justify  gap-[1vh] w-full h-full border-2 border-black p-[2vw] rounded-2xl">
            What happened to you again? I’m genuinely worried about you. You once told me, &quot;Your friend will be back with more energy and a better version of her.&quot; and seeing you come back with so much more energy and happiness honestly made me really proud and happy for you. When you told me &quot;I am fully ready.&quot; after everything was restored, I thought you had finally found yourself again after all those months. But now I’m seeing you becoming quiet and distant again, even deactivating Instagram, and I can’t help but wonder what happened. What about all those things you were excited about—learning editing, uploading your guitar videos, and doing the things you wanted to do? I’m not asking this to judge you or pressure you; I’m asking because I genuinely care about you and I don’t want to see you lose that version of yourself again. You already proved that you can come back stronger, and I just want you to find that energy again and start doing the things that make you happy.
        </div>

        <div className="text-justify gap-[1vh] w-full h-full border-2 border-black p-[2vw] rounded-2xl">
            What is hurting you again and again? Please don’t keep thinking about how they are treating you or how you might hurt them by choosing yourself. You are already hurting yourself by constantly worrying about not hurting them. If someone is disturbing your peace, just block them and focus on yourself. Do the things you once told me you wanted to do—learn editing, play guitar, create, and become the version of yourself you were excited to be. I’ll be there for you through it all, not with perfection, but definitely with honesty, and I genuinely want to see you happy, growing, and becoming yourself again.
        </div>

        <div>
            I want to see all the things and i am asking this as your best friend will you ? 
        </div>
        

        <Button  className={'hover:cursor-pointer'} onClick={navigation}>next</Button>
            


    </div>
}