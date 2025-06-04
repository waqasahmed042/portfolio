"use client";
import React, { useState, useEffect, useRef } from "react";
import { RiRobot2Line, RiSendPlane2Fill, RiCloseCircleLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./loader";
import { generateResponse } from "./aiResponse";
import UIText from "@/utilities/testResource";

const AskAI: React.FC = () => {
    const [isAIModalOpen, setIsAIModalOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showQuestions, setShowQuestions] = useState<boolean>(true);
    const [typingText, setTypingText] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typingText]);

    const typeText = (text: string) => {
        let index = 0;
        setIsTyping(true);
        setTypingText("");

        const interval = setInterval(() => {
            if (index < text.length) {
                setTypingText(text.substring(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 30); // Adjust typing speed here (lower = faster)
    };

    const handleSendMessage = (message: string): void => {
        if (!message.trim()) return;

        // Prevent sending new messages if a response is already loading
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        setMessages(prev => [...prev, { text: message, sender: "user" }]);
        setShowQuestions(false);
        setInput("");

        generateResponse(message, (error, aiMessage) => {
            if (error) {
                console.error("Error fetching AI response:", error);
                setMessages(prev => [...prev, { text: "Error communicating with AI. Please try again.", sender: "ai" }]);
            } else if (aiMessage) {
                setMessages(prev => [...prev, { text: aiMessage, sender: "ai" }]);
                typeText(aiMessage);
            }
            setIsLoading(false);
        });
    };

    const formatMessage = (text: string) => {
        const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
        return text.replace(emailRegex, `<a href="mailto:$1" class="text-blue-600 underline">$1</a>`);
    };

    return (
        <>
            {/* Floating Ask AI Button */}
            <button
                className="fixed bottom-5 right-5 bg-[#219ebc] hover:bg-[#1b7c92] text-white p-4 rounded-full shadow-lg flex items-center space-x-2 z-20"
                onClick={() => setIsAIModalOpen(true)}
            >
                <span className="font-bold">{UIText.askAI.title}</span>
                <RiRobot2Line className="text-2xl" />
            </button>

            {/* AI Chat Modal */}
            {isAIModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div
                        className="bg-white rounded-lg shadow-lg w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] flex flex-col"
                        data-aos="zoom-in-down"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b p-4">
                            <h2 className="text-xl font-bold flex items-center space-x-2">{UIText.askAI.chatWithAI}</h2>
                            <RiCloseCircleLine className="text-2xl text-gray-600 cursor-pointer" onClick={() => setIsAIModalOpen(false)} />
                        </div>

                        {/* Chat Area (Scrollable) */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {/* Welcome Message */}
                            <h2 className="text-xl font-bold">{UIText.askAI.hi}</h2>
                            <p className="text-gray-600 mt-1">
                                {UIText.askAI.description}
                                <span className="font-semibold mt-2">{UIText.askAI.askMeAbout}<span className="text-[#d73e0f]">{UIText.askAI.name}</span>.</span>
                            </p>

                            {/* Suggested Questions (Hide after clicking) */}
                            {showQuestions && (
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "How do I develop a custom Office Add-in?",
                                        "How can I optimize a full-stack web application?",
                                        "What are the best practices for Google Add-ons?"
                                    ].map((question, index) => (
                                        <li
                                            key={index}
                                            className="bg-gray-100 px-2 py-2 rounded cursor-pointer hover:bg-gray-200 w-fit"
                                            onClick={() => handleSendMessage(question)}
                                        >
                                            {question}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Messages */}
                            <div className="mt-4 space-y-3">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                        {msg.sender === "ai" && (
                                            <div className="flex items-start">
                                                <RiRobot2Line className="text-xl text-[#219ebc] mr-2 mt-2 w-6 h-6 flex-shrink-0" />
                                            </div>
                                        )}
                                        <div className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-[#219ebc] text-white" : "text-black"}`}>
                                            {msg.sender === "ai" ? (
                                                <span dangerouslySetInnerHTML={{ __html: formatMessage(index === messages.length - 1 && isTyping ? typingText : msg.text) }} />
                                            ) : (
                                                msg.text
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex items-center space-x-2">
                                        {/* AI Robot Icon */}
                                        <RiRobot2Line className="text-2xl text-blue-600" />
                                        <Loader />
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Field (Fixed at Bottom with Icon Inside) */}
                        <div className="border-t p-4 bg-white flex items-center relative">
                            <input
                                type="text"
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#219ebc]"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(input)}
                            />
                            <button
                                className="absolute right-6 text-gray-500 hover:text-[#219ebc]"
                                onClick={() => handleSendMessage(input)}
                            >
                                <RiSendPlane2Fill className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AskAI;