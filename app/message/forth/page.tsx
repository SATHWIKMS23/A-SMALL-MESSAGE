'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';


export default function Message ()  {

     const router = useRouter();

  const navigation = () => {
    router.push('/message/fifth')
  }

    return <div className="flex flex-col w-full min-h-screen items-center h-full bg-red-200 p-[5vw] gap-[5vh]" id="font">

        <div>
            If you feel nobody is there for me , eveybody does bad with me . May be you have forgotten my existance
        </div>


        <div className="flex flex-col gap-[2vw] items-center">

            <div>
              If you ever feel alone, just look at these things and remember one thing — &quot;I AM STILL HERE.&quot; No matter how difficult things get or how alone you may feel, I&apos;ll always be here for you, supporting you and standing by you.
            </div>

            <div className="flex items-center">
                <Image 
                    src={"/105.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={300}
                    height={300}
                />
            </div>

        </div>

        <div>
            <div>
                see this its also true from my side
            </div>
            <div>
                <Image 
                    src={"/106.jpg"}
                    alt="A visual reminder to stay positive and motivated"
                    width={300}
                    height={300}
                />
            </div>
        </div>


        <div>
            Look dont think any bad things about you . You deserve good . and  you are GOOD . 
        </div>

        <div>
            I may not be the that good for you , but you are the best people I have—people I can proudly call &quot;my people&quot; 
        </div>

        <div>
            And its only you i have requested this much .
        </div>

        <div>
            Even though I may be the last person you ever think of when you need someone, just come to me whenever you feel like you need to talk. I’ll be here, I’ll listen to everything
        </div>









        <Button className={'hover:cursor-pointer'} onClick={navigation}>next</Button>

    </div>
}