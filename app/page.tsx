'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {

   const router = useRouter();

  const navigation = () => {
    router.push('/message/first')
  }
  return <div className="flex min-h-screen items-center justify-center bg-red-200 font-sans flex-col gap-[2vh]" id="font">

    <div className="text-xl flex flex-col justify-center items-center">
      <span>i saw your message</span> <span>&quot;I am really not doing okay &quot;</span>
    </div>

    <div className="items-center text-center text-2xl ">
      I think you need this now
    </div>

    <Button className={'w-fit h-fit p-[1vh] hover:cursor-pointer'} onClick={navigation}>A small message from me </Button>

    <div>
      This might help you -- i guess
    </div>

  </div>
}
