#!/bin/bash
echo "Testing for Buttons component"

# Check if the file path provided in the $FILE variable exists
if test -f "$FILE"
then
    echo "Found $FILE"
else
    echo "Did not find $FILE"
    # Exit with an error code to stop the GitHub Action
    exit 204
fi