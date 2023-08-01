<div align="center">

![Dev Gallery Screenshot](/public/fork-commit-merge-web-banner.png)
[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)](https://github.com/nikohoffren/fork-commit-merge-web/pulls)
[![Issues](https://img.shields.io/github/issues/nikohoffren/fork-commit-merge-web.svg?style=flat)](https://github.com/nikohoffren/fork-commit-merge-web/issues)
[![PR:s Welcome](https://img.shields.io/badge/PR:s-Welcome-green.svg)](https://github.com/nikohoffren/fork-commit-merge-web/pulls)
[![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-green.svg)](https://github.com/nikohoffren/fork-commit-merge-web/pulls)
![GitHub repo size](https://img.shields.io/github/repo-size/nikohoffren/fork-commit-merge-web)

Welcome to Fork, Commit, Merge, your one-stop resource hub for mastering GitHub contributions! Whether you're a novice coder or an experienced developer, our comprehensive guides are designed to streamline your GitHub journey. We delve into everything from basic Git commands to intricate pull request processes, making collaboration seamless and efficient. Learn the ins and outs of forking, committing, and merging with our easy-to-follow tutorials and expert advice. At Fork, Commit, Merge, we're passionate about empowering you to contribute confidently and effectively to the open-source world. Let's code, collaborate, and create together!

</div>

## Table of Contents

This project is the repo of [Fork, Commit, Merge -website](https://forkcommitmerge.io).

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Local Development](#local-development)
-   [Contributing](#contributing)
-   [Questions](#questions)
-   [License](#license)
-   [List of Contributors](#list-of-contributors)

## Features

-   **Comprehensive Guides**: Easy to follow step-by-step guides for various GitHub processes, from creating a repository to managing pull requests.

-   **Command Tutorials**: Detailed tutorials on Git commands to enhance your productivity and workflow efficiency.

-   **Best Practices**: Recommendations on Git and GitHub best practices to promote high-quality code and effective collaboration.

-   **Contribution Guidelines**: Detailed guides on how to properly contribute to open-source projects, including etiquette and effective communication with project maintainers.

-   **FAQs and Troubleshooting**: A comprehensive section dedicated to frequently asked questions and common issues users face while contributing on GitHub.

-   **Community Forum**: A dedicated space for users to interact, share their experiences, ask questions, and learn from each other.

-   **Resource Library**: An extensive collection of external resources such as books, blog posts, and video tutorials on Git and GitHub.

-   **Regular Updates**: Stay up-to-date with the latest features and changes in GitHub's dynamic ecosystem with our regular update notifications.

## Tech Stack

-   React
-   Next.js
-   TypeScript
-   Tailwind CSS
-   MongoDB Atlas
-   AWS S3

## Local Development

Follow these steps to run the application in your local environment:

1. Clone this repository.

    ```bash
    git clone https://github.com/yourusername/fork-commit-merge-web.git
    ```

2. Install the project dependencies.

    ```bash
    cd fork-commit-merge-web
    npm i
    ```

3. Set up your environment variables. You will need to create a MongoDB Atlas cluster and an AWS S3 bucket for your local development environment.

    First, make a copy of the `.env.local-example` file and rename it to `.env.local`.

    ```bash
    cp .env.local-example .env.local
    ```

    You will need to replace the placeholder values in this file with your actual credentials.

    - For [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), you will need to replace `MONGODB_URI` with your MongoDB connection string. You can get this from the MongoDB Atlas dashboard. Also, remember to add `0.0.0.0/0` to the Network Access to allow connections from all IP addresses.

    - For [AWS S3](https://aws.amazon.com/s3/), you will need to replace `AWS_BUCKET_NAME`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION` with your actual bucket name and AWS S3 credentials. You can get these from the AWS Management Console. For the Permissions overview, make sure to set the access to public and turn "Block all public access" off. Add the following to the Bucket policy (replace "your-bucket-name" with your actual bucket name):

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGet",
                "Effect": "Allow",
                "Principal": "*",
                "Action": [
                    "s3:PutObject",
                    "s3:PutObjectAcl",
                    "s3:GetObject",
                    "s3:GetObjectVersion"
                ],
                "Resource": "arn:aws:s3:::your-bucket-name/*"
            }
        ]
    }
    ```

    And add the following to CORS:

    ```json
    [
        {
            "AllowedHeaders": ["*"],
            "AllowedMethods": ["GET", "POST", "PUT", "DELETE", "HEAD"],
            "AllowedOrigins": ["*"],
            "ExposeHeaders": []
        }
    ]
    ```

4. Run the development server.
    ```bash
    npm run dev
    ```

<a id="contributing"></a>

## Contributing

Contributions to fork-commit-merge-web are always welcome, whether it be improvements to the documentation, new features, bug fixes, or even feedback on the project.

**1.** Fork the project.

**2.** Add a reference to the original repository:

```bash
git remote add upstream https://github.com/nikohoffren/fork-commit-merge-web.git
```

**3.** Check the remotes for this repository:

```bash
git remote -v
```

**4.** Take a pull from the upstream repository to your main branch to keep it at par with the main project:

```bash
git pull upstream main
```

**5.** Create your feature branch:

```bash
git switch -c my-new-feature
```

**6.** Add your changes:

```bash
git add files-that-you-changed
```

**7.** Commit your changes:

```bash
git commit -m 'Add some feature'
```

**8.** Push to the branch:

```bash
git push -u origin my-new-feature
```

**9.** Submit a pull request.

We kindly request that you express your interest in working on a particular issue by leaving a message on the respective issue thread. This will allow us to assign the issue to you directly, thereby preventing multiple individuals from simultaneously working on the same problem.

If you have some small bug, feature, or fix to make, that is not currently on Issues, feel free to submit a pull request.

For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

Also, please read our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## Roadmap

The following are some of the enhancements and features planned for future releases of this project. We welcome any feedback or contributions to help make these plans a reality.

1. User Authentication: We plan to add user registration and login functionality. This will allow users to have personalized experiences and save their projects on the platform.

2. Pro Membership: We're considering a paid membership tier. Pro members would receive certain benefits, such as a special 'Pro' badge and early access to new features. More details about the cost and specific benefits will be provided at a later date.

3. Integration with GitHub API: To make project management easier, we're planning on adding the ability to pull project information directly from GitHub. This would streamline the process of adding new projects to the site.

These roadmap items are subject to change based on user feedback and development resources. If you have any suggestions or if you want to contribute to the project, please see the [Contributing](#contributing) section.

## Questions

If you have any questions about the repo, open an issue or contact us directly at niko.hoffren@gmail.com

## License

This project is licensed under the MIT License.

## List of Contributors

Massive thanks to all of the these fine individuals who contributed to this project!

<a href="https://github.com/Josepi161"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/120115165?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Luega"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/90217066?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/ducksblock"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/105146670?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/dependabot[bot]"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/49699333?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/adeelFeroz77"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73684141?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/jmorofsky"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/80358703?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
