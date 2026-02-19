# Milestone 5 - React Fundamentals

Steps on Setting Up A React Project with Tailwind CSS

## Environment Setup

### Step 1: Create a Project

Open your terminal(Powershell or Bash) and run the following command to create the project:

```bash
npm create vite@latest milestone-5-react-project -- --template react
```

### Step 2: Move into the Directory of Your Newly Created Project

After creating the project, run the following command to move into the directory:

```bash
cd milestone-5-react-project
```

### Step 3: Install Dependencies

First, install the standard React packages. Afterwards, install the specific Tailwind v4 engine and its Vite integration.

```bash
npm install
npm install -D tailwindcss @tailwindcss/vite
```

### Step 4: Configure the Vite Plugin

Open vite.config.js file which is located inside your newly created project. Edit the file to the following configurations so that Vite will use Tailwind's engine to process your styles:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Step 5: Update src/index.css

Open src/index.css and replace everything inside it with the following configurations:

```css
@import 'tailwindcss';
```

Note: Delete App.css and any reference to it inside your code since it might be in conflict with the Tailwind classes, causing your layout to look broken or experience unusual behavior.

### Step 6: Run and Verify

Fire up Your Local Development Server

```bash
npm run dev
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
