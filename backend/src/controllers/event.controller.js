import { getCommits } from "../data/get.data.js"

export const eventController = async (req,res) => {
    try {
        
        const data = await getCommits()

        if(!data){
            return res.status(400).json({
                message: "Invalid commits"
            })
        }
        res.status(200).json({
            data,
        })

    } catch (error) {
        console.log("Error in event-controller: ", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}