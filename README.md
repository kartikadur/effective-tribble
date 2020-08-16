# effective-tribble

- used typescript types instead of unit tests to simulate API request and response contracts
- used Material UI for css since there was no preferences on visual quality, but I did want to include some responsiveness 
- I track the entire React Profile data per comment but only show the start and commit times
- Performance was an issue  from repeated renders so I started replacing data based on ids to prevent multiple values for the same comment.
