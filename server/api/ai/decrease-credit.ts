import { createSSRClient } from "@/libs/supabase/server";
import { type H3Event, type EventHandlerRequest } from "h3";

export const decreaseCredit: (event: H3Event<EventHandlerRequest>) => any = async (event) => {
    const supabase = createSSRClient(event);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    // TODO: getting `Could not find the function public.add_credits(x) in the schema cache` error
    let { error } = await supabase
        .rpc('add_credits', { x: -1, user_id: session?.user.id })

    if (error) console.error(error)
    console.log("1 credit decreased from user: ", session?.user.id)
};