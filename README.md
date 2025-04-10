To reproduce this issue, first clone this repo and run `npm install`.

What I did:

1. Run `npm run dev`
2. Visit `http://localhost:3000`
3. Observe the console (not the browser console), see `[ './parent/file.txt' ]` in the logs.
4. Terminate the process, then run `npm run dev-turbo`
5. Visit `http://localhost:3000`

What happened:

I saw `[ './file.txt' ]` in the logs.

What I expected:

See `[ './parent/file.txt' ]` in the logs, just like with the Webpack build.
