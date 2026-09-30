import fs from 'fs';

fs.lstat("link.txt", (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Is Symbolic Link:", stats.isSymbolicLink());

    
});
fs.rename("notes.txt", "new_notes.txt", (err) => {
        if (err) {
            console.log("Rename Error:", err);
            return;
        }

        console.log("File renamed successfully");
    });
// fs.truncate