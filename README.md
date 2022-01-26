# Next - TypeScript - Firebase - MUI Boilerplate

---

## IMPORTANT

This boilerplate was bootstrapped by `yarn create next-app`

I made this simple boilerplate to use in my regular **hobby** projects.
The one going to use this code must be aware of that there might be version problems or vulnerabilities.

Even so, I will try my best to update by time and solve the issues.

---

## Packages

This boilerplate uses:

- Next @12.0.8
- TypeScript @4.5.5
- Firebase @9.6.4

---

## Notice

- I chose to keep `.env.local` in repository. Do not forget to edit .gitignore after configuring Firebase.

---

## Known Issues

- `node-fetch` has a denial of service vulnerability. It is fetched later but Next and Firebase packages are still dependent on old versions.
