/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";

const VoiceSelector = ({ selected = 0, setSelected }) => {
  const [voices, setVoices] = useState([]);

  const populateVoiceList = useCallback(() => {
    const synth = window.speechSynthesis;
    const newVoices = synth.getVoices();
    setVoices(newVoices);
  }, []);

  useEffect(() => {
    populateVoiceList();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoiceList;
    }
  }, [populateVoiceList]);

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(parseInt(e.target.value))}
    >
      {voices.map((voice, index) => (
        <option key={index} value={index}>
          {voice.name} ({voice.lang}) {voice.default && "[Default]"}
        </option>
      ))}
    </select>
  );
};

export default VoiceSelector;
