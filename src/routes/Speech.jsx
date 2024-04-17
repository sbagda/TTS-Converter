/* eslint-disable react/jsx-no-duplicate-props */
import bgimage from "../imgaes/bgimage.png";

import { useState } from "react";
import VoiceSelector from "../components/VoiceSelector.jsx";

const Speech = () => {
  const [selectedVoice, setSelectedVoice] = useState(0);
  const [textToSpeak, setTextToSpeak] = useState("");
  const [charCount, setCharCount] = useState(0);
  const charLimit = 1500;

  const speak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = synth.getVoices()[selectedVoice];
    synth.speak(utterance);
  };
  return (
    <>
      <div className="speech-video">
        <img src={bgimage} className="b-img" />
        <div className="speech-heading">
          <div className="text-area">
            <textarea
              name="text-to-speech"
              cols="93"
              rows="15"
              className="glass"
              placeholder="Start typing or paste any text you want to turn into lifelike speech...."
              id="text"
              maxLength={charLimit}
              value={textToSpeak}
              onChange={(e) => {
                setTextToSpeak(e.target.value);
                setCharCount(e.target.value.length);
              }}
            ></textarea>
            <div className="items">
              <VoiceSelector
                selected={selectedVoice}
                setSelected={setSelectedVoice}
              />
              <button className="btn1" onClick={speak}>
                Generate Speech
              </button>
              <div className="count">{charCount}/1500</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speech;
