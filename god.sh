#!/bin/bash

echo "loading..."
clear

if [ $1 = "commit" ]
then
    bash ./scripts/commit.sh
elif [ $1 = "branch" ]
then 
    bash ./scripts/branch.sh $2
elif [ $1 = "help" ]
then
    'source ./pyenv/bin/activate'
fi 