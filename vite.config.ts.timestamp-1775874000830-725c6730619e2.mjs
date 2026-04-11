// vite.config.ts
import { defineConfig } from "file:///C:/Users/aksha/OneDrive/Desktop/Think%20Forge%20Global/Chill_Master/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/aksha/OneDrive/Desktop/Think%20Forge%20Global/Chill_Master/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { ViteImageOptimizer } from "file:///C:/Users/aksha/OneDrive/Desktop/Think%20Forge%20Global/Chill_Master/node_modules/vite-plugin-image-optimizer/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\aksha\\OneDrive\\Desktop\\Think Forge Global\\Chill_Master";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 70
        // Aggressive compression for these HUGE files
      },
      jpeg: {
        quality: 70
      },
      jpg: {
        quality: 70
      },
      webp: {
        lossless: true
      },
      avif: {
        lossless: true
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxha3NoYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFRoaW5rIEZvcmdlIEdsb2JhbFxcXFxDaGlsbF9NYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFrc2hhXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcVGhpbmsgRm9yZ2UgR2xvYmFsXFxcXENoaWxsX01hc3RlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWtzaGEvT25lRHJpdmUvRGVza3RvcC9UaGluayUyMEZvcmdlJTIwR2xvYmFsL0NoaWxsX01hc3Rlci92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksIFxuXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgIHBuZzoge1xuICAgICAgICBxdWFsaXR5OiA3MCwgLy8gQWdncmVzc2l2ZSBjb21wcmVzc2lvbiBmb3IgdGhlc2UgSFVHRSBmaWxlc1xuICAgICAgfSxcbiAgICAgIGpwZWc6IHtcbiAgICAgICAgcXVhbGl0eTogNzAsXG4gICAgICB9LFxuICAgICAganBnOiB7XG4gICAgICAgIHF1YWxpdHk6IDcwLFxuICAgICAgfSxcbiAgICAgIHdlYnA6IHtcbiAgICAgICAgbG9zc2xlc3M6IHRydWUsXG4gICAgICB9LFxuICAgICAgYXZpZjoge1xuICAgICAgICBsb3NzbGVzczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlZLFNBQVMsb0JBQW9CO0FBQzlaLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFFakIsU0FBUywwQkFBMEI7QUFKbkMsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUVOLG1CQUFtQjtBQUFBLE1BQ2pCLEtBQUs7QUFBQSxRQUNILFNBQVM7QUFBQTtBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDSCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
