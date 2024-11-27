# My Portfolio Website React Frontend

This project is the frontend portion of a public-facing website that I developed as a type of online resume/portfolio

[See Project Live](https://christophertalavera.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [How to Run Locally](#how-to-run-locally)
- [How to Build for Deployment](#how-to-build-for-deployment)

## Overview

This is a website that acts as an online resume/portfolio for me as a professional software developer, developed using React, TypeScript, and Vite.

On the site you can find my current resume, a small blurb about me, my key skills, professional experience, projects that I've contributed to or developed myself, and a contact section with a form for anyone who would like to get in touch with me via the webpage itself.

### Prerequisites

```bash
# 1. Install Node.js
https://nodejs.org/

# 2. Clone backend repo and start it locally
https://github.com/ctalave1/my-portfolio-website-api
```

## Setup Instructions

1. Clone the repository to your local machine

2. Install dependencies

```bash
npm install
```

3. Follow the instructions on the repository page for the backend project and start up the Express API locally

3. Create an `.env.development` file in the root of the directory with these values filled in:
```bash
VITE_API_BASE_URL=#URL_TO_LOCAL_INSTANCE_OF_EXPRESS_API

# For example: http://localhost:8000
```

### How to Run Locally

```bash
npm run dev
```

### How to Build for Deployment

```bash
npm run build
```