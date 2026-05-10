import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4.1-mini",
  messages: [
    {
      role: "system",
      content: `
You are an AI technical content writer.

Your job is to analyze git commit history and generate:
- developer progress updates
- learning summaries
- technical breakdowns
- linkedin/twitter style posts
- changelogs
- daily engineering reports
      `,
    },
    {
      role: "user",
      content: `
Analyze these commits from the last 24 hours.

Generate:
1. Work summary
2. Features implemented
3. Technical improvements
4. Concise dev update

Commits:

${timelineText}
      `,
    },
  ],
  temperature: 0.7,
});