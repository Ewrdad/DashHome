#!/bin/bash

echo "loading..."
clear

if [ $1 = "commit" ]
then
    bash ./scripts/commit.sh
elif [ $1 = "branch" ]
then 
    bash ./scripts/branch.sh
fi