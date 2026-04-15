Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxPath = "c:\Users\enga\GitHub\White-trash-trip\texas_redneck_week_v1.docx"
$outTxt = "c:\Users\enga\GitHub\White-trash-trip\texas_redneck_week.txt"

try {
    $zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
    $entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
    
    if ($entry) {
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $xmlText = $reader.ReadToEnd()
        $reader.Close()
        $stream.Close()
        
        # Add basic newlines for paragraphs
        $plainText = $xmlText -replace '<w:p\b[^>]*>', "`r`n`r`n"
        # Strip all other XML tags
        $plainText = $plainText -replace '<[^>]+>', ''
        
        # Decode basic entities
        $plainText = $plainText.Replace('&amp;', '&').Replace('&lt;', '<').Replace('&gt;', '>')
        
        Set-Content -Path $outTxt -Value $plainText
        Write-Output "Extracted!"
    } else {
        Write-Error "Could not find word/document.xml in docx"
    }
} finally {
    if ($zip) { $zip.Dispose() }
}
