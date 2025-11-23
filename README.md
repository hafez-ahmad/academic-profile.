# Hafez Ahmad - Academic Profile

This is a dynamic academic portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 How to Deploy to GitHub Pages

Follow these steps to make your website live on the internet.

### Prerequisites
1.  A **GitHub Account**.
2.  **Git** installed on your computer.
3.  **Node.js** installed on your computer.

### Step 1: Create a GitHub Repository
1.  Go to [GitHub.com](https://github.com) and sign in.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it `academic-profile` (or `hafez-ahmad.github.io` if you want it to be your main site).
4.  Make sure it is **Public**.
5.  Click **Create repository**.

### Step 2: Push Your Code
Open your terminal (Command Prompt or Terminal) in the folder where these files are located and run:

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Link to your new GitHub repository
# REPLACE THE URL BELOW with your actual repository URL
git remote add origin https://github.com/YOUR_USERNAME/academic-profile.git

# Push the code
git push -u origin main
```

### Step 3: Configure GitHub Pages (The Easy Way)
We have included a GitHub Actions workflow that will automatically build and deploy your site.

1.  On your repository page on GitHub, click **Settings**.
2.  On the left sidebar, click **Pages**.
3.  Under **Build and deployment**, look for "Source".
4.  Change "Deploy from a branch" to **GitHub Actions**.
5.  If you see "Static HTML", click **Configure**. If not, search for "Static HTML" and configure it.
    *   *Note*: Since we added `package.json` and `vite.config.ts`, GitHub might suggest a **Node.js** or **Jekyll** workflow.
    *   **Simplest Method**:
        1.  Actually, just creating the file `.github/workflows/static.yml` works best. (See Step 4).

### Step 4: Add the Deployment Workflow
Create a folder named `.github` and inside it a folder named `workflows`. Create a file named `deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Once you commit and push this file, GitHub will automatically build your React app and deploy it!

### Step 5: Visit Your Site
After the Action finishes (check the "Actions" tab on GitHub), your site will be live at:
`https://YOUR_USERNAME.github.io/academic-profile/`

## 🛠 Local Development

To run this project locally on your machine:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the dev server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```
