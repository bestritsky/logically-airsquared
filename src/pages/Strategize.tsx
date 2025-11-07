import { Layout } from "@/components/Layout";
import { useEffect } from "react";

const Strategize = () => {
  useEffect(() => {
    // Hide the chatbot widget on this page
    const style = document.createElement('style');
    style.id = 'hide-chatbot-strategize';
    style.textContent = `
      #chatbase-bubble-button,
      #chatbase-bubble-window {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup: remove the style when leaving the page
    return () => {
      const styleElement = document.getElementById('hide-chatbot-strategize');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <div className="h-[calc(100vh-4rem)] w-full">
        <iframe
          src="https://www.chatbase.co/XW3e_hkRBC9pAtSf17Xl7/help"
          className="w-full h-full border-0"
          title="Strategize"
          allow="clipboard-write"
        />
      </div>
    </Layout>
  );
};

export default Strategize;
