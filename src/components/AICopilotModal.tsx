import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Code2, CheckCircle2 } from 'lucide-react';
import { ProfileData, SkillItem, ProjectItem } from '../types';

interface AICopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  skills: SkillItem[];
  projects: ProjectItem[];
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const AICopilotModal: React.FC<AICopilotModalProps> = ({
  isOpen,
  onClose,
  profile,
  skills,
  projects,
}) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Halo! Saya adalah **AI Copilot Assistant**. 🤖\n\nSaya siap membantu Anda mengetahui lebih lanjut tentang keahlian, rekam jejak proyek, dan kecocokan **${profile.name}** untuk kebutuhan tim atau proyek Anda. Ada yang bisa saya bantu?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (userMsgText?: string) => {
    const textToSend = userMsgText || input;
    if (!textToSend.trim()) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    if (!userMsgText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          profileData: {
            name: profile.name,
            title: profile.title,
            about: profile.aboutBio,
            skills,
            projects,
            email: profile.email,
            whatsapp: profile.whatsapp,
          },
        }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages([...newMessages, { sender: 'bot', text: data.error || 'Maaf, gagal mendapatkan jawaban dari server AI.' }]);
      }
    } catch (err: any) {
      setMessages([...newMessages, { sender: 'bot', text: 'Terjadi kesalahan koneksi AI: ' + err.message }]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    `Sebutkan 3 keahlian terkuat ${profile.name.split(' ')[0]}`,
    'Rekomendasikan proyek terbaiknya',
    'Bagaimana cara mengontak via WhatsApp?',
    'Apakah cocok untuk posisi Web Developer?',
  ];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-end bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg h-full bg-[#0a0a0e] border-l border-amber-500/30 p-5 shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-600 via-amber-500 to-amber-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold font-cinzel text-purple-200">
                  Aura AI Copilot
                </h3>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Gemini AI Active • Online
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-white/10 transition-all text-left"
              >
                💡 {qp}
              </button>
            ))}
          </div>
        </div>

        {/* Message Stream Scroll Area */}
        <div className="flex-1 overflow-y-auto space-y-3.5 my-3 pr-1 text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-7 h-7 rounded-xl bg-purple-900/40 border border-purple-500/30 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                  m.sender === 'user'
                    ? 'bg-amber-500 text-black font-semibold rounded-tr-xs'
                    : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-xs'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-amber-400 p-2">
              <Sparkles className="w-4 h-4 animate-spin text-purple-400" />
              <span className="italic">AI Copilot sedang mengetik respon...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="pt-3 border-t border-white/10 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tanyakan sesuatu tentang Taqi..."
            className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-amber-400"
          />

          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-full gold-gradient-bg text-black hover:brightness-110 disabled:opacity-40 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
