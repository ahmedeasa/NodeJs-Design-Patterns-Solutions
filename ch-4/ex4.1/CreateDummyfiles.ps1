# Create three files with dummy text
1..3 | ForEach-Object {
    $filename = "DummyFile$_.txt"  # Define the filename
    $content = "This is dummy text for $filename."  # Define the content

    # Write the content to the file
    Set-Content -Path $filename -Value $content

    Write-Host "File '$filename' created with dummy text."
}
