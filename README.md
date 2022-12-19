# Søbekkseter: Upload webcamera image 📷

## Description ✏️

This project is responsible for uploading a file to Firebase Cloud Storage. The file is a webcamera image to be displayed on the Søbekkseter website.

## Developer Information 🙋🏼‍♂️

Developed by Magnus Rødseth.

## Tech Stack 🛠

- TypeScript
- Node.js
- Firebase Cloud Storage
- Docker

## Running the application ✅

Ensure you have all necessary environment variables set. See [`env.d.ts`](/src/types/env.d.ts) for a list of required environment variables.

Additionally, ensure you have Docker installed.

Lastly, ensure that the image file in the volume in [`docker-compose.yml`](/docker-compose.yml) points to your desired file. You can search for `todo` in your project to find the line in the file.

```sh
# Navigate to the project directory
cd sobekkseter-upload

# Install dependencies and run application
docker compose up
```
