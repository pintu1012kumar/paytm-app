- Clone the repo

```jsx
git clone https://github.com/pintu1012kumar/paytm-app.git
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)

--
![Screenshot 2025-03-24 120653](https://github.com/user-attachments/assets/96c5a1b1-a454-4c5d-aca8-2593e1dbd0e3)
![Screenshot 2025-03-24 120304](https://github.com/user-attachments/assets/33aca26f-fa52-4005-83a7-c51b4f136493)
![Screenshot 2025-03-24 120359](https://github.com/user-attachments/assets/72c8a847-0872-4dd1-b4c9-bdfeebc1f985)
![Screenshot 2025-03-24 120423](https://github.com/user-attachments/assets/9ea2d1a5-6018-45dc-9438-6d1364c0aadf)

![Screenshot 2025-03-24 120842](https://github.com/user-attachments/assets/4cd69b72-1760-4de8-b45b-45676a73e98d)
![Screenshot 2025-03-24 120903](https://github.com/user-attachments/assets/eff33737-aaa7-4926-94c8-bada735d6394)
![Screenshot 2025-03-24 120936](https://github.com/user-attachments/assets/5d51fc7f-bc97-4ccd-9191-9a3eed5d7e54)
