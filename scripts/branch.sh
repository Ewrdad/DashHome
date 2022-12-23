#!/bin/bash

# Check if the user provided the correct command line argument
if [ "$1" != "dev" ] && [ "$1" != "main" ]
then
    echo "Error: Please provide either 'dev' or 'main' as the command line argument."
    exit 1
fi

# Check if there are any unstaged changes
if ! git diff-index --quiet HEAD --
then
    read -p "You have unstaged changes. Do you want to stash them before updating the branch? [y/n] " stash
    if [ "$stash" = "y" ]
    then
        git stash
    fi
fi

# Update the branch
current_branch=$(git branch | grep \* | cut -d ' ' -f2)
if [ "$1" = "dev" ]
then
    git fetch origin Dev-Branch
    git rebase origin/Dev-Branch
elif [ "$1" = "main" ]
then
    git fetch origin master
    git rebase origin/master
fi

# Check if the user wants to apply their stash
if [ "$stash" = "y" ]
then
    read -p "Do you want to apply your stash to the current branch? [y/n] " apply_stash
    if [ "$apply_stash" = "y" ]
    then
        git stash apply
    fi
fi

echo "Successfully updated branch '$current_branch' from '$1'"
