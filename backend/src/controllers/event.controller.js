import { getCommits } from "../event/event.data.js"
import path from 'path'
import fs from 'fs'

const __dirname = path.resolve()

const filePath = path.join(__dirname, "src" , "data" , "data.json")
console.log(filePath)

export const eventController = async (req,res) => {
    try {
        
        const data = await getCommits()

        if(!data){
            return res.status(400).json({
                message: "Invalid commits"
            })
        }

        console.log(data)

        const eventData = extractRawData(data)

        const timelineText = eventData.map((commit) => `
            [${commit.date}]
            ${commit.message}
        `)
        
        res.status(200).json(timelineText)

    } catch (error) {
        console.log("Error in event-controller: ", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

function extractRawData(data){  
    const rawData = data.map((item) => ({
        authorName: item?.commit?.author?.name,
        date: item?.commit?.author?.date,
        message: item?.commit.message,
        referenceLink: item?.html_url,
        profilePic: item?.author?.avatar_url,
        sha: item?.sha
    }))

    return rawData
}

function readWrite(opt,data){
    switch(opt){
        case 'read' :
            return Promise((resolve,reject) => {
                fs.readFile(filePath,'utf-8',(err,data) => {
                    if(err){
                        reject("Failed to read the data")
                    }else{
                        resolve(data)
                    }
                })
            })
        case 'write':
            return Promise((resolve,reject) => {
                fs.writeFile(filePath,data )
            }) 
        
        default:
            throw new Error('Failed to work with data')
    }
}

