# GIT Internals Part Two
Lets learn more GIT Handy commands which was helful to us... 

### GIT Stash 
The git **stash** command is very handy when we need to switch between branches but have uncommitted code. In such cases, Git gives a warning to either commit or discard the changes. Instead of doing that, we can use the **git stash** command, which temporarily saves our changes in a safe area (stash), so we can come back to them later.

`git stash` : ***This command saves all your uncommitted changes in a temporary stash without committing them. It is useful when you want to switch between branches without losing your work.***

`git stash list` : ***This command shows the list of all stashed changes that were saved temporarily.***

`git stash apply` : ***This command reapplies the most recent stashed changes (or a specific stash) to your current working directory.***

`git stash show` : ***This command shows a summary of the changes in the most recent stash.***

`git stash show stash@{index}` : ***Use this command to see the changes in a specific stash by providing its index number.*** 

<!--! Starting from untrack changes from tomorrow -->