import fs from "node:fs/promises"


const filePath="userData.txt";


async function createFile(content){
    await fs.writeFile(filePath,content,'UTF-8');
    console.log("File Created Successfully");
}
async function readFile(){
    try{
        let data=await fs.readFile(filePath,'UTF-8');
        console.log("File Read Successfully");
        return data;
    }catch(err){
        console.error("Error Reading File:", err);
    }
}
async function appendToFile(content){
    try{
        await fs.appendFile(filePath,content,'UTF-8');
        console.log("Content Appended Successfully");
    }catch(err){
        console.error("Error Appending to File:", err);
    }
}
async function deleteFile(){
    try{
        await fs.unlink(filePath);
        console.log("File Deleted Successfully");
    }catch(err){
        console.error("Error Deleting File:", err);
    }
}
export default {createFile,readFile,appendToFile,deleteFile};

createFile("Hello World");
readFile();
appendToFile("\nThis is an appended line.");
//deleteFile();