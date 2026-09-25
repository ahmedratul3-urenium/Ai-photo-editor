# Vercel Serverless AI Passport Photo Editor Project

আপনার প্রদানকৃত **Replicate API Key (`r8_OJYULsCx6EQA5bHmNpkZ8dPMU4GXqo93V17Hy`)** ব্যবহার করে Vercel-এ ডিপ্লয় করার উপযোগী **Full Node.js Serverless Backend + HTML Frontend** তৈরি করা হয়েছে।

---

### 📂 প্রজেক্ট ফাইল ফোল্ডার স্ট্রাকচার:
```text
ai-photo-editor-vercel/
├── package.json
├── vercel.json
├── api/
│   ├── straighten-head.js   <-- Replicate LivePortrait AI (শুধু মাথা সোজা করার ব্যাকএন্ড)
│   └── change-outfit.js     <-- Replicate AI Outfit Swap Backend
└── public/
    └── index.html           <-- ফ্রন্টএন্ড ইন্টারফেস
```

---

### 🚀 Vercel-এ ডিপ্লয় (Deploy) করার ২ মিনিটের সহজ উপায়:

#### নিয়ম ১: GitHub + Vercel (সবচেয়ে সহজ)
১. `ai-photo-editor-vercel.zip` ফাইলটি ডাউনলোড করে Unzip করুন।
২. আপনার GitHub অ্যাকাউন্টে একটি নতুন Repository খুলে পুরো ফোল্ডারের ফাইলগুলো (package.json, vercel.json, api, public) Push / Upload করে দিন।
৩. [vercel.com](https://vercel.com)-এ ঢুকুন -> **Add New Project**-এ ক্লিক করুন।
৪. আপনার GitHub Repository সিলেক্ট করে **Deploy** চাপ দিন!
৫. ডিপ্লয় শেষ হতেই ২ মিনিটে আপনার নিজস্ব ফ্রি ওয়েবসাইটে **"শুধু মাথা সোজা করা"** নিখুঁত এআই অ্যাপ চালু হয়ে যাবে!

#### নিয়ম ২: Vercel CLI দিয়ে (কমান্ড লাইন)
১. পিসির টার্মিনালে রান করুন: `npm install -g vercel`
২. ফোল্ডারের ভেতর ঢুকে টাইপ করুন: `vercel`
৩. ব্যাকএন্ড ও ফ্রন্টএন্ড সাথে সাথে লাইভ হয়ে যাবে!
