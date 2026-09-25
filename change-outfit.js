import Replicate from "replicate";

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN || "r8_OJYULsCx6EQA5bHmNpkZ8dPMU4GXqo93V17Hy";

const replicate = new Replicate({
  auth: REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { image, prompt } = req.body;

    if (!image || !prompt) {
      return res.status(400).json({ success: false, error: 'Image and prompt are required' });
    }

    const output = await replicate.run(
      "timothybrooks/instruct-pix2pix:30c1d0b916a6f8ef220d710f245179c512ed47e09a8382d30564b1263d91c784",
      {
        input: {
          image: image,
          prompt: prompt,
          num_inference_steps: 20,
          image_guidance_scale: 1.5
        }
      }
    );

    const resultUrl = Array.isArray(output) ? output[0] : output;
    return res.status(200).json({ success: true, resultUrl });
  } catch (error) {
    console.error("Replicate AI Outfit Error:", error);
    return res.status(500).json({ success: false, error: error.message || "AI Outfit Error" });
  }
}
