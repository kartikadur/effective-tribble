# effective-tribble

- used typescript types instead of unit tests to simulate API request and response contracts
- used Material UI for css since there was no preferences on visual quality, but I did want to include some responsiveness
- I track the entire React Profile data per comment but only show the start and commit times
- Performance was an issue from repeated renders so I started replacing data based on ids to prevent multiple values for the same comment.

- Normally I have more data on the end goal and requirements of a feature. In this case since there wasn't much to go on I've tried to make the UI as simple as possible while tracking a bare minimum of points. I have also tried to stay away from premature optimizations since that would take unnecessarily long.

- Some of the data I'm collecting I've worked with for the first time, though it is something that I had intended to read up on since I might need to include that in my current work.

## If I had more time

- I'd track the mount, updated, and subsequent refreshes for each comment.
- I'd stagger the load so the response isnt janky.
- I'd use the redux persistence module to retain data, between refreshes, but if this were a full stack project the data would be sent to the backend to be stored in a database.
- Create a Graph UI for the data, similar to how data is shown in the dev tools. The one I'm using currently is very basic.
