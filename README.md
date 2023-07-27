<div align="center">

![Dev Gallery Screenshot](/public/devgallerybanner.png)
[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)](https://github.com/nikohoffren/devgallery.io/pulls)
[![PR:s Welcome](https://img.shields.io/badge/PR:s-Welcome-purple.svg)](https://github.com/nikohoffren/devgallery.io/pulls)
[![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-purple.svg)](https://github.com/nikohoffren/devgallery.io/pulls)
![GitHub repo size](https://img.shields.io/github/repo-size/nikohoffren/devgallery.io)

devgallery.io serves as a platform where talented developers can spotlight their projects. It allows developers to not only feature their works but also create personal profiles for added visibility.

</div>

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Local Development](#local-development)
-   [Contributing](#contributing)
-   [Questions](#questions)
-   [License](#license)

## Features

-   Browse various development projects
-   Add your own project
-   Create personal profiles

## Tech Stack

-   Next.js
-   TypeScript
-   Tailwind CSS
-   MongoDB Atlas - For user/product data
-   AWS S3 - For images

## Local Development

Follow these steps to run the application in your local environment:

1. Clone this repository.

    ```bash
    git clone https://github.com/yourusername/devgallery.io.git
    ```

2. Install the project dependencies.

    ```bash
    cd devgallery.io
    npm i
    ```

3. Set up your environment variables. You will need to create a MongoDB Atlas cluster and an AWS S3 bucket for your local development environment.

    First, make a copy of the `.env.local-example` file and rename it to `.env.local`.

    ```bash
    cp .env.local-example .env.local
    ```

    You will need to replace the placeholder values in this file with your actual credentials.

    - For [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), you will need to replace `MONGODB_URI` with your MongoDB connection string. You can get this from the MongoDB Atlas dashboard.

    - For [AWS S3](https://aws.amazon.com/s3/), you will need to replace `AWS_BUCKET_NAME`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION` with your actual bucket name and AWS S3 credentials. You can get these from the AWS Management Console.

4. Run the development server.
    ```bash
    npm run dev
    ```

## Contributing

Contributions to Dev Gallery are always welcome, whether it be improvements to the documentation, new features, bug fixes, or even feedback on the project.

1. Fork the project.
2. Create your feature branch:
<br>`git switch -c my-new-feature`
3. Add your changes:
<br>`git add files-that-you-changed`
4. Commit your changes:
<br>`git commit -m 'Add some feature'`
5. Push to the branch:
<br>`git push -u origin my-new-feature`
6. Submit a pull request.

We kindly request that you express your interest in working on a particular issue by leaving a message on the respective issue thread. This will allow us to assign the issue to you directly, thereby preventing multiple individuals from simultaneously working on the same problem.

If you have some small bug, feature, or fix to make, that is not currently on Issues, feel free to submit a pull request.

For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

Also, please read our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## Questions

If you have any questions about the repo, open an issue or contact me directly at niko.hoffren@gmail.com.

## License

This project is licensed under the MIT License.
