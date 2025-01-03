# Cloudflare R2 Bucket Explorer

This project is a Cloudflare R2 bucket explorer with a smooth and user-friendly interface similar to filepipe.io. It is hosted on GitHub Pages and can be deployed using GitHub Actions.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `credentials.json` file in the root directory with the following structure:
   ```json
   {
     "accessKey": "YOUR_ACCESS_KEY",
     "secretKey": "YOUR_SECRET_KEY",
     "bucketName": "YOUR_BUCKET_NAME"
   }
   ```

4. Build the project:
   ```sh
   npm run build
   ```

5. Deploy to GitHub Pages:
   ```sh
   npm run deploy
   ```

## Features

- Fetch and display the contents of the Cloudflare R2 bucket
- Upload files to the bucket
- Delete files from the bucket
- Rename files in the bucket
- Smooth and user-friendly interface with a rainbow-colored gradient

## Usage

1. Open the app in your browser.
2. Use the interface to explore the contents of your Cloudflare R2 bucket.
3. Upload, delete, and rename files as needed.

## Configuration

- The `credentials.json` file should contain your Cloudflare R2 credentials.
- Make sure to replace `YOUR_ACCESS_KEY`, `YOUR_SECRET_KEY`, and `YOUR_BUCKET_NAME` with your actual Cloudflare R2 credentials.

## License

This project is licensed under the MIT License.
