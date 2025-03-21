import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ChatPage.css";

const ChatPage = ({ className, ...props }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInConversation, setIsInConversation] = useState(false);
  const [recentChats, setRecentChats] = useState([]);
  const [showRecentChats, setShowRecentChats] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
    setLastActivity(Date.now()); // Reset activity timer
  };

  const toggleRecentChats = () => {
    setShowRecentChats((prevState) => !prevState);
    setLastActivity(Date.now()); // Reset activity timer
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: inputValue },
    ]);

    if (!isInConversation) {
      setIsInConversation(true);
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/chatbot/chat", {
        user_id: 1, // Replace with actual user ID if dynamic
        message: inputValue,
      });

      const botMessage = response.data?.response || "No valid response received.";

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botMessage },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "An error occurred. Please try again later." },
      ]);
    }

    setInputValue("");
    setLastActivity(Date.now()); // Reset activity timer
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
    setLastActivity(Date.now()); // Reset activity timer
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      const newChat = {
        title: messages[0]?.text || "New Conversation",
        history: [...messages],
      };
      setRecentChats((prevChats) => [...prevChats, newChat]);
    }

    setMessages([]);
    setIsInConversation(false);
    setInputValue("");
    setLastActivity(Date.now()); // Reset activity timer
  };

  const loadChat = (chat) => {
    setMessages(chat.history);
    setIsInConversation(true);
    setLastActivity(Date.now()); // Reset activity timer
  };

  // Auto-collapse the sidebar after 5 seconds of inactivity
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastActivity > 5000 && isSidebarActive) {
        setIsSidebarActive(false); // Collapse the sidebar
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [lastActivity, isSidebarActive]);

  return (
    <div className="chat-desktop">
      <div className="chat-content" style={{ display: isInConversation ? "none" : "block" }}>
        {/* Default Content */}
        <div className="chat-header">Hello, how can <br />I help you?</div>
        <div className="chat-input-section">
          <input
            className="chat-input"
            type="text"
            placeholder="Ask a health question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="send" onClick={handleSend}>
            <img src="../assets/send icon.png" alt="Send" />
          </button>
        </div>
        <div className="actions">
          <button className="action-button">Analyze Medical Report</button>
          <button className="action-button">Get Medical Advice</button>
          <button className="action-button">Health Tips</button>
          <button className="action-button">More</button>
        </div>
      </div>

      <div className="chat-content-conversation" style={{ display: isInConversation ? "block" : "none" }}>
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "user" ? "user" : "bot"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input-section">
          <input
            className="chat-input"
            type="text"
            placeholder="Ask a health question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="send" onClick={handleSend}>
            <img src="../assets/send icon.png" alt="Send" />
          </button>
        </div>
      </div>

      <aside className={isSidebarActive ? "sidebar-active" : "sidebar-notactive"}>
        <div className="wrapper">
          <img className="logo" src="../assets/logo1.png" alt="Logo" />
          <img
            className="menu-icon"
            src="../assets/Hamburger.png"
            alt="Menu"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="nav-options">
          <button className="nav-button" onClick={handleNewChat}>
            <img src="../assets/Plus icon.png" alt="New Chat" />
            <span>New Chat</span>
          </button>
          <button className="nav-button" onClick={toggleRecentChats}>
            <img src="../assets/dropdown icon.png" alt="Recent Chats" />
            <span>Recent Chats</span>
          </button>
          {showRecentChats && (
            <div className="recent-chats">
              {recentChats.length === 0 ? (
                <p className="no-recent-chats">No recent chats</p>
              ) : (
                recentChats.map((chat, index) => (
                  <div key={index} className="recent-chat-item" onClick={() => loadChat(chat)}>
                    {chat.title}
                  </div>
                ))
              )}
            </div>
          )}
        </nav>
        <div className="user-info">
          <div className="profile-icon">U</div>
          <div className="welcome-text">
            <p>Welcome back,</p>
            <strong>User</strong>
          </div>
        </div>
      </aside>
      <footer className="footer-text">
        Your privacy is our priority. All interactions are secure and confidential.
      </footer>
    </div>
  );
};

export default ChatPage;
