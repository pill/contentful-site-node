# Build and Run Instructions

## Build Client and Run on Server

### Step 1: Build the Client
```bash
cd client
npm run build
```
This creates the production bundle in `client/dist/`

### Step 2: Start the Server
```bash
cd ../server
npm run dev    # Development mode with auto-reload
# OR
npm run build  # Build TypeScript first
npm start      # Production mode
```

The server will run on `http://localhost:3000` (or PORT from .env)

## Quick Workflow (Rebuild and Reload)

After making changes to the client:

1. **Rebuild client:**
   ```bash
   cd client
   npm run build
   ```

2. **If using `npm run dev` in server:** The server auto-reloads on TypeScript changes, but you need to manually rebuild the client.

3. **Restart server** (if needed):
   ```bash
   cd server
   # Stop current server (Ctrl+C)
   npm run dev
   ```

## Development Mode (Recommended for Active Development)

For active development, use webpack dev server instead:
```bash
cd client
npm run start    # Runs on http://localhost:8080 with hot reloading
```

This is faster since it auto-rebuilds and reloads on every code change.
