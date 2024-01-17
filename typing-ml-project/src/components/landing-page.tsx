/**
 * Initial static design and icons assisted by v0 by Vercel. Adapted by myself to suit the project.
 * @see https://v0.dev/t/pY5g2fO3bZc
 */
import { Button } from "@/components/ui/button"
import TypingTest from "./typing-test"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#191724] text-[#e0def4] flex flex-col items-center justify-center p-4">
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img alt="Logo" className="h-16 invert" src="/Typing-Project-Logo.svg" />
          <h1 className="text-[#eb6f92] text-xl cursor-pointer hover:scale-105 ">TypingTutor</h1>
          <div className="flex space-x-2 rounded-xl bg-[#282538]">
            <Button className="text-xs hover:bg-[#3c394d] hover:text-[#e0def4] text-[#eb6f92]" variant="ghost">
              <PencilIcon className="text-[#e0def4] h-4 w-4" />
            </Button>
            <Button className="text-xs hover:bg-[#3c394d] hover:text-[#e0def4] text-[#eb6f92]" variant="ghost">
              <CalculatorIcon className="text-[#e0def4] h-4 w-4" />
            </Button>
            <Button className="text-xs hover:bg-[#3c394d] hover:text-[#e0def4] text-[#eb6f92]" variant="ghost">
              <ClockIcon className="text-[#e0def4] h-4 w-4" />
            </Button>
            <Button className="text-xs hover:bg-[#3c394d] hover:text-[#e0def4] text-[#eb6f92]" variant="ghost">
              <WholeWordIcon className="text-[#e0def4] h-4 w-4" />
            </Button>
            <Button className="text-xs hover:bg-[#3c394d] hover:text-[#e0def4] text-[#eb6f92]" variant="ghost">
              <QuoteIcon className="text-[#e0def4] h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center rounded-xl bg-[#282538] text-xs hover:bg-[#3c394d] hover:text-[#e0def4] text-[#eb6f92] space-x-4">
          <Button variant="ghost">
            <SearchIcon className="text-[#e0def4] h-5 w-5" />
          </Button>
          <Button variant="ghost">
            <SignalIcon className="text-[#e0def4] h-5 w-5" />
          </Button>
          <Button variant="ghost">
            <HelpCircleIcon className="text-[#e0def4] h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl text-[#eb6f92] cursor-pointer hover:scale-105 transition-all duration-300 font-bold">TypingTutor</h1>
        <p className="text-3xl cursor-default text-[#e0def4]">A machine learning typing tutor</p>
        <div className="text-5xl font-mono space-y-4">
          <TypingTest />
        </div>
      </main>
      <footer className="absolute bottom-4">
        <div className="flex space-x-2 text-sm">
          <Button className="text-[#aa9e9f] hover:bg-[#282538] hover:text-[#e0def4]" variant="ghost">
            {/* Implement next */}
            tab + enter - restart test
          </Button>
          <Button className="text-[#aa9e9f] hover:bg-[#282538] hover:text-[#e0def4]" variant="ghost">
            {/* Implement next */}
            esc or cmd + shift + p - command line
          </Button>
        </div>
      </footer>
    </div>
  )
}

function CalculatorIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  )
}


function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function HelpCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function QuoteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SignalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function WholeWordIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7" cy="12" r="3" />
      <path d="M10 9v6" />
      <circle cx="17" cy="12" r="3" />
      <path d="M14 7v8" />
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
}
