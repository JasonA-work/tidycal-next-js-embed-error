# Bug Description

When I first reported this issue, I was using NextJS 11 and 12. Since, NextJS 13 came out, I've upgraded my sites to it (but haven't used TidyCal's embed). The bugs I'm reporting here will be slightly different from the ones when I first reported.

## Localhost

On the localhost, when we refresh the page (command + R), it will throw a hydration error. This can be quite a blocking factor when developing. When hosted on Vercel, the hydration error doesn't show up.

## Script Placement

The iframe does not load at all when putting the script anywhere other than "\_document". This is a problem because some pages may not utilize the calendar component, it doesn't make sense to load and run this script on every page regardless of whether the component will be used or not.

## Changing pages

When you go to another page and then come back to the page where the Calendar is. The iframe will fail to load

## Next/Script Strategy

Any strategy other than "afterInteractive" doesn't work at all. The one that will really help with website performance is "lazyOnLoad".
Here's a reference to [next/script docs](https://nextjs.org/docs/api-reference/next/script)
