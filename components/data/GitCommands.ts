export const gitCommands = [
  {
    command: "git init",
    description: "Initialize a new Git repository in the current directory.",
  },
  {
    command: "git clone <repository>",
    description: "Clone a repository into a new directory.",
  },
  {
    command: "git add <file>",
    description: "Add file(s) to the staging area.",
  },
  {
    command: 'git commit -m "<message>"',
    description: "Commit changes with a specific message.",
  },
  {
    command: "git push <remote> <branch>",
    description: "Push changes to a remote repository.",
  },
  {
    command: "git pull <remote> <branch>",
    description:
      "Fetch from and integrate with another repository or a local branch.",
  },
  { command: "git status", description: "Show the working tree status." },
  { command: "git log", description: "Show the commit logs." },
  {
    command: "git branch",
    description: "List, create, or delete branches.",
  },
  {
    command: "git checkout <branch>",
    description: "Switch branches or restore working tree files.",
  },
  {
    command: "git switch <branch>",
    description: "Switch to another branch, creating it if necessary.",
  },
  {
    command: "git merge <branch>",
    description: "Merge changes from one branch into another.",
  },
  {
    command: "git rebase <branch>",
    description: "Reapply commits on top of another base tip.",
  },
  {
    command: "git reset <file>",
    description:
      "Reset current HEAD to the specified state, optionally affecting staging area and working directory.",
  },
  {
    command: "git fetch <remote>",
    description: "Download objects and refs from another repository.",
  },
  {
    command: "git remote add <name> <url>",
    description: "Add a remote named <name> for the repository at <url>.",
  },
  {
    command: "git stash",
    description: "Stash the changes in a dirty working directory away.",
  },
  {
    command: "git tag",
    description: "Create, list, delete or verify a tag object signed with GPG.",
  },
  {
    command: "git revert <commit>",
    description: "Revert some existing commits.",
  },
  {
    command: "git diff",
    description: "Show changes between commits, commit and working tree, etc.",
  },
];
