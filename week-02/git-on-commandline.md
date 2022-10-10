# Code-along: Intro to the command line & Git

## Commands prior to starting
- How to get Windows users to have Git Bash as their terminal:
  -In Webstorm Go to settings -> Terminal and under Shell Path enter `
  "C:\Program Files\Git\bin\sh.exe" --login -i`
    - More info: https://stackoverflow.com/questions/27678608/git-command-is-not-recognized-on-terminal-tool-window-in-intellij-idea

## Why should I use the command line when I could use a GUI instead?
- It's generally better supported than GUI-based tools.
- It's independent from your IDE.
- It helps you come to a better understanding of the principles of version control.
- It's much more commonly used in the industry and thus is more likely to get you a job.
- It's much more likely to be useful if you find yourself in a sticky merge/rebase situation that you can't seem to fix.

## Git
https://xkcd.com/1597/

### Creating or copying a repository
- `git init` - Initialize a new git repo.  You can do this where there's already files, or where you want to create something shiny and new.
- `git clone origin my-github-url` - Copy an existing github repository down to your computer.
- `git status` - Tells you what's in your repo that's different from your last commit.

### Adding, Committing, and Pushing your work
- Add or edit files using your favorite text editor or IDE
    - vim - command line text editor that doesn't have mouse commands
        - some people swear by vim as the ONLY way to edit text
        - benefit – is already installed on almost every server.
            - When you can't use a graphical editor and don't have time to pull down a copy locally, vim is always there for you.
        - Super cool interactive tutorial: https://www.openvim.com/
        - Cheat sheet: http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
        - More on the history of vim and why it has such a funky UI: https://begriffs.com/posts/2019-07-19-history-use-vim.html
        - non-intuitive command structure!
        - git will use this by default sometimes if you forget to add a commit message, or if it is merging changes and wants you to approve them
        - How to exit vim when you didn't want to get there in the first place
            - `Esc` to make sure you are not in editing mode
            - `:q!` to quit without makeing any changes
- `git add my-file.txt` or `git add my-folder` - Add a file to be staged. Use the -a flag to make sure that you also get file deletions.
- `git commit -m "Adding my feature"` - Create a new commit with all your currently staged changes.
- `git log` - List past commits.

### Working with remotes
- Create a new repo on github without README or LICENSE files: https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line
- `git remote add origin git@github.com:User/UserRepo.git` - Take your existing local repo and push it up to the server.
- `git push` - Send your changes to the remote repo
- `git pull` - Get others' changes from the remote repo
    - This is shorthand for two other commands: `git fetch` && `git merge`
    - `git fetch` downloads the changes, but does not integrate them into the local repository.
    - `git merge` creates a new "merge commit" that ties the local and remote changes together.
- `git clone` - Go get a repository that already exists and pull it to your local machine.

More on Git: http://ddc-web-curriculum.cnm.edu/intro-to-git/
More on Linux: https://dev.to/rudrakshi99/linux-basics-2onj