import OpenAI from "openai";




 const openai = new OpenAI({
    organization: "org-vi1J0Y6aAc6uawNCsNA5wi30",
    apiKey: process.env.OPENAI_API_KEY,
});
export async function completion(prompt) {
  const stream = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    stream: true,
  });
  for await (const part of stream) {
    process.stdout.write(part.choices[0]?.delta?.content || '');
  }
}
 