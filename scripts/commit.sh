#!/bin/bash


# Check if the user is on the correct branch
current_branch=$(git branch | grep \* | cut -d ' ' -f2)
read -p "You are currently on branch $current_branch. Is this the correct branch? [y/n] " confirm
if [ "$confirm" != "y" ]
then
    echo "Please switch to the correct branch and try again."
    exit 1
fi

# Add all files and commit
git add .
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# Check if the user wants to push the changes
read -p "Do you want to push the changes to the remote repository? [y/n] " push
if [ "$push" = "y" ]
then
    git push
fi

echo "Commit complete!"
