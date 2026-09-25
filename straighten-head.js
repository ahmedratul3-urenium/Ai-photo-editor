import Replicate from "replicate";

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN || "r8_OJYULsCx6EQA5bHmNpkZ8dPMU4GXqo93V17Hy";

const replicate = new Replicate({
  auth: REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  // CORS Headers
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
    const { image, rollAngle } = req.body;

    if (!image) {
      return res.status(400).json({ success: false, error: 'Image data is required' });
    }

    // LivePortrait AI model for head pose & angle correction
    // Roll rotates head relative to neck
    const output = await replicate.run(
      "fottoai/live-portrait:32c8141f224b752763294336c2e3532f14691e847c2a78f65e23730766347f3b",
      {
        input: {
          image: image,
          rotate_roll: rollAngle || 0,
          rotate_pitch: 0,
          rotate_yaw: 0
        }
      }
    );

    const resultUrl = Array.isArray(output) ? output[0] : output;
    return res.status(200).json({ success: true, resultUrl });
  } catch (error) {
    console.error("Replicate AI Error:", error);
    return res.status(500).json({ success: false, error: error.message || "AI Server Error" });
  }
}
