"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.ACTIVE;
  const isSpeaking = true;

  const messages = [
    "What's your name?",
    "My name is John Doe. Nice to meet you!",
  ];
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className="flex sm:flex-row flex-col gap-10 items-center justify-between w-full">
        {/* AI Interviewer Card */}
        <div className="card-interview">
          <div className="card-interview-avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3 className="text-center text-primary-100 mt-5">AI Interviewer</h3>
        </div>

        {/* User Profile Card */}
        <div className="card-border flex-1 sm:basis-1/2 w-full h-[400px] max-md:hidden">
          <div className="flex-center flex-col gap-2 p-7 card">
            <Image
              src="/profile.svg"
              alt="profile-image"
              width={500}
              height={500}
              className="rounded-full object-cover size-[120px]"
            />
            <h3 className="text-center text-primary-100 mt-5">{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="card-border w-full">
          <div className="card min-h-12 px-5 py-3 flex-center">
            <p
              key={lastMessage}
              className={cn(
                "interview-text transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call flex-center overflow-visible">
            <span
              className={cn(
                "absolute bg-success-100 h-[85%] w-[65%] animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect">End</button>
        )}
      </div>
    </>
  );
};

export default Agent;