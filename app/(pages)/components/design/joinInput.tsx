"use client";
import { useState, useEffect, JSX, SVGProps, SetStateAction } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import ErrorMessage from "./errorMessage";

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const JoinInput = () => {
  const [state, setState] = useState("button");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [previousEmail, setPreviousEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [joining, setJoining] = useState(false);
  const [checking, setChecking] = useState(false);

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  const handleConfetti = () => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  useEffect(() => {
    const checkIfJoined = async () => {
      if (!isValidEmail(email)) return;

      setLoading(true);
      setChecking(true);

      setTimeout(() => {
        const alreadyJoined = false;

        if (alreadyJoined) {
          setJoined(true);
          setPreviousEmail(email);
          setMessage("You have already joined this waitlist.");
        }

        setLoading(false);
        setChecking(false);
      }, 300);
    };

    checkIfJoined();
  }, [email]);

  const joinWaitlist = async () => {
    setLoading(true);
    setJoining(true);

    setTimeout(() => {
      const success = true;

      if (success) {
        setJoined(true);
        setPreviousEmail(email);
        handleConfetti();
        setMessage("Successfully joined the waitlist!");
      } else {
        setMessage("Error joining waitlist. Please try again.");
      }

      setLoading(false);
      setJoining(false);
    }, 300);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError("");

    // If the email is different from the one used to join, reset the joined state
    if (joined && newEmail !== previousEmail) {
      setJoined(false);
      setMessage("");
    }
  };

  const handleEmailNext = () => {
    if (isValidEmail(email)) {
      setState("confirm");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (state === "name" && name) {
        setState("email");
      } else if (state === "email" && email) {
        handleEmailNext();
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-black font-bdog">
      {state === "button" && (
        <motion.button
          onClick={() => setState("name")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-2 hover:ring-4 hover:ring-neutral-900/5 hover:shadow-md hover:rounded-md transition-all text-white bg-neutral-900 rounded-md shadow-black/5 hover:bg-zinc-800"
        >
          Join Waitlist
        </motion.button>
      )}

      {state === "name" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center mt-4 space-y-2"
          onKeyPress={handleKeyPress}
        >
          <div className="flex justify-between gap-3 items-center">
            <motion.button
              onClick={() => setState("button")}
              className="p-2 bg-neutral-900 rounded-md self-end"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeftIcon />
            </motion.button>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2"
              >
                Name
              </label>
              {/* <Label htmlFor="name" className="mr-2">
                Name
              </Label> */}
              <input
                type="text"
                value={name}
                id="name"
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setName(e.target.value)
                }
                className="custom flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 custom"
              />
            </div>

            {name && (
              <motion.button
                onClick={() => setState("email")}
                className="p-2 bg-neutral-900 rounded-md self-end"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRightIcon />
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

      {state === "email" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center mt-4 space-y-2"
          onKeyPress={handleKeyPress}
        >
          <div className="flex justify-between gap-3 items-center">
            <motion.button
              onClick={() => setState("name")}
              className="p-2 bg-neutral-900 rounded-md self-end"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeftIcon />
            </motion.button>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="custom flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 custom"
              />
            </div>
            {email && (
              <motion.button
                onClick={handleEmailNext}
                className="p-2 bg-neutral-900 rounded-md self-end"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowRightIcon />
              </motion.button>
            )}
          </div>
          {emailError && (
            <ErrorMessage message={emailError} className="w-auto py-1" />
          )}
        </motion.div>
      )}

      {state === "confirm" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center mt-4 space-y-2 gap-3"
        >
          <div className="flex gap-4 justify-between items-center p-4 rounded-md bg-transparent border text-muted-foreground shadow-sm ring-4 ring-gray-900/5 font-light font-bdog leading-none tracking-tight">
            <div className="flex flex-col gap-2 text-neutral-900">
              <p>Name:</p>
              <p>Email:</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="capitalize">{name}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <motion.button
              onClick={() => setState("email")}
              className="p-2 bg-neutral-900 rounded-md"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeftIcon />
            </motion.button>

            <motion.button
              onClick={joinWaitlist}
              disabled={joined || loading}
              className="p-2 bg-neutral-900 rounded-md flex justify-center items-center gap-2 transition-all hover:bg-zinc-800 disabled:text-neutral-200 text-white disabled:pointer-events-none disabled:cursor-not-allowed"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {loading && <LoadingIcon />}{" "}
              {joined
                ? "Joined"
                : joining
                ? "Joining..."
                : checking
                ? "Checking..."
                : "Join Waitlist"}
            </motion.button>
          </div>
          {/* {message && <p>{message}</p>} */}
        </motion.div>
      )}
    </div>
  );
};

const ArrowLeftIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LoadingIcon = () => (
  <div className="w-4 h-4 border-2 border-white rounded-full animate-spin relative ml-2">
    <div className="w-3 h-3 absolute bg-neutral-900 transition-colors group-hover:bg-zinc-800 z-10 top-1 left-1"></div>
  </div>
);

export default JoinInput;
