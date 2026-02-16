let scriptLoaded = false;
let initCalled = false;

export const useUnicornStudio = (projectId?: string) => {
  const elementId = ref(`unicorn-${Math.random().toString(36).substr(2, 9)}`);

  const loadScript = () => {
    if (scriptLoaded) return Promise.resolve();

    return new Promise((resolve, reject) => {
      if (window.UnicornStudio) {
        scriptLoaded = true;
        resolve(window.UnicornStudio);
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = () => {
        scriptLoaded = true;
        resolve(window.UnicornStudio);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const initScenes = async () => {
    if (initCalled) return;

    await loadScript();

    if (window.UnicornStudio && window.UnicornStudio.init) {
      try {
        await window.UnicornStudio.init();
        initCalled = true;
      } catch (error) {
        console.error("Failed to initialize UnicornStudio:", error);
      }
    }
  };

  onMounted(async () => {
    if (projectId) {
      await loadScript();
      await nextTick();
      await initScenes();
    }
  });

  return {
    elementId,
    projectId,
  };
};
