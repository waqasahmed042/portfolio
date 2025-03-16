import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import UIText from "@/utilities/testResource";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Roboto } from "next/font/google";
import { randomQuotes } from "@/utilities/home/randomQuotes";
import { QuoteModelProps } from "@/utilities/type";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
});

const QuoteModel: React.FC<QuoteModelProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [quote, setQuote] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);

    useEffect(() => {
        if (isModalOpen) {
            const randomIndex = Math.floor(Math.random() * randomQuotes.length);
            const selectedQuote = randomQuotes[randomIndex];

            // Split the selected quote into quote text and author
            const [quoteText, authorName] = selectedQuote.split(" – ");
            setQuote(quoteText);
            setAuthor(authorName);
        }
    }, [isModalOpen]);

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Quote">
            <div className="p-6 flex items-center justify-center space-x-4">
                {quote ? (
                    <>
                        <FaQuoteLeft color="#d73e0f" size={40} />
                        <p className={`text-3xl font-normal text-center ${roboto.className}`}>{quote}</p>
                        <FaQuoteRight color="#d73e0f" size={40} />
                    </>
                ) : (
                    <p className="text-xl font-medium text-center">{UIText.home.loading}</p>
                )}
            </div>
            <p className="text-md text-center italic mt-2">- {author}</p>
        </Modal>
    );
};

export default QuoteModel;