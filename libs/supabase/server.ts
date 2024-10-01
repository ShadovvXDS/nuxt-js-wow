import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type H3Event, type EventHandlerRequest } from "h3";

export function createSSRClient(event: H3Event<EventHandlerRequest>) {
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          const cookies = parseCookies(event);
          const cookie = cookies['sb-access-token']
          console.log('getting name', name)
          return cookie;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            console.log('setting name', name)
            setCookie(event, name, value, options);
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            setCookie(event, name, "", options);
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
