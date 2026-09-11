'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';


export default function Message ()  {

     const router = useRouter();

  const navigation = () => {
    router.push('/message/last')
  }

    return <div className="flex flex-col w-full min-h-screen items-center justify-center h-full bg-red-200 p-[5vw] gap-[5vh]" id="font">
 
 
 
        <div className="font-bold border-2 border-black rounded-2xl p-[2vh] items-center flex flex-col">
            <span>
                IF YOU ARE SAD AND GOES SILENT    
            </span> 
            <span>
                ITS HURTS ME ALSO
            </span>
        </div>

        <div className="font-bold border-2 border-black rounded-2xl p-[2vh] items-center flex flex-col">
            <span>
                Or is there any mistake from myside that made you sad , &quot;I am really sorry&quot; but tell me if i did/say anything wrong you have every right to say 
            </span> 
        </div>
        
        

         

        
        
        
        
        <Button className={'hover:cursor-pointer'} onClick={navigation}>next</Button>

    </div>
}