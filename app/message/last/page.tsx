
import Image from "next/image";


export default function Message ()  {


    return <div className="flex flex-col w-full min-h-screen items-center h-full bg-red-200 p-[5vw] gap-[5vh]" id="font">
        
        <div >
            AT last i need to say you this 
        </div>

        <div className="border-2 border-black p-[1vh] rounded-2xl">
            Its okay if you think how selfish i am and not understanding you -- but i need to tell .
        </div>
        
        <div className="text-justify flex flex-col gap-[2vh]">
            <span>
                 It’s been more than a month of planning without enough action, and I don’t want us to keep procrastinating until we regret it
            </span>
            
            <span>
                I genuinely want us to start working consistently, even if it’s just small steps, before i get a job because i may not be available as i am available now , it will be difficult for us 
            </span>

            <span>
                I dont need your constant attention , or you need to come and work here for hours but we cannot be like this too . <b>Right ? </b>
            </span>

            <span>
                I want to see both of us succeed, grow, and achieve everything we’ve dreamed about together, because your success and happiness matter to me too;
            </span>

            <span className="flex items-center text-center">
                 I’m saying this out of care, not pressure you . 
            </span>

        </div>

        <div>
            <Image 
                src={"/thankyou.jpg"}
                alt="A visual reminder to stay positive and motivated"
                width={300}
                height={300}
            />

        </div>


    </div>
}