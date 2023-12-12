# PowerShell script to create nested folders with files

# Define the root directory
$rootDirectory = "./testDirectory"

# Create root directory
New-Item -ItemType Directory -Path $rootDirectory -Force

# Create nested directories and files
New-Item -ItemType File -Path "$rootDirectory\File1.txt" -Force
New-Item -ItemType File -Path "$rootDirectory\File2.txt" -Force

New-Item -ItemType Directory -Path "$rootDirectory\Subdirectory1" -Force
New-Item -ItemType File -Path "$rootDirectory\Subdirectory1\File3.txt" -Force
New-Item -ItemType File -Path "$rootDirectory\Subdirectory1\File4.txt" -Force

New-Item -ItemType Directory -Path "$rootDirectory\Subdirectory2" -Force
New-Item -ItemType File -Path "$rootDirectory\Subdirectory2\File5.txt" -Force
New-Item -ItemType File -Path "$rootDirectory\Subdirectory2\File6.txt" -Force

# Displaying the directory structure
Get-ChildItem -Recurse $rootDirectory
