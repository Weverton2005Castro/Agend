import { Clerk } from "@clerk/clerk-js";
import { clerkPubKey } from "./App";

export const Clerk = new Clerk(clerkPubKey);
