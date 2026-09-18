import React, { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  source?: string;
}

export const AiAdvisorDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 G'day! I'm your AI Supplement Specialist. Tell me your training goals (e.g., \"Need a non-caffeine preworkout for 7pm gym\") and I'll recommend the exact clinical formula.",
      time: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend !== undefined ? textToSend : inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: query,
          history: messages.map(m => ({ sender: m.sender, text: m.text }))
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || "I recommend checking our Sydney formulation laboratory pre-workout and creatine range.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: data.source
      };

      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      console.warn('Live API request failed, using local clinical advisor engine:', err);
      // Fallback local clinical response for resilience
      const fallbackReply = generateClientFallback(query);
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: fallbackReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'clinical-rules'
      };
      setMessages(prev => [...prev, botReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handlePromptClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <>
      {/* Floating AI Assistant Button */}
      <button
        id="ai-chat-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 hover:bg-stone-900 transition-all cursor-pointer"
        aria-label="Ask AI Advisor"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="font-heading font-bold text-xs uppercase tracking-wider hidden md:inline">
          Ask AI Advisor
        </span>
      </button>

      {/* AI Chat Drawer Modal */}
      {isOpen && (
        <div 
          id="ai-chat-modal" 
          className="modal-overlay animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="modal-dialog max-w-lg bg-stone-900 text-white p-6 rounded-3xl border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                <h3 className="font-heading text-lg font-bold tracking-tight">
                  AI Supplement Advisor (Gemini Powered)
                </h3>
              </div>
              <button
                id="close-ai-chat"
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-white font-bold p-1 cursor-pointer transition-colors"
                aria-label="Close AI Advisor"
              >
                ✕
              </button>
            </div>

            {/* Chat Messages Container */}
            <div
              id="ai-chat-messages"
              className="h-72 overflow-y-auto py-4 space-y-3 text-xs leading-relaxed scrollbar-thin"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3 rounded-2xl ${
                    msg.sender === 'bot'
                      ? 'bg-stone-800 border border-stone-700 text-stone-200'
                      : 'bg-red-600/90 text-white ml-8 border border-red-500/50'
                  }`}
                >
                  <div className="whitespace-pre-line leading-relaxed font-sans">
                    {msg.text}
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[10px] text-stone-400">
                    <span>{msg.sender === 'bot' ? 'Sydney Specialist' : 'You'}</span>
                    <span>{msg.time}</span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="bg-stone-800 p-3 rounded-2xl border border-stone-700 text-stone-400 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                  <span>Formulating Sydney laboratory advice...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="flex flex-wrap gap-1.5 pb-3">
              <button
                type="button"
                onClick={() => handlePromptClick('Best preworkout for pumps?')}
                className="ai-prompt-chip bg-stone-800 hover:bg-stone-700 text-[10px] px-3 py-1 rounded-full text-stone-300 border border-stone-700 cursor-pointer transition-colors"
              >
                Best preworkout for pumps?
              </button>
              <button
                type="button"
                onClick={() => handlePromptClick('Caffeine-free options?')}
                className="ai-prompt-chip bg-stone-800 hover:bg-stone-700 text-[10px] px-3 py-1 rounded-full text-stone-300 border border-stone-700 cursor-pointer transition-colors"
              >
                Caffeine-free options?
              </button>
              <button
                type="button"
                onClick={() => handlePromptClick('Stack for fat loss & muscle?')}
                className="ai-prompt-chip bg-stone-800 hover:bg-stone-700 text-[10px] px-3 py-1 rounded-full text-stone-300 border border-stone-700 cursor-pointer transition-colors"
              >
                Stack for fat loss & muscle?
              </button>
            </div>

            {/* Input Form */}
            <form id="ai-chat-form" onSubmit={handleSubmit} className="flex gap-2">
              <input
                id="ai-user-input"
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask AI Advisor..."
                className="flex-grow bg-stone-800 border border-stone-700 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-red-500 placeholder-stone-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="btn-pill btn-accent py-2 px-5 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

function generateClientFallback(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('pump') || q.includes('nitric') || q.includes('vascular')) {
    return "G'day! For maximum muscle pumps without stimulants, here is the clinical Sydney stack:\n\n• Night Warrior Caffeine-Free Pre-Workout ($41.97 AUD): Packed with 10,000mg pure L-Citrulline, 4,000mg Beta-Alanine, and 2,500mg Betaine.\n• Liquid Glycerol 500ml ($25.73 AUD): 1.25g/mL hyper-hydration agent for intracellular volumization.\n\nTake 25 minutes prior to lifting with 500ml water for massive, skin-splitting pumps!";
  }

  if (q.includes('caffeine') || q.includes('night') || q.includes('sleep') || q.includes('evening') || q.includes('stim')) {
    return "G'day! For evening workouts (after 5 PM) or if you want to avoid disrupted sleep:\n\n• Night Warrior Caffeine-Free Pre-Workout ($41.97 AUD): 0mg caffeine, but full clinical doses of Citrulline (10g), Beta Alanine (4g), L-Tyrosine (2g), and Huperzine A (100mcg) for tunnel-vision focus.\n• Pair with 5g daily of pure Micronised Creatine Monohydrate to support ATP power without stimulants.";
  }

  if (q.includes('fat') || q.includes('cut') || q.includes('loss') || q.includes('shred')) {
    return "G'day! For preserving lean muscle mass during a calorie deficit:\n\n• Acetyl-L-Carnitine HCL ($23.06 AUD): Take 2g upon waking or 30 mins pre-training to optimize fatty acid transport.\n• Protein Water 990g ($48.97 AUD): 27g protein per serve from hydrolysed beef collagen with zero sugar.\n• Warrior High-Stimulant Pre-workout ($41.97 AUD) for thermogenic energy.";
  }

  return "G'day! For standard gym performance, our Sydney laboratory recommends:\n\n1. Morning/Day: Warrior High-Stimulant Pre-workout (400mg caffeine, 6g Citrulline, 4g Beta-Alanine).\n2. Evening/Night: Night Warrior Caffeine-Free (10g Citrulline, 4g Beta-Alanine).\n3. Daily Baseline: 5g of pure 200-mesh Micronised Creatine Monohydrate.\n\nWhat are your specific training goals or workout timing?";
}
