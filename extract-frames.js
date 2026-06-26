import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

ffmpeg.setFfmpegPath(ffmpegPath);

const videoPath = path.resolve(__dirname, '../hero section/One_side_Barbell_should_inclin.mp4');
const framesDir = path.resolve(__dirname, 'public/frames');

if (!fs.existsSync(framesDir)) {
  fs.mkdirSync(framesDir, { recursive: true });
}

console.log('Starting frame extraction...');

ffmpeg(videoPath)
  .outputOptions([
    '-vf fps=15,scale=1280:720', // Extract at 15 fps, resize to 720p if not already
    '-q:v 2' // High quality jpeg
  ])
  .output(path.join(framesDir, 'frame-%04d.jpg'))
  .on('end', () => {
    console.log('Frames extracted successfully.');
  })
  .on('error', (err) => {
    console.error('Error extracting frames:', err);
  })
  .run();
