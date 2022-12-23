#!/bin/bash

# Check if the user provided a branch name as an argument
if [ -z "$1" ]
then
    echo "Please provide a branch name as an argument."
    exit 1
fi

# Store the current branch name in a variable
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Check if the specified branch exists
if git rev-parse --verify "$1" >/dev/null 2>&1
then
    # Switch to the specified branch
    git checkout "$1"
else
    # Prompt the user to create the branch
    read -p "Branch '$1' does not exist. Create it? [Y/n] " create_branch

    # Check if the user wants to create the branch
    if [[ "$create_branch" =~ ^([yY][eE][sS]|[yY])+$ ]]
    then
        # Create the branch and switch to it
        git checkout -b "$1"

        # Prompt the user to push the branch to the remote repository
        read -p "Do you want to push this branch to the remote repository? [Y/n] " push_branch

        # Check if the user wants to push the branch
        if [[ "$push_branch" =~ ^([yY][eE][sS]|[yY])+$ ]]
        then
            # Push the branch to the remote repository
            git push -u origin "$1"
        fi
    else
        exit 1
    fi
fi

# Inform the user of the current branch
echo "You are now on branch '$1'."
