# GIT Part One 

## What is Git ?
**Git is a distributed version control system that tracks the changes made to files in our computer. It creates different versions of those files, allowing us to manage and revert changes when needed.**

**In a distributed version control system like Git, every developer has their own complete copy of the project, including its full history. Developers can work independently on their copies and later upload (or push) their changes to a common server, like GitHub, to share with the team.** 

## What is Github ? 
**GitHub is an online platform that provides repositories (like folders) to store our project files. These files can be tracked using Git, and GitHub helps in sharing and collaborating on code with others.**

## Let see the commands of Git 
1. `git --version`: ***This command shows the installed version of Git on your system.***
2. `git config --list` : ***This command displays a list of all the Git configuration settings, including the username and email configured in Git.***
3. `git config config --global user.name "<user_name>"` : ***This command setup the globally configuration of git username.***
4. `git config config --global user.gmail "<user_gmail>"`: ***This command sets the Git email address globally, which is used to identify the author of commits.***
5. `git init` : ***This command initializes a new Git repository in the current folder. It tells Git to start tracking files and folders inside that directory.***

## Lifecycle of Git
 Here Git version controling works in three main phases:
 1. **Working Directory**
 2. **Staging Area**
 3. **Repository (Committed Changes)**

### 1. Working Directory
The working directory (or working area) is where we make changes to our project files — editing, creating, or deleting files.

### 2. Staging Area 
The staging area is like a preparation zone. Here, we mark the files that we want to commit using the `git add` command.

`git add .` : ***Adds all files and folders in the current directory to the staging area. The dot (.) means "everything here". Adds a specific file or folder to the staging area `git add <folder_name>`***.

### 3. Repository ( Commit the Changes)
After staging, we commit the changes. This means Git takes a snapshot of all the staged files and saves them as a new version (commit) in the Git history.
We do commit the code with the help of command
`git commit -m "Your commit message here"`: ***This command commits the staged changes and attaches a message explaining what was changed.***

### Now we want to revert back from staging state to working state 
If we want to revert back from staging state to working stage we have one command which was :
`git rm --cached <file>`: **command is used to unstage a file (remove it from staging area), without deleting it from your computer.** 

### What we have to do when we have to check the status of lifecycle of our git ?
To check the status of our Git lifecycle, we use the `git status` command. It helps us see which files are in the working directory (modified), which ones are staged (ready to be committed), and which files have already been committed (a snapshot or version has been created).

`git status` : ***This command shows the current status of your files in the Git project.***

### If we want to check all the commits by the User or in collabration 
If we want to check all the commits done by user or multiple user than we used **log command**.

`git log` : ***This command list down all the commits done by user or multiple user in ur git folder whenever we work on collabration than this command become very handy to check which git user do commits that feature.*** 

### Viewing Commit History in Git
If we want to check all the commits made by a user or by multiple users in a collaborative project, we use the **git log command**.
`git log` : ***This command lists all the commits in the current Git repository, including the author name, email, commit message, and timestamp.***
 **If we want to come out from git log prompt press q** 

### When we create some mess in our working directory or staging changes than what we do ? 
When we make some changes in our project that are incorrect or messy, and we want to undo or remove those changes, we can use the **git restore comman**d to revert the file back to its last committed state in working directory. 

`git restore <filename>`: ***This command removes local changes made to the file in the working directory and restores it back to the last committed version. It is used to undo uncommitted changes before staging or committing.*** 

#### The important flag associated with restore command 
`git restore --stagged <filename>` : **This command is used to unstage a file(remove it from the staging area) without losing the changes into file.** 

#### Remove the file from our git folder 
If we want to remove files or folders from our Git repository, we use the **git rm command**, where rm stands for "remove".

`git rm <file_name> ` : ***This command deletes the specified file or folder from both the Git repository and the working directory.*** 

### To find the difference between two commits, we use the git diff command.
The word "diff" stands for "difference", and this command helps us compare the changes made between two specific commits.

`git diff <commit-one> <commit-two>` : ***This shows the line-by-line difference between the two commits.*** 


















