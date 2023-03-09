# Git, GitHub, & Vim
GitHub CLI: [cli.github.com](https://cli.github.com/manual/ "Manual")

Git Reference: [git-scm.com](https://git-scm.com/docs "Documentation")

## Preface
The commands herein assume SSH is used. Create SSH keys ([GitHub directions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)). Copy SSH public key by entering `% pbcopy < ~/.ssh/id_rsa.pub` and then add to GitHub and BitBucket via web apps' settings pages. Install GitHub CLI with `% brew install gh` and then authenticate account via `% gh auth login`.

## Git

### Create a Local Git Repository
To create a new git repository (with a branch named *main*), run:
 ```
 % git init
 ```
### .gitignore
To stop Git from staging certain files (when running `% git add .`) or showing files as untracked (when running `% git status`), create a file named `.gitignore` in the root directory, and add to it accordingly as follows:
```
# Enter a file or directy name to ignore it in the entire working tree
Foo.md

# Use glob patterns to ignore sets of files
*.txt

# Start a pattern with a forward slash to ignore files in the current directory
/hello.py

# End a pattern with a forward slash to ignore files in the specified directory
build/

# Negate a pattern using shebang to allow an exception
!src/foo.txt
```
### Add New And Modified Files From Working Directory To Staging Area
Newly created files (never before staged or tracked) must be added to the staging area before they can be commited. To stage a specific file or directory, run:
```
% git add <filename>
```
or, to stage all files (including hidden files) in the working directory, run:
```
% git add .
```
### Commit Staged Files
A snapshot of the repository can be taken by running `% git commit`, which requires a commit message; Vim will be opened to write the message. Alternatively, to write the message inline, run:
```
% git commit -m '<message>'
```
Modified files can be added to the staging area and commited simultaneously by running the following command:
```
% git commit -a
```
Flags can be chained to do multiple things at once like add modified files, write a message, and commit all at once:
```
% git commit -am <message> 
```
### Remove a File From Repository
To remove a file from the repository *and* the working directory (i.e., delete the file locally and stop tracking it in the repository), run:
```
% git rm <filename>
```
This is equivalent to `% rm <filename> && git add <filename>` (this seems counterintuitive but running `% git add <filename>` does indeed delete *filename* from a repository if it has already been deleted locally).

If the file has been modified or has been staged, pass the `-f` flag:
```
% git rm -f <filename>
```

To keep the file locally but stop tracking it in the repository, add it to `.gitignore`, and then remove it by running:
```
% git rm --cached <filename>
```
### Fixing Merge Conflicts
If there is a merge conflict when pulling, run `git pull --no-rebase`. This will open the document with the conflict and show both the current changes (changes made locally) and the changes incoming from the remote. Use VSCode's Merge Editor. If possible, accept the comibination of changes, and then commit to complete the merge.

### Working With Branches
To create a new branch, replace `branch` with the name of the new branch and run:
```
% git checkout -b <branch>
```
To see all branches (including the current branch, denoted with an askterisk) run `% git branch`.

To switch to another branch, run:
```
% git checkout <branchSwitchingTo>
```
To merge a branch into the main branch, `checkout` the main branch, and then run:
```
% git merge <branchToBeMergedIntoMain>
```
If there are merge conflicts, follow the steps above for [fixing merge conflicts](#Fixing-Merge-Conflicts).

Finally, delete the branch by running `% git branch -d <branch>`.
### Remotes
To my laptop, GitHub is remote, and my `.git` directory is local. To the remote repository (GitHub) my laptop is a remote respository. The two can be connected by writing `git remote add <URL-of-remote-github-repository>`. The URL can be access via the GitHub repository's webpage.

## GitHub CLI `gh`

### Open GitHub Repository in Web Browser
Enter from the repository's working directory:
```
% gh browse
```

### Rename a GitHub Repository
To rename the repository in the current workspace, type:
```
% gh repo rename <desired-new-name>
```
### Cloning My Own Git Repository
From the desired workspace-to-be, run: 
```
% gh repo clone <repository>
```
### Create A New GitHub Repository and Clone it Locally
If a local repository does not already exist, run: 
```
% gh repo create
```
Press enter once to select **Create a new repository on GitHub from scratch**, and then follow the remaining prompts. It is necessary to select **Yes** when asked to create a `.gitignore` file (this is likely a bug) as the local and remote branches will not be merged if **No** is selected. Click **Yes** when asked to clone the repository locally. *This will create a directory and place the repo inside of it*.

### Create a GitHub Repository From a Local Git Repository
If a local git repo already exists (i.e., a `.git` directory), create a GitHub repository and push the local repository to GitHub by typing `% gh repo create`, and then select **Push and existing local repository to GitHub**. Be sure to choose yes when asked to add the remote and push the commits to the current branch. Alternatively, type `gh repo create <desired_repo_name> --private --source=. --remote=upstream --push -g <Language>`, which will create a GitHub repository with the selected name, make it private, create a remote, push the commits, and create a `.gitignore` file for the given programming language.

### Deleting a GitHub Repo (Keep Local Repo)
To delete repository from GitHub.com, run (from the working directory of the local repository):
```
% gh repo delete --confirm
```
