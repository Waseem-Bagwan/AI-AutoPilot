import dotenv from 'dotenv'

dotenv.config()

if(!process.env.GIT_HUB_PAT){
    throw new Error("Invalid token")
}

const config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || "development",
    GIT_HUB_PAT: process.env.GIT_HUB_PAT
}

export default config