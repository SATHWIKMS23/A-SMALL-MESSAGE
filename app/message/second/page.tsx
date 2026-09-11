'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';


export default function Message ()  {

     const router = useRouter();

  const navigation = () => {
    router.push('/message/third')
  }

    return <div className="flex flex-col w-full min-h-screen items-center h-full bg-red-200 p-[5vw] gap-[10vh]" id="font">


        <div className="flex flex-col items-center gap-[2vh]">

            <div className="text-justify text-xl">
                Don&apos;t feel bad thinking about them. If you ever feel demotivated, low, or like you&apos;re not doing okay, just look at this—when your name is searched, this is what comes up. Remember who you are, what you&apos;re capable of, and where you&apos;re going. You&apos;re going to become a CEO. Don&apos;t let anyone or anything make you forget that.

            </div>


            <div className="flex flex-col items-center">
                <Image 
                src={"/1.jpeg"}
                alt="A visual reminder to stay positive and motivated"
                width={300}
                height={300}
                />
            </div>


        </div>


        <div className="flex flex-col items-center gap-[3vw]">

            <div>
                    Just think  if this become real  
            </div>

            <div>
                <Image 
                    src={"/100.png"}
                    alt="A visual reminder to stay positive and motivated"
                    width={300}
                    height={300}
                />
            </div>

            <div className="w-full h-full border-2 border-black p-[2vw] rounded-2xl">
                I know it will become real one day. Just imagine how you&apos;ll feel when that day comes and how everything around you will change. All the struggles, the doubts, the moments when people made you feel bad, and the way they treated you will all be answered by what you achieve. You won&apos;t need to explain yourself to anyone—your success will speak for you.
            </div>

            <div className="w-full h-full border-2 border-black p-[2vw] rounded-2xl">
                I will be the happiest seeing this become real. Your success matters to me just as much as I want to see myself become successful. I genuinely want to see you achieve everything you&apos;ve dreamed of, because seeing you grow, succeed, and become the person you always wanted to be would make me incredibly happy.

            </div>

            <Button className={'hover:cursor-pointer'} onClick={navigation}>next</Button>


        </div>







    </div>
}