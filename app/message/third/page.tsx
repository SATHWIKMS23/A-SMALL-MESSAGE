'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';


export default function Message ()  {

     const router = useRouter();

  const navigation = () => {
    router.push('/message/forth')
  }

    return <div className="flex flex-col w-full min-h-screen items-center h-full bg-red-200 p-[5vw] gap-[5vh]" id="font">
        
        <div className="text-2xl items-center ">
            And not only those see things which you are good at 
        </div>

        <div className="flex flex-col items-center gap-[1vw]">

            <div className="grid grid-cols-2 gap-6 w-full max-w-[360px]">
                <Image 
                    src={"/3.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <Image 
                    src={"/4.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <Image 
                    src={"/6.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <Image 
                    src={"/7.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            <div>
                Honestly these things are too beautiful
            </div>

        </div>

        <div>

            <div>
                And this one : 
            </div>

            <audio
                controls
                preload="metadata"
                className="min-w-full"
                aria-label="Sowndarya voice message"
            >
                <source src="/Sowndarya%20voice.aac" type="audio/aac" />
                Your browser does not support audio playback.
            </audio>

            <div>
                I dont have any words on this ... You sing soo well , you should not feel bad by comparing yourself with  some autotune people ..

            </div>

        </div>

        <div className="flex flex-col gap-[2vh]">
            <div>
                And most important thing for me look at this you made , how nice it is 
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-[2vh]">
                <Image 
                    src={"/101.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <Image 
                    src={"/102.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <Image 
                    src={"/103.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <Image 
                    src={"/104.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={150}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>
        </div>

        <div className="font-bold flex flex-col items-center gap-[3vw]">
            <span>
                Look You are good at so many things dont feel bad , get it to self-doubt , compare youself , feeling bad about yourself  because of some people  -- Okay 
            </span> 
            <span>
                YOU ARE THE BEST 
            </span>
            <span>
                i am saying this as your best-friend 
            </span>
        </div>

        <div className="text-justify">
            It&apos;s not that you should never feel sad. It&apos;s completely okay to feel hurt, but staying sad over things or people you cannot change will only hurt you more. Instead of constantly looking at the people who don&apos;t value you, look at the people who genuinely care about you and appreciate having you in their lives. You&apos;ll feel better, feel valued, and most importantly, remember your own worth.

        </div>

       <Button className={'hover:cursor-pointer'} onClick={navigation}>next</Button>

    </div>



}