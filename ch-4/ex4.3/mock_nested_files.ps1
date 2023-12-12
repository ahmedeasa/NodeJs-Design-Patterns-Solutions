# Function to create a directory and text files
function CreateDirectoryWithFiles($path, $fileCount, $includeKeyword) {
    # Create directory
    New-Item -ItemType Directory -Path $path -Force | Out-Null

    # Create text files
    for ($i = 1; $i -le $fileCount; $i++) {
        $filePath = Join-Path -Path $path -ChildPath "File$i.txt"
        $content = "This is a text file"
        
        # Include the keyword in some files
        if ($includeKeyword -and $i % 2 -eq 0) {
            $content += " with elephant keyword."
        }

        # Write content to file
        Set-Content -Path $filePath -Value $content
    }
}

# Main script

# Create the main directory
$mainDirectory = "./MainDirectory"
CreateDirectoryWithFiles -path $mainDirectory -fileCount 5 -includeKeyword $true

# Create nested directories
$nestedDir1 = Join-Path -Path $mainDirectory -ChildPath "NestedDirectory1"
CreateDirectoryWithFiles -path $nestedDir1 -fileCount 3 -includeKeyword $false

$nestedDir2 = Join-Path -Path $mainDirectory -ChildPath "NestedDirectory2"
CreateDirectoryWithFiles -path $nestedDir2 -fileCount 4 -includeKeyword $true

Write-Host "Directory structure created successfully."
